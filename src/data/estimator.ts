export type EstimatorItem = {
  label: string
  ratePerSqm: number
  ratePerSqft: number
}

export type EstimatorCategory = {
  key: string
  label: string
  items: EstimatorItem[]
}

// Typical construction rates for coastal Kenya, KES per square metre / square foot.
export const ESTIMATOR_CATEGORIES: EstimatorCategory[] = [
  {
    key: 'residential',
    label: 'Residential — Houses & Apartments',
    items: [
      { label: 'Standard Bungalow', ratePerSqm: 58590, ratePerSqft: 5443 },
      { label: 'Middle-Class Maisonette', ratePerSqm: 65180, ratePerSqft: 6055 },
      { label: 'Luxurious Bungalow', ratePerSqm: 72550, ratePerSqft: 6740 },
      { label: 'Luxurious Maisonette', ratePerSqm: 83760, ratePerSqft: 7782 },
      { label: 'Standard Low-Rise Apartment Block', ratePerSqm: 58730, ratePerSqft: 5456 },
      { label: 'Standard High-Rise Apartment Block', ratePerSqm: 65080, ratePerSqft: 6046 },
      { label: 'Luxurious Apartment Block', ratePerSqm: 88480, ratePerSqft: 8220 },
    ],
  },
  {
    key: 'office',
    label: 'Commercial — Office',
    items: [
      { label: 'Standard Low-Rise Office Block', ratePerSqm: 75830, ratePerSqft: 7045 },
      { label: 'Standard High-Rise Office Block', ratePerSqm: 94670, ratePerSqft: 8795 },
      { label: 'Luxurious High-Rise Office Block', ratePerSqm: 123150, ratePerSqft: 11441 },
      { label: 'Business Park', ratePerSqm: 93700, ratePerSqft: 8705 },
    ],
  },
  {
    key: 'retail',
    label: 'Commercial — Retail',
    items: [
      { label: 'Small Scale Shopping Centre', ratePerSqm: 60010, ratePerSqft: 5575 },
      { label: 'Standard Urban Shopping Complex', ratePerSqm: 80080, ratePerSqft: 7440 },
      { label: 'All-Inclusive Shopping Mall', ratePerSqm: 94990, ratePerSqft: 8825 },
    ],
  },
  {
    key: 'industrial',
    label: 'Industrial',
    items: [
      { label: 'Double Storey Factory', ratePerSqm: 57790, ratePerSqft: 5369 },
      { label: 'High Tech Factory / Lab', ratePerSqm: 106080, ratePerSqft: 9855 },
      { label: 'Warehouse', ratePerSqm: 48270, ratePerSqft: 4484 },
      { label: 'Cold Storage Centre', ratePerSqm: 58120, ratePerSqft: 5400 },
      { label: 'Administration Office', ratePerSqm: 56750, ratePerSqft: 5272 },
    ],
  },
]

export function formatKES(n: number): string {
  return `KES ${Math.round(n).toLocaleString('en-US')}`
}
