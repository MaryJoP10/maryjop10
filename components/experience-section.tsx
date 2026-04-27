"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    type: "work",
    title: "Desarrolladora Full Stack",
    company: "Tech Solutions Inc.",
    period: "2023 - Presente",
    description:
      "Desarrollo de aplicaciones web escalables utilizando React, Node.js y PostgreSQL. Liderazgo técnico en proyectos de transformación digital.",
    highlights: ["Liderazgo técnico", "Arquitectura de sistemas", "Mentoring"],
  },
  {
    type: "work",
    title: "Analista de Datos",
    company: "Data Insights Co.",
    period: "2021 - 2023",
    description:
      "Análisis de datos empresariales y creación de dashboards interactivos. Implementación de modelos predictivos para toma de decisiones.",
    highlights: ["Business Intelligence", "Machine Learning", "Visualización"],
  },
  {
    type: "work",
    title: "Desarrolladora Junior",
    company: "StartUp Digital",
    period: "2020 - 2021",
    description:
      "Desarrollo frontend con React y colaboración en proyectos de backend con Python. Participación en ciclos ágiles de desarrollo.",
    highlights: ["React", "Python", "Metodologías ágiles"],
  },
]

const education = [
  {
    type: "education",
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Tecnológica",
    period: "2016 - 2020",
    description: "Especialización en desarrollo de software y ciencia de datos. Proyecto de tesis en Machine Learning aplicado.",
  },
  {
    type: "education",
    title: "Certificación en Data Science",
    institution: "Google / Coursera",
    period: "2022",
    description: "Programa profesional de análisis de datos, visualización y machine learning.",
  },
]

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
  { name: "React Advanced Certification", issuer: "Meta", year: "2022" },
  { name: "Python Data Science", issuer: "IBM", year: "2021" },
]

type TabType = "work" | "education" | "certs"

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("work")

  const tabs = [
    { id: "work" as TabType, label: "Experiencia", icon: Briefcase },
    { id: "education" as TabType, label: "Educación", icon: GraduationCap },
    { id: "certs" as TabType, label: "Certificaciones", icon: Award },
  ]

  return (
    <section id="experience" className="relative min-h-screen py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-[10%] h-[55%] w-[30%] bg-primary/5"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 85%)" }}
        />
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 bottom-[15%] h-[35%] w-[20%] bg-primary/[0.03]"
          style={{ clipPath: "polygon(0 15%, 100% 0, 80% 100%, 0% 100%)" }}
        />
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-1/2 top-0 h-full w-px bg-border/30 origin-top hidden lg:block"
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
              04 // Experiencia
            </span>
          </div>
          <div className="relative">
            <h2
              className="font-(--font-display) text-5xl uppercase text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ transform: "skewX(-3deg)" }}
            >
              Mi <span className="text-primary">Trayectoria</span>
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 w-44 bg-primary"
              style={{ transform: "skewX(-12deg)" }}
            />
          </div>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex items-center gap-2 px-6 py-3 transition-all duration-300 ${
                activeTab === tab.id ? "" : "hover:bg-secondary/50"
              }`}
              style={{ transform: "skewX(-6deg)" }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-exp-tab"
                  className="absolute inset-0 bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                className={`relative h-4 w-4 transition-colors ${
                  activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground"
                }`}
                style={{ transform: "skewX(6deg)" }}
              />
              <span
                className={`relative font-(--font-display) text-sm uppercase tracking-wider transition-colors ${
                  activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}
                style={{ transform: "skewX(6deg)", display: "inline-block" }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative">
          {/* Work Experience */}
          {activeTab === "work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative"
                >
                  <div className="flex gap-6">
                    {/* Timeline marker */}
                    <div className="hidden sm:flex flex-col items-center">
                      <div
                        className="h-10 w-10 bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                      >
                        <Briefcase className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      {i < experiences.length - 1 && (
                        <div className="w-px h-full bg-border/50 mt-2" />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 bg-card/50 border border-border p-6 transition-all group-hover:border-primary/50"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3
                            className="font-(--font-display) text-xl uppercase text-foreground group-hover:text-primary transition-colors"
                            style={{ transform: "skewX(-2deg)" }}
                          >
                            {exp.title}
                          </h3>
                          <p className="font-mono text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <span
                          className="bg-primary/20 px-3 py-1 font-mono text-xs uppercase text-primary"
                          style={{ clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="font-sans text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="bg-secondary/80 px-2 py-1 font-mono text-[10px] uppercase text-foreground"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute top-0 left-0 h-full w-1 bg-primary scale-y-0 origin-top transition-transform group-hover:scale-y-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative"
                >
                  <div className="flex gap-6">
                    {/* Timeline marker */}
                    <div className="hidden sm:flex flex-col items-center">
                      <div
                        className="h-10 w-10 bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                      >
                        <GraduationCap className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      {i < education.length - 1 && (
                        <div className="w-px h-full bg-border/50 mt-2" />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 bg-card/50 border border-border p-6 transition-all group-hover:border-primary/50"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3
                            className="font-(--font-display) text-xl uppercase text-foreground group-hover:text-primary transition-colors"
                            style={{ transform: "skewX(-2deg)" }}
                          >
                            {edu.title}
                          </h3>
                          <p className="font-mono text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <span
                          className="bg-primary/20 px-3 py-1 font-mono text-xs uppercase text-primary"
                          style={{ clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)" }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-sans text-muted-foreground">{edu.description}</p>

                      {/* Hover accent line */}
                      <div className="absolute top-0 left-0 h-full w-1 bg-primary scale-y-0 origin-top transition-transform group-hover:scale-y-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications */}
          {activeTab === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card/50 border border-border p-6 transition-all hover:border-primary/50"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
                >
                  <div
                    className="h-12 w-12 bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  >
                    <Award className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4
                    className="font-(--font-display) text-lg uppercase text-foreground mb-2 group-hover:text-primary transition-colors"
                    style={{ transform: "skewX(-2deg)" }}
                  >
                    {cert.name}
                  </h4>
                  <p className="font-mono text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <span className="font-mono text-xs text-primary">{cert.year}</span>

                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary scale-y-0 origin-bottom transition-transform group-hover:scale-y-100" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 right-6 h-8 w-8 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-l-2 border-b-2 border-primary/20" />
    </section>
  )
}
