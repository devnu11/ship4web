import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { SITE_CONFIG } from '../../config/siteConfig';
import { Anchor, AlertTriangle, Download, Printer, CheckCircle, Users, Wind, Eye, Zap } from 'lucide-react';
import html2pdf from 'html2pdf.js';

/**
 * Pre-Docking Safety Check Placard Page
 * Docking approach and mooring safety procedures checklist
 */
export const PreDockingCheckPage = () => {
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

  const handleDownloadPDF = () => {
    const element = document.getElementById('pre-docking-check-content');
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: 'pre-docking-check-placard.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const dockingChecklist = [
    {
      id: 'approach-planning',
      category: 'Approach Planning',
      icon: <Eye className="text-blue-600" size={20} />,
      color: 'blue',
      items: [
        'Observe wind direction and current conditions',
        'Identify approach angle and backup plan',
        'Check dock height relative to vessel freeboard',
        'Identify other vessel traffic in marina',
        'Confirm dock space availability and clearances',
        'Plan exit strategy if approach fails'
      ]
    },
    {
      id: 'crew-briefing',
      category: 'Crew Assignment & Briefing',
      icon: <Users className="text-green-600" size={20} />,
      color: 'green',
      items: [
        'Assign crew to bow and stern line duties',
        'Designate primary communicator with captain',
        'Review hand signals for dock operations',
        'Ensure crew knows to never use body parts as fenders',
        'Assign fender placement and adjustment duties',
        'Confirm everyone understands "STOP" commands'
      ]
    },
    {
      id: 'equipment-preparation',
      category: 'Equipment & Line Preparation',
      icon: <Anchor className="text-orange-600" size={20} />,
      color: 'orange',
      items: [
        'Deploy and position fenders on dock side',
        'Prepare bow line with proper eye splices/knots',
        'Prepare stern line and spring lines as needed',
        'Check line condition for chafe and wear',
        'Ensure lines are appropriate length for dock height',
        'Have boat hook ready for line handling'
      ]
    },
    {
      id: 'engine-systems',
      category: 'Engine & Steering Systems',
      icon: <Zap className="text-red-600" size={20} />,
      color: 'red',
      items: [
        'Test reverse gear operation before approach',
        'Check steering responsiveness at idle speed',
        'Verify throttle control smooth operation',
        'Confirm engine temperatures within normal range',
        'Test engine stop/start operation',
        'Ensure fuel sufficient for maneuvering'
      ]
    },
    {
      id: 'environmental-assessment',
      category: 'Environmental Conditions',
      icon: <Wind className="text-teal-600" size={20} />,
      color: 'teal',
      items: [
        'Assess wind speed and gusting patterns',
        'Determine current direction and strength',
        'Evaluate sea state and wake conditions',
        'Check visibility and lighting conditions',
        'Identify weather changes during approach',
        'Plan for wind/current drift compensation'
      ]
    },
    {
      id: 'safety-protocols',
      category: 'Safety Protocols',
      icon: <AlertTriangle className="text-purple-600" size={20} />,
      color: 'purple',
      items: [
        'All crew wearing PFDs or within easy reach',
        'Clear all loose gear from work areas',
        'Ensure radio on for emergency communication',
        'Brief crew on emergency stop procedures',
        'Position crew away from pinch points',
        'Have first aid kit accessible on deck'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, border: string, text: string}} = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-800' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Pre-Docking Safety Check - Mooring Procedures"
        description={`Pre-docking safety checklist and mooring procedures for ${SITE_CONFIG.shipName} vessels. Essential docking approach protocols.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]" id="pre-docking-check-content">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Anchor className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Pre-Docking Safety Check</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Docking Approach & Mooring Safety Procedures
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Systematic pre-docking checklist to ensure safe approach and mooring operations. 
                Use this checklist before every docking approach to prevent accidents and equipment damage.
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
                onClick={handleDownloadPDF}
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
                    <h3 className="font-bold text-red-900 mb-2">DOCKING SAFETY WARNING</h3>
                    <p className="text-red-800 mb-2">
                      <strong>Most boating accidents occur during docking operations.</strong> 
                      Take time to complete this checklist before every approach.
                    </p>
                    <p className="text-red-800 text-sm">
                      Never rush a docking approach. Abort and circle around if conditions aren't right. 
                      Property damage heals faster than crew injuries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Docking Checklist */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {dockingChecklist.map((section) => {
                  const colorClasses = getColorClasses(section.color);
                  return (
                    <div key={section.id} className={`bg-white rounded-lg shadow-lg border overflow-hidden`}>
                      <div className={`${colorClasses.bg} ${colorClasses.border} px-6 py-4 border-b`}>
                        <div className="flex items-center">
                          {section.icon}
                          <h2 className={`text-xl font-bold ml-3 ${colorClasses.text}`}>
                            {section.category}
                          </h2>
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
                  );
                })}
              </div>

              {/* Docking Approach Steps */}
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Anchor className="mr-3" size={24} />
                  Docking Approach Sequence
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Slow Approach</h4>
                    <p className="text-gray-600 text-sm">Reduce to minimum steerage speed well before the dock</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Position Crew</h4>
                    <p className="text-gray-600 text-sm">Crew in position with lines ready, away from pinch points</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Approach</h4>
                    <p className="text-gray-600 text-sm">Gentle contact with fenders, bow line first</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border text-center">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Secure Vessel</h4>
                    <p className="text-gray-600 text-sm">All lines secured, engines off, crew accounted for</p>
                  </div>
                </div>
              </div>

              {/* Emergency Procedures */}
              <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="mr-2" size={24} />
                  Emergency Abort Procedures
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-red-800 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">When to Abort Approach</h4>
                    <ul className="space-y-1">
                      <li>• Wind/current stronger than expected</li>
                      <li>• Another vessel enters your approach path</li>
                      <li>• Equipment failure (steering, engine, throttle)</li>
                      <li>• Crew not ready or in unsafe position</li>
                      <li>• Dock space occupied or inadequate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Abort Actions</h4>
                    <ul className="space-y-1">
                      <li>• Sound horn to alert other vessels</li>
                      <li>• Apply reverse thrust if needed</li>
                      <li>• Turn away from dock and other vessels</li>
                      <li>• Circle around for another approach</li>
                      <li>• Consider alternate docking location</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Completion Verification */}
              <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg print:mt-12">
                <h3 className="font-bold text-green-900 mb-3">Pre-Docking Check Complete</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">All crew briefed and in position</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">Lines prepared and fenders deployed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">Engine and steering systems checked</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-400"></div>
                      <span className="text-green-800">Environmental conditions assessed</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-green-800 mb-1">
                        Helmsman Signature
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
                <h3 className="text-lg font-bold text-blue-900 mb-4">Using This Placard</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
                  <div>
                    <h4 className="font-semibold mb-2">Before Every Docking</h4>
                    <ul className="space-y-1">
                      <li>• Start checklist well before approach</li>
                      <li>• Involve entire crew in preparation</li>
                      <li>• Don't skip items even in familiar areas</li>
                      <li>• Abort if any critical item cannot be completed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Placard Placement</h4>
                    <ul className="space-y-1">
                      <li>• Mount near helm station for easy reference</li>
                      <li>• Laminate for weather protection</li>
                      <li>• Include dry-erase marker for checkboxes</li>
                      <li>• Replace when worn or procedures change</li>
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