'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { GOLDEN_GRADIENTS } from '@/app/lib/constants'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export const GoldenButton = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  ...props 
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} text-black`
      case 'secondary':
        return `bg-gradient-to-r ${GOLDEN_GRADIENTS.secondary} text-black`
      case 'outline':
        return 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
      default:
        return `bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} text-black`
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden group ${getVariantStyles()} ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/30"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-4xl md:text-5xl font-bold mb-8 ${className}`}
  >
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary}`}>
      {children}
    </span>
  </motion.h2>
)

export const AnimatedBackground = () => (
  <>
    {/* Animated Lines */}
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

    {/* Rotating Circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-gold/10"
        style={{
          width: `${600 - i * 50}px`,
          height: `${600 - i * 50}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
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
  </>
)

export const Card = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-gray-800/30 border border-gray-700 hover:border-gold/50 
      transition-all duration-300 rounded-xl p-6 ${className}`}
  >
    {children}
  </motion.div>
)

export const GradientText = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GOLDEN_GRADIENTS.primary} ${className}`}>
    {children}
  </span>
) 