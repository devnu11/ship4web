import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import { Anchor, ShoppingBag, ExternalLink } from 'lucide-react';

/**
 * Chandlery Page - Ship 4 Merchandise Store
 * Features the embedded Shopify store for Sea Scout merchandise and gear
 */
export const ChandleryPage = () => {
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
      <SEO 
        title="Chandlery - Sea Scout Merchandise"
        description={`Official merchandise and gear from ${SITE_CONFIG.shipName}. Quality apparel, outdoor gear, patches, and accessories to support our Sea Scout adventures.`}
        type="website"
      />
      <Header isScrolled={isScrolled} />
      
      <main className="pt-[var(--header-height)]">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Anchor className="text-ship-red mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">{SITE_CONFIG.shipShortName} Chandlery</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Your ship's store for official Sea Scout merchandise and quality gear
              </p>
              <p className="text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Just like the great sailing ships of old had their chandleries, {SITE_CONFIG.shipShortName} maintains 
                our own store of essential supplies, gear, and emblems. Every purchase helps fund our adventures, 
                training programs, and equipment needs.
              </p>
            </div>
          </div>
        </section>

        {/* Store Information */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <ShoppingBag className="text-ship-navy mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Gear</h3>
                  <p className="text-gray-600 text-sm">
                    Adidas performance apparel, Columbia outdoor gear, and maritime accessories
                  </p>
                </div>
                <div className="text-center">
                  <svg className="w-8 h-8 text-ship-navy mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-semibold text-gray-900 mb-2">Sea Scout Pride</h3>
                  <p className="text-gray-600 text-sm">
                    Official {SITE_CONFIG.shipShortName} patches, emblems, and branded merchandise
                  </p>
                </div>
                <div className="text-center">
                  <svg className="w-8 h-8 text-ship-navy mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Our Ship</h3>
                  <p className="text-gray-600 text-sm">
                    Proceeds fund sailing adventures, training programs, and equipment
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Store Access */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border p-8">
                <div className="mb-6">
                  <ShoppingBag className="text-ship-navy mx-auto mb-4" size={48} />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Visit Our Chandlery
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Browse our complete collection of Sea Scout merchandise, performance gear, and accessories. 
                    Shop securely on our dedicated Shopify store.
                  </p>
                </div>

                {/* Featured Items Preview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-900">Performance Caps</div>
                    <div className="text-gray-600">Adidas quality</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-900">Polo Shirts</div>
                    <div className="text-gray-600">Space-dyed & sport styles</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-900">Outdoor Gear</div>
                    <div className="text-gray-600">Columbia booney hats</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-900">Ship Patches</div>
                    <div className="text-gray-600">Official emblems</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4">
                  <a
                    href={SITE_CONFIG.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-lg px-8 py-4 flex items-center space-x-3 shadow-lg"
                  >
                    <ShoppingBag className="mr-3" size={24} />
                    Shop Now at Our Chandlery
                    <ExternalLink className="ml-3" size={20} />
                  </a>
                  
                  <div className="text-sm text-gray-500">
                    Secure checkout • Fast shipping • Supporting {SITE_CONFIG.shipShortName} adventures
                  </div>
                </div>

                {/* Store Benefits */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Secure Payment</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span className="text-gray-600">Fast Shipping</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Supports Our Ship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};