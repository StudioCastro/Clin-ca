import { createContext, use, useMemo, useState } from 'react'

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      toggleMobileMenu: () => setIsMobileMenuOpen((open) => !open),
    }),
    [isMobileMenuOpen],
  )

  return <UIContext value={value}>{children}</UIContext>
}

export function useUIContext() {
  const context = use(UIContext)
  if (!context) throw new Error('useUIContext deve ser usado dentro de UIProvider.')
  return context
}
