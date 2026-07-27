import { motion } from 'framer-motion'
import { Cpu, HeartHandshake, GraduationCap, Wrench, Building2, Smile } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Card from '../ui/Card.jsx'
import { fadeUp, staggerContainer, scrollRevealViewport } from '../../hooks/useScrollReveal.js'

const differentials = [
  {
    Icon: Cpu,
    title: 'Tecnologia Avançada',
    description:
      'Planejamento digital, imagem 3D e equipamentos de última geração em cada etapa do tratamento.',
  },
  {
    Icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description: 'Escuta atenta e acolhimento em cada consulta, do primeiro contato ao pós-tratamento.',
  },
  {
    Icon: GraduationCap,
    title: 'Especialistas Qualificados',
    description: 'Equipe multidisciplinar com formação contínua nas principais áreas da odontologia.',
  },
  {
    Icon: Wrench,
    title: 'Equipamentos de Ponta',
    description: 'Instrumentais e tecnologia atualizados para mais precisão, conforto e segurança.',
  },
  {
    Icon: Building2,
    title: 'Ambiente Premium',
    description: 'Estrutura pensada em cada detalhe para proporcionar conforto e tranquilidade.',
  },
  {
    Icon: Smile,
    title: 'Resultados Naturais',
    description: 'Planejamento estético individualizado, respeitando a harmonia natural do seu sorriso.',
  },
]

export default function Differentials() {
  return (
    <section className="bg-brand-gray py-24">
      <Container>
        <SectionHeading
          eyebrow="Por que escolher a Sorriso Odontologia"
          title="Diferenciais que fazem a diferença no seu sorriso"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={staggerContainer()}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map(({ Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card className="h-full p-8">
                <div className="bg-brand-navy flex h-12 w-12 items-center justify-center rounded-xl text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-brand-black mt-5 text-xl font-semibold">{title}</h3>
                <p className="text-brand-black/65 mt-2 text-sm">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
