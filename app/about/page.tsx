'use client'

import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const pathAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        {/* Hero Section with Parallax Effect */}
        <motion.div 
          className="relative h-[500px] rounded-2xl overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.div 
              className="max-w-3xl px-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold mb-6">
                About <span className="text-gold">SP Global</span>
              </h1>
              <p className="text-xl text-gray-300">
                Pioneering Innovation Across Industries
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.section 
          className="mb-20"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gold"
            variants={fadeIn}
          >
            Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "Pushing boundaries and embracing new technologies to drive progress."
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We are committed to delivering exceptional value."
              },
              {
                title: "Sustainability",
                description: "Building for the future with environmentally conscious practices."
              },
              {
                title: "Excellence",
                description: "Maintaining the highest standards in everything we do."
              },
              {
                title: "Collaboration",
                description: "Working together to achieve greater results."
              },
              {
                title: "Integrity",
                description: "Conducting business with honesty and transparency."
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                variants={fadeIn}
                className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/60 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-gold">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <motion.section 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/60 transition-all group"
          >
            <h2 className="text-2xl font-bold mb-4 text-gold group-hover:scale-105 transition-transform">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To become Sri Lanka&apos;s leading force in industrial innovation, setting new 
              benchmarks for excellence and sustainable development across all sectors 
              we operate in.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/60 transition-all group"
          >
            <h2 className="text-2xl font-bold mb-4 text-gold group-hover:scale-105 transition-transform">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses and individuals through innovative solutions, 
              fostering growth and development while maintaining the highest standards 
              of quality and service excellence.
            </p>
          </motion.div>
        </motion.section>
      </section>
    </PageLayout>
  )
} 