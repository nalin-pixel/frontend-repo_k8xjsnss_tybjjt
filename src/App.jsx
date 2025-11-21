import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Agreements from './components/Agreements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-3xl font-bold text-white">About Lemgoud Capital</h2>
                <p className="mt-3 text-slate-300">We are a family-owned investment company. Our mission is to create enduring value through responsible ownership and thoughtful partnership. We back founders and teams building resilient, cash-generating businesses.</p>
                <p className="mt-3 text-slate-300">We value clarity, trust, and well-structured agreements that align incentives and protect relationships.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-400/10 border border-white/10">
                <ul className="space-y-2 text-slate-200">
                  <li>• Long-term capital</li>
                  <li>• Hands-on stewardship</li>
                  <li>• Transparent governance</li>
                  <li>• Responsible growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Agreements />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Lemgoud Capital. All rights reserved.</p>
            <a href="/test" className="hover:text-slate-200">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
