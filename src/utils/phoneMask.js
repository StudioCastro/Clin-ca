/** Aplica máscara de telefone brasileiro (fixo ou celular) enquanto o usuário digita. */
export function maskBrazilianPhone(rawValue) {
  const digits = rawValue.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits.replace(/^(\d*)/, '($1')
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d*)/, '($1) $2')
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d*)/, '($1) $2-$3')
  }
  return digits.replace(/^(\d{2})(\d{5})(\d*)/, '($1) $2-$3')
}

export function unmaskPhone(value) {
  return value.replace(/\D/g, '')
}
