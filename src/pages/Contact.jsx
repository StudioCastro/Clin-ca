import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ContactForm from '../components/features/ContactForm.jsx'
import MapEmbed from '../components/features/MapEmbed.jsx'
import FAQAccordion from '../components/features/FAQAccordion.jsx'
import { siteConfig } from '../constants/siteConfig.js'
import { PATHS } from '../routes/paths.js'

const contactInfo = [
  { Icon: MapPin, label: 'Endereço', value: siteConfig.address.full },
  { Icon: Phone, label: 'Telefone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneE164}` },
  { Icon: Mail, label: 'E-mail', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
]

export default function Contact() {
  return (
    <>
      <PageSEO
        title="Contato"
        description="Agende sua consulta na Sorriso Odontologia: telefone, WhatsApp, endereço e formulário de contato."
        path={PATHS.contact}
      />
      <PageHeader
        title="Vamos agendar sua consulta?"
        description="Preencha o formulário ou fale diretamente com a nossa equipe pelos canais abaixo."
        breadcrumb={[{ name: 'Contato', path: PATHS.contact }]}
      />

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Card hover={false} className="p-6 sm:p-8">
              <h2 className="font-display text-brand-black text-2xl font-semibold">Envie sua mensagem</h2>
              <p className="text-brand-black/60 mt-2 text-sm">
                Respondemos em até 1 dia útil. Para urgências, utilize o WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <Card hover={false} className="p-6 sm:p-8">
              <ul className="space-y-5">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="bg-brand-blue-light text-brand-navy flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="text-brand-black/50 block text-xs">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-black hover:text-brand-navy font-medium hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-brand-black font-medium">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="bg-brand-blue-light text-brand-navy flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="text-brand-black/50 block text-xs">Horário de atendimento</span>
                    {siteConfig.hours.map((entry) => (
                      <span key={entry.days} className="text-brand-black block font-medium">
                        {entry.days}: {entry.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </Card>

            <MapEmbed />
          </div>
        </Container>
      </section>

      <section className="bg-brand-gray py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <div className="mt-14">
            <FAQAccordion />
          </div>
        </Container>
      </section>
    </>
  )
}
