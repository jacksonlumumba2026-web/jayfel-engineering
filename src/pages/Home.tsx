import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react'
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
            <p className="eyebrow" style={{ color: '#F3B4B7' }}>NCA-registered contractor · since {COMPANY.incorporatedDate.split(' ').pop()}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building homes that raise the <span style={{ color: 'var(--color-red)' }}>standard of living.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-white/75">{COMPANY.name} is a Kenyan construction and engineering company delivering residential, commercial and civil works — from foundation to handover.</p>
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
            <p className="eyebrow mt-8" style={{ color: 'var(--color-red)' }}>{COMPANY.motto.toUpperCase()}</p>
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

      {/* Who we are */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A contractor built on compliance, craft and clear communication.</h2>
            <p className="mt-5" style={{ color: 'var(--color-muted)' }}>
              Incorporated in Kenya on {COMPANY.incorporatedDate}, {COMPANY.name} is a private limited company registered
              with the National Construction Authority for both building works and road works. We work as main
              contractor on apartment developments and private residential blocks, and we handle every stage —
              mobilisation, site clearance, surveying, earthworks, concrete works and finishes.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'NCA5 Building Works and NCA8 Road Works registration',
                'NCA Certificate of Compliance on completed developments',
                'Valid KRA tax compliance certification',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: 'var(--color-charcoal-soft)' }}>
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-bold" style={{ color: 'var(--color-red-deep)' }}>
              More about JAYFEL <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-3">
              <div className="img-zoom col-span-2 rounded-2xl">
                <img src={img('structure-frame')} alt="Reinforced concrete structural works on a JAYFEL site" className="h-56 w-full rounded-2xl object-cover sm:h-64" loading="lazy" />
              </div>
              <div className="img-zoom rounded-2xl">
                <img src={img('interior-kitchen')} alt="Finished interior fit-out on a JAYFEL development" className="h-32 w-full rounded-2xl object-cover sm:h-36" loading="lazy" />
              </div>
              <div className="img-zoom rounded-2xl">
                <img src={img('excavation')} alt="Excavation works on a JAYFEL site" className="h-32 w-full rounded-2xl object-cover sm:h-36" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-page">
          <Reveal delay={150}>
            <div className="mt-16 border-t pt-16" style={{ borderColor: 'var(--color-border)' }}>
              <p className="eyebrow">Our team</p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">The people behind every build</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="img-zoom rounded-2xl">
                  <img src={img('site-team')} alt="JAYFEL site team on location" className="h-56 w-full rounded-2xl object-cover sm:h-64" loading="lazy" />
                </div>
                <div className="img-zoom rounded-2xl">
                  <img src={img('staff-site-crew')} alt="JAYFEL staff member on site" className="h-56 w-full rounded-2xl object-cover object-top sm:h-64" loading="lazy" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="Full-scope construction and engineering services" intro="From ground breaking to handover, our teams cover the structural, civil and management work your project needs." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
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
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Why choose us" title="Compliant, accountable and site-proven" center />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Fully registered & compliant',
                text: 'Registered with the National Construction Authority for building works (NCA5) and road works (NCA8), with a valid annual practising licence and KRA tax compliance.',
              },
              {
                title: 'Certified delivery record',
                text: 'Our Mtwapa Pride II development was certified by the NCA as fully compliant with Section 31 of the NCA Act — and officially opened in October 2022.',
              },
              {
                title: 'A clear work methodology',
                text: 'Mobilisation, site clearance, surveying and progress monitoring at every stage, so quantities and quality are verified as the build advances.',
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <Card>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--color-red-soft)' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--color-red-deep)' }} />
                  </div>
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{f.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
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
