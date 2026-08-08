import { useEffect, useState } from 'react'
import logo from '../assets/jayfel-logo.jpg'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1100)
    const removeTimer = setTimeout(() => setVisible(false), 1500)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-400 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'var(--color-charcoal)' }}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center gap-5">
        <div
          className="h-20 w-20 overflow-hidden rounded-2xl"
          style={{ boxShadow: '0 0 40px -8px rgba(226,39,48,.6)', animation: 'loaderPulse 1.4s ease-in-out infinite' }}
        >
          <img src={logo} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 rounded-full" style={{ background: 'var(--color-red)', animation: 'loaderBar 1.1s ease-in-out infinite' }} />
        </div>
        <p className="eyebrow tracking-[0.24em]" style={{ color: 'rgba(255,255,255,.7)' }}>Your housing partner</p>
      </div>
      <style>{`
        @keyframes loaderBar {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(60%); }
          100% { transform: translateX(220%); }
        }
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
      `}</style>
    </div>
  )
}
