import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { usePWA } from '../usePWA';

// Mock the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Create a mock event constructor
const createMockBeforeInstallPromptEvent = (userChoice: 'accepted' | 'dismissed' = 'accepted'): BeforeInstallPromptEvent => ({
  type: 'beforeinstallprompt',
  prompt: vi.fn().mockResolvedValue(undefined),
  userChoice: Promise.resolve({ outcome: userChoice }),
  preventDefault: vi.fn(),
  target: window,
  currentTarget: window,
  bubbles: false,
  cancelable: true,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: true,
  returnValue: true,
  srcElement: window,
  timeStamp: Date.now(),
  initEvent: vi.fn(),
  stopImmediatePropagation: vi.fn(),
  stopPropagation: vi.fn(),
  NONE: 0,
  CAPTURING_PHASE: 1,
  AT_TARGET: 2,
  BUBBLING_PHASE: 3,
  composedPath: vi.fn().mockReturnValue([]),
  composed: false
});

describe('usePWA Hook', () => {
  let originalNavigator: typeof navigator;
  let mockAddEventListener: ReturnType<typeof vi.fn>;
  let mockRemoveEventListener: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    originalNavigator = global.navigator;
    mockAddEventListener = vi.fn();
    mockRemoveEventListener = vi.fn();
    
    // Mock window.addEventListener and removeEventListener
    Object.defineProperty(window, 'addEventListener', {
      value: mockAddEventListener,
      writable: true
    });
    
    Object.defineProperty(window, 'removeEventListener', {
      value: mockRemoveEventListener,
      writable: true
    });

    // Mock navigator.onLine
    Object.defineProperty(global, 'navigator', {
      value: {
        ...originalNavigator,
        onLine: true
      },
      writable: true
    });

    // Mock navigator.standalone for PWA detection
    Object.defineProperty(global.navigator, 'standalone', {
      value: false,
      writable: true
    });

    // Mock window.matchMedia for PWA detection (defaults to NOT installed)
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(query => ({
        matches: false, // Default to not installed
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
      writable: true
    });
  });

  afterEach(() => {
    global.navigator = originalNavigator;
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it('initializes with correct default state', () => {
    const { result } = renderHook(() => usePWA());

    expect(result.current.isInstallable).toBe(false);
    expect(result.current.isInstalled).toBe(false); // matchMedia mock returns false
    expect(result.current.isOffline).toBe(false); // navigator.onLine is true
    expect(typeof result.current.showInstallPrompt).toBe('function');
    expect(typeof result.current.dismissInstallPrompt).toBe('function');
  });

  it('detects online/offline status', async () => {
    const { result } = renderHook(() => usePWA());

    // Initially online
    expect(result.current.isOffline).toBe(false);

    // Simulate going offline
    Object.defineProperty(global.navigator, 'onLine', {
      value: false,
      writable: true
    });

    // Find and trigger the offline event listener
    const offlineHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'offline'
    )?.[1];
    
    if (offlineHandler) {
      act(() => {
        offlineHandler();
      });

      await waitFor(() => {
        expect(result.current.isOffline).toBe(true);
      });
    }
  });

  it('detects online status change', async () => {
    // Start offline
    Object.defineProperty(global.navigator, 'onLine', {
      value: false,
      writable: true
    });

    const { result } = renderHook(() => usePWA());

    // Simulate going online
    Object.defineProperty(global.navigator, 'onLine', {
      value: true,
      writable: true
    });

    // Find and trigger the online event listener
    const onlineHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'online'
    )?.[1];
    
    if (onlineHandler) {
      act(() => {
        onlineHandler();
      });

      await waitFor(() => {
        expect(result.current.isOffline).toBe(false);
      });
    }
  });

  it('handles beforeinstallprompt event', async () => {
    const { result } = renderHook(() => usePWA());

    // Find the beforeinstallprompt event listener
    const beforeInstallPromptHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'beforeinstallprompt'
    )?.[1];

    expect(beforeInstallPromptHandler).toBeDefined();

    if (beforeInstallPromptHandler) {
      const mockEvent = createMockBeforeInstallPromptEvent();
      
      act(() => {
        beforeInstallPromptHandler(mockEvent);
      });

      await waitFor(() => {
        expect(result.current.isInstallable).toBe(true);
      });
    }
  });

  it('shows install prompt successfully', async () => {
    const { result } = renderHook(() => usePWA());

    // Set up the beforeinstallprompt event first
    const beforeInstallPromptHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'beforeinstallprompt'
    )?.[1];

    if (beforeInstallPromptHandler) {
      const mockEvent = createMockBeforeInstallPromptEvent('accepted');
      
      act(() => {
        beforeInstallPromptHandler(mockEvent);
      });

      await waitFor(() => {
        expect(result.current.isInstallable).toBe(true);
      });

      // Now test the install prompt
      let installResult: boolean | undefined;
      
      await act(async () => {
        installResult = await result.current.showInstallPrompt();
      });

      expect(installResult).toBe(true);
      expect(mockEvent.prompt).toHaveBeenCalled();
    }
  });

  it('handles install prompt dismissal', async () => {
    const { result } = renderHook(() => usePWA());

    // Set up the beforeinstallprompt event with dismissal
    const beforeInstallPromptHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'beforeinstallprompt'
    )?.[1];

    if (beforeInstallPromptHandler) {
      const mockEvent = createMockBeforeInstallPromptEvent('dismissed');
      
      act(() => {
        beforeInstallPromptHandler(mockEvent);
      });

      await waitFor(() => {
        expect(result.current.isInstallable).toBe(true);
      });

      // Test the install prompt dismissal
      let installResult: boolean | undefined;
      
      await act(async () => {
        installResult = await result.current.showInstallPrompt();
      });

      expect(installResult).toBe(false);
    }
  });

  it('returns false when no install prompt is available', async () => {
    const { result } = renderHook(() => usePWA());

    // Try to show install prompt without setting up beforeinstallprompt
    let installResult: boolean | undefined;
    
    await act(async () => {
      installResult = await result.current.showInstallPrompt();
    });

    expect(installResult).toBe(false);
  });

  it('detects PWA installation via standalone mode', () => {
    // Mock standalone mode
    Object.defineProperty(global.navigator, 'standalone', {
      value: true,
      writable: true
    });

    const { result } = renderHook(() => usePWA());

    expect(result.current.isInstalled).toBe(true);
  });

  it('detects PWA installation via display mode', () => {
    // Mock display-mode: standalone
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(display-mode: standalone)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
      writable: true
    });

    const { result } = renderHook(() => usePWA());

    expect(result.current.isInstalled).toBe(true);
  });

  it('cleans up event listeners on unmount', () => {
    const { unmount } = renderHook(() => usePWA());

    // Verify event listeners were added
    expect(mockAddEventListener).toHaveBeenCalledWith('beforeinstallprompt', expect.any(Function));
    expect(mockAddEventListener).toHaveBeenCalledWith('online', expect.any(Function));
    expect(mockAddEventListener).toHaveBeenCalledWith('offline', expect.any(Function));

    unmount();

    // Verify event listeners were removed
    expect(mockRemoveEventListener).toHaveBeenCalledWith('beforeinstallprompt', expect.any(Function));
    expect(mockRemoveEventListener).toHaveBeenCalledWith('online', expect.any(Function));
    expect(mockRemoveEventListener).toHaveBeenCalledWith('offline', expect.any(Function));
  });

  it('handles install prompt errors gracefully', async () => {
    const { result } = renderHook(() => usePWA());

    // Set up a failing beforeinstallprompt event
    const beforeInstallPromptHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'beforeinstallprompt'
    )?.[1];

    if (beforeInstallPromptHandler) {
      const mockEvent = {
        ...createMockBeforeInstallPromptEvent(),
        prompt: vi.fn().mockRejectedValue(new Error('Prompt failed')),
      };
      
      act(() => {
        beforeInstallPromptHandler(mockEvent);
      });

      await waitFor(() => {
        expect(result.current.isInstallable).toBe(true);
      });

      // Test error handling
      let installResult: boolean | undefined;
      
      await act(async () => {
        installResult = await result.current.showInstallPrompt();
      });

      expect(installResult).toBe(false);
    }
  });
});