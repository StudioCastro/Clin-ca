import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

export default function BeforeAfterSlider({ before, after, caption }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const percentage = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, percentage)))
  }, [])

  const handlePointerDown = (event) => {
    isDragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!isDragging.current) return
    updatePosition(event.clientX)
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') setPosition((value) => Math.max(0, value - 5))
    if (event.key === 'ArrowRight') setPosition((value) => Math.min(100, value + 5))
  }

  return (
    <figure>
      <div
        ref={containerRef}
        className="shadow-elevated relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <img
          src={after}
          alt="Resultado após o tratamento"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <img
          src={before}
          alt="Situação antes do tratamento"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          draggable={false}
        />

        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          Antes
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          Depois
        </span>

        <div
          role="slider"
          tabIndex={0}
          aria-label="Ajustar comparação de antes e depois"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={handleKeyDown}
          className="focus-visible:outline-brand-navy absolute inset-y-0 flex w-1 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-white"
          style={{ left: `${position}%` }}
        >
          <span className="text-brand-navy shadow-elevated flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
      {caption && <figcaption className="text-brand-black/60 mt-3 text-center text-sm">{caption}</figcaption>}
    </figure>
  )
}
