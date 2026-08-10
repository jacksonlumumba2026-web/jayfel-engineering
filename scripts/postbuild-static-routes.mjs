// GitHub Pages has no server-side rewrites: any path other than "/" that
// isn't a real file returns an HTTP 404 (via 404.html), which stops search
// engines from indexing it even though the 404.html JS redirect makes it
// look fine to a human browser. Copying index.html into a real directory
// per route makes GitHub Pages serve HTTP 200 for each page, so crawlers
// index it directly and React Router takes over client-side from there.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const routes = ['about', 'services', 'projects', 'certifications', 'quote', 'contact']

const html = readFileSync(join(distDir, 'index.html'), 'utf8')

for (const route of routes) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

console.log(`Generated static index.html for routes: ${routes.join(', ')}`)
