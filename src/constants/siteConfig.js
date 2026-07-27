// Conteúdo institucional placeholder — clínica fictícia para fins de desenvolvimento.
// Nome, endereço, CRO e contatos são inventados; substituir por dados reais antes de publicar.
export const siteConfig = {
  name: 'Sorriso Odontologia',
  legalName: 'Sorriso Odontologia Ltda.',
  tagline: 'Odontologia de Alto Padrão',
  description:
    'Odontologia de alto padrão com tecnologia avançada e atendimento humanizado. Conheça a Sorriso Odontologia.',
  url: 'https://www.sorrisoodontologia.com.br',
  croClinic: 'CRO-SP 00.000 (fictício)',
  email: 'contato@sorrisoodontologia.com.br',
  phoneDisplay: '(11) 4000-0000',
  phoneE164: '+551140000000',
  whatsappNumber: '5511900000000',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma consulta na Sorriso Odontologia.',
  address: {
    street: 'Alameda Jardim das Acácias, 850 — Sala 12',
    district: 'Bosque das Flores',
    city: 'São Paulo',
    state: 'SP',
    zip: '00000-000',
    country: 'BR',
    full: 'Alameda Jardim das Acácias, 850 — Bosque das Flores, São Paulo - SP (endereço fictício)',
  },
  geo: {
    lat: -23.5505,
    lng: -46.6333,
  },
  mapsEmbedSrc: 'https://www.google.com/maps?q=S%C3%A3o+Paulo,+SP&output=embed',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=S%C3%A3o+Paulo,+SP',
  hours: [
    { days: 'Segunda a Sexta', time: '08:00 – 20:00' },
    { days: 'Sábado', time: '09:00 – 14:00' },
    { days: 'Domingo', time: 'Fechado' },
  ],
  social: {
    instagram: 'https://instagram.com/sorrisoodontologia',
    facebook: 'https://facebook.com/sorrisoodontologia',
    linkedin: 'https://linkedin.com/company/sorrisoodontologia',
    whatsapp: 'https://wa.me/5511900000000',
  },
  stats: [
    { value: 10, suffix: '+', label: 'anos de excelência' },
    { value: 5000, suffix: '+', label: 'pacientes' },
    { value: 98, suffix: '%', label: 'satisfação' },
    { value: null, label: 'CRO responsável', isText: true },
  ],
}
