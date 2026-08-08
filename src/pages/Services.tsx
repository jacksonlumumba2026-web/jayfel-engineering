import { Helmet } from 'react-helmet-async'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Card from '../components/Card'
import CtaBanner from '../components/CtaBanner'
import { SERVICES, METHODOLOGY } from '../data/site'
import { img } from '../assets/images'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | JAYFEL Engineering Limited</title>
        <meta name="description" content="Residential, commercial, civil and structural construction services from an NCA-registered contractor in Kenya." />
      </Helmet>

      <PageHero eyebrow="Services" title="Construction services, start to finish" intro="Eight service lines covering everything from earthworks to post-handover maintenance." image={img('rebar-slab')} />

      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <Card>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--color-red-soft)' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--color-red-deep)' }} />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{s.summary}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-charcoal-soft)' }}>
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} /> {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-3xl font-extrabold">Our project methodology</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY.map((m, i) => (
              <Reveal key={m.step} delay={i * 80}>
                <div className="rounded-2xl border bg-white p-6 card-shadow" style={{ borderColor: 'var(--color-border)' }}>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-red)' }}>{m.step}</span>
                  <h3 className="mt-3 font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
