'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Wrench, 
  HardHat, 
  Users,
  Building2,
  Phone,
  Home
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigationLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Building2 },
  { name: 'Recruitment', href: '/recruitment', icon: Users, color: 'text-blue-500' },
  { name: 'Shopping', href: '/shopping', icon: ShoppingCart, color: 'text-green-500' },
  { name: 'Construction', href: '/construction', icon: HardHat, color: 'text-yellow-500' },
  { name: 'Spares', href: '/spares', icon: Wrench, color: 'text-red-500' },
  { name: 'Contact', href: '/contact', icon: Phone }
]

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavVisible(currentScrollY < lastScrollY.current || currentScrollY < 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isNavVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gold/10"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/spgloble-logo.jpg"
              alt="SP Global Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className={`nav-link flex items-center space-x-2 group ${
                  activeLink === link.href ? 'text-gold' : link.color || 'text-white'
                } hover:text-gold transition-colors`}
              >
                {link.icon && (
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.2 }}
                    className="group-hover:text-gold transition-colors"
                  >
                    <link.icon size={16} />
                  </motion.div>
                )}
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-80 bg-black bg-opacity-95 z-50 shadow-lg md:hidden backdrop-blur-lg border-l border-gold/10 overflow-y-auto"
          >
            <div className="flex flex-col p-6">
              <div className="flex justify-end mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gold p-2 hover:bg-gold/10 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="space-y-6">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`${
                        activeLink === link.href ? 'text-gold' : link.color || 'text-white'
                      } hover:text-gold transition-colors flex items-center space-x-3 p-2 rounded-lg hover:bg-gold/10`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon size={20} />}
                      <span className="font-semibold">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 