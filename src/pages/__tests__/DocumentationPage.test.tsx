import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { DocumentationPage } from '../DocumentationPage';

// Mock the component dependencies
vi.mock('../../components/Header', () => ({
  Header: () => <div data-testid="header-component" />
}));

vi.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer-component" />
}));

// Mock the data imports
vi.mock('../../data', () => ({
  seaScoutResources: [
    {
      title: 'Test Resource 1',
      description: 'Test description 1',
      category: 'Manual',
      url: 'https://test1.com',
      icon: () => <div>Icon1</div>,
      isPrimary: true
    }
  ],
  shipFormationResources: [
    {
      title: 'Test Resource 2',
      description: 'Test description 2',
      category: 'Guide',
      url: 'https://test2.com',
      icon: () => <div>Icon2</div>,
      isPrimary: false
    }
  ],
  additionalResources: [
    {
      title: 'Test Resource 3',
      description: 'Test description 3',
      category: 'Form',
      url: 'https://test3.com',
      icon: () => <div>Icon3</div>,
      isPrimary: false
    }
  ]
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <HelmetProvider>
      {children}
    </HelmetProvider>
  </BrowserRouter>
);

describe('DocumentationPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all main sections', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });

  it('renders with correct page title', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Documentation & Resources')).toBeInTheDocument();
  });

  it('renders main content section', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    // Look for the outermost container
    const outerContainer = screen.getByRole('heading', { level: 1 }).closest('div.min-h-screen');
    expect(outerContainer).toHaveClass('min-h-screen', 'bg-gray-50');
  });

  it('renders documentation header', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Documentation & Resources')).toBeInTheDocument();
    expect(screen.getByText('Essential guides for new Sea Scouts and ship formation')).toBeInTheDocument();
  });

  it('renders essential resources section', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Essential Resources for New Sea Scouts')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 1')).toBeInTheDocument();
  });

  it('renders all external links with correct attributes', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    const links = screen.getAllByRole('link');
    const externalLinks = links.filter(link => 
      link.getAttribute('href')?.startsWith('http')
    );

    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders ship formation resources section', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Ship Formation & Leadership Resources')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 2')).toBeInTheDocument();
  });

  it('renders additional resources section', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Additional Resources')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 3')).toBeInTheDocument();
  });

  it('renders getting started section', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    expect(screen.getByText('Ready to Get Started?')).toBeInTheDocument();
    expect(screen.getByText('1. Read the Manual')).toBeInTheDocument();
    expect(screen.getByText('2. Complete Safety Training')).toBeInTheDocument();
    expect(screen.getByText('3. Join Our Ship')).toBeInTheDocument();
  });

  it('renders view resource buttons', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    const viewResourceButtons = screen.getAllByText('View Resource');
    expect(viewResourceButtons.length).toBeGreaterThan(0);
  });

  it('renders without errors', () => {
    expect(() => {
      render(
        <TestWrapper>
          <DocumentationPage />
        </TestWrapper>
      );
    }).not.toThrow();
  });

  it('maintains proper document structure', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    // Should have proper heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('Documentation & Resources');

    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
  });

  it('uses correct CSS classes for styling', () => {
    render(
      <TestWrapper>
        <DocumentationPage />
      </TestWrapper>
    );

    // Look for the outermost container
    const outerContainer = screen.getByRole('heading', { level: 1 }).closest('div.min-h-screen');
    expect(outerContainer).toHaveClass('min-h-screen', 'bg-gray-50');
  });
});