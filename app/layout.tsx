import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { metadata as siteMetadata } from './config/metadata'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...siteMetadata,
  robots: {
    index: true,
    follow: true,
    googleBot: 'index,follow'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
