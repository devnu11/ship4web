import { describe, it, expect } from 'vitest'
import { seaScoutResources, shipFormationResources, additionalResources, type Resource } from '../documentationResources'

describe('Documentation Resources', () => {
  describe('seaScoutResources', () => {
    it('should be an array', () => {
      expect(Array.isArray(seaScoutResources)).toBe(true)
    })

    it('should contain at least one resource', () => {
      expect(seaScoutResources.length).toBeGreaterThan(0)
    })

    it('should have all resources with required fields', () => {
      seaScoutResources.forEach((resource: Resource) => {
        expect(resource).toHaveProperty('title')
        expect(resource).toHaveProperty('description')
        expect(resource).toHaveProperty('url')
        expect(resource).toHaveProperty('icon')
        expect(resource).toHaveProperty('category')
        expect(resource).toHaveProperty('isPrimary')
        
        expect(typeof resource.title).toBe('string')
        expect(typeof resource.description).toBe('string')
        expect(typeof resource.url).toBe('string')
        expect(typeof resource.category).toBe('string')
        expect(typeof resource.isPrimary).toBe('boolean')
        expect(resource.title).toBeTruthy()
        expect(resource.description).toBeTruthy()
        expect(resource.url).toBeTruthy()
      })
    })

    it('should have valid URLs', () => {
      seaScoutResources.forEach((resource: Resource) => {
        expect(() => new URL(resource.url)).not.toThrow()
      })
    })

    it('should contain Sea Scout Manual as primary resource', () => {
      const manual = seaScoutResources.find(r => r.title === 'Sea Scout Manual')
      expect(manual).toBeDefined()
      expect(manual?.isPrimary).toBe(true)
      expect(manual?.category).toBe('Essential')
    })
  })

  describe('shipFormationResources', () => {
    it('should be an array with ship formation resources', () => {
      expect(Array.isArray(shipFormationResources)).toBe(true)
      expect(shipFormationResources.length).toBeGreaterThan(0)
    })

    it('should have all resources with required fields', () => {
      shipFormationResources.forEach((resource: Resource) => {
        expect(resource).toHaveProperty('title')
        expect(resource).toHaveProperty('description')
        expect(resource).toHaveProperty('url')
        expect(typeof resource.title).toBe('string')
        expect(typeof resource.description).toBe('string')
        expect(resource.title).toBeTruthy()
      })
    })

    it('should contain ship starting guide', () => {
      const guide = shipFormationResources.find(r => r.title.includes('Starting'))
      expect(guide).toBeDefined()
      expect(guide?.isPrimary).toBe(true)
    })
  })

  describe('additionalResources', () => {
    it('should be an array with additional resources', () => {
      expect(Array.isArray(additionalResources)).toBe(true)
      expect(additionalResources.length).toBeGreaterThan(0)
    })

    it('should include Youth Protection Training as required', () => {
      const ypt = additionalResources.find(r => r.title.includes('Youth Protection'))
      expect(ypt).toBeDefined()
      expect(ypt?.category).toBe('Required')
      expect(ypt?.isPrimary).toBe(true)
    })
  })
})