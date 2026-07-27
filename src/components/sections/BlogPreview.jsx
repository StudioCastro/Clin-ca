import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blogPosts.js'
import { PATHS } from '../../routes/paths.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import BlogCard from '../features/BlogCard.jsx'

const latestPosts = blogPosts.slice(0, 3)

export default function BlogPreview() {
  return (
    <section className="bg-brand-gray py-24">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Conteúdo para cuidar melhor do seu sorriso"
          description="Artigos escritos com linguagem acessível para te ajudar a entender cada etapa do cuidado odontológico."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to={PATHS.blog} variant="secondary" size="lg">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
