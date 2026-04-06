const services = [
  {
    num: '01',
    title: 'Responsive Landing Page Design',
    desc: 'Modern, mobile-first landing pages using PageFly, Replo, GemPages, Shogun, or custom HTML/CSS/JS. Built to convert visitors into customers.',
    tags: ['PageFly', 'Replo', 'GemPages', 'Shogun', 'HTML/CSS']
  },
  {
    num: '02',
    title: 'Custom Shopify Store Development',
    desc: 'Fully functional Shopify stores from theme setup to product uploads — fast, responsive, and laser-focused on conversion.',
    tags: ['Shopify', 'Liquid', 'Theme Setup', 'Product Upload']
  },
  {
    num: '03',
    title: 'Shopify Theme Customization & Optimization',
    desc: 'Deep Shopify theme customization with HTML, CSS, and JavaScript. Unique sections, improved design, and optimized store speed.',
    tags: ['Liquid', 'HTML/CSS', 'JavaScript', 'Speed Optimization']
  },
  {
    num: '04',
    title: 'WordPress Website Design & Development',
    desc: 'Professional WordPress websites using Elementor, Divi, or premium themes — perfectly tailored to match your brand identity.',
    tags: ['WordPress', 'Elementor', 'Divi']
  },
  {
    num: '05',
    title: 'WooCommerce Store Setup',
    desc: 'Complete WooCommerce setup with payment integration, product variations, and a smooth, frictionless checkout experience.',
    tags: ['WooCommerce', 'Payment Integration', 'Product Variants']
  },
  {
    num: '06',
    title: 'Website Fixes & Maintenance',
    desc: 'CSS/JS bug fixes, broken layout repairs, plugin updates, and speed optimization to keep your site running at peak performance.',
    tags: ['Bug Fixes', 'Speed Optimization', 'Maintenance']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px" style={{ background: 'var(--muted)' }}></span>
              <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>What I Offer</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}>
              MY SERVICES
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: 'var(--muted)' }}>
            End-to-end solutions for brands that want to grow online.
          </p>
        </div>

        {/* Service list */}
        <div>
          {services.map((s, i) => (
            <div key={i} className="service-item group py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 cursor-default">
              <span className="font-display text-5xl md:text-6xl shrink-0 w-20 transition-opacity"
                style={{ color: 'rgba(240,237,230,0.12)' }}>
                {s.num}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:tracking-wider transition-all duration-300">
                  {s.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t} className="text-xs tracking-widest uppercase px-2.5 py-1"
                      style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 self-center hidden md:flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  style={{ color: 'var(--muted)' }}>
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
