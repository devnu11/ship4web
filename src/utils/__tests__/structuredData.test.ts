import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateEventSchema,
  generateEventsListSchema
} from '../structuredData';

// Mock the SITE_CONFIG
vi.mock('../../config/siteConfig', () => ({
  SITE_CONFIG: {
    shipName: "Test Sea Scout Ship 4",
    shipShortName: "Test Ship 4",
    motto: "Test Motto",
    email: "test@example.com",
    phone: "(555) 123-4567",
    meetingTime: "Test Meeting Time",
    meetingVenue: "Test Venue",
    meetingAddress: "123 Test St",
    city: "Test City",
    state: "TX",
    meetingLocation: "Test Venue, 123 Test St, Test City, TX",
    location: "Test City, TX",
    charterOrg: "Test Charter Org",
    brotherTroop: {
      name: "Test Troop 123",
      url: "https://testtroop.example.com"
    },
    parentOrg: {
      name: "Test Council",
      url: "https://testcouncil.example.com"
    },
    googleCalendarId: "test@google.com",
    googleSheetsId: "test123"
  }
}));

describe('Structured Data Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('generateOrganizationSchema', () => {
    it('generates valid organization schema', () => {
      const schema = generateOrganizationSchema();

      expect(schema).toEqual({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Test Sea Scout Ship 4",
        "alternateName": "Test Ship 4",
        "description": "Maritime adventure and leadership development for youth in Test City, TX",
        "url": "http://localhost:3000", // test environment provides localhost
        "logo": "http://localhost:3000/logo-social.png", // test environment provides localhost
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "test@example.com",
          "telephone": "(555) 123-4567",
          "contactType": "customer service"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Test City",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://testtroop.example.com",
          "https://testcouncil.example.com"
        ]
      });
    });

    it('has correct JSON-LD context', () => {
      const schema = generateOrganizationSchema();
      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("Organization");
    });

    it('includes all required organization fields', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema.name).toBe("Test Sea Scout Ship 4");
      expect(schema.alternateName).toBe("Test Ship 4");
      expect(schema.contactPoint.email).toBe("test@example.com");
      expect(schema.contactPoint.telephone).toBe("(555) 123-4567");
    });

    it('includes valid postal address', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema.address).toEqual({
        "@type": "PostalAddress",
        "addressLocality": "Test City",
        "addressRegion": "TX",
        "addressCountry": "US"
      });
    });

    it('includes sameAs URLs', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema.sameAs).toHaveLength(2);
      expect(schema.sameAs[0]).toBe("https://testtroop.example.com");
      expect(schema.sameAs[1]).toBe("https://testcouncil.example.com");
    });
  });

  describe('generateWebsiteSchema', () => {
    it('generates valid website schema', () => {
      const schema = generateWebsiteSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("WebSite");
      expect(schema.name).toBe("Test Sea Scout Ship 4");
      expect(schema.alternateName).toBe("Test Ship 4");
      expect(schema.url).toBe("http://localhost:3000");
    });

    it('has correct JSON-LD context', () => {
      const schema = generateWebsiteSchema();
      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("WebSite");
    });

    it('includes publisher information', () => {
      const schema = generateWebsiteSchema();
      
      expect(schema.publisher).toBeDefined();
      expect(schema.publisher["@type"]).toBe("Organization");
      expect(schema.publisher.name).toBe("Test Sea Scout Ship 4");
    });

    it('includes search action', () => {
      const schema = generateWebsiteSchema();
      
      expect(schema.potentialAction).toBeDefined();
      expect(schema.potentialAction["@type"]).toBe("SearchAction");
      expect(schema.potentialAction.target).toBeDefined();
    });
  });

  describe('generateEventSchema', () => {
    const mockEvent = {
      id: 'test-event-1',
      title: 'Test Event',
      description: 'A test event description',
      date: '2025-09-15',
      time: '7:00 PM',
      location: 'Test Location'
    };

    it('generates valid event schema', () => {
      const schema = generateEventSchema(mockEvent);

      expect(schema).toEqual({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Test Event",
        "description": "A test event description",
        "startDate": "2025-09-15T19:00:00",
        "location": {
          "@type": "Place",
          "name": "Test Location",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Test City",
            "addressRegion": "TX",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Test Sea Scout Ship 4",
          "url": "http://localhost:3000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      });
    });

    it('handles different time formats', () => {
      const eventWithMorningTime = {
        ...mockEvent,
        time: '9:00 AM'
      };
      
      const schema = generateEventSchema(eventWithMorningTime);
      expect(schema.startDate).toBe("2025-09-15T09:00:00");
    });

    it('handles TBD dates', () => {
      const eventWithTBD = {
        ...mockEvent,
        date: 'TBD',
        time: 'TBD'
      };
      
      const schema = generateEventSchema(eventWithTBD);
      expect(schema.startDate).toBe("TBDT00:00:00");
    });

    it('handles events without description', () => {
      const eventWithoutDescription = {
        ...mockEvent,
        description: undefined
      };
      
      const schema = generateEventSchema(eventWithoutDescription);
      expect(schema.description).toBeUndefined();
    });

    it('includes correct organizer information', () => {
      const schema = generateEventSchema(mockEvent);
      
      expect(schema.organizer).toEqual({
        "@type": "Organization",
        "name": "Test Sea Scout Ship 4",
        "url": "http://localhost:3000"
      });
    });

    it('includes correct location information', () => {
      const schema = generateEventSchema(mockEvent);
      
      expect(schema.location).toEqual({
        "@type": "Place",
        "name": "Test Location",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Test City",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      });
    });

    it('includes free event offer', () => {
      const schema = generateEventSchema(mockEvent);
      
      expect(schema.offers).toEqual({
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      });
    });
  });

  describe('generateEventsListSchema', () => {
    const mockEvents = [
      {
        id: 'event-1',
        title: 'Event One',
        description: 'First event',
        date: '2025-09-15',
        time: '7:00 PM',
        location: 'Location One'
      },
      {
        id: 'event-2',
        title: 'Event Two',
        description: 'Second event',
        date: '2025-09-20',
        time: '6:00 PM',
        location: 'Location Two'
      }
    ];

    it('generates valid events list schema', () => {
      const schema = generateEventsListSchema(mockEvents);

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("ItemList");
      expect(schema.name).toBe("Test Sea Scout Ship 4 Upcoming Events");
      expect(schema.numberOfItems).toBe(2);
      expect(schema.itemListElement).toHaveLength(2);
    });

    it('includes correct list items', () => {
      const schema = generateEventsListSchema(mockEvents);
      
      expect(schema.itemListElement[0]["@type"]).toBe("ListItem");
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[0].item.name).toBe("Event One");
      
      expect(schema.itemListElement[1]["@type"]).toBe("ListItem");
      expect(schema.itemListElement[1].position).toBe(2);
      expect(schema.itemListElement[1].item.name).toBe("Event Two");
    });

    it('handles empty events list', () => {
      const schema = generateEventsListSchema([]);
      
      expect(schema.numberOfItems).toBe(0);
      expect(schema.itemListElement).toHaveLength(0);
    });
  });

  describe('Edge cases and error handling', () => {
    it('handles missing config values gracefully', () => {
      vi.doMock('../../config/siteConfig', () => ({
        SITE_CONFIG: {
          shipName: "",
          shipShortName: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          location: "",
          brotherTroop: { url: "" },
          parentOrg: { url: "" }
        }
      }));

      expect(() => {
        generateOrganizationSchema();
        generateWebsiteSchema();
      }).not.toThrow();
    });

    it('validates required event fields', () => {
      const invalidEvent = {
        id: '',
        title: '',
        date: '',
        time: '',
        location: ''
      };

      const schema = generateEventSchema(invalidEvent);
      expect(schema.name).toBe('');
      expect(schema.startDate).toBe('T:00');
    });

    it('handles time conversion edge cases', () => {
      const noonEvent = {
        id: 'noon',
        title: 'Noon Event',
        date: '2025-09-15',
        time: '12:00 PM',
        location: 'Test'
      };

      const schema = generateEventSchema(noonEvent);
      expect(schema.startDate).toBe('2025-09-15T12:00:00');
    });

    it('handles midnight time conversion', () => {
      const midnightEvent = {
        id: 'midnight',
        title: 'Midnight Event',
        date: '2025-09-15',
        time: '12:00 AM',
        location: 'Test'
      };

      const schema = generateEventSchema(midnightEvent);
      expect(schema.startDate).toBe('2025-09-15T00:00:00');
    });
  });
});