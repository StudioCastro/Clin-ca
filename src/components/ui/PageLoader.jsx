export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Carregando conteúdo…</span>
      <div
        className="border-brand-gray-dark border-t-brand-navy h-10 w-10 animate-spin rounded-full border-2"
        aria-hidden="true"
      />
    </div>
  )
}
