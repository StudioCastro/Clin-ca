import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      variants={fadeUp}
      className={cn('mx-auto max-w-2xl', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-block text-sm font-semibold tracking-[0.2em] uppercase',
            light ? 'text-brand-blue-light' : 'text-brand-blue',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-brand-black',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base sm:text-lg', light ? 'text-white/80' : 'text-brand-black/65')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
