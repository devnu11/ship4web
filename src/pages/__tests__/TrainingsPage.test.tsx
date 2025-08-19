import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { TrainingsPage } from '../TrainingsPage';

// Mock the component dependencies
vi.mock('../../components/Header', () => ({
  Header: () => <div data-testid="header-component" />
}));

vi.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer-component" />
}));

// Mock the data imports
vi.mock('../../data', () => ({
  trainingPrograms: [
    {
      title: 'Test Training 1',
      description: 'Test training description 1',
      topics: ['Topic 1', 'Topic 2', 'Topic 3'],
      icon: () => <div>TrainingIcon1</div>
    },
    {
      title: 'Test Training 2',
      description: 'Test training description 2',
      topics: ['Topic A', 'Topic B'],
      icon: () => <div>TrainingIcon2</div>
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

describe('TrainingsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all main sections', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });

  it('renders with correct page title', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Training Programs')).toBeInTheDocument();
  });

  it('renders main content section', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    // TrainingsPage doesn't have a main element, check for the main container
    const container = screen.getByRole('heading', { level: 1 }).closest('.min-h-screen');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('min-h-screen');
  });

  it('renders training header', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Training Programs')).toBeInTheDocument();
    expect(screen.getByText('Develop seamanship skills and leadership through comprehensive training')).toBeInTheDocument();
  });

  it('renders training programs section', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Our Training Programs')).toBeInTheDocument();
    expect(screen.getByText('Test Training 1')).toBeInTheDocument();
    expect(screen.getByText('Test Training 2')).toBeInTheDocument();
  });

  it('renders training topics', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Topic 1')).toBeInTheDocument();
    expect(screen.getByText('Topic 2')).toBeInTheDocument();
    expect(screen.getByText('Topic A')).toBeInTheDocument();
  });

  it('renders training schedule section', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Training Schedule')).toBeInTheDocument();
    expect(screen.getByText('Monthly Training')).toBeInTheDocument();
    expect(screen.getByText('Special Training Events')).toBeInTheDocument();
  });

  it('renders all external links with correct attributes', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
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

  it('renders schedule details', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Second Sunday of each month')).toBeInTheDocument();
    expect(screen.getByText('4:00 PM - 5:00 PM')).toBeInTheDocument();
    expect(screen.getByText('• Weekend sailing workshops')).toBeInTheDocument();
  });

  it('renders join training button', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    expect(screen.getByText('Join Our Training Program')).toBeInTheDocument();
  });

  it('renders topics covered sections', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    const topicsCoveredTexts = screen.getAllByText('Topics Covered:');
    expect(topicsCoveredTexts.length).toBe(2); // One for each training program
  });

  it('renders without errors', () => {
    expect(() => {
      render(
        <TestWrapper>
          <TrainingsPage />
        </TestWrapper>
      );
    }).not.toThrow();
  });

  it('maintains proper document structure', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    // Should have proper heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('Training Programs');

    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
  });

  it('uses semantic HTML structure', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    // Check for semantic sections
    const container = document.body;
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('uses correct CSS classes for styling', () => {
    render(
      <TestWrapper>
        <TrainingsPage />
      </TestWrapper>
    );

    const container = screen.getByRole('heading', { level: 1 }).closest('.min-h-screen');
    expect(container).toHaveClass('min-h-screen');
  });
});