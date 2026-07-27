import { motion } from 'framer-motion'
import { siteConfig } from '../../constants/siteConfig.js'
import { WhatsappIcon } from '../ui/BrandIcons.jsx'

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
      className="shadow-elevated fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white sm:right-8 sm:bottom-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60" aria-hidden="true" />
      <WhatsappIcon size={28} className="relative" />
    </motion.a>
  )
}
