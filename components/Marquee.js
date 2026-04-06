export default function Marquee() {
  const items = [
    'Shopify Expert', '✦', 'Landing Pages', '✦', 'Full-Stack Dev', '✦',
    'PageFly', '✦', 'Replo', '✦', 'GemPages', '✦', 'WordPress', '✦',
    'WooCommerce', '✦', 'Liquid Code', '✦', 'High-Converting Stores', '✦',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="w-full overflow-hidden py-5" style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-2)'
    }}>
      <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm tracking-widest uppercase font-light" style={{ color: 'var(--muted)' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
