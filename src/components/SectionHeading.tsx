export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow" style={light ? { color: '#F3B4B7' } : undefined}>{eyebrow}</p>
      <h2
        className="mt-3 text-3xl font-extrabold sm:text-4xl"
        style={{ color: light ? '#FFFFFF' : 'var(--color-charcoal)' }}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: light ? 'rgba(255,255,255,.75)' : 'var(--color-muted)' }}>
          {intro}
        </p>
      )}
    </div>
  )
}
