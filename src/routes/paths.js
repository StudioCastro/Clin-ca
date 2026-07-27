export const PATHS = {
  home: '/',
  about: '/sobre',
  treatments: '/tratamentos',
  treatmentDetail: (slug = ':slug') => `/tratamentos/${slug}`,
  team: '/equipe',
  testimonials: '/depoimentos',
  blog: '/blog',
  blogPost: (slug = ':slug') => `/blog/${slug}`,
  contact: '/contato',
  privacyPolicy: '/politica-de-privacidade',
  terms: '/termos',
}
