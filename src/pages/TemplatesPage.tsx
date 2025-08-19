import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import { FileText, Mail, Download, CheckCircle, AlertTriangle, Anchor } from 'lucide-react';

/**
 * Templates Page - Interactive Maritime Forms
 * Features downloadable templates and interactive forms for Sea Scout operations
 */
export const TemplatesPage = () => {
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
        title="Templates - Maritime Forms & Documentation"
        description={`Interactive maritime forms and templates for ${SITE_CONFIG.shipName}. Float plans, vessel safety checks, and official documentation.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <FileText className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Templates & Forms</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Interactive maritime forms and official documentation templates
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Complete and submit required maritime forms digitally. These interactive templates 
                help ensure proper documentation for all {SITE_CONFIG.shipShortName} activities and comply with Coast Guard requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Float Plan Form */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-blue-50 border-b">
                    <div className="flex items-center mb-2">
                      <Anchor className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Float Plan</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Interactive Coast Guard Float Plan form with automatic email submission
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Interactive Form</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Mail size={16} className="mr-2" />
                        <span className="text-sm font-medium">Auto-Email to Contacts</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">PDF Generation</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Required for all overnight trips and extended voyages. Submit to emergency contacts 
                      and Coast Guard as needed.
                    </p>
                    
                    <a
                      href="/templates/float-plan"
                      className="btn-primary w-full justify-center"
                    >
                      <FileText size={20} />
                      Complete Float Plan
                    </a>
                  </div>
                </div>

                {/* Vessel Safety Check Form */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-orange-50 border-b">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Vessel Safety Check</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Digital VSC inspection form with automatic submission to Power Squadron
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Digital Checklist</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Mail size={16} className="mr-2" />
                        <span className="text-sm font-medium">Submit to USPS</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Certificate Generation</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Annual vessel safety inspection required for Sea Scout vessels. Complete inspection 
                      and receive your VSC decal.
                    </p>
                    
                    <a
                      href="/templates/vessel-safety-check"
                      className="btn-primary w-full justify-center"
                    >
                      <CheckCircle size={20} />
                      Start Safety Check
                    </a>
                  </div>
                </div>

                {/* Trip Report Template */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-green-50 border-b">
                    <div className="flex items-center mb-2">
                      <FileText className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Trip Report</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Post-voyage documentation and incident reporting
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Structured Form</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Mail size={16} className="mr-2" />
                        <span className="text-sm font-medium">Auto-Submit to Leaders</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Archive Copy</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Document voyage activities, weather conditions, incidents, and lessons learned 
                      for future reference.
                    </p>
                    
                    <a
                      href="/templates/trip-report"
                      className="btn-primary w-full justify-center"
                    >
                      <FileText size={20} />
                      Complete Trip Report
                    </a>
                  </div>
                </div>

                {/* Emergency Contact Form */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <div className="p-6 bg-red-50 border-b">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="text-ship-navy mr-3" size={24} />
                      <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Crew emergency contact information and medical data
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle size={16} className="mr-2" />
                        <span className="text-sm font-medium">Secure Storage</span>
                      </div>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Mail size={16} className="mr-2" />
                        <span className="text-sm font-medium">Emergency Notification</span>
                      </div>
                      <div className="flex items-center text-purple-600 mb-4">
                        <Download size={16} className="mr-2" />
                        <span className="text-sm font-medium">Waterproof Copy</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Collect and securely store emergency contact information and medical alerts 
                      for all crew members.
                    </p>
                    
                    <a
                      href="/templates/emergency-contacts"
                      className="btn-primary w-full justify-center"
                    >
                      <AlertTriangle size={20} />
                      Manage Contacts
                    </a>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mt-12 bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="mr-2" size={24} />
                  How to Use These Templates
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interactive Forms</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Fill out forms directly in your browser. Data is validated in real-time 
                      and can be saved for future use.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automatic Submission</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Forms are automatically emailed to the appropriate contacts (Coast Guard, 
                      Power Squadron, emergency contacts, etc.).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PDF Generation</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Generate official PDF copies for your records and waterproof storage aboard vessel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete forms on any device - smartphone, tablet, or computer. Perfect for 
                      shipboard use.
                    </p>
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