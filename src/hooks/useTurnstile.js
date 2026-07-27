import { useEffect, useState } from 'react'

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
let scriptPromise = null

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Falha ao carregar o Cloudflare Turnstile.'))
    document.head.appendChild(script)
  })

  return scriptPromise
}

/** Carrega o script oficial do Cloudflare Turnstile sob demanda e informa quando está pronto para renderizar o widget. */
export function useTurnstileScript() {
  const [isReady, setIsReady] = useState(Boolean(window.turnstile))

  useEffect(() => {
    let cancelled = false
    loadTurnstileScript()
      .then(() => {
        if (!cancelled) setIsReady(true)
      })
      .catch(() => {
        if (!cancelled) setIsReady(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return isReady
}
