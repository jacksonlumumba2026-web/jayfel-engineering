import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import logo from '../assets/jayfel-logo.jpg'
import { COMPANY, SERVICES } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--color-charcoal)' }} className="text-white">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-lg font-extrabold" style={{ fontFamily: 'var(--font-display)' }}>
              JAYFEL Engineering
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60">{COMPANY.motto} — {COMPANY.mission}.</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {[
              ['/about', 'About'],
              ['/services', 'Services'],
              ['/projects', 'Projects'],
              ['/certifications', 'Certifications'],
              ['/quote', 'Request a Quote'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {COMPANY.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone size={15} style={{ color: 'var(--color-red)' }} />
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-white">{p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail size={15} style={{ color: 'var(--color-red)' }} />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
            </li>
            {COMPANY.addresses.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                <span>{a}</span>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
              <span>
                {COMPANY.hours.map((h) => (
                  <span key={h.day} className="block">{h.day}: {h.time}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-page text-center text-xs text-white/45">
          © {year} JAYFEL Engineering Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
