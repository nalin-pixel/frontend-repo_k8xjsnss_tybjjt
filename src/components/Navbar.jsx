import { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#agreements', label: 'Agreements' },
    { href: '#contact', label: 'Contact' },
  ]

  // Optional: provide a logo URL via environment variable VITE_LOGO_URL
  const logoUrl = import.meta.env.VITE_LOGO_URL
  const logoHeight = import.meta.env.VITE_LOGO_HEIGHT || '36' // pixels as string

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        className="bg-slate-900/70 backdrop-blur border-b border-white/10 relative"
      >
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-emerald-500/40 via-teal-400/40 to-emerald-500/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Lemgoud Capital logo"
                style={{ height: `${logoHeight}px`, width: 'auto' }}
                className="rounded-md shadow-lg object-contain"
              />
            ) : (
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-white font-bold shadow-lg">
                LC
              </div>
            )}
            <span className="text-white font-semibold text-lg">Lemgoud Capital</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-slate-200 hover:text-white transition-colors"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all" />
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/10">
              Get in touch
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/90">
            <div className="px-4 py-3 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/10">
                Get in touch
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </header>
  )
}

export default Navbar
