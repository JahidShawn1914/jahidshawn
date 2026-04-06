import './globals.css'

export const metadata = {
  title: 'Jahid Shawn — Full-Stack Developer & Shopify Expert',
  description: 'Full-Stack Developer with 2+ years of experience specializing in Shopify customization, landing pages, and high-converting web solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
