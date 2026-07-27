import { motion } from 'framer-motion'
import { CalendarDays, Clock, ArrowRight } from 'lucide-react'
import { PATHS } from '../../routes/paths.js'
import { formatDate } from '../../utils/formatDate.js'
import { fadeUp, scrollRevealViewport } from '../../hooks/useScrollReveal.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'

export default function BlogCard({ post }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative h-48 overflow-hidden">
          <ResponsiveImage
            src={post.cover}
            alt={post.title}
            width={900}
            height={560}
            className="h-full w-full"
          />
          <Badge className="absolute top-4 left-4 bg-white/95">{post.category}</Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="text-brand-black/50 flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-display text-brand-black mt-3 text-lg font-semibold">{post.title}</h3>
          <p className="text-brand-black/65 mt-2 flex-1 text-sm">{post.excerpt}</p>
          <Button
            to={PATHS.blogPost(post.slug)}
            variant="ghost"
            size="md"
            className="mt-4 justify-start px-0 hover:bg-transparent hover:underline"
          >
            Ler artigo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
