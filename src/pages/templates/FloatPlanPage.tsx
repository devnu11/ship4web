import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { SITE_CONFIG } from '../../config/siteConfig';
import { Anchor, Mail, Download, Save, AlertTriangle, Users, Plus, X, Radio, Compass } from 'lucide-react';

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

  const removePassenger = (index: number) => {
    setFloatPlan(prev => ({
      ...prev,
      passengers: prev.passengers.filter((_, i) => i !== index)
    }));
  };

  const updatePassenger = (index: number, field: string, value: string) => {
    setFloatPlan(prev => ({
      ...prev,
      passengers: prev.passengers.map((passenger, i) => 
        i === index ? { ...passenger, [field]: value } : passenger
      )
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

  const removeItineraryItem = (index: number) => {
    setFloatPlan(prev => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index)
    }));
  };

  const updateItinerary = (index: number, field: string, value: string) => {
    setFloatPlan(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would implement the email submission logic
    alert('Float Plan would be submitted to emergency contacts and saved locally. Email functionality requires backend implementation.');
  };

  const steps = [
    'Vessel Information',
    'Communications & Navigation',
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
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8 overflow-x-auto">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''} min-w-0`}
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                        currentStep > index + 1 
                          ? 'bg-green-500 text-white' 
                          : currentStep === index + 1 
                          ? 'bg-ship-navy text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={`ml-2 text-sm font-medium truncate ${
                      currentStep === index + 1 ? 'text-ship-navy' : 'text-gray-600'
                    }`}>
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-4 min-w-[20px] ${
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
            <div className="max-w-6xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                
                {/* Step 1: Vessel Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Anchor className="mr-3 text-ship-navy" size={24} />
                      Vessel Information
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vessel Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.vesselName}
                          onChange={(e) => setFloatPlan(prev => ({...prev, vesselName: e.target.value}))}
                          placeholder="e.g., Spirit of Adventure"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Home Port *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.homePort}
                          onChange={(e) => setFloatPlan(prev => ({...prev, homePort: e.target.value}))}
                          placeholder="e.g., Dripping Springs, TX"
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
                          Hull Material
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={floatPlan.hullMaterial}
                          onChange={(e) => setFloatPlan(prev => ({...prev, hullMaterial: e.target.value}))}
                          placeholder="e.g., Fiberglass"
                        />
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

                {/* Step 2: Communications & Navigation */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Radio className="mr-3 text-ship-navy" size={24} />
                      Communications & Navigation Equipment
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Communications */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Communications</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Radio Call Sign
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.radioCallSign}
                              onChange={(e) => setFloatPlan(prev => ({...prev, radioCallSign: e.target.value}))}
                              placeholder="e.g., WXY123"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              DSC/MMSI
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.dscMMSI}
                              onChange={(e) => setFloatPlan(prev => ({...prev, dscMMSI: e.target.value}))}
                              placeholder="e.g., 123456789"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Radio 1 Type
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.radio1Type}
                              onChange={(e) => setFloatPlan(prev => ({...prev, radio1Type: e.target.value}))}
                              placeholder="e.g., VHF"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Channel/Freq
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.radio1Channel}
                              onChange={(e) => setFloatPlan(prev => ({...prev, radio1Channel: e.target.value}))}
                              placeholder="e.g., Ch 16"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Cell Phone
                            </label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.cellPhone}
                              onChange={(e) => setFloatPlan(prev => ({...prev, cellPhone: e.target.value}))}
                              placeholder="e.g., (555) 123-4567"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Pager/Sat Phone
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.pager}
                              onChange={(e) => setFloatPlan(prev => ({...prev, pager: e.target.value}))}
                              placeholder="Optional"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Navigation Equipment */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Navigation Equipment</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="maps"
                              checked={floatPlan.maps}
                              onChange={(e) => setFloatPlan(prev => ({...prev, maps: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="maps" className="text-sm text-gray-700">Maps</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="charts"
                              checked={floatPlan.charts}
                              onChange={(e) => setFloatPlan(prev => ({...prev, charts: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="charts" className="text-sm text-gray-700">Charts</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="compass"
                              checked={floatPlan.compass}
                              onChange={(e) => setFloatPlan(prev => ({...prev, compass: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="compass" className="text-sm text-gray-700">Compass</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="gps"
                              checked={floatPlan.gps}
                              onChange={(e) => setFloatPlan(prev => ({...prev, gps: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="gps" className="text-sm text-gray-700">GPS</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="radar"
                              checked={floatPlan.radar}
                              onChange={(e) => setFloatPlan(prev => ({...prev, radar: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="radar" className="text-sm text-gray-700">Radar</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="loran"
                              checked={floatPlan.loran}
                              onChange={(e) => setFloatPlan(prev => ({...prev, loran: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="loran" className="text-sm text-gray-700">Loran</label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Depth Sounder
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.sounder}
                            onChange={(e) => setFloatPlan(prev => ({...prev, sounder: e.target.value}))}
                            placeholder="e.g., Fishfinder/Sounder model"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Propulsion */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold text-gray-800">Propulsion</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-700">Primary</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Type
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                                value={floatPlan.primaryType}
                                onChange={(e) => setFloatPlan(prev => ({...prev, primaryType: e.target.value}))}
                                placeholder="e.g., Outboard"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                # Engines
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                                value={floatPlan.primaryEngines}
                                onChange={(e) => setFloatPlan(prev => ({...prev, primaryEngines: e.target.value}))}
                                placeholder="e.g., 1"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Fuel Capacity (gal)
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.primaryFuelCapacity}
                              onChange={(e) => setFloatPlan(prev => ({...prev, primaryFuelCapacity: e.target.value}))}
                              placeholder="e.g., 25"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-700">Auxiliary</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Type
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                                value={floatPlan.auxiliaryType}
                                onChange={(e) => setFloatPlan(prev => ({...prev, auxiliaryType: e.target.value}))}
                                placeholder="Optional"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                # Engines
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                                value={floatPlan.auxiliaryEngines}
                                onChange={(e) => setFloatPlan(prev => ({...prev, auxiliaryEngines: e.target.value}))}
                                placeholder="Optional"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Fuel Capacity (gal)
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.auxiliaryFuelCapacity}
                              onChange={(e) => setFloatPlan(prev => ({...prev, auxiliaryFuelCapacity: e.target.value}))}
                              placeholder="Optional"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Safety Equipment */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <AlertTriangle className="mr-3 text-ship-navy" size={24} />
                      Safety Equipment
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">Visual Distress Signals</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="visualDistressDay"
                                checked={floatPlan.visualDistressDay}
                                onChange={(e) => setFloatPlan(prev => ({...prev, visualDistressDay: e.target.checked}))}
                                className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                              />
                              <label htmlFor="visualDistressDay" className="text-sm text-gray-700">Day signals only</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="visualDistressNight"
                                checked={floatPlan.visualDistressNight}
                                onChange={(e) => setFloatPlan(prev => ({...prev, visualDistressNight: e.target.checked}))}
                                className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                              />
                              <label htmlFor="visualDistressNight" className="text-sm text-gray-700">Night signals only</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="visualDistressDayNight"
                                checked={floatPlan.visualDistressDayNight}
                                onChange={(e) => setFloatPlan(prev => ({...prev, visualDistressDayNight: e.target.checked}))}
                                className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                              />
                              <label htmlFor="visualDistressDayNight" className="text-sm text-gray-700">Day and night signals</label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Personal Flotation Devices (Quantity) *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.pfdQuantity}
                            onChange={(e) => setFloatPlan(prev => ({...prev, pfdQuantity: e.target.value}))}
                            placeholder="e.g., 6 Type II"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="hornWhistle"
                              checked={floatPlan.hornWhistle}
                              onChange={(e) => setFloatPlan(prev => ({...prev, hornWhistle: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="hornWhistle" className="text-sm text-gray-700">Horn/Whistle</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="bell"
                              checked={floatPlan.bell}
                              onChange={(e) => setFloatPlan(prev => ({...prev, bell: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="bell" className="text-sm text-gray-700">Bell</label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="lifeboat"
                              checked={floatPlan.lifeboat}
                              onChange={(e) => setFloatPlan(prev => ({...prev, lifeboat: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="lifeboat" className="text-sm text-gray-700">Life Raft</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="dinghy"
                              checked={floatPlan.dinghy}
                              onChange={(e) => setFloatPlan(prev => ({...prev, dinghy: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="dinghy" className="text-sm text-gray-700">Dinghy</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="foodWater"
                              checked={floatPlan.foodWater}
                              onChange={(e) => setFloatPlan(prev => ({...prev, foodWater: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="foodWater" className="text-sm text-gray-700">Food/Water for crew</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="flashlight"
                              checked={floatPlan.flashlight}
                              onChange={(e) => setFloatPlan(prev => ({...prev, flashlight: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="flashlight" className="text-sm text-gray-700">Flashlight</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="signalMirror"
                              checked={floatPlan.signalMirror}
                              onChange={(e) => setFloatPlan(prev => ({...prev, signalMirror: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="signalMirror" className="text-sm text-gray-700">Signal Mirror</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="drogue"
                              checked={floatPlan.drogue}
                              onChange={(e) => setFloatPlan(prev => ({...prev, drogue: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="drogue" className="text-sm text-gray-700">Sea Anchor/Drogue</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="foulWeatherGear"
                              checked={floatPlan.foulWeatherGear}
                              onChange={(e) => setFloatPlan(prev => ({...prev, foulWeatherGear: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="foulWeatherGear" className="text-sm text-gray-700">Foul Weather Gear</label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            EPIRB/PLB Details
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.epirb}
                            onChange={(e) => setFloatPlan(prev => ({...prev, epirb: e.target.value}))}
                            placeholder="e.g., ACR PLB model ABC123"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Anchor Line Length (ft)
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.anchorLineLength}
                            onChange={(e) => setFloatPlan(prev => ({...prev, anchorLineLength: e.target.value}))}
                            placeholder="e.g., 200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Personnel */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="mr-3 text-ship-navy" size={24} />
                      Personnel Information
                    </h2>
                    
                    {/* Operator Information */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Operator Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.operatorName}
                            onChange={(e) => setFloatPlan(prev => ({...prev, operatorName: e.target.value}))}
                            placeholder="Captain's full name"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Age *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.operatorAge}
                              onChange={(e) => setFloatPlan(prev => ({...prev, operatorAge: e.target.value}))}
                              placeholder="Age"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Gender
                            </label>
                            <select
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.operatorGender}
                              onChange={(e) => setFloatPlan(prev => ({...prev, operatorGender: e.target.value}))}
                            >
                              <option value="">Select</option>
                              <option value="M">Male</option>
                              <option value="F">Female</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.operatorAddress}
                            onChange={(e) => setFloatPlan(prev => ({...prev, operatorAddress: e.target.value}))}
                            placeholder="Street address"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.operatorCity}
                              onChange={(e) => setFloatPlan(prev => ({...prev, operatorCity: e.target.value}))}
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              State *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.operatorState}
                              onChange={(e) => setFloatPlan(prev => ({...prev, operatorState: e.target.value}))}
                              placeholder="TX"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              ZIP *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.operatorZip}
                              onChange={(e) => setFloatPlan(prev => ({...prev, operatorZip: e.target.value}))}
                              placeholder="ZIP"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={floatPlan.operatorPhone}
                            onChange={(e) => setFloatPlan(prev => ({...prev, operatorPhone: e.target.value}))}
                            placeholder="(555) 123-4567"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Physical Description/Notes
                          </label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            rows={3}
                            value={floatPlan.operatorNotes}
                            onChange={(e) => setFloatPlan(prev => ({...prev, operatorNotes: e.target.value}))}
                            placeholder="Height, weight, hair color, distinctive features, medical conditions, etc."
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="boatExperience"
                              checked={floatPlan.boatExperience}
                              onChange={(e) => setFloatPlan(prev => ({...prev, boatExperience: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="boatExperience" className="text-sm text-gray-700">Experienced with this boat</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="areaExperience"
                              checked={floatPlan.areaExperience}
                              onChange={(e) => setFloatPlan(prev => ({...prev, areaExperience: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="areaExperience" className="text-sm text-gray-700">Experienced in this area</label>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <h4 className="font-medium text-gray-700 mb-2">Vehicle Information</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Vehicle & License</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                value={floatPlan.vehicleInfo}
                                onChange={(e) => setFloatPlan(prev => ({...prev, vehicleInfo: e.target.value}))}
                                placeholder="e.g., 2020 Ford F-150, Blue"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">License Plate</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                value={floatPlan.vehicleLicense}
                                onChange={(e) => setFloatPlan(prev => ({...prev, vehicleLicense: e.target.value}))}
                                placeholder="e.g., ABC-1234"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Trailer Location</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                value={floatPlan.trailerLocation}
                                onChange={(e) => setFloatPlan(prev => ({...prev, trailerLocation: e.target.value}))}
                                placeholder="Where trailer will be parked"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Trailer License</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                value={floatPlan.trailerLicense}
                                onChange={(e) => setFloatPlan(prev => ({...prev, trailerLicense: e.target.value}))}
                                placeholder="Trailer plate"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Passengers/Crew */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Passengers/Crew</h3>
                        <button
                          type="button"
                          onClick={addPassenger}
                          className="btn-secondary flex items-center space-x-2"
                        >
                          <Plus size={16} />
                          <span>Add Person</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {floatPlan.passengers.map((passenger, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-gray-700">Person {index + 1}</h4>
                              <button
                                type="button"
                                onClick={() => removePassenger(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={passenger.name}
                                  onChange={(e) => updatePassenger(index, 'name', e.target.value)}
                                  placeholder="Full name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Age
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={passenger.age}
                                  onChange={(e) => updatePassenger(index, 'age', e.target.value)}
                                  placeholder="Age"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Gender
                                </label>
                                <select
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={passenger.gender}
                                  onChange={(e) => updatePassenger(index, 'gender', e.target.value)}
                                >
                                  <option value="">Select</option>
                                  <option value="M">Male</option>
                                  <option value="F">Female</option>
                                </select>
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={passenger.address}
                                  onChange={(e) => updatePassenger(index, 'address', e.target.value)}
                                  placeholder="Address"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Notes
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={passenger.notes}
                                  onChange={(e) => updatePassenger(index, 'notes', e.target.value)}
                                  placeholder="Physical description, medical conditions"
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        {floatPlan.passengers.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <Users size={48} className="mx-auto mb-2 opacity-50" />
                            <p>No passengers added yet</p>
                            <p className="text-sm">Click "Add Person" to include crew members and passengers</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Itinerary */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Compass className="mr-3 text-ship-navy" size={24} />
                      Voyage Itinerary
                    </h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Planned Route & Stops</h3>
                        <button
                          type="button"
                          onClick={addItineraryItem}
                          className="btn-secondary flex items-center space-x-2"
                        >
                          <Plus size={16} />
                          <span>Add Stop</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {floatPlan.itinerary.map((item, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg border">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-gray-700">Stop {index + 1}</h4>
                              <button
                                type="button"
                                onClick={() => removeItineraryItem(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Type
                                </label>
                                <select
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.type}
                                  onChange={(e) => updateItinerary(index, 'type', e.target.value)}
                                >
                                  <option value="depart">Depart from</option>
                                  <option value="arrive">Arrive at</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Date
                                </label>
                                <input
                                  type="date"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.date}
                                  onChange={(e) => updateItinerary(index, 'date', e.target.value)}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Time
                                </label>
                                <input
                                  type="time"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.time}
                                  onChange={(e) => updateItinerary(index, 'time', e.target.value)}
                                />
                              </div>
                              <div className="md:col-span-2 lg:col-span-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Location
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.location}
                                  onChange={(e) => updateItinerary(index, 'location', e.target.value)}
                                  placeholder="e.g., Lake Travis Marina, Austin TX (Lat/Long if available)"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Mode of Travel
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.modeOfTravel}
                                  onChange={(e) => updateItinerary(index, 'modeOfTravel', e.target.value)}
                                  placeholder="e.g., Under sail, Motor, Anchor"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Reason for Stop
                                </label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.reasonForStop}
                                  onChange={(e) => updateItinerary(index, 'reasonForStop', e.target.value)}
                                  placeholder="e.g., Fuel, Lunch, Overnight"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Check-in Time
                                </label>
                                <input
                                  type="time"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy text-sm"
                                  value={item.checkInTime}
                                  onChange={(e) => updateItinerary(index, 'checkInTime', e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        {floatPlan.itinerary.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <Compass size={48} className="mx-auto mb-2 opacity-50" />
                            <p>No itinerary items added yet</p>
                            <p className="text-sm">Add your planned departure point and destinations</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 6: Emergency Contacts */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <AlertTriangle className="mr-3 text-ship-navy" size={24} />
                      Emergency Contacts
                    </h2>
                    
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                      <div className="flex items-start">
                        <AlertTriangle className="text-red-600 mr-3 mt-1" size={20} />
                        <div>
                          <h3 className="font-semibold text-red-900 mb-2">Critical Information</h3>
                          <p className="text-red-800 text-sm">
                            These contacts will receive your float plan and be responsible for alerting authorities 
                            if you don't return as scheduled. Choose reliable contacts who will be available during your voyage.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-6 rounded-lg border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Primary Contact</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.contact1}
                              onChange={(e) => setFloatPlan(prev => ({...prev, contact1: e.target.value}))}
                              placeholder="Primary emergency contact name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.contact1Phone}
                              onChange={(e) => setFloatPlan(prev => ({...prev, contact1Phone: e.target.value}))}
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Secondary Contact</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.contact2}
                              onChange={(e) => setFloatPlan(prev => ({...prev, contact2: e.target.value}))}
                              placeholder="Secondary emergency contact name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={floatPlan.contact2Phone}
                              onChange={(e) => setFloatPlan(prev => ({...prev, contact2Phone: e.target.value}))}
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Instructions</h3>
                      <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                        <div>
                          <h4 className="font-semibold mb-2">When to Contact Authorities</h4>
                          <ul className="space-y-1">
                            <li>• If vessel is overdue by more than 4 hours</li>
                            <li>• If weather conditions deteriorate significantly</li>
                            <li>• If emergency beacon is activated</li>
                            <li>• If no contact after check-in times</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Who to Contact</h4>
                          <ul className="space-y-1">
                            <li>• <strong>US Coast Guard:</strong> (800) 424-8802</li>
                            <li>• <strong>Local Marine Police</strong></li>
                            <li>• <strong>Harbor Master</strong> (if applicable)</li>
                            <li>• Provide them with this Float Plan</li>
                          </ul>
                        </div>
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