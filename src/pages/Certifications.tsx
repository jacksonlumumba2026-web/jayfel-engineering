import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Eye, Download, FileText } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Card from '../components/Card'
import Lightbox from '../components/Lightbox'
import CtaBanner from '../components/CtaBanner'
import { CERTIFICATES, DOCUMENTS } from '../data/site'
import { img } from '../assets/images'

export default function Certifications() {
  const [index, setIndex] = useState<number | null>(null)
  const images = CERTIFICATES.map((c) => ({ src: img(c.image), caption: c.title }))

  return (
    <>
      <Helmet>
        <title>Certifications | JAYFEL Engineering Limited</title>
        <link rel="canonical" href="https://jayfelengineering.com/certifications/" />
        <meta name="description" content="NCA registration, contractor practising license, incorporation and KRA tax compliance certificates for JAYFEL Engineering Limited." />
      </Helmet>

      <PageHero
        eyebrow="Compliance"
        title="Certifications & registration documents"
        intro="Every document below is issued to JAYFEL Engineering Limited. Click to view full size, or download the source PDF."
        image={img('foundation-cages')}
      />

      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 70}>
              <Card padded={false} className="overflow-hidden">
                <img src={img(c.image)} alt={c.title} className="h-56 w-full object-cover object-top" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--color-red-deep)' }}>{c.issuer}</p>
                  <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>{c.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button onClick={() => setIndex(i)} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white" style={{ background: 'var(--color-charcoal)' }}>
                      <Eye size={14} /> View
                    </button>
                    <a href={c.pdf || img(c.image)} download className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold" style={{ borderColor: 'var(--color-border)' }}>
                      <Download size={14} /> Download PDF
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-page">
          <Reveal>
            <div className="rounded-3xl border bg-white p-8 card-shadow sm:p-10" style={{ borderColor: 'var(--color-border)' }}>
              <h2 className="text-2xl font-extrabold">Company documents</h2>
              <p className="mt-2" style={{ color: 'var(--color-muted)' }}>
                Download our full company profile and project portfolio for tender or due-diligence purposes.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {DOCUMENTS.map((d) => (
                  <a key={d.href} href={d.href} download className="btn-primary">
                    <FileText size={17} /> {d.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {index !== null && (
        <Lightbox images={images} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
      )}

      <CtaBanner
        eyebrow="Start your project"
        title="Verified, registered and ready to tender."
        text="Request references, bank details or additional documentation and we will send them across."
        secondaryLabel="Talk to us"
        secondaryTo="/contact"
      />
    </>
  )
}
