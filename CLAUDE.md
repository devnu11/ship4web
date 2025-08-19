# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sea Scout Ship 4 website built as a single React TSX component (`sea-scout-ship-4.tsx`). It's designed for Sea Scout Ship 4 in Dripping Springs, TX and features a modern, responsive design with planned Google Calendar and Google Sheets integration.

## Architecture

- **Single Component Structure**: The entire website is built as one React component with modular sub-components
- **Configuration-Driven**: Uses a `SITE_CONFIG` object at the top of the file for easy management of ship information, contact details, and integration settings
- **Component Breakdown**:
  - `Header`: Fixed navigation with scroll effects
  - `HeroSection`: Landing section with ship branding
  - `AboutSection`: Information about Sea Scouting activities
  - `MeetingsSection`: Meeting time and location details
  - `EventsSection`: Calendar integration ready (currently mock data)
  - `GallerySection`: Photo placeholders with guidance for scout leaders
  - `ContactSection`: Contact information and related organizations
  - `Footer`: Site footer with branding

## Key Features & Integration Points

- **Google Calendar Integration**: Ready for implementation via `SITE_CONFIG.googleCalendarId`
- **Google Sheets Integration**: Prepared for data integration via `SITE_CONFIG.googleSheetsId`
- **Responsive Design**: Mobile-first approach with Tailwind CSS classes
- **Accessibility**: Proper ARIA labels and semantic HTML structure

## Configuration Management

All site-specific information is centralized in the `SITE_CONFIG` object (lines 18-53):
- Ship information (name, motto, meeting details)
- Contact information (marked with TODO for actual values)
- Related organizations and links
- Google integration IDs (marked with TODO)
- Color palette suggestions

## TODO Items for Development

The codebase contains several TODO comments indicating areas needing actual data:
- Replace placeholder email and phone numbers
- Add actual Google Calendar and Sheets IDs
- Replace hero background with actual Seabase photos
- Replace gallery placeholders with real Ship 4 photos
- Implement actual Google Calendar API integration

## Development Notes

- Uses React hooks (useState, useEffect) for state management
- Styled with Tailwind CSS utility classes and centralized CSS classes in `src/index.css`
- Uses Lucide React icons for UI elements
- Mock data implementation in EventsSection shows expected data structure for Google Calendar integration

## Content Guidelines

- Image placeholders include specific guidance for scout leaders about recommended content
- Color scheme follows maritime/scout themes (navy blue, red, sea blue)
- Content structure supports SEO optimization
- Modular design allows easy updates to individual sections

## Git Commit Guidelines

Follow these conventions for all commits:

**Subject Line:**
- Use imperative mood (e.g., "Add feature" not "Added feature")
- Capitalize the first letter
- 50 character soft limit
- No period at the end

**Message Format:**
- Separate subject from body with a blank line
- Body lines soft limit at 72 characters (don't wrap URLs)
- Use body to explain "what" and "why", not "how"
- Include Claude Code attribution

**Example:**
```
Add user authentication system

Implement JWT-based authentication to secure admin routes.
Users can now log in with email/password and access protected
areas of the application.

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Coding Guidelines

**SOLID Principles:**
- **Single Responsibility**: Each component/function should have one clear purpose
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable for their base types
- **Interface Segregation**: Clients shouldn't depend on interfaces they don't use
- **Dependency Inversion**: Depend on abstractions, not concretions

**Code Organization:**
- Separate data from business logic
- Extract constants and configuration to dedicated files (like `SITE_CONFIG`)
- Use custom hooks for reusable logic
- Keep components focused and composable
- Prefer composition over inheritance

**Testing Requirements:**
- Write unit tests for all new code
- Maintain 90%+ code coverage, with a 100% pass rate
- Test both happy paths and edge cases
- Do negative testing as well.  Meeting coverage alone is not enough. 
- Any coverage gaps should be examined for other potential testing gaps.  
- Touch testing to achieve coverage is worse than not testing at all.
- Mock external dependencies
- Use descriptive test names that explain behavior

**Data Management:**
- Keep data separate from UI components
- Use TypeScript interfaces for data structures
- Validate data at boundaries (API responses, user input)
- Use constants for magic numbers and strings

## Development Workflow

**Before Committing:**
- Run `npx tsc --noEmit` to check for TypeScript errors
- Run `npm run build` to verify production build works
- Run tests and verify 90%+ coverage and pass rate is maintained
- Fix any TypeScript warnings or build errors

**Development Commands:**
- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npx tsc --noEmit` - TypeScript type checking without compilation
- `npm test` - Run unit tests (when test framework is added)
- `npm run test:coverage` - Check test coverage (when available)

## Deployment

- Push to `main` branch on GitHub triggers automatic deployment
- All Pre-commit testing and correction must be done.
- Use `npm run dev` for local development server