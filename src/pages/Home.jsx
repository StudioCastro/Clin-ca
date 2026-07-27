import PageSEO from '../components/layout/PageSEO.jsx'
import Hero from '../components/sections/Hero.jsx'
import Differentials from '../components/sections/Differentials.jsx'
import TreatmentsPreview from '../components/sections/TreatmentsPreview.jsx'
import AboutPreview from '../components/sections/AboutPreview.jsx'
import TeamPreview from '../components/sections/TeamPreview.jsx'
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel.jsx'
import BlogPreview from '../components/sections/BlogPreview.jsx'
import CTABanner from '../components/sections/CTABanner.jsx'
import { buildLocalBusinessSchema } from '../utils/seoSchema.js'

export default function Home() {
  return (
    <>
      <PageSEO
        title={null}
        description="Clínica odontológica premium com tecnologia de ponta, especialistas renomados e atendimento humanizado. Agende sua consulta na Sorriso Odontologia."
        path="/"
        jsonLd={buildLocalBusinessSchema()}
      />
      <Hero />
      <Differentials />
      <TreatmentsPreview />
      <AboutPreview />
      <TeamPreview />
      <TestimonialsCarousel />
      <BlogPreview />
      <CTABanner />
    </>
  )
}
