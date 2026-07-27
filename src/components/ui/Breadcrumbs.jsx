import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { PATHS } from '../../routes/paths.js'
import { buildBreadcrumbSchema } from '../../utils/seoSchema.js'

export default function Breadcrumbs({ items }) {
  const fullItems = [{ name: 'Home', path: PATHS.home }, ...items]
  const schema = buildBreadcrumbSchema(fullItems)

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ol className="text-brand-black/60 flex flex-wrap items-center gap-1.5 text-sm">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="text-brand-black font-medium">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-brand-navy hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
