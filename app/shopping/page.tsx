'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Heart } from 'lucide-react'
import PageLayout from '@/app/components/layout/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  { 
    title: 'Island-wide Delivery',
    desc: 'Fast and reliable delivery across Sri Lanka'
  },
  { 
    title: 'Secure Payment',
    desc: 'Multiple secure payment options'
  },
  { 
    title: 'Quality Products',
    desc: 'Authentic Sri Lankan products'
  },
  { 
    title: '24/7 Support',
    desc: 'Customer support around the clock'
  }
]

const categories = [
  'All',
  'GROCERY',
  'BISCUITS',
  'SNACKS',
  'WHOLE SPICES'
]

export default function ShoppingPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          {/* Background Color/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-1/2 pl-12 z-10">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Ceylon in
                <span className="block text-gold">YOUR DOOR STEP</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Experience the finest Sri Lankan products delivered right to your doorstep. Quality assured, convenience guaranteed.
              </p>
              <Link 
                href="https://peppermint.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold
                  hover:scale-105 transition-transform"
              >
                Shop Now
              </Link>
            </div>
            
            {/* Logo Section */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <Image
                src="/pepper-mint.png"
                alt="Peppermint.lk"
                width={300}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gray-800/50 rounded-xl hover:scale-105 transition-transform"
            >
              <h3 className="font-semibold text-gold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Categories and Search */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-gold text-black' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-gold outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-800/50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-gold">Start Shopping?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your account today and enjoy exclusive deals and offers. 
            Fast delivery across Sri Lanka.
          </p>
          <Link 
            href="https://peppermint.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold
              hover:scale-105 transition-transform"
          >
            Visit Peppermint.lk
          </Link>
        </div>
      </section>
    </PageLayout>
  )
} 