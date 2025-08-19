import { Mail, Phone, MapPin, ExternalLink, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ContactSection = () => (
  <section id="contact" className="page-section bg-white">
    <div className="container-content">
      <div className="section-header">
        <h2 className="heading-section">Get Connected</h2>
        <p className="text-section-subtitle">Ready to join our crew or have questions?</p>
      </div>
      
      <div className="grid-cards">
        <div>
          <h3 className="heading-subsection">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-ship4-blue" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-ship4-blue" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-ship4-blue" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.meetingLocation}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="heading-subsection">Related Organizations</h3>
          <div className="space-y-4">
            <a href={SITE_CONFIG.brotherTroop.url} target="_blank" rel="noopener noreferrer" 
               className="flex items-center space-x-3 text-ship4-blue hover:text-blue-600 transition-colors">
              <ExternalLink size={20} />
              <span>{SITE_CONFIG.brotherTroop.name} (Brother Troop)</span>
            </a>
            <a href={SITE_CONFIG.parentOrg.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-3 text-ship4-blue hover:text-blue-600 transition-colors">
              <ExternalLink size={20} />
              <span>{SITE_CONFIG.parentOrg.name}</span>
            </a>
            <div className="flex items-center space-x-3">
              <Users className="text-ship4-blue" size={20} />
              <span className="text-gray-700">{SITE_CONFIG.charterOrg} (Charter Organization)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <a 
          href={`mailto:${SITE_CONFIG.email}?subject=Interested in ${SITE_CONFIG.shipName}`}
          className="btn-cta"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  </section>
);