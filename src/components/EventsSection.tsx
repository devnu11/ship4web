import { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { Event } from '../types';

export const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // TODO: Implement Google Calendar API integration
  useEffect(() => {
    // Placeholder for Google Calendar integration
    // fetchGoogleCalendarEvents(SITE_CONFIG.googleCalendarId);
    
    // Mock data for demonstration
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "Sea Scout Training",
          date: "2025-08-24",
          time: "4:00 PM",
          location: "Patriots Hall"
        },
        {
          id: 2,
          title: "Lake Travis Adventure",
          date: "2025-09-07",
          time: "8:00 AM",
          location: "Lake Travis"
        },
        {
          id: 3,
          title: "Regional Regatta",
          date: "2025-09-21",
          time: "9:00 AM",
          location: "Canyon Lake"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest activities and adventures</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ship4-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-ship4-blue">
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
                    </div>
                    <button className="mt-4 md:mt-0 bg-ship4-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
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