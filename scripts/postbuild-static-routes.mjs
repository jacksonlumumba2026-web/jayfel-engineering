
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const siteUrl = 'https://jayfel-engineering.co.ke'

const pages = [
  {
    route: '',
    title: 'JAYFEL Engineering Limited | Construction Company in Kenya',
    description: 'JAYFEL Engineering Limited provides construction and engineering services across Kenya. Explore our services, projects and contact our team.',
  },
  {
    route: 'about',
    title: 'About JAYFEL Engineering Limited | Kenya',
    description: 'Learn about JAYFEL Engineering Limited, our company history, leadership and construction services in Kenya.',
  },
  {
    route: 'services',
    title: 'Construction & Engineering Services in Kenya | JAYFEL',
    description: 'Explore residential, commercial, civil and structural construction services from JAYFEL Engineering Limited.',
  },
  {
    route: 'projects',
    title: 'Construction Projects in Kenya | JAYFEL Engineering',
    description: 'Explore completed and ongoing construction projects by JAYFEL Engineering Limited.',
  },
  {
    route: 'certifications',
    title: 'Certifications & Company Credentials | JAYFEL',
    description: 'Learn about JAYFEL Engineering Limited company registration and available compliance documents.',
  },
  {
    route: 'quote',
    title: 'Request a Construction Quote in Kenya | JAYFEL',
    description: 'Contact JAYFEL Engineering Limited to discuss your construction project and request a quotation.',
  },
  {
    route: 'estimator',
    title: 'Construction Cost Estimator Kenya | JAYFEL',
    description: 'Explore a preliminary construction cost estimate for your building project in Kenya.',
  },
  {
    route: 'contact',
    title: 'Contact JAYFEL Engineering Limited | Kenya',
    description: 'Contact JAYFEL Engineering Limited about construction and engineering services in Kenya.',
  },
]

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function setMeta(html, attribute, key, value) {
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`
  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}=["']${key}["'])[^>]*>`,
    'i'
  )

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`)
}

function setCanonical(html, url) {
  const tag = `<link rel="canonical" href="${url}" />`
  const pattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`)
}

const source = readFileSync(join(dist, 'index.html'), 'utf8')

for (const page of pages) {
  const url = page.route
    ? `${siteUrl}/${page.route}/`
    : `${siteUrl}/`

  let html = source.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${page.title}</title>`
  )

  html = setMeta(html, 'name', 'description', page.description)
  html = setMeta(html, 'property', 'og:title', page.title)
  html = setMeta(html, 'property', 'og:description', page.description)
  html = setMeta(html, 'property', 'og:type', 'website')
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'name', 'twitter:card', 'summary')
  html = setMeta(html, 'name', 'twitter:title', page.title)
  html = setMeta(html, 'name', 'twitter:description', page.description)
  html = setCanonical(html, url)

  const output = page.route
    ? join(dist, page.route, 'index.html')
    : join(dist, 'index.html')

  if (page.route) mkdirSync(dirname(output), { recursive: true })

  writeFileSync(output, html, 'utf8')
}

console.log('SEO metadata generated for all 8 pages.')

