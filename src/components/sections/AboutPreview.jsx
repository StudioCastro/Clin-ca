import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PATHS } from '../../routes/paths.js'
import receptionImage from '../../assets/images/balcao.webp'
import { slideInLeft, slideInRight, scrollRevealViewport } from '../../hooks/useScrollReveal.js'
import Container from '../ui/Container.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'

const highlights = [
  'Mais de 10 anos cuidando de sorrisos em São Paulo',
  'Estrutura própria com tecnologia de ponta',
  'Equipe multidisciplinar sob um mesmo teto',
]

export default function AboutPreview() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={slideInLeft}
          className="relative"
        >
          <ResponsiveImage
            src={receptionImage}
            alt="Balcão de recepção da Sorriso Odontologia"
            width={900}
            height={700}
            className="shadow-elevated rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={slideInRight}
        >
          <Badge>Sobre a Sorriso Odontologia</Badge>
          <h2 className="font-display text-brand-black mt-4 text-3xl font-semibold sm:text-4xl">
            Uma clínica pensada para unir excelência técnica e experiência humana
          </h2>
          <p className="text-brand-black/65 mt-4">
            Nascemos com o propósito de oferecer odontologia de alto padrão em um ambiente acolhedor, onde
            cada paciente recebe atenção individualizada e um planejamento verdadeiramente personalizado.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="text-brand-black/75 flex items-start gap-3 text-sm">
                <CheckCircle2 className="text-brand-navy mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Button to={PATHS.about} variant="primary" size="lg" className="mt-8">
            Conheça nossa história
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
