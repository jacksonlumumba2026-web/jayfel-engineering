import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calculator, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { ESTIMATOR_CATEGORIES, formatKES } from '../data/estimator'
import { img } from '../assets/images'

type Unit = 'sqm' | 'sqft'

export default function Estimator() {
  const [categoryKey, setCategoryKey] = useState('')
  const [itemLabel, setItemLabel] = useState('')
  const [area, setArea] = useState('')
  const [unit, setUnit] = useState<Unit>('sqm')

  const category = ESTIMATOR_CATEGORIES.find((c) => c.key === categoryKey)
  const item = category?.items.find((i) => i.label === itemLabel)
  const areaValue = Number(area)

  const result = useMemo(() => {
    if (!item || !areaValue || areaValue <= 0) return null
    const rate = unit === 'sqm' ? item.ratePerSqm : item.ratePerSqft
    const mid = rate * areaValue
    return { rate, low: mid * 0.9, high: mid * 1.15 }
  }, [item, areaValue, unit])

  return (
    <>
      <Helmet>
        <title>Project Cost Estimator | JAYFEL Engineering Limited</title>
        <link rel="canonical" href="https://jayfelengineering.com/estimator/" />
        <meta name="description" content="Get an instant, ballpark construction cost estimate for residential, commercial and industrial buildings on the Kenyan coast." />
      </Helmet>

      <PageHero
        eyebrow="Plan your budget"
        title="Project cost estimator"
        intro="Pick a building type and enter its floor area for an instant ballpark figure, based on typical construction rates for coastal Kenya."
        image={img('rebar-slab')}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border p-7 card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="category">Building category</label>
                  <select
                    id="category"
                    value={categoryKey}
                    onChange={(e) => {
                      setCategoryKey(e.target.value)
                      setItemLabel('')
                    }}
                    className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <option value="" disabled>Select a category</option>
                    {ESTIMATOR_CATEGORIES.map((c) => (
                      <option key={c.key} value={c.key}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="buildingType">Building type</label>
                  <select
                    id="buildingType"
                    value={itemLabel}
                    onChange={(e) => setItemLabel(e.target.value)}
                    disabled={!category}
                    className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none disabled:opacity-50"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <option value="" disabled>{category ? 'Select a building type' : 'Choose a category first'}</option>
                    {category?.items.map((i) => (
                      <option key={i.label} value={i.label}>{i.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="area">Floor area</label>
                  <input
                    id="area"
                    type="number"
                    min="1"
                    inputMode="decimal"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 250"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="unit">Unit</label>
                  <select
                    id="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as Unit)}
                    className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <option value="sqm">Square metres (m²)</option>
                    <option value="sqft">Square feet (sq ft)</option>
                  </select>
                </div>
              </div>

              <div className="mt-7 rounded-xl p-6" style={{ background: 'var(--color-red-soft)' }}>
                {result && item ? (
                  <>
                    <p className="eyebrow" style={{ color: 'var(--color-red-deep)' }}>Estimated construction cost</p>
                    <p className="mt-2 text-3xl font-extrabold sm:text-4xl">
                      {formatKES(result.low)} – {formatKES(result.high)}
                    </p>
                    <p className="mt-2 text-sm" style={{ color: 'var(--color-charcoal-soft)' }}>
                      Based on {item.label} at {formatKES(result.rate)} per {unit === 'sqm' ? 'square metre' : 'square foot'}.
                    </p>
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <Calculator size={22} style={{ color: 'var(--color-red)' }} />
                    <p className="text-sm font-medium" style={{ color: 'var(--color-charcoal-soft)' }}>
                      Select a category, building type and floor area to see your estimate.
                    </p>
                  </div>
                )}
              </div>

              <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                This is a ballpark figure only, not a binding quote. Actual costs depend on site conditions, finishes,
                design and current material prices. Request a detailed quote for accurate, itemised pricing.
              </p>

              <Link to="/quote" className="btn-primary mt-6 inline-flex">
                Request a detailed quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border p-7 card-shadow" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold">How this estimate works</h3>
              <ol className="mt-4 space-y-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                {[
                  'Choose the building category and type closest to your project.',
                  'Enter the total floor area you plan to build.',
                  'We multiply the area by typical coastal Kenya construction rates for that building type.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: 'var(--color-red)' }}>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
