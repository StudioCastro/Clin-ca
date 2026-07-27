import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import { siteConfig } from '../constants/siteConfig.js'
import { PATHS } from '../routes/paths.js'

export default function Terms() {
  return (
    <>
      <PageSEO
        title="Termos de Uso"
        description="Termos de uso do site institucional da Sorriso Odontologia."
        path={PATHS.terms}
        noIndex
      />
      <PageHeader title="Termos de Uso" breadcrumb={[{ name: 'Termos de Uso', path: PATHS.terms }]} />

      <section className="py-20">
        <Container className="text-brand-black/75 max-w-3xl space-y-8">
          <p className="text-brand-black/50 text-sm">Última atualização: 27 de julho de 2026.</p>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">1. Objetivo do site</h2>
            <p className="mt-2">
              Este site tem caráter institucional e informativo, apresentando os tratamentos, a equipe e os
              canais de contato da {siteConfig.name}. As informações aqui contidas não substituem uma
              avaliação clínica presencial.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">2. Conteúdo educativo</h2>
            <p className="mt-2">
              Os artigos publicados no blog têm finalidade educativa e não constituem diagnóstico, prescrição
              ou recomendação de tratamento individual, que deve ser sempre avaliado por um
              cirurgião-dentista.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">3. Agendamentos</h2>
            <p className="mt-2">
              O envio do formulário de contato representa uma solicitação de agendamento, sujeita à
              confirmação de disponibilidade pela nossa equipe.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">
              4. Propriedade intelectual
            </h2>
            <p className="mt-2">
              Textos, imagens e demais conteúdos deste site são de propriedade da {siteConfig.legalName} ou
              utilizados sob licença, sendo vedada a reprodução sem autorização prévia.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">5. Foro</h2>
            <p className="mt-2">
              Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
