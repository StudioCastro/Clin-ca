import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const isOpen = index !== null
  const closeButtonRef = useRef(null)

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrev()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  if (typeof document === 'undefined') return null

  const current = isOpen ? images[index] : null

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem da galeria: ${current.alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4"
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onPrev()
            }}
            aria-label="Imagem anterior"
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <motion.img
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            src={current.src}
            alt={current.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
            aria-label="Próxima imagem"
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-8"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
