import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import TreatmentCard from '../components/features/TreatmentCard.jsx'
import { treatments } from '../data/treatments.js'
import { PATHS } from '../routes/paths.js'
import { buildBreadcrumbSchema } from '../utils/seoSchema.js'

export default function Treatments() {
  return (
    <>
      <PageSEO
        title="Tratamentos"
        description="Conheça todos os tratamentos odontológicos da Sorriso Odontologia: implantes, lentes de contato dental, ortodontia, Invisalign e muito mais."
        path={PATHS.treatments}
        jsonLd={buildBreadcrumbSchema([{ name: 'Tratamentos', path: PATHS.treatments }])}
      />
      <PageHeader
        title="Tratamentos odontológicos completos"
        description="Da prevenção à odontologia estética avançada, cada tratamento é conduzido com precisão técnica e cuidado individual."
        breadcrumb={[{ name: 'Tratamentos', path: PATHS.treatments }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
