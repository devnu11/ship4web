import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, FileText, Users, Anchor, ExternalLink, Star } from 'lucide-react';

export const DocumentationPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const seaScoutResources = [
    {
      title: "Sea Scout Manual",
      description: "The official handbook for all Sea Scouts covering advancement, activities, and traditions.",
      url: "https://seascout.org/wp-content/uploads/2025/02/3323925-Sea-Scout-Manual-PDF-Posted-02182025.pdf",
      icon: BookOpen,
      category: "Essential",
      isPrimary: true
    },
    {
      title: "Youth Training",
      description: "Comprehensive guide to seamanship, leadership, and outdoor adventures on the water.",
      url: "https://seascout.org/youth-training-and-education/",
      icon: Anchor,
      category: "Essential",
      isPrimary: true
    },
    {
      title: "Texas Boating Safety Course",
      description: "Required safety certification for all Sea Scouts and Scouters in command of a vessel.",
      url: "https://tpwd.texas.gov/education/boater-education",
      icon: FileText,
      category: "Safety",
      isPrimary: false
    },
    {
      title: "Sea Scout Advancement Requirements",
      description: "Summary of the Sea Scout advancement requirements.",
      url: "https://seascout.org/wp-content/uploads/2024/09/2024-Sea-Scout-Advancement47.pdf",
      icon: Star,
      category: "Advancement",
      isPrimary: false
    }
  ];

  const shipFormationResources = [
    {
      title: "Starting a New Sea Scout Ship",
      description: "Complete guide to chartering and organizing a new Sea Scout Ship.",
      url: "https://www.scouting.org/programs/sea-scouts/local-council-support/starting-a-ship/",
      icon: Users,
      category: "Ship Formation",
      isPrimary: true
    },
    {
      title: "New Ship Organization Kit",
      description: "Forms, requirements, and procedures for officially chartering your ship.",
      url: "https://seascout.org/new-ship-organization-kit//",
      icon: FileText,
      category: "Administrative",
      isPrimary: true
    },
    {
      title: "Sea Scout Ship Committee Guide",
      description: "Guidelines for establishing and operating an effective ship committee.",
      url: "https://www.scouting.org/programs/sea-scouts/adults/",
      icon: Users,
      category: "Leadership",
      isPrimary: false
    },
    {
      title: "Sea Scout Adult Leader Training",
      description: "Training modules required for all adult leaders in Sea Scout Ships.",
      url: "https://www.scouting.org/training/adult/",
      icon: BookOpen,
      category: "Training",
      isPrimary: false
    }
  ];

  const additionalResources = [
    {
      title: "BSA Youth Protection Training",
      description: "Mandatory training for all adult leaders and volunteers.",
      url: "https://www.scouting.org/training/youth-protection/",
      icon: FileText,
      category: "Required",
      isPrimary: true
    },
    {
      title: "Sea Scout Uniform and Insignia Guide",
      description: "Official guide to proper Sea Scout uniform and insignia placement.",
      url: "https://www.scouting.org/resources/insignia-guide/",
      icon: Star,
      category: "Uniform",
      isPrimary: false
    },
    {
      title: "Maritime Heritage and Traditions",
      description: "Learn about the rich maritime traditions that Sea Scouting celebrates.",
      url: "https://www.scouting.org/programs/sea-scouts/about/",
      icon: Anchor,
      category: "Culture",
      isPrimary: false
    },
    {
      title: "Sea Scout Activities and Events",
      description: "Calendar of regional and national Sea Scout events and regattas.",
      url: "https://www.scouting.org/programs/sea-scouts/activities/",
      icon: Users,
      category: "Events",
      isPrimary: false
    }
  ];

  const ResourceCard = ({ resource }: { resource: any }) => (
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