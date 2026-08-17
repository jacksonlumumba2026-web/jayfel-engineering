import { Helmet } from 'react-helmet-async'
import { User } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Card from '../components/Card'
import CtaBanner from '../components/CtaBanner'
import ImageSlideshow from '../components/ImageSlideshow'
import { COMPANY } from '../data/site'
import { img } from '../assets/images'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About JAYFEL Engineering Limited | Our Story & Directors</title>
        <link rel="canonical" href="https://jayfelengineering.com/about/" />
        <meta name="description" content="Incorporated in 2019, JAYFEL Engineering Limited is an NCA-registered contractor in Kilifi, Kenya, led by James Ndata and Felix Chebii." />
      </Helmet>

      <PageHero eyebrow="About us" title="Your housing partner since 2019" intro={COMPANY.mission} image={img('structure-frame')} />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-extrabold">Built on registration, discipline and delivery</h2>
            <p className="mt-5 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              JAYFEL Engineering Limited was incorporated on {COMPANY.incorporatedDate} under the Companies Act, 2015
              as a private limited company (Incorporation No. {COMPANY.incorporationNo}). Since then we have grown
              into a registered contractor with the National Construction Authority, delivering residential and
              civil works to our clients across Kilifi County and beyond.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Every project we take on is registered, supervised and closed out to the standards of our clients — and
              the Authority — expect. That discipline is what "{COMPANY.motto}" means in practice.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ImageSlideshow
              images={['rebar-slab', 'structure-frame', 'excavation', 'site-team']}
              alt="JAYFEL Engineering Limited site works"
              className="h-full min-h-[320px] rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            { title: 'Mission', text: COMPANY.mission },
            { title: 'Vision', text: 'To be the most trusted residential contractor along the Kenyan coast.' },
            { title: 'Values', text: 'Compliance, craftsmanship and clear communication on every site.' },
          ].map((v) => (
            <Reveal key={v.title}>
              <Card>
                <h3 className="text-lg font-bold" style={{ color: 'var(--color-red-deep)' }}>{v.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{v.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-3 text-3xl font-extrabold">Directors</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {COMPANY.directors.map((d, i) => (
              <Reveal key={d.role} delay={i * 80}>
                <Card>
                  {d.photo ? (
                    <img
                      src={img(d.photo)}
                      alt={d.role}
                      className="h-16 w-16 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ background: 'var(--color-red-soft)' }}>
                      <User size={28} style={{ color: 'var(--color-red-deep)' }} />
                    </div>
                  )}
                  <h3 className="mt-4 text-lg font-bold" style={{ color: 'var(--color-red-deep)' }}>{d.role}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{d.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Company facts</p>
            <h2 className="mt-3 text-3xl font-extrabold">Registration & contacts</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-2xl border bg-white card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              {[
                ['Incorporation No.', COMPANY.incorporationNo],
                ['KRA PIN', COMPANY.kraPin],
                ['Bankers', COMPANY.bankers.join(' · ')],
                ['Auditors', COMPANY.auditors],
                ['Advocates', COMPANY.advocates],
                ['Registered addresses', COMPANY.addresses.join(' · ')],
              ].map(([label, value], i) => (
                <div key={label} className={`grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4 ${i !== 0 ? 'border-t' : ''}`} style={{ borderColor: 'var(--color-border)' }}>
                  <dt className="text-sm font-bold" style={{ color: 'var(--color-charcoal)' }}>{label}</dt>
                  <dd className="sm:col-span-2 text-sm" style={{ color: 'var(--color-muted)' }}>{value}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
