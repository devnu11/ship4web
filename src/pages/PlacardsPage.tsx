import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import { AlertTriangle, Radio, Users, Anchor, Download, Eye } from 'lucide-react';

/**
 * Placards Page - Safety Procedure Placards & Checklists
 * Features printable safety briefing placards and emergency procedures
 */
export const PlacardsPage = () => {
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
      <SEO 
        title="Safety Placards - Maritime Procedures & Checklists"
        description={`Safety procedure placards and emergency checklists for ${SITE_CONFIG.shipName}. Printable safety briefings and maritime protocols.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <AlertTriangle className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Safety Placards</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Maritime safety procedures and emergency checklists
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Printable safety placards and procedure checklists for vessel operations. 
                Post these aboard your vessel for quick reference during emergencies and routine operations.
              </p>
            </div>
          </div>
        </section>

        {/* Placards Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Safety Briefing Placard */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-blue-50 border-b">
                    <div className="flex items-center mb-2">
                      <Users className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Pre-Departure Safety Briefing</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Essential safety briefing checklist for all crew members
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <Eye size={16} className="mr-2" />
                        <span className="text-sm font-medium">Visual Checklist</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Waterproof PDF</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <AlertTriangle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Emergency Ready</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Complete pre-departure safety briefing covering life jackets, emergency equipment 
                      locations, man overboard procedures, and vessel-specific hazards.
                    </p>
                    
                    <a
                      href="/placards/safety-briefing"
                      className="btn-primary w-full justify-center"
                    >
                      <Users size={20} />
                      View Safety Briefing
                    </a>
                  </div>
                </div>

                {/* Pre-Docking Safety Check */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-orange-50 border-b">
                    <div className="flex items-center mb-2">
                      <Anchor className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Pre-Docking Safety Check</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Docking approach and mooring safety procedures
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <Eye size={16} className="mr-2" />
                        <span className="text-sm font-medium">Step-by-Step Guide</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Laminated Reference</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <AlertTriangle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Accident Prevention</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Pre-docking safety checklist including crew positioning, fender placement, 
                      line preparation, and emergency procedures during docking operations.
                    </p>
                    
                    <a
                      href="/placards/pre-docking-check"
                      className="btn-primary w-full justify-center"
                    >
                      <Anchor size={20} />
                      View Docking Check
                    </a>
                  </div>
                </div>

                {/* Mayday Distress Call */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-red-50 border-b">
                    <div className="flex items-center mb-2">
                      <Radio className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Mayday Distress Call Procedure</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Emergency radio communication procedures and scripts
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <Eye size={16} className="mr-2" />
                        <span className="text-sm font-medium">Script Format</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Radio Station Mount</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <AlertTriangle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Life-Saving Info</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Step-by-step Mayday call procedure with proper format, essential information 
                      to communicate, and follow-up actions for maritime emergencies.
                    </p>
                    
                    <a
                      href="/placards/mayday-procedure"
                      className="btn-primary w-full justify-center"
                    >
                      <Radio size={20} />
                      View Mayday Guide
                    </a>
                  </div>
                </div>

                {/* Man Overboard Procedure */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-yellow-50 border-b">
                    <div className="flex items-center mb-2">
                      <Users className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Man Overboard Procedure</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Immediate response procedures for person overboard emergencies
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <Eye size={16} className="mr-2" />
                        <span className="text-sm font-medium">Quick Reference</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Helm Station Card</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <AlertTriangle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Immediate Action</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Immediate response protocol for man overboard including crew assignments, 
                      recovery maneuvers, and communication procedures.
                    </p>
                    
                    <a
                      href="/placards/man-overboard"
                      className="btn-primary w-full justify-center"
                    >
                      <Users size={20} />
                      View MOB Procedure
                    </a>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mt-12 bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="mr-2" size={24} />
                  Using Safety Placards
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Placement Guidelines</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Mount in clear view at helm station</li>
                      <li>• Laminate for weather protection</li>
                      <li>• Use waterproof mounting hardware</li>
                      <li>• Replace when faded or damaged</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Training Integration</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Review during safety briefings</li>
                      <li>• Practice procedures regularly</li>
                      <li>• Test crew knowledge periodically</li>
                      <li>• Update with lessons learned</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};