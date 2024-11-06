'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import PageLayout from '@/app/components/layout/PageLayout'

const GOLDEN_GRADIENTS = {
  primary: "from-[#FFD700] via-[#FDB931] to-[#FFD700]",
  secondary: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]",
  accent: "from-[#462523] via-[#CB9B51] to-[#462523]"
}

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        {/* Enhanced Hero Section */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Animated Background Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scaleX: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-12 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                Get in <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>Touch</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Have questions? We're here to help. Contact us through any of the channels below.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              content: '+94 11 234 5678',
              link: 'tel:+94112345678'
            },
            {
              icon: Mail,
              title: 'Email Us',
              content: 'info@spglobal.lk',
              link: 'mailto:info@spglobal.lk'
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              content: 'Colombo, Sri Lanka',
              link: 'https://maps.google.com'
            }
          ].map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gray-800/30 border border-gray-700
                hover:border-gold/50 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-transparent
                flex items-center justify-center group-hover:scale-110 transition-transform">
                <method.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400">{method.content}</p>
            </motion.a>
          ))}
        </div>

        {/* Enhanced Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 
                    focus:border-gold outline-none transition-colors placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 
                    focus:border-gold outline-none transition-colors placeholder:text-gray-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 
                  focus:border-gold outline-none transition-colors placeholder:text-gray-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} 
                text-black px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden group`}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </section>
    </PageLayout>
  )
} 