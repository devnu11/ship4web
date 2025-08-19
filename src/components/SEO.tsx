import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  image?: string;
  url?: string;
  keywords?: string[];
  structuredData?: object;
}

export const SEO = ({
  title = SITE_CONFIG.shipName,
  description = `Maritime adventure and leadership development for youth in ${SITE_CONFIG.location}`,
  type = 'website',
  image = '/logo-social.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  keywords = ['Sea Scouts', 'Youth', 'Maritime', 'Sailing', 'Leadership', 'Texas', 'BSA'],
  structuredData
}: SEOProps) => {
  const fullTitle = title === SITE_CONFIG.shipName ? title : `${title} | ${SITE_CONFIG.shipName}`;
  const siteName = `${SITE_CONFIG.shipName} - ${SITE_CONFIG.location}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_CONFIG.shipName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};