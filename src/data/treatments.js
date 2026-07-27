import implantImage from '../assets/illustrations/implantes-dentarios.svg'
import smileImage from '../assets/illustrations/lentes-de-contato-dental.svg'
import whiteningImage from '../assets/illustrations/clareamento-dental.svg'
import invisalignImage from '../assets/illustrations/invisalign.svg'
import ortodontiaIllustration from '../assets/illustrations/ortodontia.svg'
import canalIllustration from '../assets/illustrations/tratamento-de-canal.svg'
import protesesIllustration from '../assets/illustrations/proteses-dentarias.svg'
import facetasIllustration from '../assets/illustrations/facetas-de-porcelana.svg'
import periodontiaIllustration from '../assets/illustrations/periodontia.svg'
import odontopediatriaIllustration from '../assets/illustrations/odontopediatria.svg'
import emergenciaIllustration from '../assets/illustrations/emergencia-odontologica.svg'

// Conteúdo placeholder — descrições genéricas para fins de desenvolvimento/layout.
// Revisar com a equipe clínica antes de publicar (indicações, contraindicações, CFO).
export const treatments = [
  {
    slug: 'implantes-dentarios',
    name: 'Implantes Dentários',
    icon: 'Anchor',
    shortDescription:
      'Recupere a função e a estética do seu sorriso com implantes de titânio de alta precisão.',
    description:
      'Nossos implantes dentários utilizam tecnologia de planejamento 3D para garantir posicionamento preciso, maior previsibilidade e recuperação mais confortável. Indicados para substituir um ou vários dentes ausentes, devolvendo função mastigatória e estética natural.',
    image: implantImage,
    benefits: [
      'Planejamento guiado por tomografia 3D',
      'Materiais biocompatíveis de alta durabilidade',
      'Recuperação acompanhada por toda a equipe',
      'Resultado com aparência e função natural',
    ],
    duration: 'Variável, conforme planejamento',
    category: 'Cirurgia e Implantodontia',
  },
  {
    slug: 'lentes-de-contato-dental',
    name: 'Lentes de Contato Dental',
    icon: 'Sparkles',
    shortDescription:
      'Laminados ultrafinos que transformam a cor, forma e alinhamento do sorriso sem desgaste dental.',
    description:
      'As lentes de contato dental são laminados de porcelana ultrafinos aplicados sobre os dentes com mínimo ou nenhum desgaste da estrutura dental. Ideais para corrigir manchas, pequenas fissuras, espaçamentos e desalinhamentos leves, entregando um sorriso harmônico e natural.',
    image: smileImage,
    benefits: [
      'Preservação da estrutura dental original',
      'Alta resistência a manchas e desgaste',
      'Resultado estético natural e duradouro',
      'Planejamento digital do sorriso (DSD)',
    ],
    duration: '2 a 3 sessões',
    category: 'Odontologia Estética',
  },
  {
    slug: 'clareamento-dental',
    name: 'Clareamento Dental',
    icon: 'Sun',
    shortDescription: 'Técnicas seguras e supervisionadas para um sorriso visivelmente mais branco.',
    description:
      'Realizamos clareamento dental supervisionado, combinando sessões em consultório com manutenção caseira orientada. O procedimento é seguro para o esmalte quando conduzido por profissionais, proporcionando resultados perceptíveis já nas primeiras sessões.',
    image: whiteningImage,
    benefits: [
      'Protocolo supervisionado por dentista',
      'Géis de uso profissional',
      'Redução de sensibilidade com bioestimulação',
      'Resultados visíveis e duradouros',
    ],
    duration: '2 a 4 sessões',
    category: 'Odontologia Estética',
  },
  {
    slug: 'ortodontia',
    name: 'Ortodontia',
    icon: 'MoveHorizontal',
    shortDescription: 'Aparelhos fixos e estéticos para alinhar dentes e corrigir a mordida.',
    description:
      'Tratamentos ortodônticos personalizados para cada fase da vida, do planejamento infantil à correção em adultos. Utilizamos documentação digital completa para acompanhar a evolução do tratamento com previsibilidade.',
    image: ortodontiaIllustration,
    benefits: [
      'Aparelhos metálicos, estéticos e autoligados',
      'Acompanhamento fotográfico da evolução',
      'Planejamento funcional e estético integrado',
      'Atendimento para todas as idades',
    ],
    duration: '18 a 30 meses (médio)',
    category: 'Ortodontia',
  },
  {
    slug: 'invisalign',
    name: 'Invisalign',
    icon: 'Layers',
    shortDescription: 'Alinhadores transparentes e removíveis para discrição no dia a dia.',
    description:
      'O sistema de alinhadores invisíveis corrige o posicionamento dentário de forma discreta e confortável, sem os brackets tradicionais. Ideal para adultos e adolescentes que buscam resultado estético com rotina prática de higienização.',
    image: invisalignImage,
    benefits: [
      'Alinhadores removíveis e quase invisíveis',
      'Simulação digital do resultado final',
      'Maior conforto e facilidade de higiene',
      'Trocas programadas sem consultas frequentes',
    ],
    duration: '6 a 18 meses (médio)',
    category: 'Ortodontia',
  },
  {
    slug: 'tratamento-de-canal',
    name: 'Tratamento de Canal',
    icon: 'Activity',
    shortDescription: 'Endodontia especializada para eliminar a dor e preservar o dente natural.',
    description:
      'O tratamento endodôntico remove o tecido comprometido do interior do dente, eliminando a infecção e preservando a estrutura dental. Utilizamos instrumentação rotatória e localizador apical eletrônico para maior precisão e conforto.',
    image: canalIllustration,
    benefits: [
      'Instrumentação rotatória de precisão',
      'Anestesia e manejo da dor humanizados',
      'Preservação do dente natural',
      'Acompanhamento radiográfico digital',
    ],
    duration: '1 a 3 sessões',
    category: 'Endodontia',
  },
  {
    slug: 'proteses-dentarias',
    name: 'Próteses Dentárias',
    icon: 'Grid3x3',
    shortDescription: 'Próteses fixas, removíveis e sobre implante com aparência natural.',
    description:
      'Desenvolvemos próteses dentárias personalizadas — fixas, removíveis ou sobre implante — devolvendo função mastigatória, fonética e estética. Cada peça é planejada digitalmente para se harmonizar ao sorriso do paciente.',
    image: protesesIllustration,
    benefits: [
      'Próteses fixas, removíveis e sobre implante',
      'Planejamento digital de cor e forma',
      'Materiais de alta durabilidade',
      'Ajustes finos para conforto de uso',
    ],
    duration: 'Variável, conforme o caso',
    category: 'Prótese Dentária',
  },
  {
    slug: 'facetas-de-porcelana',
    name: 'Facetas de Porcelana',
    icon: 'Gem',
    shortDescription: 'Restaurações estéticas de alta resistência para dentes fraturados ou desgastados.',
    description:
      'As facetas de porcelana recompõem forma, cor e função de dentes fraturados, desgastados ou com restaurações antigas. Produzidas sob medida, aliam alta resistência mecânica a um acabamento estético indistinguível do dente natural.',
    image: facetasIllustration,
    benefits: [
      'Alta resistência e durabilidade',
      'Acabamento indistinguível do dente natural',
      'Indicadas para fraturas e desgastes',
      'Planejamento estético personalizado',
    ],
    duration: '2 a 3 sessões',
    category: 'Odontologia Estética',
  },
  {
    slug: 'periodontia',
    name: 'Periodontia',
    icon: 'ShieldCheck',
    shortDescription: 'Tratamento e prevenção de doenças da gengiva e estruturas de suporte dos dentes.',
    description:
      'Cuidamos da saúde gengival com protocolos de raspagem, manutenção periodontal e, quando necessário, procedimentos cirúrgicos regenerativos. A saúde periodontal é a base para a longevidade de qualquer tratamento odontológico.',
    image: periodontiaIllustration,
    benefits: [
      'Diagnóstico periodontal completo',
      'Raspagem e manutenção especializada',
      'Procedimentos regenerativos quando indicados',
      'Prevenção da perda óssea e dental',
    ],
    duration: 'Contínuo, conforme manutenção',
    category: 'Periodontia',
  },
  {
    slug: 'odontopediatria',
    name: 'Odontopediatria',
    icon: 'Baby',
    shortDescription: 'Atendimento acolhedor e especializado para a saúde bucal infantil.',
    description:
      'Consultas pensadas para criar uma relação positiva das crianças com o cuidado odontológico, com ambiente acolhedor e abordagem lúdica. Acompanhamos desde a primeira infância até a adolescência, com foco em prevenção.',
    image: odontopediatriaIllustration,
    benefits: [
      'Abordagem lúdica e acolhedora',
      'Foco em prevenção e educação bucal',
      'Ambiente pensado para o público infantil',
      'Acompanhamento do desenvolvimento dental',
    ],
    duration: 'Consultas periódicas',
    category: 'Odontopediatria',
  },
  {
    slug: 'emergencia-odontologica',
    name: 'Emergência Odontológica',
    icon: 'Siren',
    shortDescription: 'Atendimento prioritário para dor aguda, traumas e urgências dentárias.',
    description:
      'Disponibilizamos atendimento de urgência para dor intensa, traumatismos dentários, fraturas e infecções agudas. Nossa equipe avalia e conduz o caso com prioridade, oferecendo alívio imediato e encaminhamento para o tratamento definitivo.',
    image: emergenciaIllustration,
    benefits: [
      'Atendimento prioritário para casos agudos',
      'Manejo imediato da dor',
      'Avaliação de traumas e fraturas dentárias',
      'Encaminhamento para tratamento definitivo',
    ],
    duration: 'Atendimento imediato',
    category: 'Urgência',
  },
]

export function getTreatmentBySlug(slug) {
  return treatments.find((treatment) => treatment.slug === slug)
}
