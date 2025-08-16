import { Anchor, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const HeroSection = () => (
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