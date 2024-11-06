import { LucideIcon } from 'lucide-react'

export interface Industry {
  name: string
  icon: LucideIcon
  color: string
  href: string
  description: string
  bgGradient?: string
}

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
  color?: string
}

export interface TimelineItem {
  id: number
  year: string
  title: string
  description: string
}

export interface Location {
  id: number
  name: string
  x: string
  y: string
}

export interface SocialLink {
  name: string;
  icon: React.FC<{ size?: number }>;
  href: string;
} 