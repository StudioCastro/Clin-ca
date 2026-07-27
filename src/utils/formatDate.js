export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
