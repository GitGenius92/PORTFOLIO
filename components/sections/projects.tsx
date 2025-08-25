"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "FaceBook Clone",
    description: " A web application that replicates key features of Facebook, including user authentication, real-time chat, and post sharing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React.js", "MSSQL", "Express"],

    category: "Webapp",
    featured: true
  },
  {
    id: 2,
    title: "HEALTH CARE CENTER",
    description: "A WEBAPP that provides comprehensive health care services, including appointment scheduling, medical records management, and telemedicine features.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["React", "OpenAI API", "Node.js"],

    category: "ai",
    featured: true
  },
  {
    id: 3,
    title: "Airline Management System Using C++",
    description: "A comprehensive airline management system that handles flight scheduling, ticket booking, and customer management with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tech: ["c++", "OOP", "STL"],

    category: "C++",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and elegant design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],

    category: "portfolio",
    featured: false
  },


]

const categories = ["all", "fullstack", "webapp", "ai", "portfolio"]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20" />

      {/* Floating Elements */}
      <div className="floating-element top-20 left-20 text-5xl opacity-5">🚀</div>
      <div className="floating-element bottom-20 right-20 text-4xl opacity-5">💻</div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work and creative solutions in web development and AI
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <Card className="project-card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tech Stack Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="glass"
                      className="flex-1"
                      onClick={() => window.open('https://github.com/GitGenius92', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                   

                  </div>
                </div>

                {/* Project Content */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Category Icon */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {project.category === "fullstack" && <Code className="w-4 h-4 mr-2" />}
                    {project.category === "webapp" && <Globe className="w-4 h-4 mr-2" />}
                    {project.category === "ai" && <Zap className="w-4 h-4 mr-2" />}
                    {project.category === "portfolio" && <Eye className="w-4 h-4 mr-2" />}
                    <span className="capitalize">{project.category}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open('https://github.com/username', '_blank')}
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
