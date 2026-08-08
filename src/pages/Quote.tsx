import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { COMPANY, PROJECT_TYPES, BUDGET_RANGES } from '../data/site'
import { img } from '../assets/images'

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'projectType' | 'details', string>>

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const projectType = String(form.get('projectType') || '')
    const details = String(form.get('details') || '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Please enter your full name.'
    if (!email || !email.includes('@')) nextErrors.email = 'Please enter a valid email.'
    if (!phone) nextErrors.phone = 'Please enter a phone number.'
    if (!projectType) nextErrors.projectType = 'Please select a project type.'
    if (!details) nextErrors.details = 'Please tell us about your project.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const budget = String(form.get('budget') || '')
    const location = String(form.get('location') || '')
    const startDate = String(form.get('startDate') || '')

    const subject = `Quote request — ${projectType}`
    const body = [
      `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`,
      `Project type: ${projectType}`, `Budget range: ${budget || 'Not specified'}`,
      `Location: ${location || 'Not specified'}`, `Preferred start date: ${startDate || 'Not specified'}`,
      '', 'Project details:', details,
    ].join('\n')

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Request a Quote | JAYFEL Engineering Limited</title>
        <meta name="description" content="Tell us about your construction project and get a clear, realistic quote from JAYFEL Engineering Limited." />
      </Helmet>

      <PageHero eyebrow="Get started" title="Request a quote" intro="Tell us about your project and we'll come back with next steps." image={img('interior-kitchen')} />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border p-8 text-center card-shadow" style={{ borderColor: 'var(--color-border)' }}>
                <CheckCircle2 size={40} className="mx-auto" style={{ color: 'var(--color-red)' }} />
                <h3 className="mt-4 text-xl font-extrabold">Your email is ready to send</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                  We've opened a pre-filled email to {COMPANY.email}. Send it and our team will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" error={errors.name} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <SelectField label="Project type" name="projectType" options={PROJECT_TYPES} error={errors.projectType} />
                  <SelectField label="Budget range" name="budget" options={BUDGET_RANGES} />
                  <Field label="Location" name="location" />
                  <Field label="Preferred start date" name="startDate" type="date" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Project details</label>
                  <textarea
                    name="details"
                    rows={5}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{ borderColor: errors.details ? 'var(--color-red)' : 'var(--color-border)' }}
                  />
                  {errors.details && <p className="mt-1 text-xs" style={{ color: 'var(--color-red)' }}>{errors.details}</p>}
                </div>
                <button type="submit" className="btn-primary">
                  <Send size={17} /> Send request
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border p-7 card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold">What happens next</h3>
              <ol className="mt-4 space-y-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                {['We review your brief within 1–2 business days.', 'We call to confirm scope, site and budget.', 'You receive a clear, itemised quote.'].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: 'var(--color-red)' }}>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-6 space-y-2 border-t pt-5 text-sm" style={{ borderColor: 'var(--color-border)' }}>
                <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 font-semibold"><Phone size={15} style={{ color: 'var(--color-red)' }} /> {COMPANY.phones[0]}</a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 font-semibold"><Mail size={15} style={{ color: 'var(--color-red)' }} /> {COMPANY.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
        style={{ borderColor: error ? 'var(--color-red)' : 'var(--color-border)' }}
      />
      {error && <p className="mt-1 text-xs" style={{ color: 'var(--color-red)' }}>{error}</p>}
    </div>
  )
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold" htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none"
        style={{ borderColor: error ? 'var(--color-red)' : 'var(--color-border)' }}
      >
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1 text-xs" style={{ color: 'var(--color-red)' }}>{error}</p>}
    </div>
  )
}
