import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: string
  bgColor?: string
  delay?: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = 'text-gold',
  bgColor = 'bg-black/50',
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${bgColor} p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300`}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className={`w-12 h-12 ${color} mx-auto mb-4`} />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
} 