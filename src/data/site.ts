export const COMPANY = {
  name: 'JAYFEL Engineering Limited',
  shortName: 'JAYFEL',
  motto: 'Your housing partner',
  mission: 'To elevate the housing standards of humanity',
  incorporatedDate: '5th September 2019',
  incorporationNo: 'PVT-JZUZPJB',
  kraPin: 'P051892136I',
  phones: ['+254 726 018 397', '+254 723 896 984'],
  whatsapp: '254726018397',
  email: 'jayfelengineering@gmail.com',
  addresses: [
    'Robert Muli Gardens, Kilifi District, P.O. Box 150 – 80109',
  ],
  directors: [
    {
      name: 'James Ndata',
      role: 'Managing Director',
      nationality: 'Kenyan',
      description: 'Oversees company operations, client relationships and overall project delivery.',
      photo: 'director-james-ndata',
    },
    {
      name: 'Felix Chebii',
      role: 'Director',
      nationality: 'Kenyan',
      description: 'Focuses on site management, technical compliance and quality control across projects.',
      photo: 'director-felix-chebii',
    },
  ],
  bankers: [
    'Kenya Commercial Bank — Nakuru Branch',
    'Family Bank — Mtwapa Branch, P.O. Box 536 – 20100, Mtwapa, Kilifi',
  ],
  auditors: 'Kirunga and Associates, Simphi House – Oloo Street, P.O. Box 2090 – 30100, Eldoret',
  advocates: 'D. Abantu Advocates, Landmark Plaza, 4th Floor, P.O. Box 87239 – 00100, Nairobi. Tel: 0711 540 522, Email: abantuadvocates@gmail.com',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 5:30 PM' },
    { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
}

export const STATS = [
  { value: 5, suffix: '+', label: 'Projects delivered & running' },
  { value: 156, prefix: 'KSh ', suffix: 'M', label: 'Largest project value' },
  { value: 2019, label: 'Incorporated in Kenya' },
  { value: 2, label: 'NCA registration categories' },
]

export const SERVICES = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    summary: 'Apartment blocks, maisonettes and residential units built end to end — from ground breaking to handover.',
    bullets: ['Apartment blocks', 'Residential units & studios', 'Handover-ready finishes'],
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    summary: 'Commercial and mixed-use buildings delivered to programme with NCA-compliant site management.',
    bullets: ['Mixed-use developments', 'Shell & core works', 'Fit-out coordination'],
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering',
    summary: 'Earthworks, drainage, sub-base and base works — backed by NCA registration for road works.',
    bullets: ['Earthworks & excavation', 'Drainage works', 'Sub-base, base & gravel works'],
  },
  {
    slug: 'renovations',
    title: 'Renovations',
    summary: 'Refurbishment and remodelling of existing structures, including stripping out and rebuilding.',
    bullets: ['Remodelling', 'Ripping of existing structures', 'Finishes upgrades'],
  },
  {
    slug: 'building-maintenance',
    title: 'Building Maintenance',
    summary: 'Planned and reactive maintenance that keeps completed developments performing year after year.',
    bullets: ['Planned maintenance', 'Repairs & making good', 'Post-handover support'],
  },
  {
    slug: 'structural-works',
    title: 'Structural Works',
    summary: "Foundations, footings, columns, slabs and concrete works executed to the engineer's design.",
    bullets: ['Foundations & footings', 'Reinforced concrete frames', 'Slabs & formwork'],
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    summary: 'Mobilisation, site clearance, surveying and progress monitoring through every stage of works.',
    bullets: ['Site supervision', 'Programme & cost control', 'Quality assurance'],
  },
  {
    slug: 'engineering-consultancy',
    title: 'Engineering Consultancy',
    summary: 'Work methodology, materials sourcing and buildability advice tailored to your budget.',
    bullets: ['Buildability review', 'Materials advice', 'Construction sequencing'],
  },
]

export const PROJECT_TYPES = SERVICES.map((s) => s.title)

export const BUDGET_RANGES = [
  'Under KSh 1M',
  'KSh 1M – 5M',
  'KSh 5M – 20M',
  'KSh 20M – 50M',
  'Above KSh 50M',
  'Not sure yet',
]

export const METHODOLOGY = [
  { step: '01', title: 'Consultation & briefing', text: 'We meet, understand your site and brief, and agree scope, budget and programme.' },
  { step: '02', title: 'Design review & costing', text: 'We review drawings for buildability and produce a clear, itemised cost estimate.' },
  { step: '03', title: 'NCA registration & mobilisation', text: 'We register the project with the National Construction Authority and mobilise the site team.' },
  { step: '04', title: 'Construction & monitoring', text: 'Earthworks, drainage and concrete works, with surveys at each stage to verify design and quantities.' },
]

export type Project = {
  slug: string
  name: string
  status: 'Completed' | 'Ongoing'
  location: string
  client?: string
  value?: string
  description: string
  gallery: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'mtwapa-pride-ii',
    name: 'Mtwapa Pride II (S24)',
    status: 'Completed',
    location: 'Plot LR No. 9122/639, Mtwapa, Kilifi',
    client: 'Solian Limited',
    value: 'KSh 156,000,000',
    description:
      'A residential apartment development delivered as main contractor and certified by the National Construction Authority as fully compliant. Officially opened on 8th October 2022 by Meshack Kipturgo, Chairman of Solian.',
    gallery: [
      'mtwapa-pride-aerial', 'mtwapa-pride-facade', 'mtwapa-pride-block', 'mtwapa-pride-front',
      'structure-frame', 'rebar-slab', 'excavation', 'interior-kitchen',
    ],
  },
  {
    slug: 'mtwapa-pride-iii',
    name: 'Mtwapa Pride III Apartments',
    status: 'Completed',
    location: 'Plot No. 9122/647 & 648, Mtwapa, Kilifi',
    client: 'Solian Limited',
    description:
      'A follow-on apartment development for Solian Limited, registered with the National Construction Authority in July 2022 and delivered as main contractor from foundation through to finishes. Officially opened on 21st September 2024 by Kyalo Ilunga, Director of Solian.',
    gallery: ['pride3-foundation', 'pride3-concrete', 'foundation-cages', 'site-team'],
  },
  {
    slug: 'velma-flat',
    name: 'Velma Flat',
    status: 'Completed',
    location: 'Kilifi County',
    description:
      'A residential flat development comprising studio apartments with parking and a rooftop terrace, delivered from approved architectural designs.',
    gallery: ['velma-render', 'velma-front'],
  },
  {
    slug: 'residential-block-tracy-jerop',
    name: 'Residential Block — Tracy Jerop',
    status: 'Completed',
    location: 'Vipingo Marijourn, Kilifi',
    client: 'Tracy Jerop',
    description:
      'A private residential block with a stone perimeter wall and gate, completed as a two-storey structure in concrete block work.',
    gallery: ['jerop-render', 'jerop-site'],
  },
  {
    slug: 'residential-building-justus-mulwa',
    name: 'Residential Building — Justus Mulwa',
    status: 'Completed',
    location: 'Kilifi County',
    client: 'Justus Mulwa',
    description:
      'A private two-storey residential building delivered as main contractor for client Justus Mulwa, from block walls and structural works through to a fully finished home.',
    gallery: ['mulwa-blockwork', 'mulwa-shell', 'mulwa-complete', 'mulwa-front'],
  },
]

export type Certificate = {
  slug: string
  title: string
  issuer: string
  detail: string
  image: string
  pdf?: string
}

export const CERTIFICATES: Certificate[] = [
  {
    slug: 'incorporation',
    title: 'Certificate of Incorporation',
    issuer: 'Registrar of Companies, Kenya',
    detail: 'No. PVT-JZUZPJB — incorporated 5 September 2019 as a private limited company.',
    image: 'cert-incorporation',
  },
  {
    slug: 'nca-building',
    title: 'NCA Registration — Building Works',
    issuer: 'National Construction Authority',
    detail: 'Category NCA5 · Reg. No. 53602/B/0722 · Serial No. 731328.',
    image: 'cert-nca-building',
  },
  {
    slug: 'nca-roads',
    title: 'NCA Registration — Road Works',
    issuer: 'National Construction Authority',
    detail: 'Category NCA8 · Reg. No. 53602/R/0722 · Serial No. 731326.',
    image: 'cert-nca-roads',
  },
  {
    slug: 'nca-license',
    title: 'Contractor Annual Practising License',
    issuer: 'National Construction Authority',
    detail: 'Road works, Category NCA8 · Serial No. 731325 · ISO 9001:2015 certified authority.',
    image: 'cert-nca-license',
  },
  {
    slug: 'tax-compliance-2025',
    title: 'Tax Compliance Certificate (2025)',
    issuer: 'Kenya Revenue Authority',
    detail: 'Certificate No. KRAMDI1452932425 · PIN P051892136I · issued 04/02/2025, valid to 03/02/2026.',
    image: 'cert-tax-compliance-2025',
    pdf: '/docs/tax-compliance.pdf',
  },
  {
    slug: 'tax-compliance-2022',
    title: 'Tax Compliance Certificate (2022)',
    issuer: 'Kenya Revenue Authority',
    detail: 'Certificate No. KRAMDI1272835222 · issued 09/05/2022 — historical record.',
    image: 'cert-tax-compliance',
  },
]

export const DOCUMENTS = [
  { label: 'Company Profile (PDF)', href: '/docs/company-profile.pdf' },
  { label: 'Projects Portfolio (PDF)', href: '/docs/projects-portfolio.pdf' },
  { label: 'Tax Compliance Certificate 2025 (PDF)', href: '/docs/tax-compliance.pdf' },
]
