import React from 'react';
import { Users, Anchor, Calendar } from 'lucide-react';

/**
 * About Section Component
 * 
 * Features:
 * - Dynamic feature cards
 * - Icon mapping for different features
 * - Responsive grid layout
 * 
 * Props:
 * - aboutData: object - about section data from JSON
 */

const AboutSection = ({ aboutData }) => {
  const iconMap = {
    Users: Users,
    Anchor: Anchor,
    Calendar: Calendar
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
