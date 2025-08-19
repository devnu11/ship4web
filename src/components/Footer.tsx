import { memo } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer = memo(() => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container-content">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-48 h-48 bg-ship4-blue rounded-full flex items-center justify-center">
            <img src="./logo transparent.svg" alt={`${SITE_CONFIG.shipName} Logo`} className="w-full h-full object-contain" />
          </div>
        </div>
        <p className="text-xl font-bold">{SITE_CONFIG.shipName}</p>
        <p className="text-gray-400 italic mb-4">{SITE_CONFIG.motto}</p>
        <p className="text-gray-500 text-sm">
          © 2025 {SITE_CONFIG.shipName}, {SITE_CONFIG.city}. Chartered by {SITE_CONFIG.charterOrg}.
        </p>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';