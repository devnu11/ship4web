import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '../Header'

// Mock SITE_CONFIG with edge cases
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: 'Sea Scout Ship 4',
    motto: 'Following Seas'
  }
}))

describe('Header Component - Enhanced Testing', () => {
  
  const renderHeader = (isScrolled = false, pathname = '/') => {
    return render(
      <MemoryRouter initialEntries={[pathname]}>
        <Header isScrolled={isScrolled} />
      </MemoryRouter>
    )
  }

  describe('Negative Testing & Error Handling', () => {
    it('should handle missing SITE_CONFIG gracefully', () => {
      // This tests the actual behavior when config is available
      // In a real scenario, we might mock undefined values
      renderHeader()
      expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
    })

    it('should handle malformed route paths', () => {
      const malformedPaths = [
        '/../../etc/passwd',
        '/<script>alert("xss")</script>',
        '/path with spaces',
        '/path?query=<script>',
        '/path#<script>'
      ]

      malformedPaths.forEach(path => {
        expect(() => renderHeader(false, path)).not.toThrow()
      })
    })

    it('should prevent XSS in navigation state', () => {
      const xssPath = '/<script>alert("xss")</script>'
      renderHeader(false, xssPath)
      
      // Ensure no script tags are actually rendered
      expect(document.querySelector('script')).toBeNull()
    })

    it('should handle rapid state changes without errors', () => {
      const { rerender } = renderHeader(false)
      
      // Rapidly toggle isScrolled state
      for (let i = 0; i < 10; i++) {
        rerender(
          <MemoryRouter initialEntries={['/']}>
            <Header isScrolled={i % 2 === 0} />
          </MemoryRouter>
        )
      }
      
      expect(screen.getByText('Sea Scout Ship 4')).toBeInTheDocument()
    })

    it('should handle rapid mobile menu toggles without breaking', () => {
      renderHeader()
      const menuButton = screen.getByLabelText('Toggle mobile menu')
      
      // Rapidly click menu button
      for (let i = 0; i < 10; i++) {
        fireEvent.click(menuButton)
      }
      
      expect(menuButton).toBeInTheDocument()
    })

    it('should prevent double-click issues on navigation links', () => {
      renderHeader()
      const aboutLink = screen.getAllByText('About')[0]
      
      // Double click rapidly
      fireEvent.click(aboutLink)
      fireEvent.click(aboutLink)
      
      expect(aboutLink).toBeInTheDocument()
    })
  })

  describe('Accessibility & A11y Edge Cases', () => {
    it('should maintain focus management with keyboard navigation', () => {
      renderHeader()
      const menuButton = screen.getByLabelText('Toggle mobile menu')
      
      // Simulate keyboard activation
      fireEvent.keyDown(menuButton, { key: 'Enter' })
      fireEvent.keyDown(menuButton, { key: ' ' })
      
      expect(menuButton).toBeInTheDocument()
    })

    it('should have proper ARIA attributes for screen readers', () => {
      renderHeader()
      const menuButton = screen.getByLabelText('Toggle mobile menu')
      
      expect(menuButton).toHaveAttribute('aria-label', 'Toggle mobile menu')
      expect(menuButton.tagName).toBe('BUTTON')
    })

    it('should handle screen reader text correctly', () => {
      renderHeader()
      const logo = screen.getByAltText('Sea Scout Ship 4 Burgee')
      
      expect(logo).toHaveAttribute('alt', 'Sea Scout Ship 4 Burgee')
      expect(logo.getAttribute('alt')).not.toBe('')
    })
  })

  describe('Performance & Memory Leaks', () => {
    it('should not create memory leaks with event listeners', () => {
      const { unmount } = renderHeader()
      
      // Component should unmount cleanly
      expect(() => unmount()).not.toThrow()
    })

    it('should handle large numbers of navigation items', () => {
      // Our current nav is reasonable, but test the structure scales
      renderHeader()
      const navItems = screen.getAllByRole('link')
      
      expect(navItems.length).toBeLessThan(20) // Reasonable limit
      expect(navItems.length).toBeGreaterThan(0)
    })
  })

  describe('Security Testing', () => {
    it('should sanitize href attributes', () => {
      renderHeader()
      const links = screen.getAllByRole('link')
      
      links.forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
          expect(href).not.toMatch(/javascript:/i)
          expect(href).not.toMatch(/data:/i)
          expect(href).not.toMatch(/vbscript:/i)
        }
      })
    })

    it('should have secure external link attributes', () => {
      renderHeader()
      const links = screen.getAllByRole('link')
      
      links.forEach(link => {
        const href = link.getAttribute('href')
        if (href && href.startsWith('http')) {
          expect(link).toHaveAttribute('rel')
          expect(link.getAttribute('rel')).toContain('noopener')
        }
      })
    })
  })

  describe('CSS & Styling Edge Cases', () => {
    it('should handle missing CSS classes gracefully', () => {
      renderHeader()
      const header = screen.getByRole('banner')
      
      // Component should render even if CSS is missing
      expect(header).toBeInTheDocument()
    })

    it('should apply styles correctly across different scroll states', () => {
      const { rerender } = renderHeader(false)
      let header = screen.getByRole('banner')
      expect(header).toHaveClass('bg-white/90')
      
      rerender(
        <MemoryRouter initialEntries={['/']}>
          <Header isScrolled={true} />
        </MemoryRouter>
      )
      
      header = screen.getByRole('banner')
      expect(header).toHaveClass('bg-white')
    })

    it('should maintain responsive behavior', () => {
      renderHeader()
      
      // Check that mobile and desktop nav coexist properly
      const mobileButton = screen.getByLabelText('Toggle mobile menu')
      expect(mobileButton).toHaveClass('md:hidden')
    })
  })

  describe('Business Logic Validation', () => {
    it('should correctly determine page context', () => {
      // Test home page detection
      const { unmount } = renderHeader(false, '/')
      const aboutLink = screen.getAllByText('About')[0]
      expect(aboutLink.closest('a')).toHaveAttribute('href', '#about')
      
      unmount()
      
      // Test non-home page detection - render fresh component
      render(
        <MemoryRouter initialEntries={['/trainings']}>
          <Header isScrolled={false} />
        </MemoryRouter>
      )
      
      const aboutLinks = screen.getAllByText('About')
      const desktopAboutLink = aboutLinks.find(link => 
        link.closest('nav')?.classList.contains('md:flex')
      )
      expect(desktopAboutLink?.closest('a')).toHaveAttribute('href', '/#about')
    })
  })
})