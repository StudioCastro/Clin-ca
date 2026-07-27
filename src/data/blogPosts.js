import whiteningImage from '../assets/illustrations/clareamento-dental.svg'
import smileImage from '../assets/illustrations/lentes-de-contato-dental.svg'
import invisalignImage from '../assets/illustrations/invisalign.svg'
import implantImage from '../assets/illustrations/implantes-dentarios.svg'
import escovacaoIllustration from '../assets/illustrations/escovacao.svg'
import limpezaIllustration from '../assets/illustrations/limpeza-dental.svg'
import dsdIllustration from '../assets/illustrations/planejamento-digital.svg'
import odontopediatriaIllustration from '../assets/illustrations/odontopediatria.svg'

// Artigos placeholder — conteúdo educativo genérico para fins de layout.
// Revisar tecnicamente com a equipe clínica antes de publicar.
export const blogCategories = ['Estética', 'Prevenção', 'Tecnologia']

export const blogPosts = [
  {
    slug: 'sinais-clareamento-dental-profissional',
    title: '5 sinais de que você precisa de um clareamento dental profissional',
    category: 'Estética',
    date: '2026-06-02',
    readTime: '5 min de leitura',
    cover: whiteningImage,
    excerpt:
      'Manchas por café, vinho ou envelhecimento natural: entenda quando vale a pena buscar um clareamento supervisionado.',
    content: [
      {
        type: 'paragraph',
        text: 'O escurecimento dos dentes é um processo natural, mas alguns sinais indicam que um clareamento supervisionado pode trazer resultados mais rápidos e seguros do que produtos de prateleira.',
      },
      { type: 'heading', text: '1. Manchas persistentes por café, vinho ou cigarro' },
      {
        type: 'paragraph',
        text: 'Pigmentos de bebidas escuras e do tabaco se acumulam no esmalte ao longo dos anos. Cremes dentais clareadores agem apenas na superfície, enquanto o clareamento profissional atua de forma mais completa.',
      },
      { type: 'heading', text: '2. Amarelamento relacionado à idade' },
      {
        type: 'paragraph',
        text: 'Com o tempo, o esmalte se torna mais fino e a dentina, naturalmente mais amarelada, fica mais evidente. Um protocolo supervisionado ajusta a concentração do gel para cada caso.',
      },
      { type: 'heading', text: '3. Resultados irregulares de clareamentos caseiros' },
      {
        type: 'paragraph',
        text: 'Produtos sem orientação profissional podem gerar sensibilidade e resultado manchado. O acompanhamento clínico permite corrigir essas irregularidades com segurança.',
      },
      {
        type: 'list',
        items: [
          'Sensibilidade acentuada ao consumir gelados',
          'Diferença de cor entre os dentes',
          'Desejo de resultado mais rápido e previsível',
        ],
      },
      {
        type: 'paragraph',
        text: 'Se você se identificou com algum desses sinais, agende uma avaliação para descobrir o protocolo de clareamento mais indicado para o seu caso.',
      },
    ],
  },
  {
    slug: 'lentes-de-contato-dental-vs-facetas',
    title: 'Lentes de contato dental vs. facetas: qual escolher?',
    category: 'Estética',
    date: '2026-05-18',
    readTime: '6 min de leitura',
    cover: smileImage,
    excerpt:
      'Duas soluções estéticas populares, com indicações e espessuras diferentes. Veja como decidir junto ao seu dentista.',
    content: [
      {
        type: 'paragraph',
        text: 'Lentes de contato dental e facetas de porcelana são frequentemente confundidas, mas têm indicações distintas conforme o objetivo do tratamento.',
      },
      { type: 'heading', text: 'Espessura e desgaste dental' },
      {
        type: 'paragraph',
        text: 'As lentes de contato são laminados ultrafinos que exigem pouco ou nenhum desgaste do dente. As facetas costumam ter maior espessura, indicadas para casos de fratura ou desgaste mais acentuado.',
      },
      { type: 'heading', text: 'Quando cada uma é indicada' },
      {
        type: 'list',
        items: [
          'Lentes de contato: manchas, pequenos espaçamentos e desalinhamentos leves',
          'Facetas: dentes fraturados, muito desgastados ou com restaurações antigas extensas',
        ],
      },
      {
        type: 'paragraph',
        text: 'A escolha ideal depende de uma avaliação clínica detalhada, muitas vezes apoiada por um planejamento digital do sorriso (DSD).',
      },
    ],
  },
  {
    slug: 'guia-escovacao-correta-prevenir-caries',
    title: 'Escovação correta: o guia definitivo para prevenir cáries',
    category: 'Prevenção',
    date: '2026-05-05',
    readTime: '4 min de leitura',
    cover: escovacaoIllustration,
    excerpt:
      'Técnica, frequência e produtos certos fazem toda a diferença na prevenção de cáries e doenças gengivais.',
    content: [
      {
        type: 'paragraph',
        text: 'Grande parte dos problemas bucais poderia ser evitada com uma rotina de higiene simples, mas feita corretamente.',
      },
      { type: 'heading', text: 'Frequência e tempo ideais' },
      {
        type: 'paragraph',
        text: 'Escovar os dentes ao menos três vezes ao dia, por dois minutos, remove a maior parte da placa bacteriana antes que ela se mineralize em tártaro.',
      },
      { type: 'heading', text: 'Técnica recomendada' },
      {
        type: 'list',
        items: [
          'Posicione a escova em ângulo de 45° em relação à gengiva',
          'Faça movimentos curtos e suaves, sem pressão excessiva',
          'Não esqueça da língua e da região posterior dos molares',
          'Complemente com fio dental diariamente',
        ],
      },
      {
        type: 'paragraph',
        text: 'Consultas regulares permitem identificar pontos de atenção na sua técnica de escovação antes que se tornem um problema.',
      },
    ],
  },
  {
    slug: 'importancia-limpeza-dental-semestral',
    title: 'Por que a limpeza dental semestral faz toda a diferença',
    category: 'Prevenção',
    date: '2026-04-20',
    readTime: '4 min de leitura',
    cover: limpezaIllustration,
    excerpt:
      'A profilaxia profissional remove o que a escovação diária não alcança. Entenda os benefícios da manutenção regular.',
    content: [
      {
        type: 'paragraph',
        text: 'Mesmo com uma ótima rotina de higiene, alguns depósitos de tártaro só podem ser removidos com instrumental profissional.',
      },
      { type: 'heading', text: 'O que acontece durante a limpeza' },
      {
        type: 'paragraph',
        text: 'A profilaxia remove placa e tártaro acumulados, especialmente em áreas de difícil acesso, além de polir a superfície dental para dificultar novo acúmulo.',
      },
      { type: 'heading', text: 'Benefícios da manutenção regular' },
      {
        type: 'list',
        items: [
          'Redução do risco de cáries e gengivite',
          'Identificação precoce de problemas bucais',
          'Hálito mais fresco e sensação de limpeza prolongada',
        ],
      },
      {
        type: 'paragraph',
        text: 'Recomendamos a manutenção a cada seis meses, podendo ser mais frequente em casos de maior propensão a tártaro ou doença periodontal.',
      },
    ],
  },
  {
    slug: 'como-funciona-invisalign',
    title: 'Invisalign: como funciona o tratamento com alinhadores invisíveis',
    category: 'Tecnologia',
    date: '2026-04-08',
    readTime: '6 min de leitura',
    cover: invisalignImage,
    excerpt:
      'Da escaneamento digital às trocas programadas: entenda cada etapa do tratamento com alinhadores.',
    content: [
      {
        type: 'paragraph',
        text: 'O Invisalign utiliza uma sequência de alinhadores transparentes, feitos sob medida, que movimentam os dentes gradualmente até a posição planejada.',
      },
      { type: 'heading', text: 'Etapas do tratamento' },
      {
        type: 'list',
        items: [
          'Escaneamento digital da arcada dentária',
          'Simulação do resultado final antes de iniciar',
          'Fabricação da sequência personalizada de alinhadores',
          'Trocas programadas a cada 1 a 2 semanas',
        ],
      },
      { type: 'heading', text: 'Vantagens em relação ao aparelho fixo' },
      {
        type: 'paragraph',
        text: 'Por serem removíveis, os alinhadores facilitam a higienização e permitem manter a alimentação sem restrições, além de serem esteticamente mais discretos no dia a dia.',
      },
    ],
  },
  {
    slug: 'planejamento-digital-do-sorriso-dsd',
    title: 'Planejamento digital do sorriso (DSD): o que é e como funciona',
    category: 'Tecnologia',
    date: '2026-03-22',
    readTime: '5 min de leitura',
    cover: dsdIllustration,
    excerpt:
      'Uma ferramenta que une odontologia e design para simular o resultado do tratamento estético antes de começar.',
    content: [
      {
        type: 'paragraph',
        text: 'O Digital Smile Design (DSD) é uma metodologia que combina fotos, vídeos e software para planejar mudanças estéticas no sorriso antes de qualquer procedimento.',
      },
      { type: 'heading', text: 'Como o planejamento é feito' },
      {
        type: 'paragraph',
        text: 'A partir de registros fotográficos padronizados, o software simula proporções ideais entre dentes, lábios e rosto, permitindo prever o resultado final com boa precisão.',
      },
      { type: 'heading', text: 'Por que isso importa para o paciente' },
      {
        type: 'list',
        items: [
          'Visualização prévia do resultado esperado',
          'Alinhamento de expectativas entre paciente e dentista',
          'Maior previsibilidade em tratamentos estéticos complexos',
        ],
      },
    ],
  },
  {
    slug: 'implantes-dentarios-mitos-e-verdades',
    title: 'Implantes dentários: mitos e verdades',
    category: 'Tecnologia',
    date: '2026-03-10',
    readTime: '7 min de leitura',
    cover: implantImage,
    excerpt:
      'O procedimento dói? Qualquer pessoa pode fazer? Separamos fatos de mitos sobre um dos tratamentos mais buscados.',
    content: [
      { type: 'heading', text: 'Mito: o procedimento é extremamente doloroso' },
      {
        type: 'paragraph',
        text: 'Com anestesia adequada e planejamento por imagem, o desconforto durante o procedimento costuma ser mínimo, sendo o pós-operatório controlado com medicação.',
      },
      { type: 'heading', text: 'Mito: qualquer pessoa pode colocar implante imediatamente' },
      {
        type: 'paragraph',
        text: 'A viabilidade depende de fatores como quantidade e qualidade óssea, saúde periodontal e condições sistêmicas, avaliados previamente por exames de imagem.',
      },
      { type: 'heading', text: 'Verdade: a tecnologia 3D aumenta a previsibilidade' },
      {
        type: 'paragraph',
        text: 'O planejamento guiado por tomografia permite posicionar o implante com alta precisão, reduzindo riscos e otimizando o resultado estético e funcional.',
      },
      { type: 'heading', text: 'Verdade: a durabilidade pode ser longa com bons cuidados' },
      {
        type: 'paragraph',
        text: 'Com boa higiene e manutenções periódicas, implantes bem planejados podem durar muitos anos com função e estética preservadas.',
      },
    ],
  },
  {
    slug: 'primeira-consulta-odontopediatrica',
    title: 'Saúde bucal infantil: quando levar seu filho ao dentista pela primeira vez',
    category: 'Prevenção',
    date: '2026-02-24',
    readTime: '4 min de leitura',
    cover: odontopediatriaIllustration,
    excerpt:
      'Criar uma relação positiva com o cuidado odontológico desde cedo previne medos e problemas futuros.',
    content: [
      {
        type: 'paragraph',
        text: 'A primeira consulta odontológica é recomendada já a partir da erupção dos primeiros dentes de leite, geralmente entre 6 meses e 1 ano de idade.',
      },
      { type: 'heading', text: 'Por que antecipar essa visita' },
      {
        type: 'paragraph',
        text: 'Consultas precoces permitem orientar os pais sobre higiene, amamentação e hábitos, além de identificar precocemente qualquer alteração no desenvolvimento dental.',
      },
      { type: 'heading', text: 'Como preparar a criança' },
      {
        type: 'list',
        items: [
          'Fale sobre a consulta de forma leve e positiva',
          'Evite associar o dentista a punição ou medo',
          'Escolha uma clínica com abordagem acolhedora para o público infantil',
        ],
      },
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
