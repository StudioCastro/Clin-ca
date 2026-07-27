import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Calendar } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navigation.js'
import { siteConfig } from '../../constants/siteConfig.js'
import { PATHS } from '../../routes/paths.js'
import { useUIContext } from '../../context/UIContext.jsx'
import { useScrolledPast } from '../../hooks/useActiveSection.js'
import { WhatsappIcon } from '../ui/BrandIcons.jsx'
import Button from '../ui/Button.jsx'
import { cn } from '../../utils/cn.js'

export default function Navbar() {
  const isScrolled = useScrolledPast(24)
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIContext()
  const { pathname } = useLocation()

  // Só a Home tem um Hero escuro sangrando por baixo da navbar transparente;
  // nas demais páginas o conteúdo começa abaixo dela, então o texto deve ficar sempre escuro.
  const isOverDarkHero = pathname === PATHS.home && !isScrolled && !isMobileMenuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen ? 'glass shadow-soft' : 'bg-transparent',
      )}
    >
      <div className="container-prime flex h-20 items-center justify-between py-3">
        <NavLink
          to={PATHS.home}
          className={cn(
            'font-display text-xl font-semibold transition-colors',
            isOverDarkHero ? 'text-white' : 'text-brand-navy',
          )}
          onClick={closeMobileMenu}
        >
          {siteConfig.name}
        </NavLink>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === PATHS.home}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isOverDarkHero
                    ? 'text-white/85 hover:text-white'
                    : 'text-brand-black/80 hover:text-brand-navy',
                  isActive &&
                    (isOverDarkHero ? 'text-white underline underline-offset-4' : 'text-brand-navy'),
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="md"
            className={cn(isOverDarkHero && 'text-white hover:bg-white/10')}
          >
            <WhatsappIcon size={18} />
            WhatsApp
          </Button>
          <Button to={PATHS.contact} variant="primary" size="md">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Agendar Consulta
          </Button>
        </div>

        <button
          type="button"
          className={cn('rounded-lg p-2 lg:hidden', isOverDarkHero ? 'text-white' : 'text-brand-navy')}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação móvel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-brand-gray-dark overflow-hidden border-t bg-white lg:hidden"
          >
            <div className="container-prime flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === PATHS.home}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    cn(
                      'text-brand-black/80 rounded-lg px-3 py-3 text-base font-medium',
                      isActive && 'bg-brand-blue-light text-brand-navy',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <Button
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <WhatsappIcon size={18} />
                  Falar no WhatsApp
                </Button>
                <Button to={PATHS.contact} variant="primary" onClick={closeMobileMenu}>
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
