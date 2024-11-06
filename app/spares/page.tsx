'use client'

import { motion } from 'framer-motion'
import { Wrench, Cog, Settings, Package, Truck } from 'lucide-react'
import PageLayout from '@/app/components/layout/PageLayout'
import Link from 'next/link'

const GOLDEN_GRADIENTS = {
  primary: "from-[#FFD700] via-[#FDB931] to-[#FFD700]",
  secondary: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]",
  accent: "from-[#462523] via-[#CB9B51] to-[#462523]"
}

export default function SparesPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        {/* Hero Section */}
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
                Quality <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>
                  Spare Parts
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Your trusted source for genuine spare parts and equipment
              </motion.p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gray-800/30 border border-gold/20 p-12 rounded-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-transparent
              flex items-center justify-center">
              <Wrench className="w-10 h-10 text-gold" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Coming <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>Soon</span>
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our spare parts catalog is being assembled. We're preparing to deliver quality parts right to your doorstep.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} 
                  text-black px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Contact Us</span>
              </motion.button>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Cog, label: "Genuine Parts" },
              { icon: Settings, label: "Equipment" },
              { icon: Truck, label: "Fast Delivery" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                className="p-6 rounded-xl bg-gray-800/30 border border-gold/10 group hover:border-gold/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-400">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
} 