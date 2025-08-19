import { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { navigationItems, type NavigationItem } from '../data';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = memo(({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const renderNavItem = useCallback((item: NavigationItem, isMobile = false) => {
    const className = isMobile ? 'nav-link-mobile' : 'nav-link';
    const onClick = isMobile ? handleMobileMenuClose : undefined;

    // If it's a hash link and we're on the home page, use anchor tag
    if (item.path.startsWith('#') && isHomePage) {
      return (
        <a key={item.label} href={item.path} className={className} onClick={onClick}>
          {item.label}
        </a>
      );
    }
    
    // Otherwise use React Router Link with appropriate path
    const linkPath = item.path.startsWith('#') ? `/${item.path}` : item.path;
    return (
      <Link key={item.label} to={linkPath} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }, [handleMobileMenuClose, isHomePage]);

  return (
  <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
  }`} style={{ height: 'var(--header-height)' }}>
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          {/* Ship Burgee Logo */}
          <img src="/burgee.svg" alt={`${SITE_CONFIG.shipName} Burgee`} className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">{SITE_CONFIG.shipName}</h1>
            <p className="text-sm text-gray-600 italic">{SITE_CONFIG.motto}</p>
          </div>
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map(item => renderNavItem(item))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={handleMobileMenuToggle}
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
            {navigationItems.map(item => renderNavItem(item, true))}
          </nav>
        </div>
      )}
    </div>
  </header>
  );
});

Header.displayName = 'Header';