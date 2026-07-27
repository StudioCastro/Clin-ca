import { PATHS } from '../routes/paths.js'

export const NAV_LINKS = [
  { label: 'Home', to: PATHS.home },
  { label: 'Sobre', to: PATHS.about },
  { label: 'Tratamentos', to: PATHS.treatments },
  { label: 'Equipe', to: PATHS.team },
  { label: 'Depoimentos', to: PATHS.testimonials },
  { label: 'Blog', to: PATHS.blog },
  { label: 'Contato', to: PATHS.contact },
]

export const FOOTER_LINKS = {
  clinic: [
    { label: 'Sobre nós', to: PATHS.about },
    { label: 'Equipe', to: PATHS.team },
    { label: 'Blog', to: PATHS.blog },
    { label: 'Depoimentos', to: PATHS.testimonials },
  ],
  legal: [
    { label: 'Política de Privacidade', to: PATHS.privacyPolicy },
    { label: 'Termos de Uso', to: PATHS.terms },
  ],
}
