import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: 'Sea Scout Ship 4',
    motto: 'Following Seas',
    city: 'Dripping Springs',
    charterOrg: 'American Legion Post 135'
  }
}))

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />)
    expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
  })

  it('displays ship name and motto', () => {
    render(<Footer />)
    expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
    expect(screen.getByText('Following Seas')).toBeInTheDocument()
  })

  it('displays copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 Sea Scout Ship 4, Dripping Springs/)).toBeInTheDocument()
    expect(screen.getByText(/Chartered by American Legion Post 135/)).toBeInTheDocument()
  })

  it('has proper footer styling', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-gray-900', 'text-white', 'py-12')
  })

  it('uses centralized container class', () => {
    render(<Footer />)
    const container = screen.getByRole('contentinfo').querySelector('div')
    expect(container).toHaveClass('container-content')
  })

  it('has accessible logo image', () => {
    render(<Footer />)
    const logo = screen.getByAltText('Sea Scout Ship 4 Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', './logo transparent.svg')
  })

  it('displays logo with proper styling', () => {
    render(<Footer />)
    const logoContainer = screen.getByAltText('Sea Scout Ship 4 Logo').closest('div')
    expect(logoContainer).toHaveClass('w-48', 'h-48', 'bg-ship4-blue', 'rounded-full')
  })

  it('has centered content layout', () => {
    render(<Footer />)
    const content = screen.getByRole('contentinfo').querySelector('.text-center')
    expect(content).toBeInTheDocument()
  })

  it('displays motto with proper styling', () => {
    render(<Footer />)
    const motto = screen.getByText('Following Seas')
    expect(motto).toHaveClass('text-gray-400', 'italic', 'mb-4')
  })

  it('displays copyright with proper styling', () => {
    render(<Footer />)
    const copyright = screen.getByText(/© 2025 Sea Scout Ship 4/)
    expect(copyright).toHaveClass('text-gray-500', 'text-sm')
  })
})