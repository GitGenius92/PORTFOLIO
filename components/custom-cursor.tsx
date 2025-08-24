"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      
      {/* Additional trail particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="cursor-trail"
          style={{
            opacity: 0.3 - i * 0.1,
            scale: 1 - i * 0.2,
          }}
          animate={{
            x: mousePosition.x - 4 - i * 10,
            y: mousePosition.y - 4 - i * 10,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: i * 0.05,
          }}
        />
      ))}
    </>
  )
}
