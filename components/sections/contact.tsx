"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/GitGenius92',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/muhammad-faizan-imran-899b90262/',
    color: 'hover:text-blue-600'
  },


]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mfaizanimran11@gmail.com',
    action: () => window.open('mailto:muhammad.faizan@email.com', '_blank')
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+92 336 4555800',
    action: () => window.open('tel:+923001234567', '_blank')
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lahore, Pakistan',
    action: () => { }
  }
]

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically send the form data to your backend or EmailJS
    console.log('Form submitted:', formData)

    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)

    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-cyan-900/20 dark:to-blue-900/20" />

      {/* Floating Elements */}
      <div className="floating-element top-20 left-20 text-5xl opacity-5">📧</div>
      <div className="floating-element top-40 right-20 text-4xl opacity-5">💻</div>
      <div className="floating-element bottom-40 left-20 text-3xl opacity-5">🚀</div>
      <div className="floating-element bottom-20 right-10 text-6xl opacity-5">✨</div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-blue-500" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="contact-input resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full button-primary group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                    onClick={info.action}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                  Follow Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="social-icon group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="glassmorphism">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quick Response
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="glassmorphism max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Build Something Amazing Together! 🚀
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you have a project in mind, want to discuss potential opportunities,
                or just want to say hello, I'm here and ready to help.
                Let's turn your ideas into reality!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
