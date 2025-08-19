import { describe, it, expect } from 'vitest'
import { galleryImages, type GalleryImage } from '../galleryImages'

describe('Gallery Images', () => {
  it('should be an array', () => {
    expect(Array.isArray(galleryImages)).toBe(true)
  })

  it('should contain at least one image', () => {
    expect(galleryImages.length).toBeGreaterThan(0)
  })

  it('should have all images with required fields', () => {
    galleryImages.forEach((image: GalleryImage) => {
      expect(image).toHaveProperty('src')
      expect(image).toHaveProperty('title')
      expect(image).toHaveProperty('alt')
      
      expect(typeof image.src).toBe('string')
      expect(typeof image.title).toBe('string')
      expect(typeof image.alt).toBe('string')
      expect(image.src).toBeTruthy()
      expect(image.title).toBeTruthy()
      expect(image.alt).toBeTruthy()
    })
  })

  it('should have valid image file extensions', () => {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg']
    galleryImages.forEach((image: GalleryImage) => {
      const hasValidExtension = validExtensions.some(ext => 
        image.src.toLowerCase().endsWith(ext)
      )
      expect(hasValidExtension).toBe(true)
    })
  })

  it('should have descriptive alt text', () => {
    galleryImages.forEach((image: GalleryImage) => {
      expect(image.alt.length).toBeGreaterThan(10)
      expect(image.alt).not.toBe(image.title)
    })
  })

  it('should contain helm image', () => {
    const helmImage = galleryImages.find(img => img.src.includes('helm'))
    expect(helmImage).toBeDefined()
    expect(helmImage?.title).toBe('At the Helm')
  })

  it('should contain sunset image', () => {
    const sunsetImage = galleryImages.find(img => img.src.includes('sunset'))
    expect(sunsetImage).toBeDefined()
    expect(sunsetImage?.title).toBe('Red Sky at Night')
  })

  it('should have unique titles', () => {
    const titles = galleryImages.map(img => img.title)
    const uniqueTitles = new Set(titles)
    expect(uniqueTitles.size).toBe(titles.length)
  })

  it('should have unique src paths', () => {
    const srcs = galleryImages.map(img => img.src)
    const uniqueSrcs = new Set(srcs)
    expect(uniqueSrcs.size).toBe(srcs.length)
  })
})