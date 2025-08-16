import React, { useState, useEffect } from 'react';
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

export default EventsSection;