'use client'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Biyo', category: 'Replo', img: 'https://img.youtube.com/vi/nwXR1I6yl2w/maxresdefault.jpg', year: '2026', video: 'https://youtu.be/nwXR1I6yl2w?si=7enpkhIn_ETc4Osr' },
  { id: 2, title: 'Kitty queen', category: 'Replo', img: 'https://img.youtube.com/vi/d_2EYDIzRFI/maxresdefault.jpg', year: '2026', video: 'https://youtu.be/d_2EYDIzRFI?si=vEdoykW-XNH0QoJ2' },
  { id: 3, title: 'Biyo advertorial', category: 'Replo', img: 'https://img.youtube.com/vi/fYweZt3kNxk/maxresdefault.jpg', year: '2026', video: 'https://youtu.be/fYweZt3kNxk?si=rzrWxjayGcgdHi9x' },
  { id: 4, title: 'Advertorial', category: 'Replo', img: 'https://img.youtube.com/vi/y3wIxdX9sUw/maxresdefault.jpg', year: '2026', video: 'https://youtu.be/y3wIxdX9sUw?si=vN3CXLuN3RqpdLWW' },
  { id: 5, title: 'Figma to landing page', category: 'PageFly', img: 'https://img.youtube.com/vi/tNGZhT8g3Ho/maxresdefault.jpg', year: '2026', video: 'https://youtu.be/tNGZhT8g3Ho?si=UGIwOuwXZO0BubHn' },
  { id: 6, title: 'Larnico Store', category: 'PageFly', img: 'https://img.youtube.com/vi/f9I-5zPeRK4/maxresdefault.jpg', year: '2024', video: 'https://youtu.be/f9I-5zPeRK4' },
  { id: 7, title: 'PlantMade Landing', category: 'PageFly', img: 'https://img.youtube.com/vi/JMnD1uA63E8/maxresdefault.jpg', year: '2024', video: 'https://youtu.be/JMnD1uA63E8' },
  { id: 8, title: 'Paramadic Page', category: 'PageFly', img: 'https://img.youtube.com/vi/dCQEe6cTkC8/maxresdefault.jpg', year: '2024', video: 'https://youtu.be/dCQEe6cTkC8' },
  { id: 9, title: 'Twinkles Store', category: 'Replo', img: 'https://img.youtube.com/vi/IaW5deoNA7c/maxresdefault.jpg', year: '2023', video: 'https://youtu.be/IaW5deoNA7c' },
  { id: 10, title: 'Ramp Landing', category: 'Replo', img: 'https://img.youtube.com/vi/othTlLDSwmU/maxresdefault.jpg', year: '2023', video: 'https://youtu.be/othTlLDSwmU' },
  { id: 11, title: 'Collen Brand', category: 'Replo', img: 'https://img.youtube.com/vi/CcH8ZtALkPQ/maxresdefault.jpg', year: '2023', video: 'https://youtu.be/CcH8ZtALkPQ' },
  { id: 12, title: 'Candy Store', category: 'GemPages', img: 'https://img.youtube.com/vi/7USg3dN8NPk/maxresdefault.jpg', year: '2022', video: 'https://youtu.be/7USg3dN8NPk' },
  { id: 13, title: 'Shower Brand', category: 'GemPages', img: 'https://img.youtube.com/vi/DpxyQ-5ICUM/sddefault.jpg', year: '2022', video: 'https://youtu.be/DpxyQ-5ICUM' },
  { id: 14, title: 'Untamed Studio', category: 'GemPages', img: 'https://img.youtube.com/vi/6qAXF07ZHw8/sddefault.jpg', year: '2022', video: 'https://youtu.be/6qAXF07ZHw8' },
  { id: 15, title: 'Charety Foundation', category: 'PageFly', img: 'https://img.youtube.com/vi/LbV4e5hiuY4/maxresdefault.jpg', year: '2022', video: 'https://youtu.be/LbV4e5hiuY4' },
]

const filters = ['All', 'Replo', 'GemPages', 'PageFly']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [limit, setLimit] = useState(6)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)
  const visible = filtered.slice(0, limit)

  return (
    <section id="portfolio" className="py-24 md:py-36 px-6 md:px-12" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px" style={{ background: 'var(--muted)' }}></span>
              <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>Selected Work</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              RECENT PROJECTS
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f}
                onClick={() => { setActive(f); setLimit(6) }}
                className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: active === f ? 'var(--text)' : 'var(--border)',
                  color: active === f ? 'var(--text)' : 'var(--muted)',
                  background: active === f ? 'rgba(240,237,230,0.07)' : 'transparent'
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visible.map((p) => (
            <a key={p.id} href={p.video} target="_blank" rel="noopener noreferrer"
              className="portfolio-card group block relative aspect-video"
              style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '5px' }}>
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <div className="card-overlay">
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(240,237,230,0.55)' }}>
                    {p.category} · {p.year}
                  </p>
                  <p className="font-display text-2xl">{p.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: 'rgba(240,237,230,0.6)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more / less */}
        <div className="mt-10 flex justify-center gap-4">
          {limit < filtered.length && (
            <button onClick={() => setLimit(l => l + 3)}
              className="group flex items-center gap-2 border border-white/20 px-7 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Load More
            </button>
          )}
          {limit > 6 && (
            <button onClick={() => setLimit(6)}
              className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity px-4 py-3"
              style={{ color: 'var(--muted)' }}>
              Show Less
            </button>
          )}
        </div>

      </div>
    </section>
  )
}
