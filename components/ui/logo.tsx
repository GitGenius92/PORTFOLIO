import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-4xl'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center font-bold text-white bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110`}
      whileHover={{ rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      MF
    </motion.div>
  )
}
