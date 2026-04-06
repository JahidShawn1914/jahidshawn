'use client'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init('UoG1e-WOuMZtUTWNn')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send('service_m019z2h', 'template_sbty1u6', {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      })
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email failed:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Big CTA headline */}
        <div className="mb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Let&apos;s Build Something
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.95 }}>
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">

          {/* Info */}
          <div>
            <p className="text-sm mb-10" style={{ color: 'var(--muted)', lineHeight: 1.8, maxWidth: '380px' }}>
              Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-4 md:gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--muted)' }}>Email</p>
                <a href="mailto:jahidshawn1914@gmail.com"
                  className="link-hover text-sm font-medium tracking-wide">
                  jahidshawn1914@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--muted)' }}>Phone</p>
                <a href="tel:+8801533800800" className="link-hover text-sm font-medium tracking-wide">
                  +880 1533 800800
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--muted)' }}>Location</p>
                <p className="text-sm font-medium tracking-wide">Sapla R/A, Chattogram, BD</p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 md:mt-10 flex gap-2 md:gap-4 flex-wrap">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/jahidshawn19141' },
                { label: 'Instagram', href: 'https://www.instagram.com/jahidshawn1914/' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jahidshawn1914' },
                { label: 'GitHub', href: 'https://github.com/JahidShawn1914' },
                { label: 'Fiverr', href: 'https://www.fiverr.com/s/P27zzmg' },
                { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01bf167be6cb420a30' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase link-hover"
                  style={{ color: 'var(--muted)' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center"
                style={{ border: '1px solid var(--border)' }}>
                <p className="font-display text-5xl mb-4">✓</p>
                <p className="font-display text-2xl mb-2">MESSAGE SENT</p>
                <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>I&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => setSent(false)}
                  className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--muted)' }}>Name</label>
                    <input
                      type="text" required placeholder="Your Name"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300"
                      style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(240,237,230,0.35)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--muted)' }}>Email</label>
                    <input
                      type="email" required placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300"
                      style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(240,237,230,0.35)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--muted)' }}>Subject</label>
                  <input
                    type="text" placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300"
                    style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(240,237,230,0.35)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--muted)' }}>Message</label>
                  <textarea
                    rows={5} required placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none resize-none transition-colors duration-300"
                    style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(240,237,230,0.35)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" disabled={loading}
                  className="group flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:gap-5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'var(--text)', color: 'var(--bg)' }}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
