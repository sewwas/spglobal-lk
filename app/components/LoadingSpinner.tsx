'use client'

import { motion } from 'framer-motion'

export function LoadingSpinner() {
  return (
    <motion.div
      className="inline-block"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
    </motion.div>
  )
} 