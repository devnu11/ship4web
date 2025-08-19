import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactSection } from '../ContactSection'

// Mock SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: 'Sea Scout Ship 4',
    email: 'info@ship4.example.com',
    phone: '(555) 123-4567',
    meetingLocation: 'Patriots Hall, Dripping Springs, TX',
    brotherTroop: {
      name: 'Troop 135',
      url: 'https://troop135.example.com'
    },
    parentOrg: {
      name: 'Sam Houston Area Council',
      url: 'https://shacbsa.org'
    },
    charterOrg: 'American Legion Post 135'
  }
}))

describe('ContactSection Component', () => {
  it('renders without crashing', () => {
    render(<ContactSection />)
    expect(screen.getByText('Get Connected')).toBeInTheDocument()
  })

  it('displays section heading and subtitle', () => {
    render(<ContactSection />)
    expect(screen.getByText('Get Connected')).toBeInTheDocument()
    expect(screen.getByText('Ready to join our crew or have questions?')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<ContactSection />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('info@ship4.example.com')).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Patriots Hall, Dripping Springs, TX')).toBeInTheDocument()
  })

  it('displays related organizations section', () => {
    render(<ContactSection />)
    expect(screen.getByText('Related Organizations')).toBeInTheDocument()
    expect(screen.getByText('Troop 135 (Brother Troop)')).toBeInTheDocument()
    expect(screen.getByText('Sam Houston Area Council')).toBeInTheDocument()
    expect(screen.getByText('American Legion Post 135 (Charter Organization)')).toBeInTheDocument()
  })

  it('has working external links', () => {
    render(<ContactSection />)
    const brotherTroopLink = screen.getByText('Troop 135 (Brother Troop)').closest('a')
    const parentOrgLink = screen.getByText('Sam Houston Area Council').closest('a')
    
    expect(brotherTroopLink).toHaveAttribute('href', 'https://troop135.example.com')
    expect(brotherTroopLink).toHaveAttribute('target', '_blank')
    expect(brotherTroopLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(parentOrgLink).toHaveAttribute('href', 'https://shacbsa.org')
    expect(parentOrgLink).toHaveAttribute('target', '_blank')
    expect(parentOrgLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has contact us button with email link', () => {
    render(<ContactSection />)
    const contactButton = screen.getByRole('link', { name: 'Contact Us Today' })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', 'mailto:info@ship4.example.com?subject=Interested in Sea Scout Ship 4')
    expect(contactButton).toHaveClass('btn-cta')
  })

  it('uses centralized CSS classes', () => {
    render(<ContactSection />)
    const section = screen.getByText('Get Connected').closest('section')
    expect(section).toHaveClass('page-section', 'bg-white')
    expect(section).toHaveAttribute('id', 'contact')
    
    const container = screen.getByText('Get Connected').closest('.container-content')
    expect(container).toBeInTheDocument()
    
    const header = screen.getByText('Get Connected').closest('.section-header')
    expect(header).toBeInTheDocument()
    
    const grid = document.querySelector('.grid-cards')
    expect(grid).toBeInTheDocument()
  })

  it('has proper section heading styling', () => {
    render(<ContactSection />)
    const heading = screen.getByText('Get Connected')
    expect(heading).toHaveClass('heading-section')
    expect(heading.tagName).toBe('H2')
  })

  it('has proper subsection headings', () => {
    render(<ContactSection />)
    const contactHeading = screen.getByText('Contact Information')
    const orgsHeading = screen.getByText('Related Organizations')
    
    expect(contactHeading).toHaveClass('heading-subsection')
    expect(orgsHeading).toHaveClass('heading-subsection')
    expect(contactHeading.tagName).toBe('H3')
    expect(orgsHeading.tagName).toBe('H3')
  })

  it('displays icons for contact methods', () => {
    render(<ContactSection />)
    // Verify contact information has proper structure for icons
    const emailContainer = screen.getByText('info@ship4.example.com').closest('div')
    const phoneContainer = screen.getByText('(555) 123-4567').closest('div')
    const locationContainer = screen.getByText('Patriots Hall, Dripping Springs, TX').closest('div')
    
    expect(emailContainer).toHaveClass('flex', 'items-center', 'space-x-3')
    expect(phoneContainer).toHaveClass('flex', 'items-center', 'space-x-3')
    expect(locationContainer).toHaveClass('flex', 'items-center', 'space-x-3')
  })

  it('displays external link icons', () => {
    render(<ContactSection />)
    const brotherTroopContainer = screen.getByText('Troop 135 (Brother Troop)').closest('a')
    const parentOrgContainer = screen.getByText('Sam Houston Area Council').closest('a')
    
    expect(brotherTroopContainer).toHaveClass('flex', 'items-center', 'space-x-3')
    expect(parentOrgContainer).toHaveClass('flex', 'items-center', 'space-x-3')
  })
})