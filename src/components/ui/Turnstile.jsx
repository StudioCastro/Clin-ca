import { useEffect, useRef } from 'react'
import { useTurnstileScript } from '../../hooks/useTurnstile.js'

/**
 * Widget do Cloudflare Turnstile. Requer VITE_TURNSTILE_SITE_KEY configurada no ambiente.
 * A validação real do token deve ocorrer no backend (Siteverify API), nunca apenas no cliente.
 */
export default function Turnstile({ onVerify, onExpire, className }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const isScriptReady = useTurnstileScript()
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!isScriptReady || !containerRef.current || !siteKey) return

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: 'light',
      callback: onVerify,
      'expired-callback': () => onExpire?.(),
      'error-callback': () => onExpire?.(),
    })

    return () => {
      if (widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScriptReady, siteKey])

  if (!siteKey) {
    return (
      <p className="text-brand-black/50 text-sm">
        Verificação de segurança indisponível (defina VITE_TURNSTILE_SITE_KEY).
      </p>
    )
  }

  return <div ref={containerRef} className={className} />
}
