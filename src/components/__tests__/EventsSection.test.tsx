import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { EventsSection } from '../EventsSection'

// Mock the data
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipShortName: 'Ship 4'
  }
}))

vi.mock('../../data', () => ({
  upcomingEvents: [
    {
      id: 1,
      title: 'First Meeting',
      date: '2025-08-24',
      time: '4:00 PM',
      location: 'Patriots Hall',
      description: 'First formal meeting of Ship 4.'
    },
    {
      id: 2,
      title: 'Quarter Deck Training',
      date: '2025-09-01',
      time: '1:30 PM',
      location: 'Zoom',
      description: 'Skipper Palm teaches leadership, planning and communication.',
      url: 'mailto:dallas@rliv.net?subject=Quarter Deck Training'
    },
    {
      id: 3,
      title: 'Sea Scout Minto Rendezvous',
      date: '2025-09-19 - 2025-09-21',
      time: '5:00 PM',
      location: 'Camp Strake, SHAC',
      description: 'Regional Sea Scout rendezvous.',
      url: 'https://shacbsa.org/minto-rendezvous'
    }
  ]
}))

describe('EventsSection Component', () => {
  it('renders without crashing', () => {
    render(<EventsSection />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('displays loading state initially', () => {
    render(<EventsSection />)
    expect(screen.getByText('Loading events...')).toBeInTheDocument()
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('displays section heading and subtitle', () => {
    render(<EventsSection />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Stay updated with our latest activities and adventures')).toBeInTheDocument()
  })

  it('loads and displays events after timeout', async () => {
    render(<EventsSection />)
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    // Check that events are displayed
    expect(screen.getByText('First Meeting')).toBeInTheDocument()
    expect(screen.getByText('Quarter Deck Training')).toBeInTheDocument()
    expect(screen.getByText('Sea Scout Minto Rendezvous')).toBeInTheDocument()
  })

  it('displays event details correctly', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    // Check First Meeting details
    expect(screen.getByText('First Meeting')).toBeInTheDocument()
    expect(screen.getByText('2025-08-24 at 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Patriots Hall')).toBeInTheDocument()
    expect(screen.getByText('First formal meeting of Ship 4.')).toBeInTheDocument()

    // Check Quarter Deck Training details
    expect(screen.getByText('2025-09-01 at 1:30 PM')).toBeInTheDocument()
    expect(screen.getByText('Zoom')).toBeInTheDocument()
    expect(screen.getByText('Skipper Palm teaches leadership, planning and communication.')).toBeInTheDocument()
  })

  it('displays Learn More buttons for events with URLs', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    const learnMoreButtons = screen.getAllByText('Learn More')
    expect(learnMoreButtons).toHaveLength(2) // Quarter Deck Training and Minto Rendezvous have URLs

    // Check that buttons have proper attributes
    const rendezvousButton = learnMoreButtons.find(button => 
      button.closest('a')?.getAttribute('href') === 'https://shacbsa.org/minto-rendezvous'
    )
    expect(rendezvousButton).toBeInTheDocument()
    expect(rendezvousButton?.closest('a')).toHaveAttribute('target', '_blank')
    expect(rendezvousButton?.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('uses centralized CSS classes', () => {
    render(<EventsSection />)
    const section = screen.getByText('Upcoming Events').closest('section')
    expect(section).toHaveClass('page-section', 'bg-white')
    expect(section).toHaveAttribute('id', 'events')
    
    const container = screen.getByText('Upcoming Events').closest('.container-content')
    expect(container).toBeInTheDocument()
    
    const header = screen.getByText('Upcoming Events').closest('.section-header')
    expect(header).toBeInTheDocument()
  })

  it('has proper section heading styling', () => {
    render(<EventsSection />)
    const heading = screen.getByText('Upcoming Events')
    expect(heading).toHaveClass('heading-section')
    expect(heading.tagName).toBe('H2')
  })

  it('has proper subtitle styling', () => {
    render(<EventsSection />)
    const subtitle = screen.getByText('Stay updated with our latest activities and adventures')
    expect(subtitle).toHaveClass('text-section-subtitle')
  })

  it('displays events with proper card styling', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    const eventCards = document.querySelectorAll('.bg-gray-50.rounded-lg.p-6.border-l-4.border-ship4-blue')
    expect(eventCards.length).toBeGreaterThan(0)
  })

  it('uses btn-small class for Learn More buttons', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    const learnMoreButtons = screen.getAllByText('Learn More')
    learnMoreButtons.forEach(button => {
      expect(button.closest('a')).toHaveClass('btn-small')
    })
  })

  it('displays date and time with calendar icon', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    const dateTimeElements = screen.getAllByText(/\d{4}-\d{2}-\d{2} at \d{1,2}:\d{2} [AP]M/)
    expect(dateTimeElements.length).toBeGreaterThan(0)
    
    dateTimeElements.forEach(element => {
      const container = element.closest('p')
      expect(container).toHaveClass('flex', 'items-center')
    })
  })

  it('displays location with map pin icon', async () => {
    render(<EventsSection />)
    
    await waitFor(() => {
      expect(screen.queryByText('Loading events...')).not.toBeInTheDocument()
    }, { timeout: 2000 })

    const locationElements = [
      screen.getByText('Patriots Hall'),
      screen.getByText('Zoom'),
      screen.getByText('Camp Strake, SHAC')
    ]
    
    locationElements.forEach(element => {
      const container = element.closest('p')
      expect(container).toHaveClass('flex', 'items-center')
    })
  })
})