import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ loading: false, ok: true, msg: 'Thanks. We will reply shortly.' })
      setForm({ name: '', email: '', message: '', subject: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="text-3xl font-bold text-white">Get in touch</motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="mt-2 text-slate-300">Share your opportunity or request. We typically respond within 2 business days.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6 p-6 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-white/10 text-slate-300 text-sm space-y-2">
              <p>Email: contact@lemgoudcapital.com</p>
              <p>Location: Global</p>
            </motion.div>
          </div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" required />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" required />
            </div>
            <button disabled={status.loading} className="mt-6 px-5 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-60 shadow-lg shadow-emerald-500/10">
              {status.loading ? 'Sending...' : 'Send message'}
            </button>
            {status.msg && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-300' : 'text-red-300'}`}>{status.msg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
