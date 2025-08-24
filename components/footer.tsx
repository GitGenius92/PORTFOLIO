"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/username', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/username', color: 'hover:text-blue-400' },

  { name: 'Email', icon: Mail, url: 'mailto:mfaizanimran11@gmail.com', color: 'hover:text-red-400' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Logo size="md" />
                  <span className="text-2xl font-bold gradient-text">Muhammad Faizan</span>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  A passionate Computer Engineering student and React.js developer,
                  dedicated to creating innovative digital solutions and pushing
                  the boundaries of web technology.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Lahore, Pakistan</p>
                <p>📧 mfaizanimran11@gmail.com</p>
                <p>📱 +92 336 4555800</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 font-medium">Follow me:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Muhammad Faizan. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="floating-element top-20 left-20 text-3xl opacity-5">💻</div>
      <div className="floating-element bottom-20 right-20 text-4xl opacity-5">🚀</div>
    </footer>
  )
}
