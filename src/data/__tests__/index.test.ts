import { describe, it, expect } from 'vitest'
import * as dataExports from '../index'

describe('Data Index Exports', () => {
  it('should export seaScoutResources', () => {
    expect(dataExports.seaScoutResources).toBeDefined()
    expect(Array.isArray(dataExports.seaScoutResources)).toBe(true)
  })

  it('should export shipFormationResources', () => {
    expect(dataExports.shipFormationResources).toBeDefined()
    expect(Array.isArray(dataExports.shipFormationResources)).toBe(true)
  })

  it('should export additionalResources', () => {
    expect(dataExports.additionalResources).toBeDefined()
    expect(Array.isArray(dataExports.additionalResources)).toBe(true)
  })

  it('should export trainingPrograms', () => {
    expect(dataExports.trainingPrograms).toBeDefined()
    expect(Array.isArray(dataExports.trainingPrograms)).toBe(true)
  })

  it('should export galleryImages', () => {
    expect(dataExports.galleryImages).toBeDefined()
    expect(Array.isArray(dataExports.galleryImages)).toBe(true)
  })

  it('should export upcomingEvents', () => {
    expect(dataExports.upcomingEvents).toBeDefined()
    expect(Array.isArray(dataExports.upcomingEvents)).toBe(true)
  })

  it('should export Resource type', () => {
    // TypeScript types are compile-time only, but we can verify the data structure
    expect(dataExports.seaScoutResources[0]).toHaveProperty('title')
    expect(dataExports.seaScoutResources[0]).toHaveProperty('description')
    expect(dataExports.seaScoutResources[0]).toHaveProperty('url')
  })

  it('should export TrainingProgram type structure', () => {
    expect(dataExports.trainingPrograms[0]).toHaveProperty('title')
    expect(dataExports.trainingPrograms[0]).toHaveProperty('description')
    expect(dataExports.trainingPrograms[0]).toHaveProperty('topics')
  })

  it('should export GalleryImage type structure', () => {
    expect(dataExports.galleryImages[0]).toHaveProperty('src')
    expect(dataExports.galleryImages[0]).toHaveProperty('title')
    expect(dataExports.galleryImages[0]).toHaveProperty('alt')
  })

  it('should have all exports accessible', () => {
    const expectedExports = [
      'seaScoutResources',
      'shipFormationResources', 
      'additionalResources',
      'trainingPrograms',
      'galleryImages',
      'upcomingEvents'
    ]

    expectedExports.forEach(exportName => {
      expect(dataExports).toHaveProperty(exportName)
      expect(dataExports[exportName as keyof typeof dataExports]).toBeDefined()
    })
  })
})