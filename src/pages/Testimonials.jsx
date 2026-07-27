import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import TestimonialCard from '../components/features/TestimonialCard.jsx'
import CTABanner from '../components/sections/CTABanner.jsx'
import { testimonials } from '../data/testimonials.js'
import { PATHS } from '../routes/paths.js'

export default function Testimonials() {
  return (
    <>
      <PageSEO
        title="Depoimentos"
        description="Veja o que nossos pacientes dizem sobre os tratamentos e o atendimento da Sorriso Odontologia."
        path={PATHS.testimonials}
      />
      <PageHeader
        title="Quem já sorri com a Sorriso Odontologia"
        description="Experiências reais de pacientes que confiaram no nosso cuidado, da prevenção à odontologia estética."
        breadcrumb={[{ name: 'Depoimentos', path: PATHS.testimonials }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
