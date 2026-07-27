import { Quote } from 'lucide-react'
import Card from '../ui/Card.jsx'
import RatingStars from '../ui/RatingStars.jsx'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'

export default function TestimonialCard({ testimonial }) {
  return (
    <Card hover={false} className="flex h-full flex-col p-6 sm:p-8">
      <Quote className="text-brand-blue-light h-8 w-8" aria-hidden="true" />
      <p className="text-brand-black/75 mt-4 flex-1">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <ResponsiveImage
          src={testimonial.photo}
          alt={`Foto de ${testimonial.name}`}
          width={80}
          height={80}
          className="h-12 w-12 shrink-0 rounded-full"
        />
        <div>
          <p className="text-brand-black text-sm font-semibold">{testimonial.name}</p>
          <p className="text-brand-black/50 text-xs">{testimonial.treatment}</p>
        </div>
        <RatingStars rating={testimonial.rating} className="ml-auto" />
      </div>
    </Card>
  )
}
