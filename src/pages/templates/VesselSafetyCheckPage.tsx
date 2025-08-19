import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { SITE_CONFIG } from '../../config/siteConfig';
import { CheckCircle, AlertTriangle, Mail, Download, Save, Ship, LifeBuoy, Anchor, Zap } from 'lucide-react';

interface VSCData {
  // Vessel Information
  vesselName: string;
  registrationNumber: string;
  hullIdNumber: string;
  yearMade: string;
  length: string;
  beam: string;
  propulsion: string;
  fuelType: string;
  
  // Owner Information
  ownerName: string;
  ownerAddress: string;
  ownerCity: string;
  ownerState: string;
  ownerZip: string;
  ownerPhone: string;
  
  // Inspection Items
  registrationCertificate: boolean;
  registrationNumbers: boolean;
  pfdType1: number;
  pfdType2: number;
  pfdType3: number;
  pfdType4: number;
  pfdType5: number;
  throwableDevice: boolean;
  fireExtinguisher: boolean;
  backflameFlameArrestor: boolean;
  ventilation: boolean;
  whistle: boolean;
  horn: boolean;
  visualDistressSignals: boolean;
  navigationLights: boolean;
  
  // Additional Safety Items
  marineSanitation: string;
  pollution: boolean;
  numbersSize: boolean;
  numbersColor: boolean;
  numbersContrast: boolean;
  
  // Inspector Information
  inspectorName: string;
  inspectorCertification: string;
  inspectionDate: string;
  examinationPassed: boolean;
  
  // Deficiencies
  deficiencies: string[];
  recommendations: string;
}

/**
 * Vessel Safety Check (VSC) Form Page
 * Interactive USCG Auxiliary/USPS Vessel Safety Check form
 */
export const VesselSafetyCheckPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [vscData, setVscData] = useState<VSCData>({
    // Initialize with empty values
    vesselName: '',
    registrationNumber: '',
    hullIdNumber: '',
    yearMade: '',
    length: '',
    beam: '',
    propulsion: '',
    fuelType: '',
    ownerName: '',
    ownerAddress: '',
    ownerCity: '',
    ownerState: '',
    ownerZip: '',
    ownerPhone: '',
    registrationCertificate: false,
    registrationNumbers: false,
    pfdType1: 0,
    pfdType2: 0,
    pfdType3: 0,
    pfdType4: 0,
    pfdType5: 0,
    throwableDevice: false,
    fireExtinguisher: false,
    backflameFlameArrestor: false,
    ventilation: false,
    whistle: false,
    horn: false,
    visualDistressSignals: false,
    navigationLights: false,
    marineSanitation: '',
    pollution: false,
    numbersSize: false,
    numbersColor: false,
    numbersContrast: false,
    inspectorName: '',
    inspectorCertification: '',
    inspectionDate: '',
    examinationPassed: false,
    deficiencies: [],
    recommendations: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addDeficiency = () => {
    setVscData(prev => ({
      ...prev,
      deficiencies: [...prev.deficiencies, '']
    }));
  };

  const removeDeficiency = (index: number) => {
    setVscData(prev => ({
      ...prev,
      deficiencies: prev.deficiencies.filter((_, i) => i !== index)
    }));
  };

  const updateDeficiency = (index: number, value: string) => {
    setVscData(prev => ({
      ...prev,
      deficiencies: prev.deficiencies.map((def, i) => i === index ? value : def)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would implement the submission logic to USPS/USCG Auxiliary
    alert('VSC form would be submitted to the appropriate Power Squadron or Coast Guard Auxiliary unit. Email functionality requires backend implementation.');
  };

  const steps = [
    'Vessel & Owner Info',
    'Safety Equipment',
    'Navigation & Compliance',
    'Inspector & Results'
  ];

  const calculateTotalPFDs = () => {
    return vscData.pfdType1 + vscData.pfdType2 + vscData.pfdType3 + vscData.pfdType4 + vscData.pfdType5;
  };

  const getPassFailStatus = () => {
    const criticalItems = [
      vscData.registrationCertificate,
      vscData.registrationNumbers,
      calculateTotalPFDs() > 0,
      vscData.fireExtinguisher,
      vscData.whistle || vscData.horn,
      vscData.visualDistressSignals,
      vscData.navigationLights
    ];
    
    const passedItems = criticalItems.filter(item => item).length;
    const totalItems = criticalItems.length;
    
    return {
      passed: passedItems,
      total: totalItems,
      percentage: Math.round((passedItems / totalItems) * 100),
      allPassed: passedItems === totalItems
    };
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vessel Safety Check - Interactive VSC Form"
        description={`Complete and submit a Vessel Safety Check (VSC) inspection form for ${SITE_CONFIG.shipName} vessels. Official USCG Auxiliary and USPS format.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Vessel Safety Check</h1>
              </div>
              <p className="text-xl text-blue-100 mb-4">
                Interactive VSC Inspection Form
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Complete this Vessel Safety Check form for annual safety inspection. 
                This form follows USCG Auxiliary and US Power Squadrons standards for recreational vessel safety.
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

              {/* Status Indicator */}
              <div className="bg-white rounded-lg shadow p-4 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <span className="font-medium text-gray-900">Safety Check Progress</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      getPassFailStatus().allPassed 
                        ? 'bg-green-100 text-green-800' 
                        : getPassFailStatus().percentage > 70 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {getPassFailStatus().passed}/{getPassFailStatus().total} Items ({getPassFailStatus().percentage}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                
                {/* Step 1: Vessel & Owner Information */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Ship className="mr-3 text-ship-navy" size={24} />
                      Vessel & Owner Information
                    </h2>
                    
                    {/* Vessel Information */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Vessel Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Vessel Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.vesselName}
                            onChange={(e) => setVscData(prev => ({...prev, vesselName: e.target.value}))}
                            placeholder="e.g., Sea Scout Spirit"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Registration/Documentation Number *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.registrationNumber}
                            onChange={(e) => setVscData(prev => ({...prev, registrationNumber: e.target.value}))}
                            placeholder="e.g., TX-1234-AB"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hull Identification Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.hullIdNumber}
                            onChange={(e) => setVscData(prev => ({...prev, hullIdNumber: e.target.value}))}
                            placeholder="17-digit HIN"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year Made *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.yearMade}
                            onChange={(e) => setVscData(prev => ({...prev, yearMade: e.target.value}))}
                            placeholder="e.g., 2018"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Length (ft) *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={vscData.length}
                              onChange={(e) => setVscData(prev => ({...prev, length: e.target.value}))}
                              placeholder="e.g., 30"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Beam (ft)
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={vscData.beam}
                              onChange={(e) => setVscData(prev => ({...prev, beam: e.target.value}))}
                              placeholder="e.g., 10"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Propulsion *
                            </label>
                            <select
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={vscData.propulsion}
                              onChange={(e) => setVscData(prev => ({...prev, propulsion: e.target.value}))}
                            >
                              <option value="">Select</option>
                              <option value="Outboard">Outboard</option>
                              <option value="Inboard">Inboard</option>
                              <option value="Stern Drive">Stern Drive</option>
                              <option value="Sail">Sail</option>
                              <option value="Manual">Manual (oars/paddle)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Fuel Type
                            </label>
                            <select
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                              value={vscData.fuelType}
                              onChange={(e) => setVscData(prev => ({...prev, fuelType: e.target.value}))}
                            >
                              <option value="">Select</option>
                              <option value="Gasoline">Gasoline</option>
                              <option value="Diesel">Diesel</option>
                              <option value="Electric">Electric</option>
                              <option value="None">None</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Owner Information */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Owner Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Owner Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.ownerName}
                            onChange={(e) => setVscData(prev => ({...prev, ownerName: e.target.value}))}
                            placeholder="Full name"
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
                            value={vscData.ownerPhone}
                            onChange={(e) => setVscData(prev => ({...prev, ownerPhone: e.target.value}))}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.ownerAddress}
                            onChange={(e) => setVscData(prev => ({...prev, ownerAddress: e.target.value}))}
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
                              value={vscData.ownerCity}
                              onChange={(e) => setVscData(prev => ({...prev, ownerCity: e.target.value}))}
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
                              value={vscData.ownerState}
                              onChange={(e) => setVscData(prev => ({...prev, ownerState: e.target.value}))}
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
                              value={vscData.ownerZip}
                              onChange={(e) => setVscData(prev => ({...prev, ownerZip: e.target.value}))}
                              placeholder="ZIP"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Safety Equipment */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <LifeBuoy className="mr-3 text-ship-navy" size={24} />
                      Safety Equipment Inspection
                    </h2>
                    
                    {/* Personal Flotation Devices */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Flotation Devices (PFDs)</h3>
                      
                      <div className="grid md:grid-cols-5 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type I
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.pfdType1}
                            onChange={(e) => setVscData(prev => ({...prev, pfdType1: parseInt(e.target.value) || 0}))}
                          />
                          <p className="text-xs text-gray-600 mt-1">Offshore</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type II
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.pfdType2}
                            onChange={(e) => setVscData(prev => ({...prev, pfdType2: parseInt(e.target.value) || 0}))}
                          />
                          <p className="text-xs text-gray-600 mt-1">Near Shore</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type III
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.pfdType3}
                            onChange={(e) => setVscData(prev => ({...prev, pfdType3: parseInt(e.target.value) || 0}))}
                          />
                          <p className="text-xs text-gray-600 mt-1">Flotation Aid</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type IV
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.pfdType4}
                            onChange={(e) => setVscData(prev => ({...prev, pfdType4: parseInt(e.target.value) || 0}))}
                          />
                          <p className="text-xs text-gray-600 mt-1">Throwable</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type V
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.pfdType5}
                            onChange={(e) => setVscData(prev => ({...prev, pfdType5: parseInt(e.target.value) || 0}))}
                          />
                          <p className="text-xs text-gray-600 mt-1">Special Use</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Total PFDs:</strong> {calculateTotalPFDs()}
                        </p>
                        <p className="text-xs text-gray-500">
                          Federal law requires one wearable PFD for each person on board, plus one throwable for vessels 16+ feet.
                        </p>
                      </div>
                    </div>

                    {/* Fire Safety */}
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Fire Safety & Fuel System</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="fireExtinguisher"
                              checked={vscData.fireExtinguisher}
                              onChange={(e) => setVscData(prev => ({...prev, fireExtinguisher: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="fireExtinguisher" className="text-sm font-medium text-gray-700">
                              Fire Extinguisher (USCG Approved)
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="backflameFlameArrestor"
                              checked={vscData.backflameFlameArrestor}
                              onChange={(e) => setVscData(prev => ({...prev, backflameFlameArrestor: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="backflameFlameArrestor" className="text-sm font-medium text-gray-700">
                              Backfire Flame Arrestor
                            </label>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="ventilation"
                              checked={vscData.ventilation}
                              onChange={(e) => setVscData(prev => ({...prev, ventilation: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="ventilation" className="text-sm font-medium text-gray-700">
                              Ventilation System
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="pollution"
                              checked={vscData.pollution}
                              onChange={(e) => setVscData(prev => ({...prev, pollution: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="pollution" className="text-sm font-medium text-gray-700">
                              Pollution Prevention
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sound Signals */}
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Sound Signaling Devices</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="whistle"
                            checked={vscData.whistle}
                            onChange={(e) => setVscData(prev => ({...prev, whistle: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="whistle" className="text-sm font-medium text-gray-700">
                            Whistle (vessels under 39.4 ft)
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="horn"
                            checked={vscData.horn}
                            onChange={(e) => setVscData(prev => ({...prev, horn: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="horn" className="text-sm font-medium text-gray-700">
                            Horn (vessels 39.4+ ft)
                          </label>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mt-3">
                        One sound signaling device required. Whistle for smaller vessels, horn for larger vessels.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Navigation & Compliance */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Anchor className="mr-3 text-ship-navy" size={24} />
                      Navigation & Compliance
                    </h2>
                    
                    {/* Registration & Documentation */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Registration & Documentation</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="registrationCertificate"
                            checked={vscData.registrationCertificate}
                            onChange={(e) => setVscData(prev => ({...prev, registrationCertificate: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="registrationCertificate" className="text-sm font-medium text-gray-700">
                            Registration Certificate On Board
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="registrationNumbers"
                            checked={vscData.registrationNumbers}
                            onChange={(e) => setVscData(prev => ({...prev, registrationNumbers: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="registrationNumbers" className="text-sm font-medium text-gray-700">
                            Registration Numbers Displayed
                          </label>
                        </div>
                        
                        <div className="ml-6 grid md:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="numbersSize"
                              checked={vscData.numbersSize}
                              onChange={(e) => setVscData(prev => ({...prev, numbersSize: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="numbersSize" className="text-xs text-gray-600">
                              Correct Size (3" minimum)
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="numbersColor"
                              checked={vscData.numbersColor}
                              onChange={(e) => setVscData(prev => ({...prev, numbersColor: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="numbersColor" className="text-xs text-gray-600">
                              Correct Color
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              id="numbersContrast"
                              checked={vscData.numbersContrast}
                              onChange={(e) => setVscData(prev => ({...prev, numbersContrast: e.target.checked}))}
                              className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                            />
                            <label htmlFor="numbersContrast" className="text-xs text-gray-600">
                              Good Contrast
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Equipment */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation & Distress Signals</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="navigationLights"
                            checked={vscData.navigationLights}
                            onChange={(e) => setVscData(prev => ({...prev, navigationLights: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="navigationLights" className="text-sm font-medium text-gray-700">
                            Navigation Lights (operational)
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="visualDistressSignals"
                            checked={vscData.visualDistressSignals}
                            onChange={(e) => setVscData(prev => ({...prev, visualDistressSignals: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="visualDistressSignals" className="text-sm font-medium text-gray-700">
                            Visual Distress Signals (if required)
                          </label>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 mt-3">
                        Visual distress signals required for vessels operating on coastal waters, Great Lakes, and territorial seas.
                      </p>
                    </div>

                    {/* Marine Sanitation */}
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Marine Sanitation Device (MSD)</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          MSD Status
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                          value={vscData.marineSanitation}
                          onChange={(e) => setVscData(prev => ({...prev, marineSanitation: e.target.value}))}
                        >
                          <option value="">Select Status</option>
                          <option value="Not Applicable">Not Applicable (no installed toilet)</option>
                          <option value="Type I">Type I MSD (USCG Certified)</option>
                          <option value="Type II">Type II MSD (USCG Certified)</option>
                          <option value="Type III">Type III MSD (holding tank)</option>
                          <option value="Portable">Portable toilet (removable)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Inspector & Results */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="mr-3 text-ship-navy" size={24} />
                      Inspector Information & Results
                    </h2>
                    
                    {/* Inspector Details */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Inspector Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inspector Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.inspectorName}
                            onChange={(e) => setVscData(prev => ({...prev, inspectorName: e.target.value}))}
                            placeholder="Full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certification/Organization *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.inspectorCertification}
                            onChange={(e) => setVscData(prev => ({...prev, inspectorCertification: e.target.value}))}
                            placeholder="e.g., USCG Auxiliary, USPS"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inspection Date *
                          </label>
                          <input
                            type="date"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            value={vscData.inspectionDate}
                            onChange={(e) => setVscData(prev => ({...prev, inspectionDate: e.target.value}))}
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="examinationPassed"
                            checked={vscData.examinationPassed}
                            onChange={(e) => setVscData(prev => ({...prev, examinationPassed: e.target.checked}))}
                            className="rounded border-gray-300 text-ship-navy focus:ring-ship-navy"
                          />
                          <label htmlFor="examinationPassed" className="text-sm font-medium text-gray-700">
                            Vessel Safety Check PASSED
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Final Status */}
                    <div className={`p-6 rounded-lg border-2 ${
                      getPassFailStatus().allPassed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-yellow-50 border-yellow-200'
                    }`}>
                      <h3 className={`text-lg font-semibold mb-4 ${
                        getPassFailStatus().allPassed ? 'text-green-800' : 'text-yellow-800'
                      }`}>
                        Safety Check Status
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <CheckCircle 
                              className={`mr-2 ${getPassFailStatus().allPassed ? 'text-green-600' : 'text-yellow-600'}`} 
                              size={20} 
                            />
                            <span className={`font-medium ${
                              getPassFailStatus().allPassed ? 'text-green-800' : 'text-yellow-800'
                            }`}>
                              {getPassFailStatus().passed}/{getPassFailStatus().total} Safety Items Complete 
                              ({getPassFailStatus().percentage}%)
                            </span>
                          </div>
                          
                          {!getPassFailStatus().allPassed && (
                            <div className="bg-white p-4 rounded border border-yellow-300">
                              <h4 className="font-medium text-yellow-900 mb-2">Required Items Missing:</h4>
                              <ul className="text-sm text-yellow-800 space-y-1">
                                {!vscData.registrationCertificate && <li>• Registration Certificate</li>}
                                {!vscData.registrationNumbers && <li>• Registration Numbers Displayed</li>}
                                {calculateTotalPFDs() === 0 && <li>• Personal Flotation Devices</li>}
                                {!vscData.fireExtinguisher && <li>• Fire Extinguisher</li>}
                                {!vscData.whistle && !vscData.horn && <li>• Sound Signaling Device</li>}
                                {!vscData.visualDistressSignals && <li>• Visual Distress Signals (if required)</li>}
                                {!vscData.navigationLights && <li>• Navigation Lights</li>}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Recommendations
                          </label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ship-navy"
                            rows={6}
                            value={vscData.recommendations}
                            onChange={(e) => setVscData(prev => ({...prev, recommendations: e.target.value}))}
                            placeholder="Inspector recommendations for safety improvements, additional equipment, maintenance items, etc."
                          />
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
                      <span>Submit VSC Form</span>
                    </button>
                  )}
                </div>
              </form>

              {/* VSC Information */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">About Vessel Safety Checks</h3>
                    <div className="text-blue-800 text-sm space-y-2">
                      <p>
                        A Vessel Safety Check (VSC) is a free examination of your boat conducted by certified inspectors 
                        from the Coast Guard Auxiliary or US Power Squadrons.
                      </p>
                      <p>
                        <strong>Benefits:</strong> Safety awareness, compliance verification, insurance discounts, and the VSC decal 
                        shows you're committed to safe boating.
                      </p>
                      <p>
                        <strong>Not a Legal Inspection:</strong> VSCs are voluntary and educational. No citations are issued if your vessel doesn't pass.
                      </p>
                    </div>
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