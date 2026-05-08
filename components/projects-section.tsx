"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Portafolio Personal",
    category: "Frontend",
    description:
      "Portafolio interactivo inspirado en interfaces gaming, desarrollado para mostrar proyectos, habilidades y experiencia mediante una experiencia visual moderna y dinámica.",
    tags: ["Next.js", "TypeScript/JavaScript", "Framer Motion", "TailwindCSS"],
    image: "../images/portfolio.png",
    liveUrl: "https://maryjop10.vercel.app/",
    githubUrl: "https://github.com/MaryJoP10/maryjop10",
    status: "Completado",
    featured: true,
  },
  {
    id: 2,
    title: "Plataforma de Networking y Empleo",
    category: "Full Stack",
    description:
      "Desarrollo de plataforma web orientada a networking y búsqueda de empleo, integrando autenticación, APIs REST y base de datos para gestión de usuarios y publicaciones.",
    tags: ["Next.js", "TypeScript", "Node.js","REST API", "Supabase", "SQL"],
    image: "../images/Wanted.png",
    liveUrl: "https://www.wantedcolombia.com/",
    githubUrl: "null",
    status: "Completado",
    featured: true,
  },
  {
    id: 3,
    title: "Sistema de Análisis y Gestión Presupuestaria",
    category: "Data & Analytics & Mobile",
    description:
      "Aplicativo móvil orientado al análisis de inventario y control presupuestario mediante visualización y procesamiento de datos para optimizar recursos y apoyar la toma de decisiones.",
    tags: ["Flutter", "Firebase", "Dart",],
    image: "../images/Building.png",
    liveUrl: "#",
    githubUrl: "#",
    status: "En desarrollo",
    featured: true,
  },
  {
    id: 4,
    title: "Aplicación Inclusiva para Gestión de Emprendimientos",
    category: "Mobile & Full Stack",
    description:
      "Aplicación móvil diseñada para apoyar a emprendedores mediante una experiencia visual e intuitiva para la gestión de ventas, inventario y cuentas. El proyecto está enfocado en accesibilidad y usabilidad, facilitando la interacción mediante interfaces simples y adaptadas.",
    tags: ["React Native", "Expo", "TypeScript", "Excel Sheets"],
    image: "../images/Building.png",
    liveUrl: "#",
    githubUrl: "#",
    status: "En desarrollo",
    featured: true,
  },
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const featuredProjects = projects.filter((p) => p.featured)

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-[20%] h-[45%] w-[40%] bg-primary/4"
          style={{ clipPath: "polygon(0 10%, 100% 0, 85% 100%, 0% 90%)" }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[40%] left-0 w-full h-px bg-border/20 origin-left"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-[40%] top-0 h-full w-px bg-primary/10 origin-top"
          style={{ transform: "rotate(-5deg)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              01 // Proyectos
            </span>
          </div>
          <div className="relative">
            <h2
              className="font-(--font-display) text-5xl uppercase text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ transform: "skewX(-3deg)" }}
            >
              Mis <span className="text-primary">Proyectos</span>
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 w-48 bg-primary"
              style={{ transform: "skewX(-12deg)" }}
            />
          </div>
        </motion.div>

        {/* Featured project showcase */}
        <div className="relative mb-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Project info */}
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  [{String(activeProject + 1).padStart(2, "0")}]
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {featuredProjects[activeProject].category}
                </span>
                <div className="h-1 w-1 rounded-full bg-primary/50" />
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {featuredProjects[activeProject].status}
                </span>
              </div>

              <h3
                className="font-(--font-display) text-3xl uppercase text-foreground mb-4 sm:text-4xl md:text-5xl"
                style={{ transform: "skewX(-2deg)" }}
              >
                {featuredProjects[activeProject].title}
              </h3>

              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-6">
                {featuredProjects[activeProject].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProjects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary/80 px-3 py-1 font-mono text-xs uppercase text-foreground"
                    style={{ clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={featuredProjects[activeProject].liveUrl}
                  className="group relative px-6 py-3 bg-primary transition-transform hover:scale-105"
                  style={{ transform: "skewX(-6deg)" }}
                >
                  <span
                    className="flex items-center gap-2 font-(--font-display) text-sm uppercase text-primary-foreground"
                    style={{ transform: "skewX(6deg)" }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver Proyecto
                  </span>
                </a>
                <a
                  href={featuredProjects[activeProject].githubUrl}
                  className="group relative px-6 py-3 border border-border transition-all hover:border-primary"
                  style={{ transform: "skewX(-6deg)" }}
                >
                  <span
                    className="flex items-center gap-2 font-(--font-display) text-sm uppercase text-foreground"
                    style={{ transform: "skewX(6deg)" }}
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Project visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 relative"
            >
              <div
                className="relative aspect-video bg-card border border-border overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}
              >
                {/* Project preview placeholder */}
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-linear-to-br from-primary/20 via-card to-primary/10 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div
                      className="h-16 w-16 mx-auto mb-4 bg-primary/20 flex items-center justify-center"
                      style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    >
                      <span className="font-(--font-display) text-2xl text-primary">
                        {String(activeProject + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Preview
                    </span>
                  </div>
                </motion.div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 h-6 w-6 border-l-2 border-t-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-r-2 border-b-2 border-primary/40" />
              </div>

              {/* Navigation */}
              <div className="absolute -bottom-4 right-0 flex gap-2">
                <button
                  onClick={prevProject}
                  className="h-12 w-12 bg-secondary border border-border flex items-center justify-center transition-all hover:border-primary hover:bg-secondary/80"
                  style={{ clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }}
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={nextProject}
                  className="h-12 w-12 bg-primary flex items-center justify-center transition-transform hover:scale-105"
                  style={{ clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }}
                >
                  <ChevronRight className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>

              {/* Decorative shadow */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 -z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}
              />
            </motion.div>
          </div>

          {/* Project indicators */}
          <div className="flex justify-center gap-3 mt-8 lg:hidden">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`h-2 transition-all ${
                  i === activeProject ? "w-8 bg-primary" : "w-2 bg-secondary"
                }`}
                style={{ clipPath: "polygon(2px 0, 100% 0, calc(100% - 2px) 100%, 0 100%)" }}
              />
            ))}
          </div>
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-(--font-display) text-xl uppercase text-foreground mb-6" style={{ transform: "skewX(-2deg)" }}>
            Otros Proyectos
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card/50 border border-border p-6 transition-all hover:border-primary/50"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
              >
                <span className="font-mono text-xs text-primary mb-2 block">
                  [{String(i + 1).padStart(2, "0")}] // {project.status}
                </span>
                <h4
                  className="font-(--font-display) text-lg uppercase text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={{ transform: "skewX(-2deg)" }}
                >
                  {project.title}
                </h4>
                <p className="font-sans text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-3">
                  <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                {/* Hover accent */}
                <div className="absolute top-0 left-0 h-full w-1 bg-primary scale-y-0 origin-bottom transition-transform group-hover:scale-y-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-r-2 border-b-2 border-primary/20" />
    </section>
  )
}
