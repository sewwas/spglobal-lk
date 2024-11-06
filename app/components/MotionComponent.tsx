'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface MotionComponentProps {
  children: React.ReactNode
  className?: string
}

export default function MotionComponent({ children, className }: MotionComponentProps) {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transform: `translateX(${position.x}%) translateY(${position.y}%)`
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
} 