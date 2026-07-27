import { cn } from '../../utils/cn.js'

export default function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'bg-brand-blue-light text-brand-navy inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
