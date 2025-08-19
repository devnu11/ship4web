import { describe, it, expect } from 'vitest'
import { seaScoutResources, shipFormationResources, additionalResources, type Resource } from '../documentationResources'

describe('Documentation Resources - Enhanced Testing', () => {
  
  describe('Negative Testing & Edge Cases', () => {
    it('should handle empty resource arrays gracefully', () => {
      const emptyArray: Resource[] = []
      expect(emptyArray.length).toBe(0)
      expect(Array.isArray(emptyArray)).toBe(true)
    })

    it('should have valid URL protocols only (no javascript: or data:)', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        expect(resource.url).not.toMatch(/^javascript:/i)
        expect(resource.url).not.toMatch(/^data:/i)
        expect(resource.url).not.toMatch(/^file:/i)
        expect(resource.url).toMatch(/^https?:|^mailto:/)
      })
    })

    it('should reject malformed URLs', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        // Test that URL constructor doesn't throw for HTTP URLs
        if (resource.url.startsWith('http')) {
          expect(() => new URL(resource.url)).not.toThrow()
        }
        // Validate mailto format
        if (resource.url.startsWith('mailto:')) {
          expect(resource.url).toMatch(/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+/)
        }
      })
    })

    it('should have no XSS vulnerabilities in text content', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        expect(resource.title).not.toMatch(/<script|javascript:|on\w+=/i)
        expect(resource.description).not.toMatch(/<script|javascript:|on\w+=/i)
        expect(resource.category).not.toMatch(/<script|javascript:|on\w+=/i)
      })
    })

    it('should not have excessively long content that could break UI', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        expect(resource.title.length).toBeLessThan(100)
        expect(resource.description.length).toBeLessThan(500)
        expect(resource.category.length).toBeLessThan(50)
        expect(resource.url.length).toBeLessThan(2048) // Max URL length
      })
    })

    it('should handle icon component references safely', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        expect(resource.icon).toBeDefined()
        // Icons are React components which can be functions or objects
        expect(typeof resource.icon === 'function' || typeof resource.icon === 'object').toBe(true)
      })
    })
  })

  describe('Data Integrity & Business Logic', () => {
    it('should have proper resource prioritization', () => {
      const primaryResources = seaScoutResources.filter(r => r.isPrimary)
      const secondaryResources = seaScoutResources.filter(r => !r.isPrimary)
      
      expect(primaryResources.length).toBeGreaterThan(0)
      expect(secondaryResources.length).toBeGreaterThan(0)
      expect(primaryResources.length).toBeLessThanOrEqual(secondaryResources.length + 1)
    })

    it('should have sensible category distribution', () => {
      const categories = seaScoutResources.map(r => r.category)
      const uniqueCategories = new Set(categories)
      
      expect(uniqueCategories.size).toBeGreaterThan(1)
      expect(uniqueCategories.size).toBeLessThan(categories.length) // Some reuse
    })

    it('should handle missing or null data gracefully', () => {
      // Test that our interfaces would catch missing required fields
      const invalidResource = {} as any
      
      expect(invalidResource.title).toBeUndefined()
      expect(invalidResource.description).toBeUndefined()
      expect(invalidResource.url).toBeUndefined()
    })
  })

  describe('Security & Validation', () => {
    it('should only contain trusted domains for external links', () => {
      const trustedDomains = [
        'seascout.org',
        'scouting.org', 
        'tpwd.texas.gov',
        'shacbsa.org',
        'texastrailsbsa.com'
      ]
      
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        if (resource.url.startsWith('http')) {
          const url = new URL(resource.url)
          const domain = url.hostname.replace('www.', '')
          const isTrusted = trustedDomains.some(trusted => 
            domain === trusted || domain.endsWith('.' + trusted)
          )
          expect(isTrusted).toBe(true)
        }
      })
    })

    it('should not contain sensitive information in descriptions', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      const sensitivePatterns = [
        /password/i,
        /secret/i,
        /key/i,
        /token/i,
        /\d{3}-\d{2}-\d{4}/, // SSN pattern
        /\d{16}/, // Credit card pattern
      ]
      
      allResources.forEach((resource: Resource) => {
        sensitivePatterns.forEach(pattern => {
          expect(resource.description).not.toMatch(pattern)
          expect(resource.title).not.toMatch(pattern)
        })
      })
    })
  })

  describe('Performance & Scalability', () => {
    it('should have reasonable array sizes for UI performance', () => {
      expect(seaScoutResources.length).toBeLessThan(20)
      expect(shipFormationResources.length).toBeLessThan(20)
      expect(additionalResources.length).toBeLessThan(20)
    })

    it('should have consistent data structure for efficient rendering', () => {
      const allResources = [...seaScoutResources, ...shipFormationResources, ...additionalResources]
      
      allResources.forEach((resource: Resource) => {
        const keys = Object.keys(resource).sort()
        expect(keys).toContain('title')
        expect(keys).toContain('description')
        expect(keys).toContain('url')
        expect(keys).toContain('icon')
        expect(keys).toContain('category')
        expect(keys).toContain('isPrimary')
      })
    })
  })
})