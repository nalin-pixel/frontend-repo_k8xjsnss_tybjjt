function Hero() {
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Lemgoud Capital
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              A family investment company focused on preserving wealth, fostering growth,
              and stewarding businesses with integrity across generations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="px-5 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition">Our Services</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition border border-white/10">Contact Us</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-400/20 to-emerald-500/10 border border-white/10 shadow-2xl overflow-hidden">
              <div className="h-full w-full grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-emerald-300 text-sm tracking-widest">FAMILY OWNED • LONG-TERM • TRUST</p>
                  <p className="mt-4 text-white/90 text-xl">Investing in people, ideas, and lasting value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
