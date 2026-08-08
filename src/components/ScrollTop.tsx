import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-1"
      style={{ background: 'var(--color-charcoal)' }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}
