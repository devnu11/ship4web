import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
  <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
  }`} style={{ height: 'var(--header-height)' }}>
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          {/* Ship Burgee Logo */}
          <img src="./burgee.svg" alt="Sea Scout Ship 4 Burgee" className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">{SITE_CONFIG.shipName}</h1>
            <p className="text-sm text-gray-600 italic">{SITE_CONFIG.motto}</p>
          </div>
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            {isHomePage ? (
              <a href="#about" className="text-gray-700 hover:text-ship4-blue transition-colors">About</a>
            ) : (
              <Link to="/#about" className="text-gray-700 hover:text-ship4-blue transition-colors">About</Link>
            )}
            {isHomePage ? (
              <a href="#meetings" className="text-gray-700 hover:text-ship4-blue transition-colors">Meetings</a>
            ) : (
              <Link to="/#meetings" className="text-gray-700 hover:text-ship4-blue transition-colors">Meetings</Link>
            )}
            {isHomePage ? (
              <a href="#events" className="text-gray-700 hover:text-ship4-blue transition-colors">Events</a>
            ) : (
              <Link to="/#events" className="text-gray-700 hover:text-ship4-blue transition-colors">Events</Link>
            )}
            <Link to="/trainings" className="text-gray-700 hover:text-ship4-blue transition-colors">Trainings</Link>
            <Link to="/documentation" className="text-gray-700 hover:text-ship4-blue transition-colors">Documentation</Link>
            {isHomePage ? (
              <a href="#gallery" className="text-gray-700 hover:text-ship4-blue transition-colors">Gallery</a>
            ) : (
              <Link to="/#gallery" className="text-gray-700 hover:text-ship4-blue transition-colors">Gallery</Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="text-gray-700 hover:text-ship4-blue transition-colors">Contact</a>
            ) : (
              <Link to="/#contact" className="text-gray-700 hover:text-ship4-blue transition-colors">Contact</Link>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-2 space-y-1">
            {isHomePage ? (
              <a 
                href="#about" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            ) : (
              <Link 
                to="/#about" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            )}
            {isHomePage ? (
              <a 
                href="#meetings" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </a>
            ) : (
              <Link 
                to="/#meetings" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </Link>
            )}
            {isHomePage ? (
              <a 
                href="#events" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </a>
            ) : (
              <Link 
                to="/#events" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
            )}
            <Link 
              to="/trainings" 
              className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trainings
            </Link>
            <Link 
              to="/documentation" 
              className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            {isHomePage ? (
              <a 
                href="#gallery" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
            ) : (
              <Link 
                to="/#gallery" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            )}
            {isHomePage ? (
              <a 
                href="#contact" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            ) : (
              <Link 
                to="/#contact" 
                className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  </header>
  );
};