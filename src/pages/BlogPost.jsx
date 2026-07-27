import { Navigate, useParams } from 'react-router-dom'
import { CalendarDays, Clock } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import Container from '../components/ui/Container.jsx'
import Badge from '../components/ui/Badge.jsx'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import BlogContentBlocks from '../components/features/BlogContentBlocks.jsx'
import BlogCard from '../components/features/BlogCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { getPostBySlug, blogPosts } from '../data/blogPosts.js'
import { formatDate } from '../utils/formatDate.js'
import { buildArticleSchema } from '../utils/seoSchema.js'
import { PATHS } from '../routes/paths.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to={PATHS.blog} replace />
  }

  const related = blogPosts
    .filter((item) => item.category === post.category && item.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <PageSEO
        title={post.title}
        description={post.excerpt}
        path={PATHS.blogPost(post.slug)}
        image={post.cover}
        jsonLd={buildArticleSchema(post)}
      />

      <article className="py-16">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { name: 'Blog', path: PATHS.blog },
              { name: post.title, path: PATHS.blogPost(post.slug) },
            ]}
          />

          <Badge className="mt-4">{post.category}</Badge>
          <h1 className="font-display text-brand-black mt-4 text-3xl font-semibold sm:text-4xl">
            {post.title}
          </h1>

          <div className="text-brand-black/50 mt-4 flex items-center gap-5 text-sm">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <ResponsiveImage
            src={post.cover}
            alt={post.title}
            width={900}
            height={560}
            priority
            className="shadow-elevated mt-8 rounded-2xl"
          />

          <div className="mt-10">
            <BlogContentBlocks blocks={post.content} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-brand-gray py-24">
          <Container>
            <SectionHeading eyebrow="Continue lendo" title="Mais artigos que podem te interessar" />
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
