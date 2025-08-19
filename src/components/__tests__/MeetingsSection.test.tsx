import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MeetingsSection } from '../MeetingsSection'

// Mock SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    meetingTime: 'Second Sunday at 4:00 PM',
    meetingVenue: 'Patriots Hall',
    meetingAddress: 'US 290',
    city: 'Dripping Springs',
    state: 'TX'
  }
}))

describe('MeetingsSection Component', () => {
  it('renders without crashing', () => {
    render(<MeetingsSection />)
    expect(screen.getByText('Meeting Information')).toBeInTheDocument()
  })

  it('displays section heading', () => {
    render(<MeetingsSection />)
    const heading = screen.getByText('Meeting Information')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveClass('heading-section')
  })

  it('displays monthly meetings card title', () => {
    render(<MeetingsSection />)
    expect(screen.getByText('Monthly Meetings')).toBeInTheDocument()
    expect(screen.getByText('Join us for fun, fellowship and following seas')).toBeInTheDocument()
  })

  it('displays meeting time information', () => {
    render(<MeetingsSection />)
    expect(screen.getByText('When')).toBeInTheDocument()
    expect(screen.getByText('Second Sunday at 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Second Sunday')).toBeInTheDocument()
  })

  it('displays meeting location information', () => {
    render(<MeetingsSection />)
    expect(screen.getByText('Where')).toBeInTheDocument()
    expect(screen.getByText('Patriots Hall')).toBeInTheDocument()
    expect(screen.getByText('US 290, Dripping Springs, TX')).toBeInTheDocument()
  })

  it('displays what to expect section', () => {
    render(<MeetingsSection />)
    expect(screen.getByText('What to Expect')).toBeInTheDocument()
    expect(screen.getByText('Seamanship training and skill development')).toBeInTheDocument()
    expect(screen.getByText('Leadership opportunities and advancement work')).toBeInTheDocument()
    expect(screen.getByText('Event planning and community service projects')).toBeInTheDocument()
    expect(screen.getByText('Fellowship and team building activities')).toBeInTheDocument()
  })

  it('uses centralized CSS classes', () => {
    render(<MeetingsSection />)
    const section = screen.getByText('Meeting Information').closest('section')
    expect(section).toHaveClass('page-section-alt')
    expect(section).toHaveAttribute('id', 'meetings')
    
    const container = screen.getByText('Meeting Information').closest('.container-content')
    expect(container).toBeInTheDocument()
    
    const header = screen.getByText('Meeting Information').closest('.section-header')
    expect(header).toBeInTheDocument()
  })

  it('has proper card styling', () => {
    render(<MeetingsSection />)
    const card = document.querySelector('.card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('overflow-hidden')
  })

  it('has proper card header styling', () => {
    render(<MeetingsSection />)
    const cardHeader = screen.getByText('Monthly Meetings').closest('.bg-ship4-blue')
    expect(cardHeader).toBeInTheDocument()
    expect(cardHeader).toHaveClass('text-white', 'p-6')
  })

  it('has proper subsection heading styling', () => {
    render(<MeetingsSection />)
    const monthlyMeetingsHeading = screen.getByText('Monthly Meetings')
    expect(monthlyMeetingsHeading).toHaveClass('heading-subsection', 'text-white', 'mb-2')
  })

  it('displays clock and map pin icons', () => {
    render(<MeetingsSection />)
    // Check for When section with clock icon structure
    const whenSection = screen.getByText('When').closest('h4')
    expect(whenSection).toHaveClass('font-semibold', 'text-lg', 'mb-4', 'flex', 'items-center')
    
    // Check for Where section with map pin icon structure  
    const whereSection = screen.getByText('Where').closest('h4')
    expect(whereSection).toHaveClass('font-semibold', 'text-lg', 'mb-4', 'flex', 'items-center')
  })

  it('has proper grid layout for meeting details', () => {
    render(<MeetingsSection />)
    const grid = screen.getByText('When').closest('.grid')
    expect(grid).toHaveClass('grid', 'md:grid-cols-2', 'gap-6')
  })

  it('has proper what to expect list styling', () => {
    render(<MeetingsSection />)
    const list = screen.getByText('Seamanship training and skill development').closest('ul')
    expect(list).toHaveClass('list-disc', 'list-inside', 'text-gray-700', 'space-y-2')
  })

  it('has proper border and spacing for what to expect section', () => {
    render(<MeetingsSection />)
    const whatToExpectSection = screen.getByText('What to Expect').closest('.mt-6')
    expect(whatToExpectSection).toHaveClass('mt-6', 'pt-6', 'border-t')
  })

  it('has maximum width container for card', () => {
    render(<MeetingsSection />)
    const cardContainer = document.querySelector('.max-w-4xl')
    expect(cardContainer).toBeInTheDocument()
    expect(cardContainer).toHaveClass('mx-auto')
  })

  it('displays all required meeting expectations', () => {
    render(<MeetingsSection />)
    const expectations = [
      'Seamanship training and skill development',
      'Leadership opportunities and advancement work', 
      'Event planning and community service projects',
      'Fellowship and team building activities'
    ]
    
    expectations.forEach(expectation => {
      expect(screen.getByText(expectation)).toBeInTheDocument()
    })
  })

  it('has proper text colors and styling', () => {
    render(<MeetingsSection />)
    const meetingTime = screen.getByText('Second Sunday at 4:00 PM')
    const description = screen.getByText('Second Sunday')
    const location = screen.getByText('Patriots Hall')
    const locationDetail = screen.getByText('US 290, Dripping Springs, TX')
    
    expect(meetingTime).toHaveClass('text-gray-700', 'mb-2')
    expect(description).toHaveClass('text-sm', 'text-gray-600')
    expect(location).toHaveClass('text-gray-700', 'mb-2')
    expect(locationDetail).toHaveClass('text-sm', 'text-gray-600')
  })
})