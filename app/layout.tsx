import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DAIM RPG',
  description: 'AI generated role playing game.',
}

const links = [
  { href: '/', label: 'New Story' },
  { href: '/', label: 'DAIM RPG' },
  { href: '/sign-in', label: 'Login' },
  { href: '/sign-up', label: 'Sign Up' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
