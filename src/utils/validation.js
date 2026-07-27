import { z } from 'zod'
import { treatments } from '../data/treatments.js'

const treatmentSlugs = treatments.map((treatment) => treatment.slug)

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Informe seu nome completo.')
    .max(120, 'Nome muito longo.')
    .regex(/^[\p{L}\s'-]+$/u, 'Use apenas letras no nome.'),
  phone: z
    .string()
    .trim()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Informe um telefone válido com DDD.'),
  email: z.string().trim().min(1, 'Informe seu e-mail.').email('Informe um e-mail válido.'),
  treatment: z.enum(treatmentSlugs, 'Selecione um tratamento de interesse.'),
  message: z
    .string()
    .trim()
    .min(10, 'Conte um pouco mais (mínimo de 10 caracteres).')
    .max(1000, 'Mensagem muito longa (máximo de 1000 caracteres).'),
  turnstileToken: z.string().min(1, 'Confirme que você não é um robô.'),
})
