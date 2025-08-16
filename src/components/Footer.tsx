import { SITE_CONFIG } from '../config/siteConfig';

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-ship4-blue rounded-full flex items-center justify-center">
            <span className="font-bold">4</span>
          </div>
          <span className="text-xl font-bold">{SITE_CONFIG.shipName}</span>
        </div>
        <p className="text-gray-400 italic mb-4">{SITE_CONFIG.motto}</p>
        <p className="text-gray-500 text-sm">
          © 2025 Sea Scout Ship 4, Dripping Springs. Chartered by {SITE_CONFIG.charterOrg}.
        </p>
      </div>
    </div>
  </footer>
);