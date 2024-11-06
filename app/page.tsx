'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ShoppingCart, HardHat, Wrench, Users, ChevronDown, ArrowRight, Building2 } from 'lucide-react'
import Link from 'next/link'
import PageLayout from '@/app/components/layout/PageLayout'
import { useRef } from 'react'

const INDUSTRIES = [
  {
    name: 'Recruitment',
    href: '/recruitment',
    icon: Users,
    color: 'text-blue-500',
    description: 'Find your next career opportunity with QuickJobs.lk'
  },
  {
    name: 'Shopping',
    href: '/shopping',
    icon: ShoppingCart,
    color: 'text-green-500',
    description: 'Shop Sri Lankan products with Peppermint.lk'
  },
  {
    name: 'Construction',
    href: '/construction',
    icon: HardHat,
    color: 'text-yellow-500',
    description: 'Building the future of Sri Lanka'
  },
  {
    name: 'Spare Parts',
    href: '/spares',
    icon: Wrench,
    color: 'text-red-500',
    description: 'Quality spare parts and equipment'
  }
]

// Add this new constant for enhanced golden gradients
const GOLDEN_GRADIENTS = {
  primary: "from-[#FFD700] via-[#FDB931] to-[#FFD700]",
  secondary: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]",
  accent: "from-[#462523] via-[#CB9B51] to-[#462523]"
}

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section 
        ref={targetRef}
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Luxurious Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#1a1a1a]/80 to-black/95" />
          
          {/* Golden Accent Lines */}
          <div className="absolute inset-0">
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
          </div>

          {/* Enhanced Rotating Circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: `${600 - i * 50}px`,
                height: `${600 - i * 50}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: `rgba(212, 175, 55, ${0.1 - i * 0.02})`,
                borderWidth: '1px',
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 30 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            />
          ))}

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent opacity-50" />
        </div>

        {/* Enhanced Main Content */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-20 text-center px-6 max-w-7xl mx-auto"
        >
          {/* Enhanced Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mb-12"
          >
            {/* Glowing Effect */}
            <motion.div
              className="absolute -inset-10 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h1 className="text-6xl md:text-8xl font-bold relative">
              <div className="relative inline-block">
                {/* SP with enhanced gradients */}
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`inline-block bg-clip-text text-transparent bg-gradient-to-br ${GOLDEN_GRADIENTS.primary}
                    hover:scale-110 transition-transform duration-300 cursor-default
                    hover:bg-gradient-to-br hover:from-white hover:to-gold`}
                >
                  S
                </motion.span>
                <motion.span
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`inline-block bg-clip-text text-transparent bg-gradient-to-br ${GOLDEN_GRADIENTS.primary} ml-1
                    hover:scale-110 transition-transform duration-300 cursor-default
                    hover:bg-gradient-to-br hover:from-white hover:to-gold`}
                >
                  P
                </motion.span>
              </div>
              
              {/* GLOBAL with enhanced effects */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative mt-2 md:mt-4"
              >
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.secondary}`}>
                  {['G', 'L', 'O', 'B', 'A', 'L'].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      whileHover={{ 
                        scale: 1.2,
                        textShadow: "0 0 8px rgba(212, 175, 55, 0.8)"
                      }}
                      className="inline-block cursor-default transition-all duration-300"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </h1>
          </motion.div>
          
          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gold/80 mb-12 relative"
          >
            Innovating Sri Lanka's Industrial Landscape
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} 
                  text-black px-8 py-4 rounded-full font-bold text-lg group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg
                  hover:bg-gradient-to-r hover:from-gold hover:to-yellow-500 hover:text-black 
                  transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Us</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold hover:text-white transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-2xl bg-gray-800/30 border border-gray-700
                      hover:border-gold/50 transition-all duration-300 h-full group"
                  >
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                      group-hover:scale-110 transition-transform ${service.color}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-gold">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
            <div className="relative z-10 p-12 md:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join SP Global and be part of Sri Lanka's innovative future.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg"
                  >
                    Contact Us Today
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}