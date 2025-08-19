import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { SITE_CONFIG } from '../../config/siteConfig';
import { Users, AlertTriangle, Download, Printer, CheckCircle, LifeBuoy, Radio, Anchor } from 'lucide-react';

/**
 * Safety Briefing Placard Page
 * Comprehensive pre-departure safety briefing checklist and procedures
 */
export const SafetyBriefingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const briefingItems = [
    {
      id: 'pfd-location',
      category: 'Personal Flotation Devices',
      icon: <LifeBuoy className="text-blue-600" size={20} />,
      items: [
        'Show location of all PFDs aboard vessel',
        'Demonstrate proper donning of PFDs',
        'Explain when PFDs must be worn (children under 13, rough weather, etc.)',
        'Point out location of throwable flotation devices',
        'Check that PFDs are Coast Guard approved and in good condition'
      ]
    },
    {
      id: 'emergency-equipment',
      category: 'Emergency Equipment',
      icon: <AlertTriangle className="text-red-600" size={20} />,
      items: [
        'Location of fire extinguishers and how to operate',
        'Location of first aid kit and emergency supplies',
        'Visual distress signals (flares, mirror, whistle) and usage',
        'Emergency radio procedures and VHF Channel 16',
        'Location of emergency shut-offs (fuel, electrical, propane)'
      ]
    },
    {
      id: 'navigation-lights',
      category: 'Navigation & Safety Lights',
      icon: <Anchor className="text-green-600" size={20} />,
      items: [
        'Navigation light controls and when to use',
        'Anchor light requirements and operation',
        'Emergency lighting locations',
        'Sound signaling devices (horn, whistle, bell)',
        'Proper display of flag, registration numbers'
      ]
    },
    {
      id: 'man-overboard',
      category: 'Man Overboard Procedures',
      icon: <Users className="text-purple-600" size={20} />,
      items: [
        'Immediate actions: "MAN OVERBOARD!" - Point and shout',
        'Throw flotation device immediately',
        'Assign spotter to keep eyes on person in water',
        'Radio Mayday on Channel 16 if needed',
        'Recovery procedures and approach techniques'
      ]
    },
    {
      id: 'radio-procedures',
      category: 'Communication Procedures',
      icon: <Radio className="text-orange-600" size={20} />,
      items: [
        'VHF radio operation and Channel 16 for emergencies',
        'How to make a Mayday call (see Mayday placard)',
        'Cell phone emergency contacts and limitations',
        'Signal mirror and whistle usage for attention',
        'Location of vessel registration and contact information'
      ]
    },
    {
      id: 'vessel-specific',
      category: 'Vessel-Specific Hazards',
      icon: <CheckCircle className="text-indigo-600" size={20} />,
      items: [
        'Boarding and movement around vessel safely',
        'Boom and rigging hazards (sailboats)',
        'Engine room dangers and precautions',
        'Deck and cockpit drainage systems',
        'Special equipment operations (windlass, davits, etc.)'
      ]
    },
    {
      id: 'weather-safety',
      category: 'Weather & Sea Conditions',
      icon: <AlertTriangle className="text-blue-600" size={20} />,
      items: [
        'How to check weather forecasts and updates',
        'Recognition of dangerous weather signs',
        'Actions to take in deteriorating conditions',
        'Safe speed and following sea precautions',
        'When to turn back or seek shelter'
      ]
    },
    {
      id: 'responsibilities',
      category: 'Crew Responsibilities',
      icon: <Users className="text-teal-600" size={20} />,
      items: [
        'Designate lookouts and assign duties',
        'Establish communication protocols',
        'Safety equipment usage requirements',
        'Movement restrictions during operations',
        'Emergency role assignments'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Safety Briefing Placard - Pre-Departure Checklist"
        description={`Comprehensive pre-departure safety briefing checklist for ${SITE_CONFIG.shipName} vessels. Essential safety procedures and equipment locations.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Users className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Pre-Departure Safety Briefing</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Essential Safety Briefing Checklist
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Comprehensive safety briefing checklist to be conducted before every departure. 
                This briefing ensures all crew members are familiar with safety equipment and emergency procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="py-6 bg-gray-50 print:hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex justify-center space-x-4">
              <button
                onClick={handlePrint}
                className="btn-primary flex items-center space-x-2"
              >
                <Printer size={20} />
                <span>Print Placard</span>
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </section>

        {/* Critical Safety Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">MANDATORY SAFETY BRIEFING</h3>
                    <p className="text-red-800 mb-2">
                      <strong>This briefing must be conducted before every departure</strong> - regardless of crew experience. 
                      Every vessel is different, and conditions change.
                    </p>
                    <p className="text-red-800 text-sm">
                      The captain is legally responsible for the safety of all persons aboard. 
                      Ensure everyone understands their role and the location of all safety equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Briefing Checklist */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {briefingItems.map((section) => (
                  <div key={section.id} className="bg-white rounded-lg shadow-lg border overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b">
                      <div className="flex items-center">
                        {section.icon}
                        <h2 className="text-xl font-bold text-gray-900 ml-3">{section.category}</h2>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-3">
                        {section.items.map((item, index) => {
                          const itemId = `${section.id}-${index}`;
                          return (
                            <div 
                              key={itemId}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors print:hover:bg-white"
                            >
                              <button
                                onClick={() => toggleCheck(itemId)}
                                className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 transition-colors print:hidden ${
                                  checkedItems[itemId] 
                                    ? 'bg-green-500 border-green-500 text-white' 
                                    : 'border-gray-300 hover:border-gray-400'
                                }`}
                              >
                                {checkedItems[itemId] && (
                                  <CheckCircle size={16} className="text-white" />
                                )}
                              </button>
                              <span className={`text-gray-700 leading-relaxed ${
                                checkedItems[itemId] ? 'line-through text-gray-500' : ''
                              }`}>
                                {item}
                              </span>
                              {/* Print version checkbox */}
                              <div className="hidden print:block flex-shrink-0 w-4 h-4 border-2 border-gray-400 mt-0.5"></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact Information */}
              <div className="mt-12 bg-orange-50 rounded-lg p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center">
                  <Radio className="mr-3" size={24} />
                  Emergency Contact Information
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Coast Guard Emergency</h4>
                    <p className="text-lg font-bold text-red-600">Channel 16 VHF</p>
                    <p className="text-sm text-gray-600">24/7 Emergency Response</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Coast Guard Hotline</h4>
                    <p className="text-lg font-bold text-red-600">(800) 424-8802</p>
                    <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Local Marine Police</h4>
                    <p className="text-lg font-bold text-blue-600">911 or Marine Unit</p>
                    <p className="text-sm text-gray-600">Local Emergency Response</p>
                  </div>
                </div>
              </div>

              {/* Post-Briefing Confirmation */}
              <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg print:mt-12">
                <h3 className="font-bold text-green-900 mb-3">Briefing Completion Confirmation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">All crew members present and attentive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">All safety equipment locations shown</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">Emergency procedures explained</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">Questions answered satisfactorily</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-1">
                        Captain/Operator Signature
                      </label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-1">
                        Date & Time
                      </label>
                      <div className="border-b-2 border-gray-400 h-8"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6 print:hidden">
                <h3 className="text-lg font-bold text-blue-900 mb-4">How to Use This Placard</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
                  <div>
                    <h4 className="font-semibold mb-2">Before Each Trip</h4>
                    <ul className="space-y-1">
                      <li>• Conduct complete briefing for all crew</li>
                      <li>• Check off items as completed</li>
                      <li>• Ensure everyone asks questions</li>
                      <li>• Sign confirmation section</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Placard Placement</h4>
                    <ul className="space-y-1">
                      <li>• Print and laminate for durability</li>
                      <li>• Mount at helm station for reference</li>
                      <li>• Keep dry erase marker for checkboxes</li>
                      <li>• Replace when worn or faded</li>
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