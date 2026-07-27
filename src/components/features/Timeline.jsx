import { motion } from 'framer-motion'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'

export default function Timeline({ items }) {
  return (
    <ol className="border-brand-gray-dark relative border-l pl-8">
      {items.map((item) => (
        <motion.li
          key={item.year}
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={fadeUp}
          className="mb-10 last:mb-0"
        >
          <span
            className="bg-brand-navy absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white"
            aria-hidden="true"
          />
          <span className="font-display text-brand-navy text-sm font-semibold">{item.year}</span>
          <h3 className="text-brand-black mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="text-brand-black/65 mt-1 text-sm">{item.description}</p>
        </motion.li>
      ))}
    </ol>
  )
}
