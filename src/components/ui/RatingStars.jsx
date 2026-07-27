import { Star } from 'lucide-react'
import { cn } from '../../utils/cn.js'

export default function RatingStars({ rating = 5, max = 5, className }) {
  return (
    <div
      className={cn('text-brand-navy flex items-center gap-1', className)}
      role="img"
      aria-label={`Avaliação: ${rating} de ${max} estrelas`}
    >
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            'h-4 w-4',
            index < rating ? 'fill-brand-navy text-brand-navy' : 'text-brand-gray-dark fill-transparent',
          )}
        />
      ))}
    </div>
  )
}
