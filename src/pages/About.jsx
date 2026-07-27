import { motion } from 'framer-motion'
import { Target, HeartHandshake, Gem } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import Timeline from '../components/features/Timeline.jsx'
import GalleryMasonry from '../components/features/GalleryMasonry.jsx'
import BeforeAfterSlider from '../components/features/BeforeAfterSlider.jsx'
import TeamPreview from '../components/sections/TeamPreview.jsx'
import equipmentImage from '../assets/illustrations/equipment.svg'
import { timeline } from '../data/timeline.js'
import { beforeAfterCases, beforeAfterDisclaimer } from '../data/beforeAfter.js'
import { fadeUp, staggerContainer, scrollRevealViewport } from '../hooks/useScrollReveal.js'
import { PATHS } from '../routes/paths.js'

const pillars = [
  {
    Icon: Target,
    title: 'Missão',
    description:
      'Proporcionar odontologia de alto padrão com segurança, tecnologia e cuidado humano em cada etapa do tratamento.',
  },
  {
    Icon: HeartHandshake,
    title: 'Valores',
    description:
      'Ética, transparência e respeito ao tempo e às expectativas de cada paciente que confia em nós.',
  },
  {
    Icon: Gem,
    title: 'Visão',
    description:
      'Ser referência em odontologia premium em São Paulo, unindo excelência clínica e experiência do paciente.',
  },
]

export default function About() {
  return (
    <>
      <PageSEO
        title="Sobre Nós"
        description="Conheça a história, a missão e os valores da Sorriso Odontologia, clínica odontológica premium em São Paulo."
        path={PATHS.about}
      />
      <PageHeader
        title="Uma história dedicada a sorrisos com excelência"
        description="Desde 2014, unimos tecnologia, ética e cuidado humano para oferecer o que há de melhor em odontologia."
        breadcrumb={[{ name: 'Sobre', path: PATHS.about }]}
      />

      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            variants={fadeUp}
          >
            <ResponsiveImage
              src={equipmentImage}
              alt="Consultório moderno e equipado da Sorriso Odontologia"
              width={900}
              height={700}
              className="shadow-elevated rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            variants={fadeUp}
          >
            <span className="text-brand-blue text-sm font-semibold tracking-[0.2em] uppercase">
              Nossa história
            </span>
            <h2 className="font-display text-brand-black mt-3 text-3xl font-semibold sm:text-4xl">
              Odontologia de alto padrão, pensada em cada detalhe
            </h2>
            <p className="text-brand-black/65 mt-4">
              A Sorriso Odontologia nasceu da vontade de oferecer uma experiência odontológica diferenciada:
              técnica apurada, tecnologia de ponta e um ambiente que transmite tranquilidade desde a recepção
              até a sala de tratamento. Hoje reunimos especialistas de diferentes áreas sob um mesmo padrão de
              excelência.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-brand-gray py-24">
        <Container>
          <SectionHeading eyebrow="Nossos pilares" title="O que guia cada atendimento" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            variants={staggerContainer()}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {pillars.map(({ Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="h-full p-8 text-center">
                  <div className="bg-brand-navy mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white">
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

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Trajetória" title="Nossa linha do tempo" />
          <div className="mt-14">
            <Timeline items={timeline} />
          </div>
        </Container>
      </section>

      <TeamPreview />

      <section className="bg-brand-gray py-24">
        <Container>
          <SectionHeading
            eyebrow="Galeria"
            title="Conheça nossos espaços"
            description="Ambientes projetados para o seu conforto, do início ao fim da consulta."
          />
          <div className="mt-14">
            <GalleryMasonry />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Antes e Depois"
            title="Resultados que falam por si"
            description="Arraste o controle para comparar os resultados de alguns dos nossos tratamentos."
          />
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfterCases.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                before={item.before}
                after={item.after}
                caption={`${item.treatment} — ${item.caption}`}
              />
            ))}
          </div>
          <p className="text-brand-black/50 mx-auto mt-10 max-w-3xl text-center text-xs">
            {beforeAfterDisclaimer}
          </p>
        </Container>
      </section>
    </>
  )
}
