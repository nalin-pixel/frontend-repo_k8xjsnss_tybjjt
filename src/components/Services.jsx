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
        <h2 className="text-3xl font-bold text-white">What we do</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">We combine disciplined investment with family values to build sustainable businesses.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
