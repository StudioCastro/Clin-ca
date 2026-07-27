import facadeImage from '../assets/images/facade.webp'
import receptionImage from '../assets/images/balcao.webp'
import equipmentImage from '../assets/illustrations/equipment.svg'
import implantImage from '../assets/illustrations/implantes-dentarios.svg'
import invisalignImage from '../assets/illustrations/invisalign.svg'
import whiteningImage from '../assets/illustrations/clareamento-dental.svg'
import smileImage from '../assets/illustrations/lentes-de-contato-dental.svg'

// Galeria 100% com fotos reais da clínica/tratamentos (sem placeholders genéricos).
export const gallery = [
  {
    id: 1,
    category: 'Fachada',
    src: facadeImage,
    alt: 'Fachada moderna da Sorriso Odontologia ao entardecer',
  },
  {
    id: 2,
    category: 'Recepção',
    src: receptionImage,
    alt: 'Balcão de recepção em mármore da Sorriso Odontologia',
  },
  { id: 3, category: 'Consultório', src: equipmentImage, alt: 'Consultório odontológico equipado' },
  { id: 4, category: 'Tratamentos', src: implantImage, alt: 'Detalhe de implante dentário' },
  { id: 5, category: 'Tratamentos', src: invisalignImage, alt: 'Alinhador invisível Invisalign' },
  { id: 6, category: 'Tratamentos', src: whiteningImage, alt: 'Sessão de clareamento dental' },
  { id: 7, category: 'Sorrisos', src: smileImage, alt: 'Sorriso natural após tratamento estético' },
]

export const galleryCategories = ['Todos', ...new Set(gallery.map((item) => item.category))]
