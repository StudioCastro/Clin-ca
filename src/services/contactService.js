/**
 * Camada de serviço isolada do formulário de contato.
 *
 * Nesta entrega o envio é mockado (simula latência de rede e sempre resolve com sucesso,
 * exceto se o Turnstile não tiver validado o token). Para produção, substituir o corpo desta
 * função por uma chamada real, por exemplo:
 *
 *   const response = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 *   if (!response.ok) throw new Error('Falha ao enviar formulário.')
 *
 * O backend real deve: validar novamente os dados (nunca confiar apenas no client),
 * revalidar o token do Turnstile via API da Cloudflare, e aplicar rate limiting por IP.
 */
export async function submitContactForm(payload) {
  if (!payload.turnstileToken) {
    throw new Error('Verificação de segurança não concluída.')
  }

  await new Promise((resolve) => setTimeout(resolve, 1200))

  return { success: true, receivedAt: new Date().toISOString() }
}
