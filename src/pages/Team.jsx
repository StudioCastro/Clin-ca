import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import TeamCard from '../components/features/TeamCard.jsx'
import { team } from '../data/team.js'
import { PATHS } from '../routes/paths.js'

export default function Team() {
  return (
    <>
      <PageSEO
        title="Equipe"
        description="Conheça os especialistas da Sorriso Odontologia: dentistas com formação sólida em implantodontia, ortodontia, odontopediatria e periodontia."
        path={PATHS.team}
      />
      <PageHeader
        title="Especialistas dedicados ao seu sorriso"
        description="Uma equipe multidisciplinar com formação sólida e atualização constante, trabalhando de forma integrada em cada caso."
        breadcrumb={[{ name: 'Equipe', path: PATHS.team }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
