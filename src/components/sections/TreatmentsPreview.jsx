import { ArrowRight } from 'lucide-react'
import { treatments } from '../../data/treatments.js'
import { PATHS } from '../../routes/paths.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import TreatmentCard from '../features/TreatmentCard.jsx'

const featured = treatments.slice(0, 6)

export default function TreatmentsPreview() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Tratamentos"
          title="Soluções completas para cada fase do seu sorriso"
          description="Da prevenção à odontologia estética avançada, cada tratamento é conduzido com precisão técnica e cuidado individual."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to={PATHS.treatments} variant="secondary" size="lg">
            Ver todos os tratamentos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
