import { siteConfig } from './siteConfig.js'

export const SEO_DEFAULTS = {
  titleTemplate: (title) => (title ? `${title} | ${siteConfig.name}` : siteConfig.name),
  defaultDescription: siteConfig.description,
  ogImage: `${siteConfig.url}/og-cover.svg`,
  twitterHandle: '@sorrisoodontologia',
  locale: 'pt_BR',
}
