export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  intro?: string
  image: string
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal)' }}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(28,29,32,.55) 0%, rgba(28,29,32,.88) 100%)' }}
      />
      <div className="container-page relative py-24 sm:py-28 lg:py-32">
        <p className="eyebrow" style={{ color: '#F3B4B7' }}>{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-xl text-white/75">{intro}</p>}
      </div>
    </section>
  )
}
