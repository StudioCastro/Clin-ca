import { forwardRef, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn.js'

const Select = forwardRef(function Select({ label, error, options, placeholder, className, ...props }, ref) {
  const generatedId = useId()
  const id = props.id ?? generatedId
  const errorId = `${id}-error`

  return (
    <div className="text-left">
      <label htmlFor={id} className="text-brand-black mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <select
          ref={ref}
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          defaultValue=""
          className={cn(
            'border-brand-gray-dark text-brand-black w-full appearance-none rounded-xl border bg-white px-4 py-3',
            'focus-visible:outline-brand-navy',
            error && 'border-red-400',
            className,
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder ?? 'Selecione uma opção'}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="text-brand-black/50 pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})

export default Select
