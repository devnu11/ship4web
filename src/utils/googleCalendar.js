/**
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
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`
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
 */