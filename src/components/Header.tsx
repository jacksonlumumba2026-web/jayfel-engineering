import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/jayfel-logo.jpg'
import { COMPANY } from '../data/site'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/estimator', label: 'Cost Estimator' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${isActive ? '' : 'hover:text-red'}`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/90 shadow-sm' : 'bg-white/0 border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--color-border)' : 'transparent' }}
    >
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="JAYFEL Engineering Limited" className="h-11 w-11 rounded-xl object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold" style={{ fontFamily: 'var(--font-display)' }}>
              JAYFEL <span style={{ color: 'var(--color-red)' }}>Engineering</span> Limited
            </span>
            <span className="hidden text-xs sm:block" style={{ color: 'var(--color-muted)' }}>
              {COMPANY.motto}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={navClass}
              style={({ isActive }) => ({ color: isActive ? 'var(--color-red)' : 'var(--color-charcoal)' })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/quote" className="btn-primary">
            Request a Quote
          </Link>
        </div>

        <button
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden" style={{ borderColor: 'var(--color-border)' }}>
          <div className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-red)' : 'var(--color-charcoal)',
                  background: isActive ? 'var(--color-red-soft)' : 'transparent',
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                Request a Quote
              </Link>
              <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="btn-outline w-full" style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}>
                <Phone size={18} /> {COMPANY.phones[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
