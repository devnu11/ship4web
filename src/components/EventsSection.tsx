import { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
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
          title: "First Meeting",
          date: "2025-08-24",
          time: "4:00 PM",
          location: "Patriots Hall",
          description: "First formal meeting of Ship 4."
        },
        {
          id: 2,
          title: "Quarter Deck Training",
          date: "2025-09-1",
          time: "1:30 PM",
          location: "Zoom",
          description: "Skipper Palm teaches leadership, planning and communication.",
          url: "mailto:dallas@rliv.net?subject=Quarter Deck Training"
        },
        {
          id: 3,
          title: "CAC High Adventure Day",
          date: "2025-09-13",
          time: "8:30 AM",
          location: "Lost Pines",
          description: "Shooting, swimming and climbing.",
          url: "https://scoutingevent.com/564-94448"
        },
        {
          id: 4,
          title: "Sea Scout Minto Rendezvous",
          date: "2025-09-19 - 2025-09-21",
          time: "5:00 PM",
          location: "Camp Strake, SHAC",
          description: "Regional Sea Scout rendezvous. Compete with other ships in sailing, seamanship, and leadership challenges.",
          url: "https://shacbsa.org/minto-rendezvous"
        },
        {
          id: 5,
          title: "EXTERNAL - Saiing Academy - Texas Trails Council",
          date: "2026 Dates TBD",
          time: "TBD",
          location: "Abilene Sailing Assocation, Lake Ft. Phantom Hill, TX",
          description: "Earn US Sailing Certification. And Sea Scout rank advancement.",
          url: "https://www.texastrailsbsa.com"
        },
        {
          id: 6,
          title: "EXTERNAL - Aquatic School - Longhorn Council",
          date: "2026-07-12 - 2025-07-18",
          time: "5:00 PM",
          location: "Worth Ranch, Palo Pinto, TX",
          description: "Week-long leadership program for Scouts ages 13-17",
          url: "https://www.aquaticschool.org"
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
                  <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-1">
                          <p className="text-gray-600 flex items-center">
                            <Calendar className="mr-2" size={16} />
                            {event.date} at {event.time}
                          </p>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="mr-2" size={16} />
                            {event.location}
                          </p>
                        </div>
                      </div>
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 md:mt-0 bg-ship4-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                    )}
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