import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { cn } from '../../utils/cn.js'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function Modal({ isOpen, onClose, title, children, className }) {
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement
    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll(FOCUSABLE_SELECTOR)
    focusable?.[0]?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused.current?.focus?.()
    }
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'shadow-elevated relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white',
              className,
            )}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="text-brand-black shadow-soft absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 hover:bg-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
