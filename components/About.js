'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import jahidImage from '../images/jahidshawn.webp'

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  const stats = [
    { value: 50, label: 'Projects Completed', suffix: '+' },
    { value: 40, label: 'Happy Clients', suffix: '+' },
    { value: 2,  label: 'Years Experience', suffix: '+' },
  ]

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px" style={{ background: 'var(--muted)' }}></span>
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — image */}
          <div className="relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <Image
                src={jahidImage}
                alt="Jahid Shawn"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%)'
              }}/>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 md:-right-8 px-6 py-4"
              style={{ background: 'var(--bg-3)', border: '1px solid var(--border)' }}>
              <p className="font-display text-4xl">2+</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>Years of<br/>Excellence</p>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              BUILDING EXPERIENCES THAT CONVERT
            </h2>

            <p className="mb-4" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Hi, I&apos;m Jahid Shawn — a Full-Stack Developer based in Chattogram, Bangladesh,
              with 2+ years of hands-on experience helping e-commerce brands grow through
              powerful, conversion-focused web solutions.
            </p>
            <p className="mb-8" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              I specialize in Shopify customization — writing custom Liquid code and crafting
              pages in PageFly, Replo, GemPages, and Shogun. My philosophy is simple: a
              great website is a solution, not just a visual.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Shopify', 'Liquid', 'PageFly', 'Replo', 'GemPages', 'HTML/CSS', 'JavaScript', 'WordPress', 'WooCommerce'].map(s => (
                <span key={s} className="text-xs tracking-widest uppercase px-3 py-1.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                  {s}
                </span>
              ))}
            </div>

            <a href="#contact"
              className="self-start group flex items-center gap-3 border border-white/20 px-7 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Let&apos;s Work Together
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-px" style={{ border: '1px solid var(--border)' }}>
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-10 px-4 text-center"
              style={{ background: 'var(--bg-2)' }}>
              <p className="font-display mb-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
                <CountUp end={s.value} />{s.suffix}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
