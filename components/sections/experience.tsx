"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    id: 1,
    company: "Evolve Edge Solutions",
    position: "React JS intern",
    duration: "July 2023 - September 2023",
    location: "Lahore, Pakistan",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    description: "Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with design and backend teams to implement user interfaces.",
    achievements: [
      "Built 3+ responsive web applications using React.js",
      "Improved website performance by 25% through code optimization",
      "Collaborated with cross-functional teams in an agile environment"
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "Git", "Agile"],
    type: "internship"
  },
  {
    id: 2,
    company: "Freelance Projects",
    position: "Full-Stack Developer",
    duration: "January 2024 - March 2024",
    location: "Remote",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
    description: "Working on various client projects, from small business websites to complex web applications. Managing end-to-end development process.",
    achievements: [
      "Delivered 3 successful projects for diverse clients",
      "Implemented modern web technologies and best practices",
      "Maintained 100% client satisfaction rate"
    ],
    technologies: ["Next.js", "React", "Node.js", "MSSQL", "Tailwind CSS"],
    type: "freelance"
  },

]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      {/* Floating Elements */}
      <div className="floating-element top-20 right-20 text-4xl opacity-5">💼</div>
      <div className="floating-element bottom-20 left-20 text-5xl opacity-5">🎯</div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and contributions to various projects and organizations
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                {/* Experience Card */}
                <div className="ml-16">
                  <Card className="glassmorphism hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Company Logo */}
                          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {experience.position}
                            </CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Experience Type Badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${experience.type === 'internship'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : experience.type === 'freelance'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="glassmorphism max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to new opportunities and exciting projects.
                Let's discuss how we can create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-primary"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => window.open('/cv-muhammad-faizan.pdf', '_blank')}
                  className="button-secondary"
                >
                  Download Resume
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
