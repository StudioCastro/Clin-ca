import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Clock, Tag } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import TreatmentCard from '../components/features/TreatmentCard.jsx'
import { getTreatmentBySlug, treatments } from '../data/treatments.js'
import { getTreatmentIcon } from '../utils/treatmentIcons.js'
import { PATHS } from '../routes/paths.js'
import { fadeUp, slideInLeft, slideInRight, scrollRevealViewport } from '../hooks/useScrollReveal.js'

export default function TreatmentDetail() {
  const { slug } = useParams()
  const treatment = getTreatmentBySlug(slug)

  if (!treatment) {
    return <Navigate to={PATHS.treatments} replace />
  }

  const Icon = getTreatmentIcon(treatment.icon)
  const related = treatments
    .filter((item) => item.category === treatment.category && item.slug !== treatment.slug)
    .slice(0, 3)

  return (
    <>
      <PageSEO
        title={treatment.name}
        description={treatment.shortDescription}
        path={PATHS.treatmentDetail(treatment.slug)}
        image={treatment.image}
      />

      <section className="py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Tratamentos', path: PATHS.treatments },
              { name: treatment.name, path: PATHS.treatmentDetail(treatment.slug) },
            ]}
          />

          <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollRevealViewport}
              variants={slideInLeft}
            >
              <ResponsiveImage
                src={treatment.image}
                alt={`Tratamento de ${treatment.name}`}
                width={900}
                height={700}
                priority
                className="shadow-elevated rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollRevealViewport}
              variants={slideInRight}
            >
              <div className="bg-brand-navy flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h1 className="font-display text-brand-black mt-5 text-3xl font-semibold sm:text-4xl">
                {treatment.name}
              </h1>
              <p className="text-brand-black/70 mt-4">{treatment.description}</p>

              <div className="text-brand-black/60 mt-6 flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="text-brand-navy h-4 w-4" aria-hidden="true" />
                  {treatment.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Tag className="text-brand-navy h-4 w-4" aria-hidden="true" />
                  {treatment.category}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="text-brand-black/75 flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-brand-navy mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                to={`${PATHS.contact}?tratamento=${treatment.slug}`}
                variant="primary"
                size="lg"
                className="mt-8"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agendar Consulta
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-gray py-24">
          <Container>
            <SectionHeading eyebrow="Relacionados" title="Outros tratamentos que podem te interessar" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollRevealViewport}
              variants={fadeUp}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((item) => (
                <TreatmentCard key={item.slug} treatment={item} />
              ))}
            </motion.div>
          </Container>
        </section>
      )}
    </>
  )
}
