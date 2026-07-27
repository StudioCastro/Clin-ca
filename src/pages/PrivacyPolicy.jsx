import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import { siteConfig } from '../constants/siteConfig.js'
import { PATHS } from '../routes/paths.js'

export default function PrivacyPolicy() {
  return (
    <>
      <PageSEO
        title="Política de Privacidade"
        description="Saiba como a Sorriso Odontologia coleta, utiliza e protege seus dados pessoais, em conformidade com a LGPD."
        path={PATHS.privacyPolicy}
        noIndex
      />
      <PageHeader
        title="Política de Privacidade"
        breadcrumb={[{ name: 'Política de Privacidade', path: PATHS.privacyPolicy }]}
      />

      <section className="py-20">
        <Container className="text-brand-black/75 max-w-3xl space-y-8">
          <p className="text-brand-black/50 text-sm">Última atualização: 27 de julho de 2026.</p>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">1. Dados que coletamos</h2>
            <p className="mt-2">
              Coletamos dados fornecidos voluntariamente por você através do formulário de contato deste site,
              como nome, telefone, e-mail, tratamento de interesse e mensagem, com a finalidade exclusiva de
              responder à sua solicitação e agendar consultas.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">2. Uso das informações</h2>
            <p className="mt-2">
              As informações são utilizadas apenas para contato, agendamento e comunicação relacionada aos
              serviços da {siteConfig.name}. Não compartilhamos seus dados com terceiros para fins comerciais.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">
              3. Proteção de dados (LGPD)
            </h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais, em conformidade
              com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Você pode solicitar acesso, correção
              ou exclusão dos seus dados a qualquer momento pelo e-mail {siteConfig.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">
              4. Cookies e verificação de segurança
            </h2>
            <p className="mt-2">
              Utilizamos o serviço Cloudflare Turnstile para proteger nosso formulário contra abusos
              automatizados. Esse serviço pode processar dados técnicos do seu navegador conforme a política
              de privacidade da Cloudflare.
            </p>
          </div>

          <div>
            <h2 className="font-display text-brand-black text-xl font-semibold">5. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política, entre em contato pelo e-mail {siteConfig.email} ou pelo
              telefone {siteConfig.phoneDisplay}.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
