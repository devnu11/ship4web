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

- No build system or package.json detected - this appears to be a standalone TSX component
- Uses React hooks (useState, useEffect) for state management
- Styled with Tailwind CSS utility classes
- Uses Lucide React icons for UI elements
- Mock data implementation in EventsSection shows expected data structure for Google Calendar integration

## Content Guidelines

- Image placeholders include specific guidance for scout leaders about recommended content
- Color scheme follows maritime/scout themes (navy blue, red, sea blue)
- Content structure supports SEO optimization
- Modular design allows easy updates to individual sections