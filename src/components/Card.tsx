import type { ReactNode } from 'react'

export default function Card({
  children,
  className = '',
  padded = true,
}: {
  children: ReactNode
  className?: string
  padded?: boolean
}) {
  return (
    <div
      className={`card-shadow card-shadow-hover rounded-2xl bg-white border transition-all duration-300 ${padded ? 'p-6 sm:p-7' : ''} ${className}`}
      style={{ borderColor: 'var(--color-border)' }}
    >
      {children}
    </div>
  )
}
