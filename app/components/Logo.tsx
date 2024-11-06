'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 60, height = 60, className = '' }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Link href="/">
        <div className="relative">
          <Image
            src="/spgloble-logo.jpg"
            alt="SP Global"
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </motion.div>
  )
} 