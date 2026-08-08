import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { COMPANY } from '../data/site'
import { img } from '../assets/images'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const phone = String(form.get('phone') || '')
    const subject = String(form.get('subject') || 'Website enquiry')
    const message = String(form.get('message') || '')
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | JAYFEL Engineering Limited</title>
        <meta name="description" content="Get in touch with JAYFEL Engineering Limited in Mtwapa, Kilifi County, Kenya — phone, email, WhatsApp and office hours." />
      </Helmet>

      <PageHero eyebrow="Get in touch" title="Contact JAYFEL Engineering" image={img('excavation')} />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            {sent ? (
              <div className="rounded-2xl border p-8 text-center card-shadow" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-xl font-extrabold">Your message is ready to send</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>We've opened a pre-filled email — send it and we'll reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold" htmlFor="name">Name</label>
                    <input required id="name" name="name" className="w-full rounded-xl border px-4 py-3 text-sm outline-none" style={{ borderColor: 'var(--color-border)' }} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold" htmlFor="email">Email</label>
                    <input required id="email" name="email" type="email" className="w-full rounded-xl border px-4 py-3 text-sm outline-none" style={{ borderColor: 'var(--color-border)' }} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className="w-full rounded-xl border px-4 py-3 text-sm outline-none" style={{ borderColor: 'var(--color-border)' }} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold" htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" className="w-full rounded-xl border px-4 py-3 text-sm outline-none" style={{ borderColor: 'var(--color-border)' }} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="message">Message</label>
                  <textarea required id="message" name="message" rows={5} className="w-full rounded-xl border px-4 py-3 text-sm outline-none" style={{ borderColor: 'var(--color-border)' }} />
                </div>
                <button type="submit" className="btn-primary"><Send size={17} /> Send message</button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 rounded-2xl border p-7 card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              {COMPANY.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="flex items-center gap-3 font-semibold">
                  <Phone size={18} style={{ color: 'var(--color-red)' }} /> {p}
                </a>
              ))}
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 font-semibold">
                <Mail size={18} style={{ color: 'var(--color-red)' }} /> {COMPANY.email}
              </a>
              {COMPANY.addresses.map((a) => (
                <div key={a} className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                  <span className="text-sm" style={{ color: 'var(--color-charcoal-soft)' }}>{a}</span>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-red)' }} />
                <div className="text-sm" style={{ color: 'var(--color-charcoal-soft)' }}>
                  {COMPANY.hours.map((h) => <div key={h.day}>{h.day}: {h.time}</div>)}
                </div>
              </div>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20JAYFEL%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full"
                style={{ background: '#25D366', boxShadow: 'none' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="container-page mt-16">
            <div className="overflow-hidden rounded-2xl border card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <iframe
                title="JAYFEL Engineering location map"
                src="https://www.google.com/maps?q=Mtwapa,+Kilifi+County,+Kenya&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
