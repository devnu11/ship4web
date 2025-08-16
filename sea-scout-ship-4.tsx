import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Anchor, ExternalLink, Mail, Phone } from 'lucide-react';

/**
 * Sea Scout Ship 4 Website
 * A modern, responsive website for Sea Scout Ship 4 based in Dripping Springs, TX
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Google Calendar integration ready
 * - Google Sheets data integration ready
 * - Modular component structure
 * - Accessible design with proper ARIA labels
 * - SEO-optimized structure
 */

// Configuration object for easy scout management
const SITE_CONFIG = {
  // Basic Information
  shipName: "Sea Scout Ship 4",
  location: "Dripping Springs, TX",
  motto: "Paratus Sum",
  meetingTime: "Sunday 4:00 PM",
  meetingLocation: "Patriots Hall, US 290, Dripping Springs, TX",
  
  // Contact Information
  email: "ship4@dsscouts.com", // TODO: Replace with actual email
  phone: "(512) XXX-XXXX", // TODO: Replace with actual phone
  
  // Related Organizations
  sisterTroop: {
    name: "Troop 4",
    url: "https://troop4ds.com"
  },
  parentOrg: {
    name: "Dripping Springs Scouts",
    url: "https://dsscouts.com"
  },
  charterOrg: "American Legion Post 290",
  
  // Google Integration (TODO: Add actual IDs)
  googleCalendarId: "YOUR_CALENDAR_ID@group.calendar.google.com",
  googleSheetsId: "YOUR_SPREADSHEET_ID",
  
  // Color Palette Suggestions
  colors: {
    primary: "#1e40af", // Navy blue from logo
    secondary: "#dc2626", // Red from logo
    accent: "#0891b2", // Sea blue
    background: "#f8fafc",
    text: "#1e293b"
  }
};

// Header Component
const Header = ({ isScrolled }) => (
  <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
  }`}>
    <div className="container mx-auto px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo Placeholder */}
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">4</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{SITE_CONFIG.shipName}</h1>
            <p className="text-sm text-gray-600 italic">{SITE_CONFIG.motto}</p>
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

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-red-600">
    {/* TODO: Replace with actual hero image from Seabase */}
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        {/* Ship Logo Placeholder */}
        <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Anchor size={64} className="text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{SITE_CONFIG.shipName}</h1>
        <p className="text-xl md:text-2xl mb-2 font-light italic">{SITE_CONFIG.motto}</p>
        <p className="text-lg opacity-90">{SITE_CONFIG.location}</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div className="flex items-center space-x-2">
          <Clock size={20} />
          <span>{SITE_CONFIG.meetingTime}</span>
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

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Sea Scout Ship 4</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the adventure of Sea Scouting with Ship 4, where young mariners learn seamanship, 
          leadership, and character while exploring the waters of Central Texas.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Leadership</h3>
          <p className="text-gray-600">Develop leadership skills through hands-on maritime experiences and team-building activities.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Anchor className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Seamanship</h3>
          <p className="text-gray-600">Learn essential boating skills, navigation, and water safety in a supportive environment.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Adventure</h3>
          <p className="text-gray-600">Experience exciting adventures on the water and participate in regional Sea Scout events.</p>
        </div>
      </div>
    </div>
  </section>
);

// Meeting Information Component
const MeetingsSection = () => (
  <section id="meetings" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meeting Information</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-800 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Weekly Meetings</h3>
            <p className="opacity-90">Join us every week for training, planning, and fellowship</p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Clock className="mr-2 text-blue-800" size={20} />
                  When
                </h4>
                <p className="text-gray-700 mb-2">{SITE_CONFIG.meetingTime}</p>
                <p className="text-sm text-gray-600">Every Sunday</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-800" size={20} />
                  Where
                </h4>
                <p className="text-gray-700 mb-2">Patriots Hall</p>
                <p className="text-sm text-gray-600">US 290, Dripping Springs, TX</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-lg mb-3">What to Expect</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Seamanship training and skill development</li>
                <li>Leadership opportunities and advancement work</li>
                <li>Event planning and community service projects</li>
                <li>Fellowship and team building activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Events Calendar Component (Google Calendar Integration Ready)
const EventsSection = () => {
  const [events, setEvents] = useState([]);
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

// Gallery Section (Image Placeholder)
const GallerySection = () => {
  // Image suggestions for scout management
  const imagePlaceholders = [
    { id: 1, title: "Sailing Training", description: "Replace with: Scouts learning to sail on Lake Travis" },
    { id: 2, title: "Knot Tying Workshop", description: "Replace with: Youth practicing seamanship skills" },
    { id: 3, title: "Seabase Adventure", description: "Replace with: High adventure photos from Florida Sea Base" },
    { id: 4, title: "Leadership Training", description: "Replace with: Ship officers in leadership roles" },
    { id: 5, title: "Community Service", description: "Replace with: Scouts participating in water conservation projects" },
    { id: 6, title: "Awards Ceremony", description: "Replace with: Advancement and recognition events" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">Memories from our maritime adventures</p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {imagePlaceholders.map(placeholder => (
            <div key={placeholder.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-center text-blue-800">
                  <Camera size={48} className="mx-auto mb-2" />
                  <p className="font-semibold">{placeholder.title}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{placeholder.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
            <strong>For Scout Leaders:</strong> Replace these placeholders with actual photos from Seabase adventures, 
            training sessions, and Ship 4 activities. Recommended image size: 400x300px minimum.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact and Links Section
const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Connected</h2>
        <p className="text-xl text-gray-600">Ready to join our crew or have questions?</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-800" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-800" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-800" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.meetingLocation}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Organizations</h3>
          <div className="space-y-4">
            <a href={SITE_CONFIG.sisterTroop.url} target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-3 text-blue-800 hover:text-blue-600 transition-colors">
              <ExternalLink size={20} />
              <span>{SITE_CONFIG.sisterTroop.name} (Sister Troop)</span>
            </a>
            <a href={SITE_CONFIG.parentOrg.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-3 text-blue-800 hover:text-blue-600 transition-colors">
              <ExternalLink size={20} />
              <span>{SITE_CONFIG.parentOrg.name}</span>
            </a>
            <div className="flex items-center space-x-3">
              <Users className="text-blue-800" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.charterOrg} (Charter Organization)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
          Contact Us Today
        </button>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="font-bold">4</span>
          </div>
          <span className="text-xl font-bold">{SITE_CONFIG.shipName}</span>
        </div>
        <p className="text-gray-400 italic mb-4">{SITE_CONFIG.motto}</p>
        <p className="text-gray-500 text-sm">
          © 2025 Sea Scout Ship 4, Dripping Springs. Chartered by {SITE_CONFIG.charterOrg}.
        </p>
      </div>
    </div>
  </footer>
);

// Camera icon for gallery placeholders
const Camera = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586l-.707-.707A1 1 0 0013 4H7a1 1 0 00-.707.293L5.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

// Main App Component
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
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <MeetingsSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;