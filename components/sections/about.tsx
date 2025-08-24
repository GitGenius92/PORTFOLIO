"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Brain, Database, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skills = [
  { name: 'React.js', icon: Code, level: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', icon: Globe, level: 80, color: 'from-purple-500 to-pink-500' },
  { name: 'Tailwind CSS', icon: Zap, level: 90, color: 'from-cyan-500 to-blue-500' },
  { name: 'Python', icon: Brain, level: 75, color: 'from-yellow-500 to-orange-500' },
  { name: 'SQL', icon: Database, level: 70, color: 'from-green-500 to-emerald-500' },
  { name: 'AI/ML', icon: Brain, level: 65, color: 'from-purple-500 to-indigo-500' },
]

const education = [
  {
    year: '2022 - Present',
    degree: 'Bachelors in Computer Engineering',
    institution: 'COMSATS Lahore',
    description: 'Pursuing my passion for technology and innovation through comprehensive computer engineering studies.'
  },
  {
    year: '2020 - 2022',
    degree: 'Intermediate',
    institution: 'Punjab College',
    description: 'Completed my intermediate studies with focus on mathematics and sciences.'
  }
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

      {/* Floating Elements */}
      <div className="floating-element top-20 right-20 text-4xl opacity-5">🎓</div>
      <div className="floating-element bottom-20 left-20 text-5xl opacity-5">💡</div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about technology, innovation, and creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Profile Photo & Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
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
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Muhammad Faizan - Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Personal Story Card */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hello! I'm Muhammad Faizan, a passionate Computer Engineering student at COMSATS Lahore.
                    My journey in technology began with a curiosity about how things work and has evolved into
                    a deep passion for creating innovative digital solutions.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in modern web development technologies, particularly React.js and Next.js,
                    and I'm constantly exploring new frontiers in AI and machine learning. My goal is to
                    leverage technology to solve real-world problems and create meaningful impact.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring the latest tech trends, contributing to
                    open-source projects, or sharing knowledge with fellow developers. I believe in continuous
                    learning and pushing the boundaries of what's possible.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <GraduationCap className="inline-block w-8 h-8 mr-2 text-blue-500" />
              Education Journey
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group"
              >
                <Card className="skill-card group-hover:shadow-glow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      {/* Progress Ring */}
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200 dark:text-gray-700"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={`bg-gradient-to-r ${skill.color}`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray={`${skill.level}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          style={{
                            strokeDasharray: `${skill.level}, 100`,
                            transition: 'stroke-dasharray 1s ease-in-out',
                          }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Skill Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <skill.icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      </div>

                      {/* Percentage */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 shadow-lg">
                        {skill.level}%
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
