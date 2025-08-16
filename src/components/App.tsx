import { useState, useEffect } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { MeetingsSection } from './MeetingsSection';
import { EventsSection } from './EventsSection';
import { GallerySection } from './GallerySection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

/**
 * Main App Component for Sea Scout Ship 4 Website
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
export const App = () => {
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