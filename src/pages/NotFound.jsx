import { Frown } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import { PATHS } from '../routes/paths.js'

export default function NotFound() {
  return (
    <>
      <PageSEO title="Página não encontrada" noIndex />
      <section className="flex min-h-[70vh] items-center py-24">
        <Container className="flex flex-col items-center text-center">
          <Frown className="text-brand-navy h-14 w-14" aria-hidden="true" />
          <h1 className="font-display text-brand-black mt-6 text-4xl font-semibold">Página não encontrada</h1>
          <p className="text-brand-black/65 mt-3 max-w-md">
            O conteúdo que você procura não existe ou foi movido. Vamos te levar de volta para o início.
          </p>
          <Button to={PATHS.home} variant="primary" size="lg" className="mt-8">
            Voltar para a Home
          </Button>
        </Container>
      </section>
    </>
  )
}
