import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Calendar, Stethoscope } from 'lucide-react'
import { siteConfig } from '../../constants/siteConfig.js'
import { PATHS } from '../../routes/paths.js'
import heroImage from '../../assets/images/facade.webp'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import StatCounter from '../ui/StatCounter.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !imageRef.current) return

    const animation = gsap.to(imageRef.current, {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-brand-black relative -mt-20 flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <img
          src={heroImage}
          alt="Fachada moderna da Sorriso Odontologia ao entardecer"
          className="h-full w-full object-cover opacity-55"
          fetchPriority="high"
        />
      </div>
      <div className="from-brand-black via-brand-black/70 to-brand-black/30 absolute inset-0 bg-gradient-to-t" />

      <Container className="relative z-10 py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
        >
          <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mx-auto max-w-4xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl"
        >
          Excelência que transforma sorrisos e vidas.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          Odontologia de alto padrão com tecnologia avançada e atendimento humanizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button to={PATHS.contact} size="lg" variant="primary">
            <Calendar className="h-5 w-5" aria-hidden="true" />
            Agendar Consulta
          </Button>
          <Button to={PATHS.treatments} size="lg" variant="outline">
            Conheça os Tratamentos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Container>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
