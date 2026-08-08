import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: { src: string; caption?: string }[]
  index: number
  onClose: () => void
  onIndexChange: (i: number) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length)
      if (e.key === 'Tab') e.preventDefault()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onIndexChange])

  const current = images[index]
  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      {images.length > 1 && (
        <button
          onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
          className="absolute left-3 sm:left-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>
      )}
      <figure className="max-h-[85vh] max-w-4xl">
        <img src={current.src} alt={current.caption || ''} className="max-h-[75vh] w-auto rounded-xl object-contain" />
        {current.caption && <figcaption className="mt-3 text-center text-sm text-white/70">{current.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <button
          onClick={() => onIndexChange((index + 1) % images.length)}
          className="absolute right-3 sm:right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>
      )}
    </div>
  )
}
