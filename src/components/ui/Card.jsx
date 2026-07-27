import { cn } from '../../utils/cn.js'

export default function Card({ className, children, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'border-brand-gray-dark/60 shadow-soft rounded-2xl border bg-white transition-all duration-300',
        hover && 'hover:shadow-elevated hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
