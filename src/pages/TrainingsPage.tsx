import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar } from 'lucide-react';
import { trainingPrograms } from '../data';

export const TrainingsPage = () => {
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
      <Header isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-content text-center">
          <h1 className="heading-hero">Training Programs</h1>
          <p className="text-hero-subtitle">Develop seamanship skills and leadership through comprehensive training</p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="page-section bg-white">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Our Training Programs</h2>
            <p className="text-section-subtitle">
              Ship 4 offers comprehensive training programs designed to develop maritime skills, 
              leadership abilities, and character in young mariners.
            </p>
          </div>

          <div className="grid-cards">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="card bg-gray-50">
                <div className="flex items-start space-x-4">
                  <div className="card-icon-primary">
                    <program.icon size={24} />
                  </div>
                  <div>
                    <h3 className="heading-card">{program.title}</h3>
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
      <section className="page-section-alt">
        <div className="container-content">
          <div className="section-header">
            <h2 className="heading-section">Training Schedule</h2>
            <p className="text-section-subtitle">Regular training sessions to build your maritime skills</p>
          </div>
          
          <div className="max-w-4xl mx-auto card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-card">Monthly Training</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">Second Sunday of each month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">4:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-ship4-blue" size={20} />
                    <span className="text-gray-700">Patriots Hall, Dripping Springs</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-card">Special Training Events</h3>
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
                className="btn-primary"
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