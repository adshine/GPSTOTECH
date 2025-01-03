import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = 'GPS to Tech - Career Guidance Platform',
  description = 'A Smart, Enterprise-Ready desktop application that helps Career Advisors and Counsellors guide Clients into the right tech roles',
  keywords = ['career guidance', 'tech careers', 'career counseling', 'tech jobs', 'career advisor'],
  image = '/og-image.jpg', // Make sure to add this image in your public folder
  url = 'https://gpstotech.com',
  type = 'website'
}: SEOProps) {
  const siteTitle = title.includes('GPS to Tech') ? title : `${title} | GPS to Tech`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'GPS to Tech',
          description,
          url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>
    </Helmet>
  );
} 