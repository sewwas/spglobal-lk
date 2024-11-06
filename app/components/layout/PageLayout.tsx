'use client'

import Header from '../Header'
import Footer from '../Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
} 