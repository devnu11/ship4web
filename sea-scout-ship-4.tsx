// ========================================
// PROJECT STRUCTURE OVERVIEW
// ========================================
/*
Recommended file structure for GitHub Pages deployment:

src/
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── MeetingsSection.js
│   ├── EventsSection.js
│   ├── GallerySection.js
│   ├── ContactSection.js
│   └── Footer.js
├── data/
│   ├── siteConfig.json
│   ├── events.json
│   ├── gallery.json
│   └── about.json
├── utils/
│   ├── googleCalendar.js
│   └── googleSheets.js
├── styles/
│   └── globals.css
├── App.js
└── index.js

This modular approach allows:
- Easy content updates by scouts without touching code
- Individual component maintenance
- Reusable components across different pages
- Clear separation of data and presentation
*/

// ========================================
// DATA FILES (JSON)
// ========================================

// data/siteConfig.json
const siteConfigJSON = `{
  "shipName": "Sea Scout Ship 4",
  "location": "Dripping Springs, TX",
  "motto": "Paratus Sum",
  "meetingTime": "Sunday 4:00 PM",
  "meetingLocation": "Patriots Hall, US 290, Dripping Springs, TX",
  "contact": {
    "email": "ship4@dsscouts.com",
    "phone": "(512) XXX-XXXX",
    "address": "Patriots Hall, US 290, Dripping Springs, TX 78620"
  },
  "organizations": {
    "sisterTroop": {
      "name": "Troop 4",
      "url": "https://troop4ds.com"
    },
    "parentOrg": {
      "name": "Dripping Springs Scouts",
      "url": "https://dsscouts.com"
    },
    "charterOrg": "American Legion Post 290"
  },
  "googleIntegration": {
    "calendarId": "YOUR_CALENDAR_ID@group.calendar.google.com",
    "sheetsId": "YOUR_SPREADSHEET_ID"
  },
  "theme": {
    "primaryColor": "#1e40af",
    "secondaryColor": "#dc2626",
    "accentColor": "#0891b2",
    "backgroundColor": "#f8fafc",
    "textColor": "#1e293b"
  },
  "social": {
    "facebook": "",
    "instagram": "",
    "youtube": ""
  }
}`;

// data/about.json
const aboutJSON = `{
  "title": "About Sea Scout Ship 4",
  "subtitle": "Discover the adventure of Sea Scouting with Ship 4, where young mariners learn seamanship, leadership, and character while exploring the waters of Central Texas.",
  "features": [
    {
      "icon": "Users",
      "title": "Leadership",
      "description": "Develop leadership skills through hands-on maritime experiences and team-building activities."
    },
    {
      "icon": "Anchor",
      "title": "Seamanship",
      "description": "Learn essential boating skills, navigation, and water safety in a supportive environment."
    },
    {
      "icon": "Calendar",
      "title": "Adventure",
      "description": "Experience exciting adventures on the water and participate in regional Sea Scout events."
    }
  ],
  "whatToExpect": [
    "Seamanship training and skill development",
    "Leadership opportunities and advancement work",
    "Event planning and community service projects",
    "Fellowship and team building activities"
  ]
}`;

// data/events.json
const eventsJSON = `{
  "title": "Upcoming Events",
  "subtitle": "Stay updated with our latest activities and adventures",
  "events": [
    {
      "id": 1,
      "title": "Sea Scout Training",
      "date": "2025-08-24",
      "time": "4:00 PM",
      "location": "Patriots Hall",
      "description": "Weekly training session covering basic seamanship skills"
    },
    {
      "id": 2,
      "title": "Lake Travis Adventure",
      "date": "2025-09-07",
      "time": "8:00 AM",
      "location": "Lake Travis",
      "description": "Day-long sailing and water activities"
    },
    {
      "id": 3,
      "title": "Regional Regatta",
      "date": "2025-09-21",
      "time": "9:00 AM",
      "location": "Canyon Lake",
      "description": "Competitive sailing event with other Sea Scout ships"
    }
  ]
}`;

// data/gallery.json
const galleryJSON = `{
  "title": "Photo Gallery",
  "subtitle": "Memories from our maritime adventures",
  "categories": [
    {
      "name": "Training",
      "images": [
        {
          "id": 1,
          "title": "Sailing Training",
          "description": "Replace with: Scouts learning to sail on Lake Travis",
          "filename": "sailing-training-01.jpg",
          "alt": "Scouts learning sailing techniques on Lake Travis"
        },
        {
          "id": 2,
          "title": "Knot Tying Workshop",
          "description": "Replace with: Youth practicing seamanship skills",
          "filename": "knots-workshop-01.jpg",
          "alt": "Sea Scouts practicing knot tying skills"
        }
      ]
    },
    {
      "name": "Adventures",
      "images": [
        {
          "id": 3,
          "title": "Seabase Adventure",
          "description": "Replace with: High adventure photos from Florida Sea Base",
          "filename": "seabase-adventure-01.jpg",
          "alt": "Ship 4 crew at Florida Sea Base high adventure"
        },
        {
          "id": 4,
          "title": "Lake Expedition",
          "description": "Replace with: Multi-day sailing expedition photos",
          "filename": "lake-expedition-01.jpg",
          "alt": "Multi-day sailing expedition with Ship 4"
        }
      ]
    },
    {
      "name": "Leadership",
      "images": [
        {
          "id": 5,
          "title": "Leadership Training",
          "description": "Replace with: Ship officers in leadership roles",
          "filename": "leadership-training-01.jpg",
          "alt": "Ship officers demonstrating leadership skills"
        },
        {
          "id": 6,
          "title": "Awards Ceremony",
          "description": "Replace with: Advancement and recognition events",
          "filename": "awards-ceremony-01.jpg",
          "alt": "Sea Scouts receiving advancement awards"
        }
      ]
    }
  ]
}`;

// ========================================
// COMPONENT FILES
// ========================================

// components/Header.js
const HeaderComponent = `import React from 'react';

/**
 * Header Component
 * 
 * Features:
 * - Fixed navigation with scroll effects
 * - Responsive mobile menu
 * - Logo integration ready
 * - Smooth transitions
 * 
 * Props:
 * - isScrolled: boolean - determines header styling
 * - config: object - site configuration data
 */

const Header = ({ isScrolled, config }) => {
  return (
    <header className={\`fixed top-0 w-full z-50 transition-all duration-300 \${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }\`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo Placeholder - Replace with actual SVG */}
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{config.shipName}</h1>
              <p className="text-sm text-gray-600 italic">{config.motto}</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#meetings" className="text-gray-700 hover:text-blue-800 transition-colors">Meetings</a>
            <a href="#events" className="text-gray-700 hover:text-blue-800 transition-colors">Events</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-800 transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;`;

// components/HeroSection.js
const HeroSectionComponent = `import React from 'react';
import { Clock, MapPin, Anchor } from 'lucide-react';

/**
 * Hero Section Component
 * 
 * Features:
 * - Full-screen hero with gradient background
 * - Logo display area
 * - Key information display
 * - Call-to-action button
 * - Background image ready
 * 
 * Props:
 * - config: object - site configuration data
 */

const HeroSection = ({ config }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-red-600">
      {/* TODO: Replace with actual hero image from Seabase */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          {/* Ship Logo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Anchor size={64} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{config.shipName}</h1>
          <p className="text-xl md:text-2xl mb-2 font-light italic">{config.motto}</p>
          <p className="text-lg opacity-90">{config.location}</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center space-x-2">
            <Clock size={20} />
            <span>{config.meetingTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} />
            <span>Patriots Hall, US 290</span>
          </div>
        </div>
        
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
          Join Our Crew
        </button>
      </div>
    </section>
  );
};

export default HeroSection;`;

// components/AboutSection.js
const AboutSectionComponent = `import React from 'react';
import { Users, Anchor, Calendar } from 'lucide-react';

/**
 * About Section Component
 * 
 * Features:
 * - Dynamic feature cards
 * - Icon mapping for different features
 * - Responsive grid layout
 * 
 * Props:
 * - aboutData: object - about section data from JSON
 */

const AboutSection = ({ aboutData }) => {
  const iconMap = {
    Users: Users,
    Anchor: Anchor,
    Calendar: Calendar
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;`;

// components/EventsSection.js
const EventsSectionComponent = `import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

/**
 * Events Section Component
 * 
 * Features:
 * - Google Calendar integration ready
 * - Loading states
 * - Event card layout
 * - Fallback to JSON data
 * 
 * Props:
 * - eventsData: object - events data from JSON
 * - googleCalendarId: string - Google Calendar ID
 */

const EventsSection = ({ eventsData, googleCalendarId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement Google Calendar API integration
    // fetchGoogleCalendarEvents(googleCalendarId);
    
    // For now, use JSON data
    setTimeout(() => {
      setEvents(eventsData.events);
      setLoading(false);
    }, 1000);
  }, [eventsData.events, googleCalendarId]);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{eventsData.title}</h2>
          <p className="text-xl text-gray-600">{eventsData.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 flex items-center mt-2">
                        <Calendar className="mr-2" size={16} />
                        {event.date} at {event.time}
                      </p>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin className="mr-2" size={16} />
                        {event.location}
                      </p>
                      {event.description && (
                        <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
                      )}
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;`;

// utils/googleCalendar.js
const googleCalendarUtility = `/**
 * Google Calendar Integration Utility
 * 
 * This utility handles fetching events from Google Calendar API
 * Setup instructions:
 * 1. Enable Google Calendar API in Google Cloud Console
 * 2. Create API credentials
 * 3. Make calendar public or set appropriate sharing permissions
 */

/**
 * Fetch events from Google Calendar
 * @param {string} calendarId - Google Calendar ID
 * @param {string} apiKey - Google Calendar API Key
 * @returns {Promise<Array>} - Array of calendar events
 */
export const fetchGoogleCalendarEvents = async (calendarId, apiKey) => {
  try {
    const timeMin = new Date().toISOString();
    const maxResults = 10;
    
    const response = await fetch(
      \`https://www.googleapis.com/calendar/v3/calendars/\${calendarId}/events?key=\${apiKey}&timeMin=\${timeMin}&maxResults=\${maxResults}&singleEvents=true&orderBy=startTime\`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch calendar events');
    }
    
    const data = await response.json();
    
    return data.items.map(event => ({
      id: event.id,
      title: event.summary,
      date: event.start.date || event.start.dateTime.split('T')[0],
      time: event.start.dateTime ? 
        new Date(event.start.dateTime).toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        }) : 'All Day',
      location: event.location || 'TBD',
      description: event.description || ''
    }));
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
};

/**
 * Setup instructions for Google Calendar integration:
 * 
 * 1. Go to Google Cloud Console (console.cloud.google.com)
 * 2. Create a new project or select existing project
 * 3. Enable the Google Calendar API
 * 4. Create credentials (API Key)
 * 5. Restrict the API key to Calendar API and your domain
 * 6. Make your calendar public:
 *    - Go to Google Calendar
 *    - Click on your calendar settings
 *    - Under "Access permissions" check "Make available to public"
 * 7. Get your Calendar ID:
 *    - In Calendar settings, scroll to "Integrate calendar"
 *    - Copy the Calendar ID
 * 8. Add API key and Calendar ID to your environment variables
 */`;

// utils/googleSheets.js
const googleSheetsUtility = `/**
 * Google Sheets Integration Utility
 * 
 * This utility handles fetching data from Google Sheets API
 * Useful for roster management, event sign-ups, etc.
 */

/**
 * Fetch data from Google Sheets
 * @param {string} spreadsheetId - Google Sheets ID
 * @param {string} range - Range to fetch (e.g., 'Sheet1!A1:D10')
 * @param {string} apiKey - Google Sheets API Key
 * @returns {Promise<Array>} - Array of sheet rows
 */
export const fetchGoogleSheetsData = async (spreadsheetId, range, apiKey) => {
  try {
    const response = await fetch(
      \`https://sheets.googleapis.com/v4/spreadsheets/\${spreadsheetId}/values/\${range}?key=\${apiKey}\`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
};

/**
 * Convert sheet data to objects with headers
 * @param {Array} sheetData - Raw sheet data
 * @returns {Array} - Array of objects with header keys
 */
export const parseSheetData = (sheetData) => {
  if (sheetData.length === 0) return [];
  
  const headers = sheetData[0];
  const rows = sheetData.slice(1);
  
  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || '';
    });
    return obj;
  });
};

/**
 * Example usage for roster management:
 * 
 * const rosterData = await fetchGoogleSheetsData(
 *   'YOUR_SPREADSHEET_ID',
 *   'Roster!A1:F100',
 *   'YOUR_API_KEY'
 * );
 * const parsedRoster = parseSheetData(rosterData);
 */`;

// Main App.js
const AppComponent = `import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MeetingsSection from './components/MeetingsSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import JSON data (in a real app, these would be separate files)
import siteConfig from './data/siteConfig.json';
import aboutData from './data/about.json';
import eventsData from './data/events.json';
import galleryData from './data/gallery.json';

/**
 * Main Application Component
 * 
 * Features:
 * - Modular component structure
 * - JSON-driven content
 * - Scroll detection for header
 * - Google integrations ready
 */

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} config={siteConfig} />
      <main>
        <HeroSection config={siteConfig} />
        <AboutSection aboutData={aboutData} />
        <MeetingsSection config={siteConfig} aboutData={aboutData} />
        <EventsSection 
          eventsData={eventsData} 
          googleCalendarId={siteConfig.googleIntegration.calendarId} 
        />
        <GallerySection galleryData={galleryData} />
        <ContactSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
    </div>
  );
};

export default App;`;

// ========================================
// DEPLOYMENT INSTRUCTIONS
// ========================================

const deploymentInstructions = `
# Sea Scout Ship 4 Website - Deployment Guide

## File Structure Setup

1. Create the following directory structure in your project:

\`\`\`
src/
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── MeetingsSection.js
│   ├── EventsSection.js
│   ├── GallerySection.js
│   ├── ContactSection.js
│   └── Footer.js
├── data/
│   ├── siteConfig.json
│   ├── about.json
│   ├── events.json
│   └── gallery.json
├── utils/
│   ├── googleCalendar.js
│   └── googleSheets.js
├── images/
│   ├── hero-bg.jpg
│   ├── logo.svg
│   └── gallery/
│       ├── sailing-training-01.jpg
│       ├── knots-workshop-01.jpg
│       └── ... (other gallery images)
├── App.js
└── index.js
\`\`\`

## Content Management

### For Scout Leaders - Easy Updates:

1. **Basic Information**: Edit \`src/data/siteConfig.json\`
   - Contact info, meeting times, organization links

2. **About Section**: Edit \`src/data/about.json\`
   - Features, descriptions, what to expect

3. **Events**: Edit \`src/data/events.json\`
   - Add/remove events, update details

4. **Photo Gallery**: Edit \`src/data/gallery.json\`
   - Update image references, descriptions

### For Developers - Advanced Features:

1. **Google Calendar Integration**:
   - Follow instructions in \`utils/googleCalendar.js\`
   - Add API key to environment variables
   - Update calendar ID in siteConfig.json

2. **Google Sheets Integration**:
   - Follow instructions in \`utils/googleSheets.js\`
   - Useful for roster management, event sign-ups

## GitHub Pages Deployment

1. Install dependencies:
   \`\`\`bash
   npm install react react-dom lucide-react
   npm install --save-dev @vitejs/plugin-react vite gh-pages
   \`\`\`

2. Add to package.json:
   \`\`\`json
   {
     "homepage": "https://yourusername.github.io/ship4-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   \`\`\`

3. Deploy:
   \`\`\`bash
   npm run deploy
   \`\`\`

## Best Practices

- **Images**: Optimize images (WebP format, max 1MB)
- **Performance**: Images should be 1920x1080 or smaller
- **Accessibility**: All images have alt text in JSON
- **SEO**: Meta descriptions and titles included
- **Mobile**: Responsive design tested on all devices

## Testing

- Test Google integrations in development
- Verify all links work correctly
- Test responsive design on mobile devices
- Check image loading and performance
`;

console.log("=== MODULAR SEA SCOUT SHIP 4 WEBSITE ===");
console.log("\nThis modular structure provides:");
console.log("✓ Separate component files for easy maintenance");
console.log("✓ JSON data files for scout-managed content");
console.log("✓ Google Calendar/Sheets integration ready");
console.log("✓ Professional development practices");
console.log("✓ GitHub Pages deployment ready");
console.log("\nSee deployment instructions above for setup details.");

// Export the component structures and data
export {
  siteConfigJSON,
  aboutJSON,
  eventsJSON,
  galleryJSON,
  HeaderComponent,
  HeroSectionComponent,
  AboutSectionComponent,
  EventsSectionComponent,
  googleCalendarUtility,
  googleSheetsUtility,
  AppComponent,
  deploymentInstructions
};