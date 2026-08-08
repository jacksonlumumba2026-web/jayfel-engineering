import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function CtaBanner() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-charcoal)' }}>
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 rounded-3xl p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between" style={{ background: '#232427' }}>
          <div className="max-w-xl">
            <p className="eyebrow" style={{ color: '#F3B4B7' }}>Let's build together</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Ready to start your next project?</h3>
            <p className="mt-3 text-white/70">
              Tell us about your site and budget — we'll come back with a clear, realistic quote.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Link to="/quote" className="btn-primary">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="btn-outline text-white">
              <Phone size={18} /> Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
