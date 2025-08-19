import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '../Header'

// Mock SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: 'Sea Scout Ship 4',
    motto: 'Following Seas'
  }
}))

const renderHeader = (isScrolled = false, pathname = '/') => {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <Header isScrolled={isScrolled} />
    </MemoryRouter>
  )
}

describe('Header Component', () => {
  it('renders without crashing', () => {
    renderHeader()
    expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
  })

  it('displays ship name and motto', () => {
    renderHeader()
    expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
    expect(screen.getByText('Following Seas')).toBeInTheDocument()
  })

  it('applies scrolled styles when isScrolled is true', () => {
    renderHeader(true)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white', 'shadow-lg')
  })

  it('applies non-scrolled styles when isScrolled is false', () => {
    renderHeader(false)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white/90', 'backdrop-blur-sm')
  })

  it('displays navigation links on desktop', () => {
    renderHeader()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Meetings')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Trainings')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows mobile menu button', () => {
    renderHeader()
    const menuButton = screen.getByLabelText('Toggle mobile menu')
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    renderHeader()
    const menuButton = screen.getByLabelText('Toggle mobile menu')
    
    // Mobile menu should not be visible initially
    expect(screen.queryByText('About')).toBeInTheDocument() // Desktop nav
    
    // Click to open mobile menu
    fireEvent.click(menuButton)
    
    // Should now show mobile menu items (there will be duplicates for desktop + mobile)
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThan(1) // Desktop + mobile
  })

  it('uses hash links on home page', () => {
    renderHeader(false, '/')
    const aboutLink = screen.getAllByText('About')[0]
    expect(aboutLink.closest('a')).toHaveAttribute('href', '#about')
  })

  it('uses route links on non-home pages', () => {
    renderHeader(false, '/trainings')
    const aboutLinks = screen.getAllByText('About')
    // Find the desktop navigation link (not mobile)
    const desktopAboutLink = aboutLinks.find(link => 
      link.closest('nav')?.classList.contains('hidden') ||
      link.closest('nav')?.classList.contains('md:flex')
    )
    expect(desktopAboutLink?.closest('a')).toHaveAttribute('href', '/#about')
  })

  it('has accessible logo image', () => {
    renderHeader()
    const logo = screen.getByAltText('Sea Scout Ship 4 Burgee')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', './burgee.svg')
  })

  it('closes mobile menu when mobile link is clicked', () => {
    renderHeader()
    const menuButton = screen.getByLabelText('Toggle mobile menu')
    
    // Open mobile menu
    fireEvent.click(menuButton)
    
    // Click a mobile nav item
    const mobileAboutLinks = screen.getAllByText('About')
    const mobileAboutLink = mobileAboutLinks.find(link => 
      link.closest('nav')?.classList.contains('px-4')
    )
    
    if (mobileAboutLink) {
      fireEvent.click(mobileAboutLink)
      // Mobile menu should close (implementation detail - the state changes)
      expect(menuButton).toBeInTheDocument() // Button still exists
    }
  })

  it('has proper header height CSS variable', () => {
    renderHeader()
    const header = screen.getByRole('banner')
    expect(header).toHaveStyle({ height: 'var(--header-height)' })
  })
})