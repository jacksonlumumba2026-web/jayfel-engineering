import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import CtaBanner from '../components/CtaBanner'
import { COMPANY, STATS, SERVICES, PROJECTS, CERTIFICATES } from '../data/site'
import { img } from '../assets/images'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>JAYFEL Engineering Limited | NCA-Registered Kenyan Contractor</title>
        <meta name="description" content="JAYFEL Engineering Limited — NCA-registered construction contractor in Kilifi, Kenya. Your housing partner for residential, commercial and civil works." />
        <meta property="og:title" content="JAYFEL Engineering Limited" />
        <meta property="og:description" content="NCA-registered construction contractor in Kenya. Your housing partner." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'GeneralContractor',
          name: COMPANY.name,
          slogan: COMPANY.motto,
          email: COMPANY.email,
          telephone: COMPANY.phones[0],
          address: COMPANY.addresses[1],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal)' }}>
        <img src={img('mtwapa-pride-aerial')} alt="Aerial view of Mtwapa Pride apartments" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(28,29,32,.96) 20%, rgba(28,29,32,.65) 60%, rgba(226,39,48,.35) 100%)' }} />
        <div className="container-page relative py-28 sm:py-36 lg:py-44">
          <Reveal>
            <p className="eyebrow" style={{ color: '#F3B4B7' }}>NCA-registered contractor · Kenya</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building Kenya's homes with precision and integrity
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-white/75">{COMPANY.mission}.</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-outline text-white">
                View our projects
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Incorporated 2019', 'NCA5 Building', 'NCA8 Road works', 'KRA compliant'].map((chip) => (
                <span key={chip} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                  <CheckCircle2 size={14} style={{ color: 'var(--color-red)' }} /> {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b py-14" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-red)' }}>
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="Construction services built around you" intro="From foundations to finishes, we deliver residential and commercial projects across Kilifi County and beyond." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Card>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--color-red-soft)' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--color-red-deep)' }} />
                  </div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{s.summary}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: 'var(--color-red-deep)' }}>
              View all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why JAYFEL */}
      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="img-zoom rounded-3xl">
              <img src={img('site-team')} alt="JAYFEL site team on location" className="h-full w-full rounded-3xl object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Why JAYFEL</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A registered contractor you can build with confidently</h2>
            <div className="mt-6 space-y-5">
              {[
                { icon: Award, title: 'NCA registered & compliant', text: 'Registered for both building and road works, with an annual practising license.' },
                { icon: Users, title: 'Hands-on site management', text: 'Our own supervisors on site every day — not subcontracted oversight.' },
                { icon: ShieldCheck, title: 'Tax compliant & bonded', text: 'Fully KRA tax compliant, with established banking and audit relationships.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: 'var(--color-red-soft)' }}>
                    <f.icon size={18} style={{ color: 'var(--color-red-deep)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold">{f.title}</h4>
                    <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Our work" title="Featured projects" intro="A look at what we're building and what we've delivered." />
          </Reveal>
          <Reveal delay={100}>
            <div className="marquee-wrap mt-12">
              <div className="marquee-track">
                {PROJECTS.map((p) => (
                  <Link
                    key={p.slug}
                    to="/projects"
                    className="marquee-card group block overflow-hidden rounded-2xl border card-shadow card-shadow-hover"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <div className="img-zoom relative h-52">
                      <img src={img(p.gallery[0])} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                      <span
                        className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                        style={{ background: p.status === 'Completed' ? 'var(--color-red)' : '#FFFFFF', color: p.status === 'Completed' ? '#FFFFFF' : 'var(--color-charcoal)' }}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold group-hover:text-red" style={{ color: 'var(--color-charcoal)' }}>{p.name}</h3>
                      <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>{p.location}</p>
                    </div>
                  </Link>
                ))}
                {PROJECTS.map((p) => (
                  <Link
                    key={`${p.slug}-dup`}
                    to="/projects"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="marquee-card group block overflow-hidden rounded-2xl border card-shadow card-shadow-hover"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <div className="img-zoom relative h-52">
                      <img src={img(p.gallery[0])} alt="" className="h-full w-full object-cover" loading="lazy" />
                      <span
                        className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                        style={{ background: p.status === 'Completed' ? 'var(--color-red)' : '#FFFFFF', color: p.status === 'Completed' ? '#FFFFFF' : 'var(--color-charcoal)' }}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold group-hover:text-red" style={{ color: 'var(--color-charcoal)' }}>{p.name}</h3>
                      <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>{p.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications teaser */}
      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Trust & compliance" title="Registered, licensed and tax compliant" center />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 50}>
                <div className="img-zoom rounded-xl border card-shadow" style={{ borderColor: 'var(--color-border)' }}>
                  <img src={img(c.image)} alt={c.title} className="h-32 w-full rounded-xl object-cover object-top" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/certifications" className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: 'var(--color-red-deep)' }}>
              View all certifications <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
