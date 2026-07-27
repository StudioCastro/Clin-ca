import { motion } from 'framer-motion'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'
import { InstagramIcon, LinkedinIcon } from '../ui/BrandIcons.jsx'
import Card from '../ui/Card.jsx'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'

export default function TeamCard({ member }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={scrollRevealViewport}>
      <Card className="overflow-hidden p-0 text-center">
        <ResponsiveImage
          src={member.photo}
          alt={`Retrato de ${member.name}`}
          width={480}
          height={480}
          className="aspect-square w-full"
        />
        <div className="p-6">
          <h3 className="font-display text-brand-black text-lg font-semibold">{member.name}</h3>
          <p className="text-brand-navy mt-1 text-sm font-medium">{member.specialty}</p>
          <p className="text-brand-black/50 mt-0.5 text-xs">{member.cro}</p>
          <p className="text-brand-black/65 mt-3 text-sm">{member.bio}</p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${member.name}`}
              className="bg-brand-blue-light text-brand-navy hover:bg-brand-navy flex h-8 w-8 items-center justify-center rounded-full hover:text-white"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className="bg-brand-blue-light text-brand-navy hover:bg-brand-navy flex h-8 w-8 items-center justify-center rounded-full hover:text-white"
            >
              <LinkedinIcon size={15} />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
