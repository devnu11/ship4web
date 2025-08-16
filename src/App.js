import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MeetingsSection from './components/MeetingsSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import JSON data (in a real app, these would be separate files)
import siteConfig from './data/siteConfig.json';
import aboutData from './data/about.json';
import eventsData from './data/events.json';
import galleryData from './data/gallery.json';

/**
 * Main Application Component
 * 
 * Features:
 * - Modular component structure
 * - JSON-driven content
 * - Scroll detection for header
 * - Google integrations ready
 */

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
      <Header isScrolled={isScrolled} config={siteConfig} />
      <main>
        <HeroSection config={siteConfig} />
        <AboutSection aboutData={aboutData} />
        <MeetingsSection config={siteConfig} aboutData={aboutData} />
        <EventsSection 
          eventsData={eventsData} 
          googleCalendarId={siteConfig.googleIntegration.calendarId} 
        />
        <GallerySection galleryData={galleryData} />
        <ContactSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
    </div>
  );
};

export default App;