'use client'

import { motion } from 'framer-motion'
import { useRandomPosition } from '@/app/hooks/useRandomPosition'

export default function AnimatedElement() {
  const position = useRandomPosition()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transform: `translateX(${position.x}%) translateY(${position.y}%)`
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Your content here */}
    </motion.div>
  )
} 