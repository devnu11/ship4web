import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GallerySection } from '../GallerySection'

// Mock the data
vi.mock('../../data', () => ({
  galleryImages: [
    { src: './helm.jpg', title: 'At the Helm', alt: 'Scout at the helm of a large yacht.' },
    { src: './sunfish.jpg', title: 'Lake Travis', alt: 'Learning to sail on Sunfish boats' },
    { src: './sunset.jpg', title: 'Red Sky at Night', alt: 'Beautiful sunset at Florida Sea Base' },
    { src: './gale.jpg', title: 'Blowing a Gale', alt: 'Seamanship during storm force winds' }
  ]
}))

describe('GallerySection Component', () => {
  it('renders without crashing', () => {
    render(<GallerySection />)
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()
  })

  it('displays section heading and subtitle', () => {
    render(<GallerySection />)
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()
    expect(screen.getByText('Memories from our maritime adventures')).toBeInTheDocument()
  })

  it('displays all gallery images', () => {
    render(<GallerySection />)
    
    expect(screen.getByAltText('Scout at the helm of a large yacht.')).toBeInTheDocument()
    expect(screen.getByAltText('Learning to sail on Sunfish boats')).toBeInTheDocument()
    expect(screen.getByAltText('Beautiful sunset at Florida Sea Base')).toBeInTheDocument()
    expect(screen.getByAltText('Seamanship during storm force winds')).toBeInTheDocument()
  })

  it('displays image titles', () => {
    render(<GallerySection />)
    
    expect(screen.getByText('At the Helm')).toBeInTheDocument()
    expect(screen.getByText('Lake Travis')).toBeInTheDocument()
    expect(screen.getByText('Red Sky at Night')).toBeInTheDocument()
    expect(screen.getByText('Blowing a Gale')).toBeInTheDocument()
  })

  it('has correct image sources', () => {
    render(<GallerySection />)
    
    const helmImage = screen.getByAltText('Scout at the helm of a large yacht.')
    const sunfishImage = screen.getByAltText('Learning to sail on Sunfish boats')
    const sunsetImage = screen.getByAltText('Beautiful sunset at Florida Sea Base')
    const galeImage = screen.getByAltText('Seamanship during storm force winds')
    
    expect(helmImage).toHaveAttribute('src', './helm.jpg')
    expect(sunfishImage).toHaveAttribute('src', './sunfish.jpg')
    expect(sunsetImage).toHaveAttribute('src', './sunset.jpg')
    expect(galeImage).toHaveAttribute('src', './gale.jpg')
  })

  it('has proper image styling', () => {
    render(<GallerySection />)
    
    const images = screen.getAllByRole('img')
    
    images.forEach(image => {
      expect(image).toHaveClass('w-full', 'h-full', 'object-cover', 'hover:scale-105', 'transition-transform', 'duration-300')
    })
  })

  it('uses proper section styling', () => {
    render(<GallerySection />)
    const section = screen.getByText('Photo Gallery').closest('section')
    expect(section).toHaveClass('py-20', 'bg-gray-50')
    expect(section).toHaveAttribute('id', 'gallery')
  })

  it('has proper container styling', () => {
    render(<GallerySection />)
    const container = screen.getByText('Photo Gallery').closest('.container')
    expect(container).toHaveClass('container', 'mx-auto', 'px-4')
  })

  it('has centered header', () => {
    render(<GallerySection />)
    const header = screen.getByText('Photo Gallery').closest('.text-center')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('mb-16')
  })

  it('has proper heading styling', () => {
    render(<GallerySection />)
    const heading = screen.getByText('Photo Gallery')
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'text-gray-900', 'mb-4')
    expect(heading.tagName).toBe('H2')
  })

  it('has proper subtitle styling', () => {
    render(<GallerySection />)
    const subtitle = screen.getByText('Memories from our maritime adventures')
    expect(subtitle).toHaveClass('text-xl', 'text-gray-600')
  })

  it('uses grid layout for images', () => {
    render(<GallerySection />)
    const grid = document.querySelector('.grid')
    expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'lg:grid-cols-3', 'gap-6')
  })

  it('has proper card styling for each image', () => {
    render(<GallerySection />)
    const imageCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-md')
    expect(imageCards.length).toBe(4) // Should have 4 image cards
    
    imageCards.forEach(card => {
      expect(card).toHaveClass('overflow-hidden', 'hover:shadow-lg', 'transition-shadow')
    })
  })

  it('has proper image container styling', () => {
    render(<GallerySection />)
    const imageContainers = document.querySelectorAll('.h-48.overflow-hidden')
    expect(imageContainers.length).toBe(4) // Should have 4 image containers
  })

  it('displays image descriptions', () => {
    render(<GallerySection />)
    
    // The alt text is displayed as description text in the cards
    expect(screen.getByText('Scout at the helm of a large yacht.')).toBeInTheDocument()
    expect(screen.getByText('Learning to sail on Sunfish boats')).toBeInTheDocument()
    expect(screen.getByText('Beautiful sunset at Florida Sea Base')).toBeInTheDocument()
    expect(screen.getByText('Seamanship during storm force winds')).toBeInTheDocument()
  })

  it('has proper card content styling', () => {
    render(<GallerySection />)
    const cardContents = document.querySelectorAll('.p-4')
    expect(cardContents.length).toBe(4)
    
    // Check title styling
    const titles = document.querySelectorAll('h3.font-semibold.text-gray-900.mb-1')
    expect(titles.length).toBe(4)
    
    // Check description styling
    const descriptions = document.querySelectorAll('p.text-sm.text-gray-600')
    expect(descriptions.length).toBe(4)
  })

  it('displays all image titles as h3 elements', () => {
    render(<GallerySection />)
    
    const helmTitle = screen.getByRole('heading', { name: 'At the Helm', level: 3 })
    const travisTitle = screen.getByRole('heading', { name: 'Lake Travis', level: 3 })
    const sunsetTitle = screen.getByRole('heading', { name: 'Red Sky at Night', level: 3 })
    const galeTitle = screen.getByRole('heading', { name: 'Blowing a Gale', level: 3 })
    
    expect(helmTitle).toBeInTheDocument()
    expect(travisTitle).toBeInTheDocument()
    expect(sunsetTitle).toBeInTheDocument()
    expect(galeTitle).toBeInTheDocument()
  })

  it('has proper hover effects on images', () => {
    render(<GallerySection />)
    const images = screen.getAllByRole('img')
    
    images.forEach(image => {
      expect(image).toHaveClass('hover:scale-105')
    })
  })

  it('has proper hover effects on cards', () => {
    render(<GallerySection />)
    const cards = document.querySelectorAll('.hover\\:shadow-lg')
    expect(cards.length).toBe(4)
  })
})