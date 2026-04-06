'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home','About','Services','Portfolio','Testimonials','FAQ','Contact']

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="font-display text-xl sm:text-2xl tracking-widest flex-shrink-0">JAHID.</a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="link-hover text-sm tracking-widest uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 border border-white/20 px-4 md:px-5 py-2 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1.5 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 pt-16 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'var(--bg)' }}>
        <ul className="flex flex-col items-center gap-6 px-6">
          {links.map((l, i) => (
            <li key={l} style={{ animationDelay: `${i * 0.06}s` }}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-display text-3xl sm:text-4xl tracking-widest hover:opacity-60 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
          <li className="mt-8 pt-8 border-t border-white/10">
            <a
              href="#contact"
              className="font-display text-3xl sm:text-4xl tracking-widest hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
