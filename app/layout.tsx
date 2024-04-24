import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DAIM RPG',
  description: 'AI generated role playing game.',
}

const links = [
  { href: '/', label: 'New Story' },
  { href: '/', label: 'DAIM RPG' },
  { href: '/', label: 'Login' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-screen bg-stone-900 text-white">
          <nav>
            <ul className="flex items-center justify-between">
              {links.map(({ href, label }, idx) => (
                <li key={idx}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
