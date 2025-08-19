import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, FileText, Users, ExternalLink, Anchor, AlertTriangle, CheckCircle, Mail } from 'lucide-react';
import { seaScoutResources, shipFormationResources, additionalResources, type Resource } from '../data';
import { SITE_CONFIG } from '../config/siteConfig';

export const DocumentationPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className={resource.isPrimary ? 'card-primary' : 'card'}>
      <div className="flex items-start space-x-4">
        <div className={resource.isPrimary ? 'card-icon-primary' : 'card-icon-secondary'}>
          <resource.icon size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <span className={resource.isPrimary ? 'badge-primary' : 'badge-secondary'}>
                {resource.category}
              </span>
              <h3 className="heading-card">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
            </div>
          </div>
          <a 
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-small"
          >
            <span>View Resource</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-content text-center">
          <h1 className="heading-hero">Documentation & Resources</h1>
          <p className="text-hero-subtitle">Essential guides for new Sea Scouts and ship formation</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-lg">🎉 Welcome to {SITE_CONFIG.shipShortName} 🎉</p>
          </div>
        </div>
      </section>

      {/* New Scout Resources */}
      <section className="page-section">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Essential Resources for New Sea Scouts</h2>
            <p className="text-section-subtitle">
              Start your Sea Scout journey with these fundamental resources and manuals.
            </p>
          </div>

          <div className="grid-cards mb-16">
            {seaScoutResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Ship Formation Resources */}
      <section className="page-section bg-white">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Ship Formation & Leadership Resources</h2>
            <p className="text-section-subtitle">
              Essential guides for establishing and running a successful Sea Scout Ship.
            </p>
          </div>

          <div className="grid-cards">
            {shipFormationResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="page-section">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Additional Resources</h2>
            <p className="text-section-subtitle">
              Supporting materials for ongoing Sea Scout activities and development.
            </p>
          </div>

          <div className="grid-cards">
            {additionalResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Maritime Templates & Placards */}
      <section className="page-section bg-white">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Maritime Templates & Safety Placards</h2>
            <p className="text-section-subtitle">
              Interactive forms and safety checklists for vessel operations and emergency procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Templates Section */}
            <div className="bg-blue-50 rounded-lg p-8 border">
              <div className="flex items-center mb-6">
                <FileText className="text-ship-navy mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Interactive Templates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Official maritime forms that can be completed digitally and automatically submitted 
                to appropriate authorities and emergency contacts.
              </p>
              
              <div className="space-y-4 mb-6">
                <Link 
                  to="/templates/float-plan"
                  className="flex items-center p-3 bg-white rounded-lg border hover:border-ship-navy transition-colors"
                >
                  <Anchor className="text-ship-navy mr-3" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Coast Guard Float Plan</div>
                    <div className="text-sm text-gray-600">Interactive 6-step USCG form</div>
                  </div>
                </Link>
                
                <Link 
                  to="/templates/vessel-safety-check"
                  className="flex items-center p-3 bg-white rounded-lg border hover:border-ship-navy transition-colors"
                >
                  <CheckCircle className="text-ship-navy mr-3" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Vessel Safety Check</div>
                    <div className="text-sm text-gray-600">4-step VSC inspection form</div>
                  </div>
                </Link>
              </div>
              
              <Link 
                to="/templates"
                className="btn-primary w-full justify-center"
              >
                View All Templates
              </Link>
            </div>

            {/* Placards Section */}
            <div className="bg-red-50 rounded-lg p-8 border">
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-ship-red mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Safety Placards</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Printable safety procedure checklists and emergency protocols for posting 
                aboard vessels and reference during operations.
              </p>
              
              <div className="space-y-4 mb-6">
                <Link 
                  to="/placards/safety-briefing"
                  className="flex items-center p-3 bg-white rounded-lg border hover:border-ship-red transition-colors"
                >
                  <Users className="text-ship-red mr-3" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Safety Briefing</div>
                    <div className="text-sm text-gray-600">Pre-departure checklist</div>
                  </div>
                </Link>
                
                <Link 
                  to="/placards/mayday-procedure"
                  className="flex items-center p-3 bg-white rounded-lg border hover:border-ship-red transition-colors"
                >
                  <Mail className="text-ship-red mr-3" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Mayday Procedures</div>
                    <div className="text-sm text-gray-600">Emergency radio calls</div>
                  </div>
                </Link>
                
                <Link 
                  to="/placards/pre-docking-check"
                  className="flex items-center p-3 bg-white rounded-lg border hover:border-ship-red transition-colors"
                >
                  <Anchor className="text-ship-red mr-3" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Pre-Docking Check</div>
                    <div className="text-sm text-gray-600">Docking safety procedures</div>
                  </div>
                </Link>
              </div>
              
              <Link 
                to="/placards"
                className="btn-secondary w-full justify-center"
              >
                View All Placards
              </Link>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-600 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Maritime Safety Requirements</h4>
                <p className="text-yellow-800 text-sm">
                  These templates and placards follow official Coast Guard, USCG Auxiliary, and US Power Squadron 
                  standards. They are designed for actual vessel operations and emergency procedures. 
                  Always consult current maritime regulations and local requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="page-section bg-ship4-blue text-white">
        <div className="container-content text-center">
          <h2 className="heading-section text-white mb-8">Ready to Get Started?</h2>
          <div className="grid-cards-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <BookOpen className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">1. Read the Manual</h3>
              <p>Start with the Sea Scout Manual to understand the program fundamentals.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">2. Complete Safety Training</h3>
              <p>Ensure all members complete required boating safety certification.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">3. Join Our Ship</h3>
              <p>Connect with {SITE_CONFIG.shipShortName} and start your maritime adventure!</p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              to="/#contact" 
              className="btn-secondary"
            >
              Contact {SITE_CONFIG.shipShortName}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};