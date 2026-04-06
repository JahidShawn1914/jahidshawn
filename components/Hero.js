'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import jahidImage from '../images/jahidshawn.webp'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll('.char')
    chars?.forEach((c, i) => {
      c.style.animationDelay = `${0.05 * i}s`
      c.classList.add('animate-fade-up')
    })
  }, [])

  const title = "JAHID SHAWN"

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 pt-24 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      {/* Available badge */}
      <div className="animate-fade-in opacity-0-init delay-200 flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
          Available for Freelance
        </span>
      </div>

      {/* Big title */}
      <div ref={titleRef} className="mb-6 overflow-hidden">
        <h1 className="font-display leading-none"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)', color: 'var(--text)' }}>
          {title.split('').map((c, i) => (
            <span key={i} className="char inline-block opacity-0-init"
              style={{ whiteSpace: c === ' ' ? 'pre' : 'normal' }}>
              {c === ' ' ? '\u00A0' : c}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom row */}
      <div className="animate-fade-up opacity-0-init delay-500 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-md">
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
            Full-Stack Developer & Shopify Expert. I help businesses grow, one
            high-converting landing page at a time.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#portfolio"
            className="group flex items-center gap-3 border border-white/20 px-7 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            View Works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="text-right">
            <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Based in</p>
            <p className="text-sm font-medium tracking-wider">Chattogram, BD</p>
          </div>
        </div>
      </div>

      {/* Profile image — floating right */}
      <div className="animate-fade-in opacity-0-init delay-300 absolute right-8 md:right-20 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-64 h-80 overflow-hidden">
          <Image
            src={jahidImage}
            alt="Jahid Shawn"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)'
          }}/>
        </div>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-center" style={{ color: 'var(--muted)' }}>2+ Years Experience</p>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in opacity-0-init delay-600 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>Scroll</span>
        <div className="w-px h-12 overflow-hidden" style={{ background: 'var(--border)' }}>
          <div className="w-full h-full" style={{
            background: 'var(--text)',
            animation: 'slideDown 1.5s ease infinite'
          }}/>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
