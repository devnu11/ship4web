import { describe, it, expect } from 'vitest'
import { upcomingEvents } from '../events'
import type { Event } from '../../types'

describe('Upcoming Events', () => {
  it('should be an array', () => {
    expect(Array.isArray(upcomingEvents)).toBe(true)
  })

  it('should contain at least one event', () => {
    expect(upcomingEvents.length).toBeGreaterThan(0)
  })

  it('should have all events with required fields', () => {
    upcomingEvents.forEach((event: Event) => {
      expect(event).toHaveProperty('id')
      expect(event).toHaveProperty('title')
      expect(event).toHaveProperty('date')
      expect(event).toHaveProperty('time')
      expect(event).toHaveProperty('location')
      expect(event).toHaveProperty('description')
      
      expect(typeof event.id).toBe('number')
      expect(typeof event.title).toBe('string')
      expect(typeof event.date).toBe('string')
      expect(typeof event.time).toBe('string')
      expect(typeof event.location).toBe('string')
      expect(typeof event.description).toBe('string')
      
      expect(event.id).toBeGreaterThan(0)
      expect(event.title).toBeTruthy()
      expect(event.date).toBeTruthy()
      expect(event.time).toBeTruthy()
      expect(event.location).toBeTruthy()
      expect(event.description).toBeTruthy()
    })
  })

  it('should have valid URLs where provided', () => {
    upcomingEvents.forEach((event: Event) => {
      if (event.url) {
        expect(typeof event.url).toBe('string')
        // Allow both HTTP URLs and mailto links
        expect(
          event.url.startsWith('http') || event.url.startsWith('mailto:')
        ).toBe(true)
      }
    })
  })

  it('should have unique IDs', () => {
    const ids = upcomingEvents.map(event => event.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should contain First Meeting event', () => {
    const firstMeeting = upcomingEvents.find(e => e.title === 'First Meeting')
    expect(firstMeeting).toBeDefined()
    expect(firstMeeting?.location).toBe('Patriots Hall')
    expect(firstMeeting?.date).toBe('2025-08-24')
  })

  it('should contain Sea Scout Minto Rendezvous', () => {
    const rendezvous = upcomingEvents.find(e => e.title.includes('Minto Rendezvous'))
    expect(rendezvous).toBeDefined()
    expect(rendezvous?.location).toBe('Camp Strake, SHAC')
    expect(rendezvous?.url).toBe('https://shacbsa.org/minto-rendezvous')
  })

  it('should have properly formatted dates', () => {
    upcomingEvents.forEach((event: Event) => {
      // Should match YYYY-MM-DD format, date ranges, or "YYYY Dates TBD"
      const datePattern = /^(\d{4}-\d{2}-\d{2}( - \d{4}-\d{2}-\d{2})?|\d{4} Dates TBD)$/
      expect(datePattern.test(event.date)).toBe(true)
    })
  })

  it('should have meaningful descriptions', () => {
    upcomingEvents.forEach((event: Event) => {
      expect(event.description.length).toBeGreaterThan(10)
      expect(event.description).not.toBe(event.title)
    })
  })

  it('should include external events with EXTERNAL prefix', () => {
    const externalEvents = upcomingEvents.filter(e => e.title.startsWith('EXTERNAL'))
    expect(externalEvents.length).toBeGreaterThan(0)
    
    externalEvents.forEach(event => {
      expect(event.url).toBeTruthy()
      expect(typeof event.url).toBe('string')
    })
  })
})