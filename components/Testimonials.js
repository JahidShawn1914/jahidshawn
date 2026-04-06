'use client'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Mia Asano',
    role: 'Sales Manager',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    quote: 'Jahid delivered an outstanding Shopify landing page that significantly boosted our conversion rate. His attention to detail and understanding of UX made the difference. Highly recommended.',
  },
  {
    name: 'James Carter',
    role: 'E-commerce Director',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Working with Jahid was seamless from start to finish. He rebuilt our entire GemPages storefront and the results were immediate — traffic up, bounce rate down. Pure talent.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Brand Owner',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Our Replo landing page went from mediocre to stunning. Jahid understood our brand instantly and executed with precision. We\'ve already hired him for three more projects.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 md:py-36 px-6 md:px-12" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px" style={{ background: 'var(--muted)' }}></span>
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>Client Voices</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Big quote */}
          <div>
            <div className="mb-8" style={{ fontSize: '6rem', lineHeight: 1, color: 'rgba(240,237,230,0.08)', fontFamily: 'Georgia, serif' }}>
              &ldquo;
            </div>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              WHAT CLIENTS SAY
            </h2>

            <blockquote className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-12 h-12 rounded-full grayscale object-cover"
              />
              <div>
                <p className="font-medium tracking-wider">{testimonials[active].name}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button key={i}
                onClick={() => setActive(i)}
                className="text-left p-5 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: active === i ? 'rgba(240,237,230,0.3)' : 'var(--border)',
                  background: active === i ? 'rgba(240,237,230,0.05)' : 'transparent',
                }}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full grayscale object-cover" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.role}</p>
                  </div>
                  {active === i && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text)' }}></span>
                  )}
                </div>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--muted)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
