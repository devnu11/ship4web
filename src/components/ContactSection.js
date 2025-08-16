import React from 'react';

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