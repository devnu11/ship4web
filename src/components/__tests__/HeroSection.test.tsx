import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'

// Mock SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: 'Sea Scout Ship 4',
    motto: 'Following Seas',
    location: 'Dripping Springs, Texas',
    meetingTime: 'Second Sunday at 4:00 PM',
    meetingVenue: 'Patriots Hall',
    meetingAddress: 'US 290'
  }
}))

describe('HeroSection Component', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
    expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
  })

  it('displays ship name prominently', () => {
    render(<HeroSection />)
    const shipName = screen.getByText('Sea Scout Ship 4')
    expect(shipName).toBeInTheDocument()
    expect(shipName.tagName).toBe('H1')
  })

  it('displays motto and location', () => {
    render(<HeroSection />)
    expect(screen.getByText('Following Seas')).toBeInTheDocument()
    expect(screen.getByText('Dripping Springs, Texas')).toBeInTheDocument()
  })

  it('displays meeting information', () => {
    render(<HeroSection />)
    expect(screen.getByText('Second Sunday at 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Patriots Hall, US 290')).toBeInTheDocument()
  })

  it('has call-to-action button', () => {
    render(<HeroSection />)
    const ctaButton = screen.getByRole('link', { name: 'Join Our Crew' })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#contact')
    expect(ctaButton).toHaveClass('btn-cta')
  })

  it('has proper hero section styling', () => {
    render(<HeroSection />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('bg-hero-gradient-complex')
  })

  it('displays logo with proper styling', () => {
    render(<HeroSection />)
    const logo = screen.getByAltText('Sea Scout Ship 4 Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/seascoutingemblem_small.png')
  })

  it('has Clock and MapPin icons', () => {
    render(<HeroSection />)
    // Lucide icons render as SVGs, check for their presence indirectly
    const timeInfo = screen.getByText('Second Sunday at 4:00 PM').closest('div')
    const locationInfo = screen.getByText('Patriots Hall, US 290').closest('div')
    
    expect(timeInfo).toHaveClass('flex', 'items-center', 'space-x-2')
    expect(locationInfo).toHaveClass('flex', 'items-center', 'space-x-2')
  })

  it('uses centralized CSS classes', () => {
    render(<HeroSection />)
    const container = screen.getByText('Sea Scout Ship 4').closest('.container-content')
    expect(container).toBeInTheDocument()
  })

  it('has responsive text sizing', () => {
    render(<HeroSection />)
    const heading = screen.getByText('Sea Scout Ship 4')
    expect(heading).toHaveClass('text-5xl', 'md:text-7xl')
  })

  it('has proper background overlay', () => {
    render(<HeroSection />)
    const overlay = document.querySelector('.bg-black\\/30')
    expect(overlay).toBeInTheDocument()
  })

  it('has minimum height for full screen display', () => {
    render(<HeroSection />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
  })

  it('centers content vertically and horizontally', () => {
    render(<HeroSection />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('flex', 'items-center', 'justify-center')
  })
})