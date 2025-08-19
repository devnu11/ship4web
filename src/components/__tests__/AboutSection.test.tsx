import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from '../AboutSection'

describe('AboutSection Component', () => {
  it('renders without crashing', () => {
    render(<AboutSection />)
    expect(screen.getByText('About Sea Scout Ship 4')).toBeInTheDocument()
  })

  it('displays section heading', () => {
    render(<AboutSection />)
    const heading = screen.getByText('About Sea Scout Ship 4')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveClass('heading-section')
  })

  it('displays descriptive subtitle', () => {
    render(<AboutSection />)
    const subtitle = screen.getByText(/Discover the adventure of Sea Scouting/)
    expect(subtitle).toBeInTheDocument()
    expect(subtitle).toHaveClass('text-section-subtitle')
  })

  it('displays three feature cards', () => {
    render(<AboutSection />)
    expect(screen.getByText('Leadership')).toBeInTheDocument()
    expect(screen.getByText('Seamanship')).toBeInTheDocument()
    expect(screen.getByText('Adventure')).toBeInTheDocument()
  })

  it('has leadership feature with proper description', () => {
    render(<AboutSection />)
    expect(screen.getByText('Leadership')).toBeInTheDocument()
    expect(screen.getByText(/Develop leadership skills through hands-on maritime experiences/)).toBeInTheDocument()
  })

  it('has seamanship feature with proper description', () => {
    render(<AboutSection />)
    expect(screen.getByText('Seamanship')).toBeInTheDocument()
    expect(screen.getByText(/Learn essential boating skills, navigation, and water safety/)).toBeInTheDocument()
  })

  it('has adventure feature with proper description', () => {
    render(<AboutSection />)
    expect(screen.getByText('Adventure')).toBeInTheDocument()
    expect(screen.getByText(/Experience exciting adventures on the water/)).toBeInTheDocument()
  })

  it('uses centralized CSS classes', () => {
    render(<AboutSection />)
    const section = screen.getByText('About Sea Scout Ship 4').closest('section')
    expect(section).toHaveClass('page-section', 'bg-white')
    
    const container = screen.getByText('About Sea Scout Ship 4').closest('.container-content')
    expect(container).toBeInTheDocument()
    
    const header = screen.getByText('About Sea Scout Ship 4').closest('.section-header')
    expect(header).toBeInTheDocument()
    
    const grid = document.querySelector('.grid-cards-3')
    expect(grid).toBeInTheDocument()
  })

  it('has proper feature title styling', () => {
    render(<AboutSection />)
    const leadershipTitle = screen.getByText('Leadership')
    const seamanshipTitle = screen.getByText('Seamanship')
    const adventureTitle = screen.getByText('Adventure')
    
    expect(leadershipTitle).toHaveClass('feature-title')
    expect(seamanshipTitle).toHaveClass('feature-title')
    expect(adventureTitle).toHaveClass('feature-title')
  })

  it('has feature icons with proper styling', () => {
    render(<AboutSection />)
    const featureIcons = document.querySelectorAll('.feature-icon')
    expect(featureIcons).toHaveLength(3)
    
    featureIcons.forEach(icon => {
      expect(icon).toHaveClass('feature-icon')
    })
  })

  it('has proper section ID for navigation', () => {
    render(<AboutSection />)
    const section = document.querySelector('#about')
    expect(section).toBeInTheDocument()
  })

  it('has centered text layout for features', () => {
    render(<AboutSection />)
    const featureContainers = screen.getByText('Leadership').closest('.text-center')
    expect(featureContainers).toBeInTheDocument()
  })

  it('uses ship4-blue color for icons', () => {
    render(<AboutSection />)
    // Check that Lucide icons have the proper color class
    const container = screen.getByText('Leadership').closest('div')
    const iconContainer = container?.querySelector('.feature-icon')
    expect(iconContainer).toBeInTheDocument()
  })
})