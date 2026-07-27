import { ArrowRight } from 'lucide-react'
import { team } from '../../data/team.js'
import { PATHS } from '../../routes/paths.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import TeamCard from '../features/TeamCard.jsx'

export default function TeamPreview() {
  return (
    <section className="bg-brand-gray py-24">
      <Container>
        <SectionHeading
          eyebrow="Nossa Equipe"
          title="Especialistas dedicados ao seu sorriso"
          description="Profissionais com formação sólida e atualização constante, trabalhando de forma integrada em cada caso."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to={PATHS.team} variant="secondary" size="lg">
            Conhecer toda a equipe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
