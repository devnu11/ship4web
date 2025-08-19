import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from '../SEO';

// Mock react-helmet-async
vi.mock('react-helmet-async', async () => {
  const actual = await vi.importActual('react-helmet-async');
  return {
    ...actual,
    Helmet: ({ children }: { children: React.ReactNode }) => <div data-testid="helmet">{children}</div>
  };
});

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
);

describe('SEO Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders with default props', () => {
    const { container } = render(
      <TestWrapper>
        <SEO />
      </TestWrapper>
    );
    
    expect(container.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    const customTitle = 'Custom Page Title';
    render(
      <TestWrapper>
        <SEO title={customTitle} />
      </TestWrapper>
    );
    
    // The component should render without errors
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders with custom description', () => {
    const customDescription = 'Custom page description for testing';
    render(
      <TestWrapper>
        <SEO description={customDescription} />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders with article type', () => {
    render(
      <TestWrapper>
        <SEO type="article" />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders with structured data', () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Test Organization"
    };
    
    render(
      <TestWrapper>
        <SEO structuredData={structuredData} />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    const props = {
      title: 'Complete Test Title',
      description: 'Complete test description',
      type: 'article' as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Test Article"
      }
    };
    
    render(
      <TestWrapper>
        <SEO {...props} />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('handles empty structured data', () => {
    render(
      <TestWrapper>
        <SEO structuredData={{}} />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('handles null structured data', () => {
    render(
      <TestWrapper>
        <SEO structuredData={null} />
      </TestWrapper>
    );
    
    expect(document.querySelector('[data-testid="helmet"]')).toBeInTheDocument();
  });

  it('renders without HelmetProvider (error boundary test)', () => {
    // Test component behavior without provider
    expect(() => {
      render(<SEO />);
    }).not.toThrow();
  });
});