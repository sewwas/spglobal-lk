import { ShoppingCart, HardHat, Wrench, Users, Building2 } from 'lucide-react'
import type { Industry } from '@/app/types'

export const GOLDEN_GRADIENTS = {
  primary: "from-[#FFD700] via-[#FDB931] to-[#FFD700]",
  secondary: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]",
  accent: "from-[#462523] via-[#CB9B51] to-[#462523]",
  hover: "hover:from-[#FDB931] hover:via-[#FFD700] hover:to-[#FDB931]"
}

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  }
}

export const INDUSTRIES: Industry[] = [
  {
    name: 'Recruitment',
    href: '/recruitment',
    icon: Users,
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/20',
    description: 'Find your next career opportunity with QuickJobs.lk'
  },
  {
    name: 'Shopping',
    href: '/shopping',
    icon: ShoppingCart,
    color: 'text-green-500',
    bgGradient: 'from-green-500/20',
    description: 'Shop Sri Lankan products with Peppermint.lk'
  },
  {
    name: 'Construction',
    href: '/construction',
    icon: HardHat,
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-500/20',
    description: 'Building the future of Sri Lanka'
  },
  {
    name: 'Spare Parts',
    href: '/spares',
    icon: Wrench,
    color: 'text-red-500',
    bgGradient: 'from-red-500/20',
    description: 'Quality spare parts and equipment'
  }
]

export const FEATURES = {
  common: [
    { title: '24/7 Support', desc: 'Round-the-clock assistance' },
    { title: 'Quality Assured', desc: 'Highest industry standards' },
    { title: 'Nationwide Service', desc: 'Coverage across Sri Lanka' },
    { title: 'Expert Team', desc: 'Skilled professionals' }
  ]
}

export const BACKGROUNDS = {
  heroPattern: `
    radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))
  `,
  gridPattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}

export const NAVIGATION_LINKS = [
  // ... navigation links
] 