import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, FileText, Users, Anchor, ExternalLink, Download, Star } from 'lucide-react';

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
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${resource.isPrimary ? 'ring-2 ring-ship4-blue' : ''}`}>
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
          resource.isPrimary ? 'bg-ship4-blue' : 'bg-gray-100'
        }`}>
          <resource.icon className={`${resource.isPrimary ? 'text-white' : 'text-gray-600'}`} size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${
                resource.isPrimary ? 'bg-ship4-blue text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {resource.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
            </div>
          </div>
          <a 
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-ship4-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-ship4-blue to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Documentation & Resources</h1>
          <p className="text-xl md:text-2xl mb-8">Essential guides for new Sea Scouts and ship formation</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-lg">🎉 Welcome to Ship 4 🎉</p>
          </div>
        </div>
      </section>

      {/* New Scout Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Resources for New Sea Scouts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your Sea Scout journey with these fundamental resources and manuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {seaScoutResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Ship Formation Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ship Formation & Leadership Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guides for establishing and running a successful Sea Scout Ship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {shipFormationResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting materials for ongoing Sea Scout activities and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-ship4-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
              className="bg-white text-ship4-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-semibold"
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