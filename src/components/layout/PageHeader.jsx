import { motion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Breadcrumbs from '../ui/Breadcrumbs.jsx'

export default function PageHeader({ title, description, breadcrumb }) {
  return (
    <section className="bg-brand-navy py-16">
      <Container>
        {breadcrumb && (
          <div className="[&_*]:text-white/70 [&_[aria-current]]:text-white [&_a:hover]:text-white">
            <Breadcrumbs items={breadcrumb} />
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/75"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  )
}
