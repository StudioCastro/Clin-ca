import { useState } from 'react'
import { gallery, galleryCategories } from '../../data/gallery.js'
import { cn } from '../../utils/cn.js'
import ResponsiveImage from '../ui/ResponsiveImage.jsx'
import Lightbox from './Lightbox.jsx'

export default function GalleryMasonry() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'Todos' ? gallery : gallery.filter((item) => item.category === activeCategory)

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filtrar galeria por categoria"
      >
        {galleryCategories.map((category) => (
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

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Ampliar imagem: ${item.alt}`}
            className="shadow-soft mb-4 block w-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1 focus-visible:-translate-y-1"
          >
            <ResponsiveImage src={item.src} alt={item.alt} width={800} height={800} className="w-full" />
          </button>
        ))}
      </div>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((current) => (current + 1) % filtered.length)}
        onPrev={() => setLightboxIndex((current) => (current - 1 + filtered.length) % filtered.length)}
      />
    </div>
  )
}
