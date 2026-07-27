import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { siteConfig } from '../src/constants/siteConfig.js'
import { PATHS } from '../src/routes/paths.js'
import { treatments } from '../src/data/treatments.js'
import { blogPosts } from '../src/data/blogPosts.js'

const staticRoutes = [
  { path: PATHS.home, priority: '1.0', changefreq: 'weekly' },
  { path: PATHS.about, priority: '0.8', changefreq: 'monthly' },
  { path: PATHS.treatments, priority: '0.9', changefreq: 'monthly' },
  { path: PATHS.team, priority: '0.7', changefreq: 'monthly' },
  { path: PATHS.testimonials, priority: '0.6', changefreq: 'monthly' },
  { path: PATHS.blog, priority: '0.7', changefreq: 'weekly' },
  { path: PATHS.contact, priority: '0.9', changefreq: 'yearly' },
  { path: PATHS.privacyPolicy, priority: '0.2', changefreq: 'yearly' },
  { path: PATHS.terms, priority: '0.2', changefreq: 'yearly' },
]

const treatmentRoutes = treatments.map((treatment) => ({
  path: PATHS.treatmentDetail(treatment.slug),
  priority: '0.8',
  changefreq: 'monthly',
}))

const blogRoutes = blogPosts.map((post) => ({
  path: PATHS.blogPost(post.slug),
  priority: '0.6',
  changefreq: 'monthly',
  lastmod: post.date,
}))

const allRoutes = [...staticRoutes, ...treatmentRoutes, ...blogRoutes]

const urlEntries = allRoutes
  .map(
    (route) => `  <url>
    <loc>${siteConfig.url}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const outputPath = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)), 'sitemap.xml')
await writeFile(outputPath, xml, 'utf-8')
console.log(`sitemap.xml gerado com ${allRoutes.length} URLs em ${outputPath}`)
