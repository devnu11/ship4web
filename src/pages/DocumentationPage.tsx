import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, FileText, Users, ExternalLink } from 'lucide-react';
import { seaScoutResources, shipFormationResources, additionalResources, type Resource } from '../data';

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
            <p className="text-lg">🎉 Welcome to Ship 4 🎉</p>
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
              <p>Connect with Ship 4 and start your maritime adventure!</p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              to="/#contact" 
              className="btn-secondary"
            >
              Contact Ship 4
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};