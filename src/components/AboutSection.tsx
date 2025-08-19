import { memo } from 'react';
import { Users, Anchor, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const AboutSection = memo(() => (
  <section id="about" className="page-section bg-white">
    <div className="container-content">
      <div className="section-header">
        <h2 className="heading-section">About {SITE_CONFIG.shipName}</h2>
        <p className="text-section-subtitle">
          Discover the adventure of Sea Scouting with {SITE_CONFIG.shipShortName}, where young mariners learn seamanship, 
          leadership, and character while exploring the waters of Central Texas.
        </p>
      </div>
      
      <div className="grid-cards-3">
        <div className="text-center">
          <div className="feature-icon">
            <Users className="text-ship4-blue" size={32} />
          </div>
          <h3 className="feature-title">Leadership</h3>
          <p className="text-gray-600">Develop leadership skills through hands-on maritime experiences and team-building activities.</p>
        </div>
        <div className="text-center">
          <div className="feature-icon">
            <Anchor className="text-ship4-blue" size={32} />
          </div>
          <h3 className="feature-title">Seamanship</h3>
          <p className="text-gray-600">Learn essential boating skills, navigation, and water safety in a supportive environment.</p>
        </div>
        <div className="text-center">
          <div className="feature-icon">
            <Calendar className="text-ship4-blue" size={32} />
          </div>
          <h3 className="feature-title">Adventure</h3>
          <p className="text-gray-600">Experience exciting adventures on the water and participate in regional Sea Scout events.</p>
        </div>
      </div>
    </div>
  </section>
));

AboutSection.displayName = 'AboutSection';