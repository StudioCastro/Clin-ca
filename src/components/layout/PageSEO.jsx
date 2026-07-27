import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../constants/siteConfig.js'
import { SEO_DEFAULTS } from '../../constants/seoDefaults.js'

export default function PageSEO({ title, description, path = '/', image, jsonLd = [], noIndex = false }) {
  const fullTitle = SEO_DEFAULTS.titleTemplate(title)
  const metaDescription = description ?? SEO_DEFAULTS.defaultDescription
  const canonicalUrl = `${siteConfig.url}${path}`
  const ogImage = image ?? SEO_DEFAULTS.ogImage
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
