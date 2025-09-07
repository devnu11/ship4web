import { useState, useEffect, memo, useMemo } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import type { Event } from '../types';
import { upcomingEvents } from '../data';
import { fetchScoutingEvents } from '../utils/scoutingCalendar';

export const EventsSection = memo(() => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        
        // Fetch Scouting.org calendar events
        const scoutingEvents = await fetchScoutingEvents();
        
        // Combine with static events, putting Scouting.org events first
        const combinedEvents = [...scoutingEvents, ...upcomingEvents];
        
        // Remove duplicates based on title and date similarity
        const uniqueEvents = combinedEvents.filter((event, index, array) => {
          return !array.slice(0, index).some(existingEvent => 
            existingEvent.title.toLowerCase() === event.title.toLowerCase() &&
            existingEvent.date === event.date
          );
        });
        
        setEvents(uniqueEvents);
      } catch (error) {
        console.error('Failed to load events:', error);
        // Fallback to static events if fetching fails
        setEvents(upcomingEvents);
      } finally {
        setLoading(false);
      }
    };
    
    loadEvents();
  }, []);

  const sortedEvents = useMemo(() => {
    return events.sort((a, b) => {
      // Sort by date, putting "TBD" dates at the end
      if (a.date.includes('TBD')) return 1;
      if (b.date.includes('TBD')) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [events]);

  return (
    <section id="events" className="page-section bg-white">
      <div className="container-content">
        <div className="section-header">
          <h2 className="heading-section">Upcoming Events</h2>
          <p className="text-section-subtitle">Stay updated with our latest activities and adventures</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ship4-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedEvents.map(event => (
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
                          className="mt-4 md:mt-0 btn-small"
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
});

EventsSection.displayName = 'EventsSection';

export default EventsSection;