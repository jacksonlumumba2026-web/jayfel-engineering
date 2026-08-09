import { useEffect, useState } from 'react'
import { img } from '../assets/images'

export default function ImageSlideshow({
  images,
  alt,
  className = '',
  interval = 3500,
}: {
  images: string[]
  alt: string
  className?: string
  interval?: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(t)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((key, i) => (
        <img
          key={key}
          src={img(key)}
          alt={i === index ? alt : ''}
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  )
}
