/**
 * Utilities for generating JSON-LD structured data
 * Used for SEO optimization and rich snippets in search results
 */
import { SITE_CONFIG } from '../config/siteConfig';
import type { Event } from '../types';

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_CONFIG.shipName,
  "alternateName": SITE_CONFIG.shipShortName,
  "description": `Maritime adventure and leadership development for youth in ${SITE_CONFIG.location}`,
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo-social.png` : '',
  "contactPoint": {
    "@type": "ContactPoint",
    "email": SITE_CONFIG.email,
    "telephone": SITE_CONFIG.phone,
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.city,
    "addressRegion": SITE_CONFIG.state,
    "addressCountry": "US"
  },
  "sameAs": [
    SITE_CONFIG.brotherTroop.url,
    SITE_CONFIG.parentOrg.url
  ]
});

export const generateEventSchema = (event: Event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "startDate": `${event.date}T${convertTo24Hour(event.time)}`,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.city,
      "addressRegion": SITE_CONFIG.state,
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": SITE_CONFIG.shipName,
    "url": typeof window !== 'undefined' ? window.location.origin : ''
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

export const generateEventsListSchema = (events: Event[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${SITE_CONFIG.shipName} Upcoming Events`,
  "description": `Maritime events and activities hosted by ${SITE_CONFIG.shipName}`,
  "numberOfItems": events.length,
  "itemListElement": events.map((event, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": generateEventSchema(event)
  }))
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.shipName,
  "alternateName": SITE_CONFIG.shipShortName,
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "description": `Official website for ${SITE_CONFIG.shipName}, providing maritime adventure and leadership development for youth in ${SITE_CONFIG.location}`,
  "publisher": generateOrganizationSchema(),
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": typeof window !== 'undefined' ? `${window.location.origin}/?q={search_term_string}` : ''
    },
    "query-input": "required name=search_term_string"
  }
});

// Helper function to convert 12-hour to 24-hour format
function convertTo24Hour(time: string): string {
  if (time.toUpperCase() === 'TBD') return '00:00:00';
  
  const [timePart, period] = time.split(' ');
  if (!period) return `${timePart}:00`; // Already 24-hour format
  
  const [hours, minutes] = timePart.split(':');
  let hour24 = parseInt(hours);
  
  if (period.toUpperCase() === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period.toUpperCase() === 'AM' && hour24 === 12) {
    hour24 = 0;
  }
  
  return `${hour24.toString().padStart(2, '0')}:${minutes || '00'}:00`;
}