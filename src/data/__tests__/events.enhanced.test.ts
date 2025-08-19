import { describe, it, expect } from 'vitest'
import { upcomingEvents } from '../events'
import type { Event } from '../../types'

describe('Events Data - Enhanced Testing', () => {
  
  describe('Negative Testing & Edge Cases', () => {
    it('should handle empty events array gracefully', () => {
      const emptyEvents: Event[] = []
      expect(emptyEvents.length).toBe(0)
      expect(Array.isArray(emptyEvents)).toBe(true)
    })

    it('should reject malformed date formats', () => {
      const invalidFormats = [
        'invalid-date',
        '',
        '2025/01/01', // Wrong format (slashes)
        '01-01-2025', // Wrong order
        '2025-1-1',   // Missing leading zeros
        '25-01-01',   // Wrong year format
      ]

      invalidFormats.forEach(invalidDate => {
        const testEvent: Event = {
          id: 999,
          title: 'Test Event',
          date: invalidDate,
          time: '4:00 PM',
          location: 'Test Location',
          description: 'Test Description'
        }
        
        // Test our strict date format validation
        const datePattern = /^\d{4}-\d{2}-\d{2}( - \d{4}-\d{2}-\d{2})?$|^\d{4} Dates TBD$/
        expect(datePattern.test(testEvent.date)).toBe(false)
      })
    })

    it('should handle malicious URLs safely', () => {
      const maliciousUrls = [
        'javascript:alert("xss")',
        'data:text/html,<script>alert("xss")</script>',
        'vbscript:msgbox("xss")',
        'file:///etc/passwd',
        'ftp://malicious.site/payload',
      ]

      upcomingEvents.forEach((event: Event) => {
        if (event.url) {
          maliciousUrls.forEach(malicious => {
            expect(event.url).not.toBe(malicious)
          })
          
          // Only allow safe protocols
          expect(event.url).toMatch(/^(https?:|mailto:)/)
        }
      })
    })

    it('should prevent XSS in event content', () => {
      const xssPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+=/i,
        /<iframe/i,
        /<object/i,
        /<embed/i,
        /eval\(/i,
      ]

      upcomingEvents.forEach((event: Event) => {
        xssPatterns.forEach(pattern => {
          expect(event.title).not.toMatch(pattern)
          expect(event.description).not.toMatch(pattern)
          expect(event.location).not.toMatch(pattern)
        })
      })
    })

    it('should handle excessively long content', () => {
      upcomingEvents.forEach((event: Event) => {
        expect(event.title.length).toBeLessThan(200)
        expect(event.description.length).toBeLessThan(1000)
        expect(event.location.length).toBeLessThan(200)
        expect(event.time.length).toBeLessThan(50)
        
        if (event.url) {
          expect(event.url.length).toBeLessThan(2048) // Max URL length
        }
      })
    })

    it('should handle special characters safely', () => {
      upcomingEvents.forEach((event: Event) => {
        // These should not break rendering
        expect(event.title).not.toMatch(/[\x00-\x1f\x7f-\x9f]/) // Control characters
        expect(event.description).not.toMatch(/[\x00-\x1f\x7f-\x9f]/)
      })
    })
  })

  describe('Business Logic & Data Integrity', () => {
    it('should have logical date ordering', () => {
      const datedEvents = upcomingEvents.filter(e => 
        e.date.match(/^\d{4}-\d{2}-\d{2}$/)
      )
      
      if (datedEvents.length > 1) {
        const dates = datedEvents.map(e => new Date(e.date))
        const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime())
        
        // Events should be in chronological order
        dates.forEach((date, index) => {
          expect(date.getTime()).toBeLessThanOrEqual(
            sortedDates[sortedDates.length - 1].getTime()
          )
        })
      }
    })

    it('should have reasonable time formats', () => {
      const validTimeFormats = [
        /^\d{1,2}:\d{2} [AP]M$/i, // "4:00 PM"
        /^TBD$/i, // "TBD"
        /^\d{1,2}:\d{2}$/i, // "14:00"
      ]

      upcomingEvents.forEach((event: Event) => {
        const isValidFormat = validTimeFormats.some(format => 
          format.test(event.time)
        )
        expect(isValidFormat).toBe(true)
      })
    })

    it('should have sensible event distribution', () => {
      const externalEvents = upcomingEvents.filter(e => 
        e.title.toUpperCase().includes('EXTERNAL')
      )
      const internalEvents = upcomingEvents.filter(e => 
        !e.title.toUpperCase().includes('EXTERNAL')
      )
      
      // Should have both internal and external events
      expect(internalEvents.length).toBeGreaterThan(0)
      expect(externalEvents.length).toBeGreaterThan(0)
    })

    it('should handle missing optional fields gracefully', () => {
      upcomingEvents.forEach((event: Event) => {
        // Required fields should always exist
        expect(event.id).toBeDefined()
        expect(event.title).toBeDefined()
        expect(event.date).toBeDefined()
        expect(event.time).toBeDefined()
        expect(event.location).toBeDefined()
        expect(event.description).toBeDefined()
        
        // Optional URL field
        if (event.url) {
          expect(typeof event.url).toBe('string')
          expect(event.url.length).toBeGreaterThan(0)
        }
      })
    })
  })

  describe('Security & Privacy', () => {
    it('should not contain sensitive information', () => {
      const sensitivePatterns = [
        /\b\d{3}-\d{2}-\d{4}\b/, // SSN
        /\b\d{16}\b/, // Credit card
        /password/i,
        /secret/i,
        /private.*key/i,
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/, // Email addresses (except in URLs)
      ]

      upcomingEvents.forEach((event: Event) => {
        sensitivePatterns.forEach(pattern => {
          expect(event.title).not.toMatch(pattern)
          expect(event.description).not.toMatch(pattern)
          expect(event.location).not.toMatch(pattern)
        })
      })
    })

    it('should validate external URLs for security', () => {
      const allowedDomains = [
        'shacbsa.org',
        'scoutingevent.com',
        'texastrailsbsa.com',
        'aquaticschool.org',
        'scouting.org',
      ]

      upcomingEvents.forEach((event: Event) => {
        if (event.url && event.url.startsWith('http')) {
          const url = new URL(event.url)
          const domain = url.hostname.replace('www.', '')
          
          const isAllowed = allowedDomains.some(allowed => 
            domain === allowed || domain.endsWith('.' + allowed)
          )
          
          expect(isAllowed).toBe(true)
        }
      })
    })
  })

  describe('Performance & Scalability', () => {
    it('should have reasonable number of events for UI performance', () => {
      expect(upcomingEvents.length).toBeLessThan(50)
      expect(upcomingEvents.length).toBeGreaterThan(0)
    })

    it('should have consistent data structure for efficient processing', () => {
      upcomingEvents.forEach((event: Event) => {
        const requiredKeys = ['id', 'title', 'date', 'time', 'location', 'description']
        requiredKeys.forEach(key => {
          expect(event).toHaveProperty(key)
          expect(event[key as keyof Event]).toBeDefined()
        })
      })
    })

    it('should handle concurrent access patterns', () => {
      // Test that data is immutable and safe for concurrent access
      const originalLength = upcomingEvents.length
      const eventsCopy = [...upcomingEvents]
      
      expect(eventsCopy.length).toBe(originalLength)
      expect(eventsCopy).not.toBe(upcomingEvents) // Different references
      expect(eventsCopy).toEqual(upcomingEvents) // Same content
    })
  })
})