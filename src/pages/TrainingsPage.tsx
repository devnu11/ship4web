import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, Anchor, Users, Calendar } from 'lucide-react';

export const TrainingsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trainingPrograms = [
    {
      title: "Basic Seamanship",
      description: "Essential skills for all Sea Scouts including knot tying, line handling, and boat safety.",
      icon: Anchor,
      topics: ["Knots and Splices", "Line Handling", "Boat Safety", "Navigation Basics"]
    },
    {
      title: "Leadership Development", 
      description: "Build leadership skills through hands-on maritime experiences and team challenges.",
      icon: Users,
      topics: ["Team Leadership", "Communication", "Decision Making", "Conflict Resolution"]
    },
    {
      title: "Advanced Navigation",
      description: "Chart reading, compass work, and modern GPS navigation techniques.",
      icon: BookOpen,
      topics: ["Chart Reading", "Compass Navigation", "GPS Systems", "Weather Patterns"]
    },
    {
      title: "Sailing Certification",
      description: "Comprehensive sailing program leading to US Sailing certification.",
      icon: Calendar,
      topics: ["Sailing Theory", "Boat Handling", "Safety Procedures", "Certification Prep"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-ship4-blue to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl md:text-2xl mb-8">Develop seamanship skills and leadership through comprehensive training</p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ship 4 offers comprehensive training programs designed to develop maritime skills, 
              leadership abilities, and character in young mariners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ship4-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <program.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900">Topics Covered:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Schedule</h2>
            <p className="text-xl text-gray-600">Regular training sessions to build your maritime skills</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Training</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">Second Sunday of each month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">4:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">Patriots Hall, Dripping Springs</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Special Training Events</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Weekend sailing workshops</p>
                  <p className="text-gray-700">• Leadership development retreats</p>
                  <p className="text-gray-700">• Advanced certification courses</p>
                  <p className="text-gray-700">• Regional training opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t text-center">
              <Link 
                to="/#contact" 
                className="bg-ship4-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Join Our Training Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};