import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '../pages/HomePage';
import { TrainingsPage } from '../pages/TrainingsPage';
import { DocumentationPage } from '../pages/DocumentationPage';
import { ChandleryPage } from '../pages/ChandleryPage';
import { TemplatesPage } from '../pages/TemplatesPage';
import { PlacardsPage } from '../pages/PlacardsPage';
import { FloatPlanPage } from '../pages/templates/FloatPlanPage';
import { VesselSafetyCheckPage } from '../pages/templates/VesselSafetyCheckPage';
import { SafetyBriefingPage } from '../pages/placards/SafetyBriefingPage';
import { MaydayProcedurePage } from '../pages/placards/MaydayProcedurePage';
import { PreDockingCheckPage } from '../pages/placards/PreDockingCheckPage';
import { SEO } from './SEO';
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/structuredData';

// Component to handle scroll behavior on route changes
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're navigating to a hash anchor on the home page
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure the page is rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // For regular page navigation, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
};

/**
 * Main App Component for Sea Scout Ship 4 Website
 * A modern, responsive website for Sea Scout Ship 4 based in Dripping Springs, TX
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Google Calendar integration ready
 * - Google Sheets data integration ready
 * - Modular component structure
 * - Accessible design with proper ARIA labels
 * - SEO-optimized structure
 * - Multi-page routing for additional content
 */
export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <SEO 
          structuredData={[
            generateOrganizationSchema(),
            generateWebsiteSchema()
          ]}
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/chandlery" element={<ChandleryPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/placards" element={<PlacardsPage />} />
          <Route path="/templates/float-plan" element={<FloatPlanPage />} />
          <Route path="/templates/vessel-safety-check" element={<VesselSafetyCheckPage />} />
          <Route path="/placards/safety-briefing" element={<SafetyBriefingPage />} />
          <Route path="/placards/mayday-procedure" element={<MaydayProcedurePage />} />
          <Route path="/placards/pre-docking-check" element={<PreDockingCheckPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};