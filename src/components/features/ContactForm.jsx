import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'
import Input from '../ui/Input.jsx'
import Textarea from '../ui/Textarea.jsx'
import Select from '../ui/Select.jsx'
import Button from '../ui/Button.jsx'
import TurnstileWidget from '../ui/Turnstile.jsx'
import { contactFormSchema } from '../../utils/validation.js'
import { maskBrazilianPhone } from '../../utils/phoneMask.js'
import { submitContactForm } from '../../services/contactService.js'
import { treatments } from '../../data/treatments.js'

const treatmentOptions = treatments.map((treatment) => ({ value: treatment.slug, label: treatment.name }))

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const preselectedTreatment = searchParams.get('tratamento') ?? ''
  const [status, setStatus] = useState('idle')

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      treatment: preselectedTreatment,
      message: '',
      turnstileToken: '',
    },
  })

  async function onSubmit(values) {
    setStatus('idle')
    try {
      await submitContactForm(values)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className="bg-brand-blue-light flex flex-col items-center gap-4 rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="text-brand-navy h-12 w-12" aria-hidden="true" />
        <h3 className="font-display text-brand-black text-xl font-semibold">Mensagem enviada com sucesso!</h3>
        <p className="text-brand-black/65">
          Recebemos sua solicitação e entraremos em contato em breve para confirmar o melhor horário.
        </p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>
          Enviar outra mensagem
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Input
        label="Nome completo"
        placeholder="Seu nome"
        {...register('name')}
        error={errors.name?.message}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Input
              label="Telefone / WhatsApp"
              placeholder="(11) 99999-9999"
              inputMode="tel"
              value={field.value}
              onChange={(event) => field.onChange(maskBrazilianPhone(event.target.value))}
              error={errors.phone?.message}
            />
          )}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <Select
        label="Tratamento de interesse"
        placeholder="Selecione um tratamento"
        options={treatmentOptions}
        {...register('treatment')}
        error={errors.treatment?.message}
        defaultValue={preselectedTreatment}
      />

      <Textarea
        label="Mensagem"
        placeholder="Conte um pouco sobre o que você procura…"
        {...register('message')}
        error={errors.message?.message}
      />

      <Controller
        control={control}
        name="turnstileToken"
        render={({ field }) => (
          <div>
            <TurnstileWidget onVerify={field.onChange} onExpire={() => field.onChange('')} />
            {errors.turnstileToken && (
              <p className="mt-1.5 text-sm text-red-600">{errors.turnstileToken.message}</p>
            )}
          </div>
        )}
      />

      {status === 'error' && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-600">
          <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Não foi possível enviar sua mensagem. Tente novamente em instantes.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}
