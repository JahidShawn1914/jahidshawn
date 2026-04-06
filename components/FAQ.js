'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do I get started working with you?',
    a: "Simply reach out via the Contact section or email me directly at jahidshawn1914@gmail.com. I'll respond within 24 hours to discuss your project requirements, timeline, and budget."
  },
  {
    q: 'What are your rates for a Shopify project?',
    a: 'Rates depend on the scope — a basic landing page starts from $50, while full store builds are priced based on complexity. Contact me with your requirements and I\'ll send a custom quote.'
  },
  {
    q: 'Which page builders do you work with?',
    a: 'I work with PageFly, Replo, GemPages, and Shogun. I can also build fully custom sections using HTML, CSS, JavaScript, Tailwind CSS, or Bootstrap without any page builder.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'A single landing page typically takes 3–5 business days. A complete Shopify store build usually takes 1–2 weeks. Timelines depend on scope, revisions, and how quickly you provide assets.'
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes — all projects include at least 2 rounds of revisions. I want you to be 100% satisfied before we close the project.'
  },
  {
    q: 'Can you help with an existing store that needs fixes?',
    a: 'Absolutely. Whether it\'s a CSS bug, broken layout, or performance issues, I offer one-off maintenance and fixes in addition to full project builds.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px" style={{ background: 'var(--muted)' }}></span>
              <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>FAQ</span>
            </div>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Got questions? I&apos;ve got answers. If you don&apos;t find what you need here, feel free to reach out directly.
            </p>
            <a href="mailto:jahidshawn1914@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase link-hover"
              style={{ color: 'var(--muted)' }}>
              Email Me Directly →
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  className="w-full text-left py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-medium tracking-wide">{f.q}</span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <p className="pb-5 text-sm" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
