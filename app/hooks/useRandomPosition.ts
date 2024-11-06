'use client'

import { useState, useEffect } from 'react'

export function useRandomPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  return position
} 