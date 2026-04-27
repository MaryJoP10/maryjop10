"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"

const skillCategories = [
  {
    name: "Frontend",
    code: "FE",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    name: "Backend",
    code: "BE",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    name: "Data Analysis",
    code: "DA",
    skills: [
      { name: "Python/Pandas", level: 92 },
      { name: "SQL", level: 88 },
      { name: "Power BI", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "Machine Learning", level: 70 },
    ],
  },
  {
    name: "Tools & Others",
    code: "TO",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 82 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-[15%] h-[50%] w-[35%] bg-primary/5"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)", transform: "skewX(-6deg)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-[10%] top-0 h-full w-px bg-border/20 origin-top"
          style={{ transform: "rotate(4deg)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-[35%] top-0 h-full w-0.5 bg-primary/10 origin-top"
          style={{ transform: "rotate(-8deg)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
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
              03 // Habilidades
            </span>
          </div>
          <div className="relative">
            <h2
              className="font-(--font-display) text-5xl uppercase text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ transform: "skewX(-3deg)" }}
            >
              Mis <span className="text-primary">Skills</span>
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 w-40 bg-primary"
              style={{ transform: "skewX(-12deg)" }}
            />
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {skillCategories.map((category, i) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(i)}
              className={`group relative px-6 py-3 transition-all duration-300 ${
                activeCategory === i ? "" : "hover:bg-secondary/50"
              }`}
              style={{ transform: "skewX(-6deg)" }}
            >
              {activeCategory === i && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative font-(--font-display) text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === i ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}
                style={{ transform: "skewX(6deg)", display: "inline-block" }}
              >
                <span className="mr-2 font-mono text-xs opacity-60">[{category.code}]</span>
                {category.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Skill bars */}
          <motion.div
            ref={skillsRef}
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-(--font-display) text-lg uppercase text-foreground group-hover:text-primary transition-colors"
                    style={{ transform: "skewX(-2deg)" }}
                  >
                    {skill.name}
                  </span>
                  <motion.span 
                    className="font-mono text-sm text-primary"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="relative h-4 bg-secondary/30 overflow-hidden border border-border/50" style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.3 + i * 0.15, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
                    style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
                  />
                  {/* Animated shine effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: "300%" } : { x: "-100%" }}
                    transition={{ duration: 1.8, delay: 1.2 + i * 0.15, repeat: Infinity, repeatDelay: 4 }}
                    className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                  {/* Progress tick marks */}
                  <div className="absolute inset-0 flex">
                    {[...Array(10)].map((_, idx) => (
                      <div key={idx} className="flex-1 border-r border-background/20 last:border-r-0" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Visual display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-md aspect-square bg-card/30 border border-border"
              style={{ clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)" }}
            >
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={activeCategory}
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative"
                >
                  <div
                    className="h-32 w-32 bg-primary flex items-center justify-center"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  >
                    <span
                      className="font-(--font-display) text-4xl text-primary-foreground"
                      style={{ transform: "rotate(0deg)" }}
                    >
                      {skillCategories[activeCategory].code}
                    </span>
                  </div>
                  {/* Orbiting dots */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 2 }}
                      className="absolute inset-0"
                      style={{ transformOrigin: "center center" }}
                    >
                      <div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-2 w-2 bg-primary/60"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 h-6 w-6 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-4 right-4 h-6 w-6 border-r-2 border-b-2 border-primary/30" />

              {/* Category name */}
              <motion.div
                key={skillCategories[activeCategory].name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <span
                  className="font-(--font-display) text-2xl uppercase text-foreground"
                  style={{ transform: "skewX(-4deg)", display: "inline-block" }}
                >
                  {skillCategories[activeCategory].name}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 right-6 h-8 w-8 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-l-2 border-b-2 border-primary/20" />
    </section>
  )
}
