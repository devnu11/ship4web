import { memo } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const MeetingsSection = memo(() => (
  <section id="meetings" className="page-section-alt">
    <div className="container-content">
      <div className="section-header">
        <h2 className="heading-section">Meeting Information</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="card overflow-hidden">
          <div className="bg-ship4-blue text-white p-6">
            <h3 className="heading-subsection text-white mb-2">Monthly Meetings</h3>
            <p className="opacity-90">Join us for fun, fellowship and following seas</p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Clock className="mr-2 text-ship4-blue" size={20} />
                  When
                </h4>
                <p className="text-gray-700 mb-2">{SITE_CONFIG.meetingTime}</p>
                <p className="text-sm text-gray-600">Second Sunday</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <MapPin className="mr-2 text-ship4-blue" size={20} />
                  Where
                </h4>
                <p className="text-gray-700 mb-2">{SITE_CONFIG.meetingVenue}</p>
                <p className="text-sm text-gray-600">{SITE_CONFIG.meetingAddress}, {SITE_CONFIG.city}, {SITE_CONFIG.state}</p>
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
));

MeetingsSection.displayName = 'MeetingsSection';