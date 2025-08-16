import { SITE_CONFIG } from '../config/siteConfig';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = ({ isScrolled }: HeaderProps) => (
  <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
  }`}>
    <div className="container mx-auto px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Ship Burgee Logo */}
          <img src="./burgee.svg" alt="Sea Scout Ship 4 Burgee" className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">{SITE_CONFIG.shipName}</h1>
            <p className="text-sm text-gray-600 italic">{SITE_CONFIG.motto}</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-ship4-blue transition-colors">About</a>
          <a href="#meetings" className="text-gray-700 hover:text-ship4-blue transition-colors">Meetings</a>
          <a href="#events" className="text-gray-700 hover:text-ship4-blue transition-colors">Events</a>
          <a href="#gallery" className="text-gray-700 hover:text-ship4-blue transition-colors">Gallery</a>
          <a href="#contact" className="text-gray-700 hover:text-ship4-blue transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);