import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Building2, Banknote, Images } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import CtaBanner from '../components/CtaBanner'
import { PROJECTS } from '../data/site'
import { img } from '../assets/images'

const FILTERS = ['All', 'Completed', 'Ongoing'] as const

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [lightbox, setLightbox] = useState<{ images: { src: string; caption?: string }[]; index: number } | null>(null)

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.status === filter)

  const counts = {
    All: PROJECTS.length,
    Completed: PROJECTS.filter((p) => p.status === 'Completed').length,
    Ongoing: PROJECTS.filter((p) => p.status === 'Ongoing').length,
  }

  return (
    <>
      <Helmet>
        <title>Our Projects | JAYFEL Engineering Limited</title>
        <meta name="description" content="Completed and ongoing residential developments by JAYFEL Engineering in Mtwapa and Kilifi County, Kenya." />
      </Helmet>

      <PageHero eyebrow="Portfolio" title="Projects delivered and in progress" image={img('mtwapa-pride-block')} />

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
                style={
                  filter === f
                    ? { background: 'var(--color-red)', color: '#fff', borderColor: 'var(--color-red)' }
                    : { borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }
                }
              >
                {f} ({counts[f]})
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <article className="overflow-hidden rounded-3xl border bg-white card-shadow" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    className="img-zoom relative block h-64 w-full sm:h-80"
                    onClick={() => setLightbox({ images: p.gallery.map((g) => ({ src: img(g), caption: p.name })), index: 0 })}
                  >
                    <img src={img(p.gallery[0])} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: p.status === 'Completed' ? 'var(--color-red)' : '#fff', color: p.status === 'Completed' ? '#fff' : 'var(--color-charcoal)' }}
                    >
                      {p.status}
                    </span>
                    <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white">
                      <Images size={14} /> View gallery
                    </span>
                  </button>

                  <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-extrabold">{p.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{p.description}</p>
                    </div>
                    <dl className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                        <div><dt className="font-bold">Location</dt><dd style={{ color: 'var(--color-muted)' }}>{p.location}</dd></div>
                      </div>
                      {p.client && (
                        <div className="flex items-start gap-2">
                          <Building2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                          <div><dt className="font-bold">Client</dt><dd style={{ color: 'var(--color-muted)' }}>{p.client}</dd></div>
                        </div>
                      )}
                      {p.value && (
                        <div className="flex items-start gap-2">
                          <Banknote size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                          <div><dt className="font-bold">Project value</dt><dd style={{ color: 'var(--color-muted)' }}>{p.value}</dd></div>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div className="flex gap-3 overflow-x-auto px-6 pb-6 sm:px-8">
                    {p.gallery.map((g, gi) => (
                      <button
                        key={g}
                        onClick={() => setLightbox({ images: p.gallery.map((gg) => ({ src: img(gg), caption: p.name })), index: gi })}
                        className="img-zoom h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg"
                      >
                        <img src={img(g)} alt={`${p.name} photo ${gi + 1}`} className="h-full w-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(i) => setLightbox({ ...lightbox, index: i })}
        />
      )}

      <CtaBanner />
    </>
  )
}
