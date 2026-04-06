export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-6 md:gap-4 text-center md:text-left">
        <a href="#home" className="font-display text-2xl tracking-widest">JAHID.</a>
        <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
          © 2025 Jahid Shawn. All rights reserved.
        </p>
        <div className="flex gap-3 md:gap-6 flex-wrap justify-center md:justify-start">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jahidshawn1914' },
            { label: 'GitHub', href: 'https://github.com/JahidShawn1914' },
            { label: 'Fiverr', href: 'https://www.fiverr.com/s/P27zzmg' },
            { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01bf167be6cb420a30' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase link-hover" style={{ color: 'var(--muted)' }}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
