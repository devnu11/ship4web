import type { Event } from '../types';

interface ICSEvent {
  uid: string;
  summary: string;
  dtstart: string;
  dtend: string;
  location?: string;
  description?: string;
  url?: string;
}

/**
 * Parse ICS date format (YYYYMMDDTHHMMSSZ) to readable date and time
 */
function parseICSDate(icsDate: string): { date: string; time: string } {
  const year = icsDate.substring(0, 4);
  const month = icsDate.substring(4, 6);
  const day = icsDate.substring(6, 8);
  const hour = icsDate.substring(9, 11);
  const minute = icsDate.substring(11, 13);
  
  const date = `${year}-${month}-${day}`;
  
  // Convert to 12-hour format
  const hourNum = parseInt(hour, 10);
  const ampm = hourNum >= 12 ? 'PM' : 'AM';
  const displayHour = hourNum === 0 ? 12 : hourNum > 12 ? hourNum - 12 : hourNum;
  const time = `${displayHour}:${minute} ${ampm}`;
  
  return { date, time };
}

/**
 * Parse ICS format calendar data into structured events
 */
function parseICSData(icsData: string): ICSEvent[] {
  const events: ICSEvent[] = [];
  const lines = icsData.split(/\r\n|\n|\r/);
  let currentEvent: Partial<ICSEvent> | null = null;
  let isInEvent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      isInEvent = true;
      currentEvent = {};
      continue;
    }
    
    if (line === 'END:VEVENT' && isInEvent && currentEvent) {
      if (currentEvent.uid && currentEvent.summary && currentEvent.dtstart) {
        events.push(currentEvent as ICSEvent);
      }
      currentEvent = null;
      isInEvent = false;
      continue;
    }
    
    if (!isInEvent || !currentEvent) continue;
    
    // Handle multi-line properties
    let fullLine = line;
    while (i + 1 < lines.length && lines[i + 1].startsWith(' ')) {
      i++;
      fullLine += lines[i].substring(1); // Remove leading space
    }
    
    const colonIndex = fullLine.indexOf(':');
    if (colonIndex === -1) continue;
    
    const property = fullLine.substring(0, colonIndex);
    const value = fullLine.substring(colonIndex + 1);
    
    switch (property) {
      case 'UID':
        currentEvent.uid = value;
        break;
      case 'SUMMARY':
        currentEvent.summary = value;
        break;
      case 'DTSTART':
        currentEvent.dtstart = value;
        break;
      case 'DTEND':
        currentEvent.dtend = value;
        break;
      case 'LOCATION':
        currentEvent.location = value;
        break;
      case 'DESCRIPTION':
        // Clean up description by removing escape sequences
        currentEvent.description = value
          .replace(/\\n/g, ' ')
          .replace(/\\,/g, ',')
          .replace(/\\;/g, ';')
          .replace(/\\\\/g, '\\');
        break;
      case 'URL':
        currentEvent.url = value;
        break;
    }
  }
  
  return events;
}

/**
 * Convert ICS events to our Event format
 */
function convertToEvents(icsEvents: ICSEvent[]): Event[] {
  return icsEvents
    .map((icsEvent, index) => {
      const startDateTime = parseICSDate(icsEvent.dtstart);
      const endDateTime = parseICSDate(icsEvent.dtend);
      
      // Create time range if start and end times are different
      let timeDisplay = startDateTime.time;
      if (icsEvent.dtend && startDateTime.time !== endDateTime.time) {
        timeDisplay = `${startDateTime.time}-${endDateTime.time}`;
      }
      
      return {
        id: 1000 + index, // Use high IDs to avoid conflicts with static events
        title: icsEvent.summary,
        date: startDateTime.date,
        time: timeDisplay,
        location: icsEvent.location || '',
        description: icsEvent.description,
        url: icsEvent.url,
      };
    })
    .filter(event => {
      // Filter future events only
      const eventDate = new Date(event.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Fetch and parse Scouting.org calendar events
 */
export async function fetchScoutingEvents(): Promise<Event[]> {
  try {
    // Use proxy in development
    if (import.meta.env.DEV) {
      const response = await fetch('/api/scouting/advancements/events/calendar/244774');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const icsData = await response.text();
      const icsEvents = parseICSData(icsData);
      const events = convertToEvents(icsEvents);
      
      return events;
    } else {
      // In production, use a CORS proxy service
      const corsProxy = 'https://corsproxy.io/?';
      const apiUrl = 'https://api.scouting.org/advancements/events/calendar/244774';
      const response = await fetch(corsProxy + encodeURIComponent(apiUrl));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const icsData = await response.text();
      const icsEvents = parseICSData(icsData);
      const events = convertToEvents(icsEvents);
      
      return events;
    }
  } catch (error) {
    console.error('Failed to fetch Scouting.org calendar events:', error);
    return []; // Return empty array on error to not break the UI
  }
}