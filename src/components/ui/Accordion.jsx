import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn.js'

export default function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0)
  const baseId = useId()

  return (
    <div className={cn('divide-brand-gray-dark divide-y', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={item.question} className="py-2">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="text-brand-black flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold sm:text-lg"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'text-brand-navy h-5 w-5 shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-black/70 pb-4">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
