const PALETTE = ['#0F3D91', '#3B82F6', '#0A2C69', '#1E5FCC', '#123B7A']

function getInitials(name) {
  return name
    .replace(/^(Dr\.|Dra\.)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function hashString(value) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

/** Avatar gerado (iniciais sobre círculo colorido) — usado quando não há foto real e
 * consentida do paciente/depoimento, evitando o uso de fotos de terceiros sem autorização. */
export function initialsAvatar(name) {
  const initials = getInitials(name)
  const color = PALETTE[hashString(name) % PALETTE.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="100" fill="${color}"/><text x="100" y="104" text-anchor="middle" dominant-baseline="central" font-family="Inter, ui-sans-serif, sans-serif" font-size="76" font-weight="600" fill="#FFFFFF">${initials}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
