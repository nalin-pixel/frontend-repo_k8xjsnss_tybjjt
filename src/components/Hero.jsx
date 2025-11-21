import { motion } from 'framer-motion'

function Hero() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: 'beforeChildren' }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  }

  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1 variants={item} className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Lemgoud Capital
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-lg text-slate-300 max-w-xl">
              A family investment company focused on preserving wealth, fostering growth,
              and stewarding businesses with integrity across generations.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="px-5 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/10">
                Our Services
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition border border-white/10">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-400/20 to-emerald-500/10 border border-white/10 shadow-2xl overflow-hidden">
              <div className="h-full w-full grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-emerald-300 text-sm tracking-widest">FAMILY OWNED • LONG-TERM • TRUST</p>
                  <p className="mt-4 text-white/90 text-xl">Investing in people, ideas, and lasting value.</p>
                </div>
              </div>
            </div>
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-400/10 to-emerald-500/10 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
