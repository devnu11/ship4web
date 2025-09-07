import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchScoutingEvents } from '../scoutingCalendar';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('scoutingCalendar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('fetchScoutingEvents', () => {
    it('should fetch and parse ICS calendar data successfully', async () => {
      const mockICSData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
UID:test-event-1@scouting.org
DTSTART:20250915T140000Z
DTEND:20250915T170000Z
SUMMARY:Ship Meeting
LOCATION:Patriots Hall, 8225 Hamilton Pool Rd, Austin, TX
DESCRIPTION:Regular ship meeting with advancement opportunities
URL:https://example.com/event
END:VEVENT
END:VCALENDAR`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockICSData)
      });

      const events = await fetchScoutingEvents();

      expect(mockFetch).toHaveBeenCalledWith('/api/scouting/advancements/events/calendar/244774');
      expect(events).toHaveLength(1);
      expect(events[0]).toMatchObject({
        title: 'Ship Meeting',
        date: '2025-09-15',
        time: '2:00 PM-5:00 PM',
        location: 'Patriots Hall, 8225 Hamilton Pool Rd, Austin, TX',
        description: 'Regular ship meeting with advancement opportunities',
        url: 'https://example.com/event'
      });
    });

    it('should handle fetch errors gracefully', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const events = await fetchScoutingEvents();

      expect(events).toEqual([]);
    });

    it('should handle HTTP errors gracefully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404
      });

      const events = await fetchScoutingEvents();

      expect(events).toEqual([]);
    });

    it('should filter out past events', async () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const mockICSData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
UID:past-event@scouting.org
DTSTART:${yesterday.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${yesterday.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Past Event
LOCATION:Some Location
END:VEVENT
BEGIN:VEVENT
UID:future-event@scouting.org
DTSTART:${tomorrow.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${tomorrow.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Future Event
LOCATION:Some Location
END:VEVENT
END:VCALENDAR`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockICSData)
      });

      const events = await fetchScoutingEvents();

      expect(events).toHaveLength(1);
      expect(events[0].title).toBe('Future Event');
    });

    it('should parse multi-line descriptions correctly', async () => {
      const mockICSData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
UID:test-event@scouting.org
DTSTART:20251201T140000Z
DTEND:20251201T170000Z
SUMMARY:Complex Event
LOCATION:Test Location
DESCRIPTION:This is a multi-line\\ndescription with\\nspecial characters\\, like commas\\; and semicolons.
END:VEVENT
END:VCALENDAR`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockICSData)
      });

      const events = await fetchScoutingEvents();

      expect(events[0].description).toBe('This is a multi-line description with special characters, like commas; and semicolons.');
    });

    it('should handle events without optional fields', async () => {
      const mockICSData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
UID:minimal-event@scouting.org
DTSTART:20251201T140000Z
DTEND:20251201T140000Z
SUMMARY:Minimal Event
END:VEVENT
END:VCALENDAR`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockICSData)
      });

      const events = await fetchScoutingEvents();

      expect(events).toHaveLength(1);
      expect(events[0]).toMatchObject({
        title: 'Minimal Event',
        location: '',
        description: undefined,
        url: undefined
      });
    });

    it('should sort events by date', async () => {
      const mockICSData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
UID:event-2@scouting.org
DTSTART:20251215T140000Z
DTEND:20251215T170000Z
SUMMARY:December Event
LOCATION:Test Location
END:VEVENT
BEGIN:VEVENT
UID:event-1@scouting.org
DTSTART:20251201T140000Z
DTEND:20251201T170000Z
SUMMARY:November Event
LOCATION:Test Location
END:VEVENT
END:VCALENDAR`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockICSData)
      });

      const events = await fetchScoutingEvents();

      expect(events).toHaveLength(2);
      expect(events[0].title).toBe('November Event');
      expect(events[1].title).toBe('December Event');
    });
  });
});