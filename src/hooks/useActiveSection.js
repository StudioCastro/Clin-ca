import { useEffect, useState } from 'react'

/** Retorna true enquanto a página estiver rolada além de `offset` pixels — usado para o efeito glass da Navbar. */
export function useScrolledPast(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > offset)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
