'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
  showPattern?: boolean
}

export default function PageHeader({ title, description, showPattern = true }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 relative"
    >
      {showPattern && (
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
          <div className="h-full w-full bg-grid-pattern" />
        </div>
      )}
      
      <h1 className="text-5xl font-bold mb-6 text-gradient-gold">
        {title}
      </h1>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
} 