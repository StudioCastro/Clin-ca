import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PATHS } from '../../routes/paths.js'
import { getTreatmentIcon } from '../../utils/treatmentIcons.js'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'

export default function TreatmentCard({ treatment }) {
  const Icon = getTreatmentIcon(treatment.icon)

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={scrollRevealViewport}>
      <Card className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative h-52 overflow-hidden">
          <ResponsiveImage
            src={treatment.image}
            alt={`Ilustração do tratamento de ${treatment.name}`}
            width={800}
            height={600}
            className="h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="text-brand-navy shadow-soft absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-brand-black text-xl font-semibold">{treatment.name}</h3>
          <p className="text-brand-black/65 mt-2 flex-1 text-sm">{treatment.shortDescription}</p>
          <Button
            to={PATHS.treatmentDetail(treatment.slug)}
            variant="ghost"
            size="md"
            className="mt-4 justify-start px-0 hover:bg-transparent hover:underline"
          >
            Saiba Mais
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
