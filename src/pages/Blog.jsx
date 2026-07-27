import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageSEO from '../components/layout/PageSEO.jsx'
import PageHeader from '../components/layout/PageHeader.jsx'
import Container from '../components/ui/Container.jsx'
import BlogCard from '../components/features/BlogCard.jsx'
import { blogPosts, blogCategories } from '../data/blogPosts.js'
import { useDebounce } from '../hooks/useDebounce.js'
import { PATHS } from '../routes/paths.js'
import { cn } from '../utils/cn.js'

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const debouncedSearch = useDebounce(search, 250)

  const filteredPosts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory
      const matchesSearch =
        !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [debouncedSearch, activeCategory])

  return (
    <>
      <PageSEO
        title="Blog"
        description="Artigos sobre saúde bucal, tratamentos estéticos e novidades em odontologia, escritos pela equipe da Sorriso Odontologia."
        path={PATHS.blog}
      />
      <PageHeader
        title="Blog Sorriso Odontologia"
        description="Conteúdo educativo para te ajudar a entender cada etapa do cuidado com a saúde bucal."
        breadcrumb={[{ name: 'Blog', path: PATHS.blog }]}
      />

      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
              {['Todos', ...blogCategories].map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeCategory === category
                      ? 'bg-brand-navy text-white'
                      : 'bg-brand-gray text-brand-black/70 hover:bg-brand-blue-light',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative w-full sm:w-72">
              <span className="sr-only">Pesquisar artigos</span>
              <Search
                className="text-brand-black/40 pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Pesquisar artigos…"
                className="border-brand-gray-dark focus-visible:outline-brand-navy w-full rounded-full border bg-white py-3 pr-4 pl-11 text-sm"
              />
            </label>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-brand-black/60 mt-16 text-center">Nenhum artigo encontrado para essa busca.</p>
          )}
        </Container>
      </section>
    </>
  )
}
