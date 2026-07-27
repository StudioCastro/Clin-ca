import clareamentoAntes from '../assets/illustrations/before-after/clareamento-antes.svg'
import clareamentoDepois from '../assets/illustrations/before-after/clareamento-depois.svg'
import lentesAntes from '../assets/illustrations/before-after/lentes-antes.svg'
import lentesDepois from '../assets/illustrations/before-after/lentes-depois.svg'
import implanteAntes from '../assets/illustrations/before-after/implante-antes.svg'
import implanteDepois from '../assets/illustrations/before-after/implante-depois.svg'

// Ilustrações esquemáticas (não fotográficas) — fotos reais de "antes e depois" exigem
// autorização expressa do paciente, conforme LGPD e normas do CFO sobre uso de imagem.
export const beforeAfterCases = [
  {
    id: 1,
    treatment: 'Clareamento Dental',
    before: clareamentoAntes,
    after: clareamentoDepois,
    caption: 'Clareamento supervisionado após 4 sessões.',
  },
  {
    id: 2,
    treatment: 'Lentes de Contato Dental',
    before: lentesAntes,
    after: lentesDepois,
    caption: 'Harmonização de forma e cor com lentes de porcelana.',
  },
  {
    id: 3,
    treatment: 'Implantes Dentários',
    before: implanteAntes,
    after: implanteDepois,
    caption: 'Reabilitação com implante e prótese sobre implante.',
  },
]

export const beforeAfterDisclaimer =
  'Ilustrações esquemáticas meramente representativas (não são fotografias de pacientes reais). Resultados variam de paciente para paciente. A divulgação de fotos reais de "antes e depois" é feita somente mediante autorização expressa e por escrito do paciente, em conformidade com a legislação vigente e as normas éticas do Conselho Federal de Odontologia (CFO).'
