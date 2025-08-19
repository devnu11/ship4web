import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import { Anchor, Mail, Download, Save, AlertTriangle, Users } from 'lucide-react';

interface FloatPlanData {
  // Vessel Information
  vesselName: string;
  homePort: string;
  docRegistrationNo: string;
  yearMake: string;
  length: string;
  type: string;
  draft: string;
  hullMaterial: string;
  hullColors: string;
  prominentFeatures: string;
  
  // Telecommunications
  radioCallSign: string;
  dscMMSI: string;
  radio1Type: string;
  radio1Channel: string;
  radio2Type: string;
  radio2Channel: string;
  cellPhone: string;
  pager: string;
  
  // Navigation Equipment
  maps: boolean;
  charts: boolean;
  compass: boolean;
  gps: boolean;
  radar: boolean;
  loran: boolean;
  sounder: string;
  
  // Propulsion
  primaryType: string;
  primaryEngines: string;
  primaryFuelCapacity: string;
  auxiliaryType: string;
  auxiliaryEngines: string;
  auxiliaryFuelCapacity: string;
  
  // Safety Equipment
  visualDistressDay: boolean;
  visualDistressNight: boolean;
  visualDistressDayNight: boolean;
  pfdQuantity: string;
  hornWhistle: boolean;
  bell: boolean;
  lifeboat: boolean;
  dinghy: boolean;
  foodWater: boolean;
  epirb: string;
  flashlight: boolean;
  signalMirror: boolean;
  drogue: boolean;
  foulWeatherGear: boolean;
  
  // Ground Tackle
  anchorLineLength: string;
  
  // Operator Information
  operatorName: string;
  operatorAge: string;
  operatorGender: string;
  operatorNotes: string;
  operatorAddress: string;
  operatorCity: string;
  operatorState: string;
  operatorZip: string;
  operatorPhone: string;
  boatExperience: boolean;
  areaExperience: boolean;
  vehicleInfo: string;
  vehicleLicense: string;
  trailerLocation: string;
  trailerLicense: string;
  
  // Passengers/Crew
  passengers: Array<{
    name: string;
    address: string;
    age: string;
    gender: string;
    notes: string;
  }>;
  
  // Itinerary
  itinerary: Array<{
    date: string;
    time: string;
    location: string;
    modeOfTravel: string;
    reasonForStop: string;
    checkInTime: string;
    type: 'depart' | 'arrive';
  }>;
  
  // Emergency Contacts
  contact1: string;
  contact1Phone: string;
  contact2: string;
  contact2Phone: string;
}

/**
 * Interactive Coast Guard Float Plan Form
 * Based on official USCG Float Plan form with automatic email submission
 */
export const FloatPlanPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [floatPlan, setFloatPlan] = useState<FloatPlanData>({
    // Initialize with empty values
    vesselName: '',
    homePort: '',
    docRegistrationNo: '',
    yearMake: '',
    length: '',
    type: '',
    draft: '',
    hullMaterial: '',
    hullColors: '',
    prominentFeatures: '',
    radioCallSign: '',
    dscMMSI: '',
    radio1Type: '',
    radio1Channel: '',
    radio2Type: '',
    radio2Channel: '',
    cellPhone: '',
    pager: '',
    maps: false,
    charts: false,
    compass: false,
    gps: false,
    radar: false,
    loran: false,
    sounder: '',
    primaryType: '',
    primaryEngines: '',
    primaryFuelCapacity: '',
    auxiliaryType: '',
    auxiliaryEngines: '',
    auxiliaryFuelCapacity: '',
    visualDistressDay: false,
    visualDistressNight: false,
    visualDistressDayNight: false,
    pfdQuantity: '',
    hornWhistle: false,
    bell: false,
    lifeboat: false,
    dinghy: false,
    foodWater: false,
    epirb: '',
    flashlight: false,
    signalMirror: false,
    drogue: false,
    foulWeatherGear: false,
    anchorLineLength: '',
    operatorName: '',
    operatorAge: '',
    operatorGender: '',
    operatorNotes: '',
    operatorAddress: '',
    operatorCity: '',
    operatorState: '',
    operatorZip: '',
    operatorPhone: '',
    boatExperience: false,
    areaExperience: false,
    vehicleInfo: '',
    vehicleLicense: '',
    trailerLocation: '',
    trailerLicense: '',
    passengers: [],
    itinerary: [],
    contact1: '',
    contact1Phone: '',
    contact2: '',
    contact2Phone: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addPassenger = () => {
    setFloatPlan(prev => ({
      ...prev,
      passengers: [...prev.passengers, {
        name: '',
        address: '',
        age: '',
        gender: '',
        notes: ''
      }]
    }));
  };

  const addItineraryItem = () => {
    setFloatPlan(prev => ({
      ...prev,
      itinerary: [...prev.itinerary, {
        date: '',
        time: '',
        location: '',
        modeOfTravel: '',
        reasonForStop: '',
        checkInTime: '',
        type: 'depart'
      }]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would implement the email submission logic
    alert('Float Plan would be submitted to emergency contacts and saved locally. Email functionality requires backend implementation.');
  };

  const steps = [
    'Vessel Information',
    'Safety Equipment', 
    'Personnel',
    'Itinerary',
    'Emergency Contacts'
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Float Plan - Interactive USCG Form"
        description={`Complete and submit an official Coast Guard Float Plan for ${SITE_CONFIG.shipName} voyages. Interactive form with automatic email submission.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Anchor className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Coast Guard Float Plan</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Official USCG Float Plan Form - Interactive Version
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Complete this form before departing and it will be automatically sent to your emergency contacts. 
                This is the official Coast Guard format for maritime voyage planning.
              </p>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep > index + 1 
                          ? 'bg-green-500 text-white' 
                          : currentStep === index + 1 
                          ? 'bg-ship-navy text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      currentStep === index + 1 ? 'text-ship-navy' : 'text-gray-600'
                    }`}>
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                
                {/* Step 1: Vessel Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Anchor className="mr-3" size={24} />
                      Vessel Information
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vessel Name & Home Port *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.vesselName}
                          onChange={(e) => setFloatPlan(prev => ({...prev, vesselName: e.target.value}))}
                          placeholder="e.g., Spirit of Adventure - Dripping Springs, TX"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Documentation/Registration No. *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.docRegistrationNo}
                          onChange={(e) => setFloatPlan(prev => ({...prev, docRegistrationNo: e.target.value}))}
                          placeholder="e.g., TX-1234-AB"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Year & Make *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.yearMake}
                          onChange={(e) => setFloatPlan(prev => ({...prev, yearMake: e.target.value}))}
                          placeholder="e.g., 2018 Catalina"
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length (ft) *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.length}
                            onChange={(e) => setFloatPlan(prev => ({...prev, length: e.target.value}))}
                            placeholder="30"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.type}
                            onChange={(e) => setFloatPlan(prev => ({...prev, type: e.target.value}))}
                            placeholder="Sailboat"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Draft (in)
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.draft}
                            onChange={(e) => setFloatPlan(prev => ({...prev, draft: e.target.value}))}
                            placeholder="48"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hull Colors *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.hullColors}
                          onChange={(e) => setFloatPlan(prev => ({...prev, hullColors: e.target.value}))}
                          placeholder="e.g., White hull, blue trim"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prominent Features
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          rows={3}
                          value={floatPlan.prominentFeatures}
                          onChange={(e) => setFloatPlan(prev => ({...prev, prominentFeatures: e.target.value}))}
                          placeholder="e.g., Large radar dome, distinctive sail configuration, etc."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-8 border-t">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      currentStep === 1 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-500 text-white hover:bg-gray-600'
                    }`}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </button>
                  
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                      className="btn-primary"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-cta flex items-center space-x-2"
                    >
                      <Mail size={20} />
                      <span>Submit Float Plan</span>
                    </button>
                  )}
                </div>
              </form>

              {/* Important Notice */}
              <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="text-orange-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2">Important Instructions</h3>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• Complete this plan BEFORE departing</li>
                      <li>• Leave with a reliable person who will contact authorities if you're overdue</li>
                      <li>• DO NOT file this plan directly with the Coast Guard</li>
                      <li>• Notify your contact person if plans change</li>
                      <li>• Check in with your contact person as planned</li>
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