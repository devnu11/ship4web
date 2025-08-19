import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { SITE_CONFIG } from '../../config/siteConfig';
import { Radio, AlertTriangle, Download, Printer, Clock, MapPin, Users, Anchor } from 'lucide-react';

/**
 * Mayday Procedure Placard Page
 * Emergency radio communication procedures and Mayday call format
 */
export const MaydayProcedurePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Mayday Procedure - Emergency Radio Communication"
        description={`Emergency Mayday radio procedure and distress call format for ${SITE_CONFIG.shipName} vessels. Critical maritime emergency communication.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Radio className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Mayday Distress Call</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Emergency Radio Communication Procedures
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Step-by-step procedures for making a Mayday distress call. 
                This placard should be mounted at the radio station for immediate reference during emergencies.
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

        {/* Critical Emergency Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-red-900 text-2xl mb-3">EMERGENCY ONLY</h3>
                    <p className="text-red-800 font-medium mb-2">
                      Use MAYDAY only when vessel or persons are in <strong>GRAVE AND IMMINENT DANGER</strong> 
                      and immediate assistance is required.
                    </p>
                    <p className="text-red-800 text-sm">
                      False Mayday calls are illegal and can result in fines up to $100,000 and imprisonment. 
                      For urgent but non-life-threatening situations, use "PAN-PAN" instead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Procedure */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">

              {/* Step 1: Immediate Actions */}
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="bg-red-600 text-white px-6 py-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">1</span>
                    IMMEDIATE ACTIONS
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <Radio className="text-red-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Turn Radio to Channel 16</h4>
                          <p className="text-gray-600 text-sm">VHF Channel 16 - International Distress Frequency</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <AlertTriangle className="text-red-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Ensure Radio is on HIGH Power</h4>
                          <p className="text-gray-600 text-sm">Maximum transmission range for emergency</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <Users className="text-red-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Assign Someone to Monitor</h4>
                          <p className="text-gray-600 text-sm">Keep listening for Coast Guard response</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <Clock className="text-red-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Stay Calm and Speak Clearly</h4>
                          <p className="text-gray-600 text-sm">Clear communication saves lives</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Mayday Call Format */}
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="bg-orange-600 text-white px-6 py-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">2</span>
                    MAYDAY CALL FORMAT
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">EXACT WORDS TO TRANSMIT:</h3>
                    <div className="font-mono text-lg leading-relaxed bg-white p-4 rounded border">
                      <div className="text-red-600 font-bold">"MAYDAY, MAYDAY, MAYDAY"</div>
                      <div className="mt-2">"This is [VESSEL NAME], [VESSEL NAME], [VESSEL NAME]"</div>
                      <div className="mt-2">"MAYDAY [VESSEL NAME]"</div>
                      <div className="mt-4 text-blue-700">
                        <div>"My position is: [LAT/LONG or BEARING/DISTANCE]"</div>
                        <div>"Nature of emergency: [WHAT IS WRONG]"</div>
                        <div>"Assistance required: [WHAT YOU NEED]"</div>
                        <div>"Number of persons on board: [NUMBER]"</div>
                        <div>"Description of vessel: [LENGTH, COLOR, TYPE]"</div>
                      </div>
                      <div className="mt-4">"Over"</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        <MapPin className="mr-2" size={20} />
                        Position Information
                      </h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• GPS coordinates (preferred)</li>
                        <li>• Distance/bearing from known landmark</li>
                        <li>• "Unknown position" if unsure</li>
                        <li>• Channel marker or buoy numbers</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <Anchor className="mr-2" size={20} />
                        Emergency Types
                      </h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Fire aboard vessel</li>
                        <li>• Taking on water/sinking</li>
                        <li>• Medical emergency</li>
                        <li>• Person overboard</li>
                        <li>• Collision/grounding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: After Initial Call */}
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">3</span>
                    AFTER INITIAL MAYDAY CALL
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Radio className="text-blue-600" size={32} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Listen for Response</h4>
                      <p className="text-gray-600 text-sm">
                        Coast Guard will respond with instructions. 
                        Follow their directions exactly.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Clock className="text-green-600" size={32} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Repeat if No Answer</h4>
                      <p className="text-gray-600 text-sm">
                        Wait 2 minutes, then repeat Mayday call. 
                        Continue until you get a response.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Users className="text-purple-600" size={32} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Switch Channels if Directed</h4>
                      <p className="text-gray-600 text-sm">
                        Coast Guard may direct you to another channel 
                        for further communication.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-900 mb-3 flex items-center">
                      <AlertTriangle className="mr-2" size={20} />
                      Important Follow-up Actions
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
                      <ul className="space-y-2">
                        <li>• Continue emergency mitigation efforts</li>
                        <li>• Prepare life jackets for all aboard</li>
                        <li>• Ready life raft if available</li>
                        <li>• Turn on navigation lights</li>
                      </ul>
                      <ul className="space-y-2">
                        <li>• Sound horn/whistle if other vessels nearby</li>
                        <li>• Monitor radio continuously</li>
                        <li>• Prepare to abandon vessel if directed</li>
                        <li>• Stay with vessel unless ordered otherwise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Essential Information Quick Reference */}
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="bg-gray-800 text-white px-6 py-4">
                  <h2 className="text-2xl font-bold">VESSEL INFORMATION - FILL IN BELOW</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Vessel Name:
                        </label>
                        <div className="border-b-2 border-gray-400 h-8 bg-gray-50"></div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Call Sign (if applicable):
                        </label>
                        <div className="border-b-2 border-gray-400 h-8 bg-gray-50"></div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Vessel Description:
                        </label>
                        <div className="space-y-2">
                          <div className="border-b border-gray-400 h-6 bg-gray-50"></div>
                          <div className="border-b border-gray-400 h-6 bg-gray-50"></div>
                          <p className="text-xs text-gray-600">
                            (Length, color, type - e.g., "30-foot white sailboat")
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Home Port:
                        </label>
                        <div className="border-b-2 border-gray-400 h-8 bg-gray-50"></div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Registration Number:
                        </label>
                        <div className="border-b-2 border-gray-400 h-8 bg-gray-50"></div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Maximum Persons on Board:
                        </label>
                        <div className="border-b-2 border-gray-400 h-8 bg-gray-50"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Key Radio Information</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <strong>Emergency:</strong><br />
                        VHF Channel 16
                      </div>
                      <div>
                        <strong>Coast Guard:</strong><br />
                        (800) 424-8802
                      </div>
                      <div>
                        <strong>DSC Button:</strong><br />
                        Red distress button
                      </div>
                      <div>
                        <strong>Power Setting:</strong><br />
                        HIGH (25 watts)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Distress Calls */}
              <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                <div className="bg-yellow-600 text-white px-6 py-4">
                  <h2 className="text-2xl font-bold">OTHER DISTRESS CALLS</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                        <AlertTriangle className="mr-2" size={20} />
                        PAN-PAN (Urgent)
                      </h4>
                      <p className="text-orange-800 text-sm mb-3">
                        Use for urgent situations that are not immediately life-threatening:
                      </p>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Engine failure (not sinking)</li>
                        <li>• Lost or overdue</li>
                        <li>• Medical assistance needed</li>
                        <li>• Dragging anchor</li>
                      </ul>
                      <p className="text-orange-900 font-mono text-xs mt-3 bg-white p-2 rounded">
                        "PAN-PAN, PAN-PAN, PAN-PAN<br />
                        This is [vessel name]..."
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        <Radio className="mr-2" size={20} />
                        SÉCURITÉ (Safety)
                      </h4>
                      <p className="text-blue-800 text-sm mb-3">
                        Use for safety messages and navigation warnings:
                      </p>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Hazards to navigation</li>
                        <li>• Weather warnings</li>
                        <li>• Objects in water</li>
                        <li>• Navigation light failures</li>
                      </ul>
                      <p className="text-blue-900 font-mono text-xs mt-3 bg-white p-2 rounded">
                        "SÉCURITÉ, SÉCURITÉ, SÉCURITÉ<br />
                        This is [vessel name]..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="bg-gray-50 rounded-lg p-6 print:hidden">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Placard Usage Instructions</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Mounting and Access</h4>
                    <ul className="space-y-1">
                      <li>• Mount at or near VHF radio station</li>
                      <li>• Laminate for water resistance</li>
                      <li>• Ensure readable in low light conditions</li>
                      <li>• Include pencil/pen for vessel information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Training and Practice</h4>
                    <ul className="space-y-1">
                      <li>• Practice Mayday calls during safety drills</li>
                      <li>• Familiarize all crew with radio operation</li>
                      <li>• Review procedures during safety briefing</li>
                      <li>• Test radio and backup power regularly</li>
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