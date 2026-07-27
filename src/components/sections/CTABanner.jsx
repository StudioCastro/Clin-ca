import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { PATHS } from '../../routes/paths.js'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { WhatsappIcon } from '../ui/BrandIcons.jsx'
import { siteConfig } from '../../constants/siteConfig.js'

export default function CTABanner() {
  return (
    <section className="bg-brand-navy py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Pronto para transformar o seu sorriso?
          </h2>
          <p className="mt-4 text-white/80">
            Agende uma avaliação com nossos especialistas e descubra o tratamento ideal para você.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={PATHS.contact} variant="secondary" size="lg">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Agendar Consulta
            </Button>
            <Button
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <WhatsappIcon size={20} />
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
