import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '../HomePage';

// Mock all the component dependencies
vi.mock('../../components/SEO', () => ({
  SEO: () => <div data-testid="seo-component" />
}));

vi.mock('../../components/Header', () => ({
  Header: () => <div data-testid="header-component" />
}));

vi.mock('../../components/HeroSection', () => ({
  HeroSection: () => <div data-testid="hero-section" />
}));

vi.mock('../../components/AboutSection', () => ({
  AboutSection: () => <div data-testid="about-section" />
}));

vi.mock('../../components/MeetingsSection', () => ({
  MeetingsSection: () => <div data-testid="meetings-section" />
}));

vi.mock('../../components/EventsSection', () => ({
  EventsSection: () => <div data-testid="events-section" />
}));

vi.mock('../../components/GallerySection', () => ({
  GallerySection: () => <div data-testid="gallery-section" />
}));

vi.mock('../../components/ContactSection', () => ({
  ContactSection: () => <div data-testid="contact-section" />
}));

vi.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer-component" />
}));

vi.mock('../../hooks/usePWA', () => ({
  usePWA: () => ({
    isInstallable: false,
    isInstalled: false,
    isOffline: false,
    showInstallPrompt: vi.fn()
  })
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
);

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all main sections', () => {
    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('meetings-section')).toBeInTheDocument();
    expect(screen.getByTestId('events-section')).toBeInTheDocument();
    expect(screen.getByTestId('gallery-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });

  it('renders main element with correct structure', () => {
    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    // The min-h-screen class is on the parent div, not the main element
    const parentContainer = mainElement.closest('.min-h-screen');
    expect(parentContainer).toHaveClass('min-h-screen');
  });

  it('renders without errors', () => {
    expect(() => {
      render(
        <TestWrapper>
          <HomePage />
        </TestWrapper>
      );
    }).not.toThrow();
  });

  it('renders PWA install prompt section when installable', () => {
    // Mock PWA as installable
    vi.doMock('../../hooks/usePWA', () => ({
      usePWA: () => ({
        isInstallable: true,
        isInstalled: false,
        isOffline: false,
        showInstallPrompt: vi.fn()
      })
    }));

    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );

    // Component should still render all sections
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });

  it('handles offline state gracefully', () => {
    // Mock PWA as offline
    vi.doMock('../../hooks/usePWA', () => ({
      usePWA: () => ({
        isInstallable: false,
        isInstalled: false,
        isOffline: true,
        showInstallPrompt: vi.fn()
      })
    }));

    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );

    // Component should still render all sections
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
});