import { forwardRef, useId } from 'react'
import { cn } from '../../utils/cn.js'

const Textarea = forwardRef(function Textarea({ label, error, className, ...props }, ref) {
  const generatedId = useId()
  const id = props.id ?? generatedId
  const errorId = `${id}-error`

  return (
    <div className="text-left">
      <label htmlFor={id} className="text-brand-black mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={5}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'border-brand-gray-dark text-brand-black placeholder:text-brand-black/40 w-full resize-none rounded-xl border bg-white px-4 py-3',
          'focus-visible:outline-brand-navy',
          error && 'border-red-400',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})

export default Textarea
