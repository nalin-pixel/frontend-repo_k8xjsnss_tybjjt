import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Agreements() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/agreements`)
        const data = await res.json()
        if (!data.ok) throw new Error('Failed to load')
        setItems(data.items || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="agreements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Agreements registry</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">A private log of investment agreements we manage. Only a summary appears here.</p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-white/10">
          {loading ? (
            <p className="text-slate-300">Loading...</p>
          ) : error ? (
            <p className="text-red-300">{error}</p>
          ) : items.length === 0 ? (
            <p className="text-slate-300">No agreements yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((a, idx) => (
                <motion.div
                  key={a._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: idx * 0.04, type: 'spring', stiffness: 120, damping: 16 }}
                  className="p-4 rounded-lg bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25)] transition-colors"
                >
                  <h4 className="text-white font-semibold">{a.title}</h4>
                  <p className="text-slate-300 text-sm mt-1">Status: <span className="text-emerald-300">{a.status}</span></p>
                  {a.effective_date && (
                    <p className="text-slate-400 text-xs mt-1">Effective: {new Date(a.effective_date).toLocaleDateString()}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Agreements
