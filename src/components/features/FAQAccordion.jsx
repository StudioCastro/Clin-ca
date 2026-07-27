import { Helmet } from 'react-helmet-async'
import { faq } from '../../data/faq.js'
import { buildFaqSchema } from '../../utils/seoSchema.js'
import Accordion from '../ui/Accordion.jsx'

export default function FAQAccordion() {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildFaqSchema(faq))}</script>
      </Helmet>
      <Accordion items={faq} />
    </div>
  )
}
