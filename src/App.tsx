import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Loader, { LOADER_DURATION_MS } from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Quote from './pages/Quote'
import Estimator from './pages/Estimator'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-page text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">Page not found</h1>
        <p className="mt-4" style={{ color: 'var(--color-muted)' }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  )
}

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_DURATION_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <ScrollToTopOnRoute />
      <div className={`flex min-h-screen flex-col transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollTop />
      </div>
    </>
  )
}
