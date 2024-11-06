'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Wrench, HardHat, Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { GOLDEN_GRADIENTS } from '@/app/lib/constants'

const industries = [
  { name: 'Recruitment', icon: Users, color: 'text-blue-500', href: '/recruitment' },
  { name: 'Shopping', icon: ShoppingCart, color: 'text-green-500', href: '/shopping' },
  { name: 'Construction', icon: HardHat, color: 'text-yellow-500', href: '/construction' },
  { name: 'Spare Parts', icon: Wrench, color: 'text-red-500', href: '/spares' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/' },
]

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setMounted(true)
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  if (!mounted) {
    return (
      <footer className="bg-black pt-16 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="h-[300px]" />
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-black pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-16 h-16"
              >
                <Image
                  src="/spgloble-logo.jpg"
                  alt="SP Global Logo"
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/fallback-logo.jpg';
                  }}
                />
              </motion.div>
            </Link>
            <div className="text-gray-400 leading-relaxed">
              Innovating Sri Lanka's industrial landscape through comprehensive solutions and sustainable practices.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-gold transition-colors p-2 bg-gray-800/50 rounded-full"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>
              Our Services
            </h3>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <motion.li 
                  key={industry.name}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link 
                    href={industry.href}
                    className="text-gray-400 hover:text-gold transition-colors flex items-center space-x-3"
                  >
                    <industry.icon size={16} className={`${industry.color} group-hover:text-gold transition-colors`} />
                    <span>{industry.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  123 Innovation Drive<br />
                  Colombo 00500<br />
                  Sri Lanka
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href="tel:+94112345678" className="text-gray-400 hover:text-gold transition-colors">
                  +94 11 234 5678
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:info@spglobal.lk" className="text-gray-400 hover:text-gold transition-colors">
                  info@spglobal.lk
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center space-x-1">
              <span>©</span>
              <span>{currentYear}</span>
              <span>SP Global. All rights reserved.</span>
              <span className="px-1">•</span>
              <span>Developed by</span>
              <a 
                href="https://amsome.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors ml-1"
              >
                AMSOME
              </a>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 