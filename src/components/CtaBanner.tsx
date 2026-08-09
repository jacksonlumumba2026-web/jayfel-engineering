import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function CtaBanner({
  eyebrow = "Let's build together",
  title = 'Ready to start your next project?',
  text = "Tell us about your site and budget — we'll come back with a clear, realistic quote.",
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string
  title?: string
  text?: string
  secondaryLabel?: string
  secondaryTo?: string
} = {}) {
  return (
    <section className="section-pad" style={{ background: 'var(--color-charcoal)' }}>
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 rounded-3xl p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between" style={{ background: '#232427' }}>
          <div className="max-w-xl">
            <p className="eyebrow" style={{ color: '#F3B4B7' }}>{eyebrow}</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{title}</h3>
            <p className="mt-3 text-white/70">{text}</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Link to="/quote" className="btn-primary">
              Request a Quote <ArrowRight size={18} />
            </Link>
            {secondaryTo ? (
              <Link to={secondaryTo} className="btn-outline text-white">
                {secondaryLabel}
              </Link>
            ) : (
              <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="btn-outline text-white">
                <Phone size={18} /> {secondaryLabel || 'Call us'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
