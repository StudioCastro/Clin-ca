import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '../../constants/siteConfig.js'
import { FOOTER_LINKS } from '../../constants/navigation.js'
import { treatments } from '../../data/treatments.js'
import { PATHS } from '../../routes/paths.js'
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons.jsx'
import Container from '../ui/Container.jsx'

const featuredTreatments = treatments.slice(0, 6)

const socialLinks = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: 'WhatsApp', href: siteConfig.social.whatsapp, Icon: WhatsappIcon },
]

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:bg-brand-blue flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Tratamentos</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {featuredTreatments.map((treatment) => (
              <li key={treatment.slug}>
                <Link to={PATHS.treatmentDetail(treatment.slug)} className="hover:text-white hover:underline">
                  {treatment.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Institucional</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_LINKS.clinic.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-white hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.hours.map((entry) => (
                  <span key={entry.days} className="block">
                    {entry.days}: {entry.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.croClinic}</p>
        </Container>
      </div>
    </footer>
  )
}
