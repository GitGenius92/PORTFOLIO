"use client"

import { motion } from 'framer-motion'
import { Download, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const roles = [
  "Computer Engineering Student",
  "React.js Developer",
  "AI Explorer",
  "Full-Stack Learner"
]

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Replace with actual CV download link
    const link = document.createElement('a')
    link.href = '/cv-muhammad-faizan.pdf'
    link.download = 'Muhammad_Faizan_CV.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="floating-element top-20 left-10 text-6xl opacity-10">💻</div>
      <div className="floating-element top-40 right-20 text-4xl opacity-10">🚀</div>
      <div className="floating-element bottom-40 left-20 text-5xl opacity-10">⚡</div>
      <div className="floating-element bottom-20 right-10 text-3xl opacity-10">🎯</div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hi, I'm{" "}
                <span className="gradient-text">Muhammad Faizan</span>
                <span className="inline-block ml-2 animate-bounce">👋</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">

                <span className="text-lg text-gray-600 dark:text-gray-400">
                  I'm a
                </span>
              </div>

              <div className="h-8 overflow-hidden">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.8,
                    }}
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                className="button-primary group"
                size="xl"
              >

                Hire Me
              </Button>

              <Button
                onClick={downloadCV}
                variant="outline"
                className="button-secondary group"
                size="xl"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                📄 Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Photo */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Muhammad Faizan - Computer Engineering Student & React Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Available
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                💻 Developer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600 cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
