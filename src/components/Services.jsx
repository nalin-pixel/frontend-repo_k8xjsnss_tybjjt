import { motion } from 'framer-motion'

function Services() {
  const items = [
    {
      title: 'Private Investments',
      text: 'Direct investments in small and medium enterprises with a long-term partnership mindset.'
    },
    {
      title: 'Family Governance',
      text: 'Structuring clear agreements, roles, and decision frameworks to protect relationships and assets.'
    },
    {
      title: 'Agreement Management',
      text: 'Centralized registry of investment agreements, key dates, and responsibilities.'
    },
    {
      title: 'Advisory & Stewardship',
      text: 'Board-level support, performance tracking, and strategic guidance for portfolio companies.'
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="text-3xl font-bold text-white">What we do</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="mt-2 text-slate-300 max-w-2xl">We combine disciplined investment with family values to build sustainable businesses.</motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 120, damping: 16 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25)] transition-colors"
            >
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
