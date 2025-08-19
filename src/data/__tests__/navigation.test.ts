import { describe, it, expect } from 'vitest'
import { navigationItems, type NavigationItem } from '../navigation'

describe('Navigation Data', () => {
  it('exports navigationItems array', () => {
    expect(navigationItems).toBeDefined()
    expect(Array.isArray(navigationItems)).toBe(true)
    expect(navigationItems.length).toBeGreaterThan(0)
  })

  it('has proper structure for each navigation item', () => {
    navigationItems.forEach((item: NavigationItem) => {
      expect(item).toHaveProperty('label')
      expect(item).toHaveProperty('path')
      expect(typeof item.label).toBe('string')
      expect(typeof item.path).toBe('string')
      expect(item.label.length).toBeGreaterThan(0)
      expect(item.path.length).toBeGreaterThan(0)
    })
  })

  it('has valid path formats', () => {
    navigationItems.forEach((item: NavigationItem) => {
      // Path should either start with # (anchor) or / (route)
      expect(item.path.startsWith('#') || item.path.startsWith('/')).toBe(true)
    })
  })

  it('has unique labels', () => {
    const labels = navigationItems.map(item => item.label)
    const uniqueLabels = new Set(labels)
    expect(uniqueLabels.size).toBe(labels.length)
  })

  it('has unique paths', () => {
    const paths = navigationItems.map(item => item.path)
    const uniquePaths = new Set(paths)
    expect(uniquePaths.size).toBe(paths.length)
  })

  it('includes expected core navigation items', () => {
    const labels = navigationItems.map(item => item.label)
    const expectedItems = ['About', 'Events', 'Contact']
    
    expectedItems.forEach(expected => {
      expect(labels).toContain(expected)
    })
  })

  it('has reasonable number of navigation items for UX', () => {
    expect(navigationItems.length).toBeLessThanOrEqual(10)
    expect(navigationItems.length).toBeGreaterThanOrEqual(3)
  })

  it('has consistent label casing', () => {
    navigationItems.forEach((item: NavigationItem) => {
      // Labels should be title case (first letter uppercase)
      expect(item.label[0]).toBe(item.label[0].toUpperCase())
    })
  })

  it('has valid anchor paths for sections', () => {
    const anchorItems = navigationItems.filter(item => item.path.startsWith('#'))
    
    anchorItems.forEach(item => {
      // Anchor should be lowercase with no spaces
      const anchor = item.path.substring(1)
      expect(anchor).toMatch(/^[a-z]+$/)
    })
  })

  it('has valid route paths', () => {
    const routeItems = navigationItems.filter(item => item.path.startsWith('/'))
    
    routeItems.forEach(item => {
      // Routes should be lowercase and valid URL paths
      expect(item.path).toMatch(/^\/[a-z]+$/)
    })
  })
})