"use client"

import { motion } from "framer-motion"
import { Code2, Cog, Database, Sparkles } from "lucide-react"

const stats = [
  { value: "Desarrollo Full Stack", label: "Misión 1" },
  { value: "Datos y Analítica", label: "Misión 2" },
  { value: "IA y Automatización", label: "Misión 3" },
]

const highlights = [
  { icon: Code2, text: "Desarrollo Full Stack" },
  { icon: Database, text: "Análisis de Datos" },
  { icon: Sparkles, text: "Soluciones Creativas" },
  { icon: Cog, text: "Automatización" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-[10%] h-[60%] w-[30%] bg-primary/5"
          style={{ clipPath: "polygon(0 0, 100% 10%, 80% 100%, 0% 90%)" }}
        />
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 bottom-[5%] h-[40%] w-[25%] bg-primary/3"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        {/* Diagonal lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-[15%] top-0 h-full w-px bg-primary/10 origin-top"
          style={{ transform: "rotate(8deg)" }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-[25%] top-0 h-full w-0.5 bg-border/30 origin-top"
          style={{ transform: "rotate(-6deg)" }}
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
              02 // Sobre Mí
            </span>
          </div>
          <div className="relative">
            <h2
              className="font-(--font-display) text-5xl uppercase text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ transform: "skewX(-3deg)" }}
            >
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 w-32 bg-primary"
              style={{ transform: "skewX(-12deg)" }}
            />
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card container */}
            <div
              className="relative bg-card/50 backdrop-blur-sm border border-border p-6 md:p-8"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-primary/50" />

              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-6">
                Soy una <span className="text-foreground font-medium">Desarrolladora de Software</span> y{" "}
                <span className="text-foreground font-medium">Analista de Datos</span> apasionada por crear
                soluciones tecnológicas innovadoras que transforman ideas en realidad.
              </p>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-6">
                Mi enfoque integra pensamiento analítico, creatividad y experiencia de usuario 
                para construir aplicaciones funcionales, escalables y orientadas a datos.
              </p>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                Siempre en búsqueda de nuevos desafíos y oportunidades para aprender y crecer
                en el mundo de la tecnología.
              </p>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 bg-secondary/50 px-4 py-2"
                    style={{ transform: "skewX(-4deg)" }}
                  >
                    <item.icon className="h-4 w-4 text-primary" style={{ transform: "skewX(4deg)" }} />
                    <span
                      className="font-mono text-sm text-foreground"
                      style={{ transform: "skewX(4deg)" }}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full border border-primary/20 -z-10"
              style={{ transform: "translate(8px, 8px)" }}
            />
          </motion.div>

          {/* Right column - Stats and visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative group flex"
                >
                  <div
                    className="flex-1 flex flex-col items-center justify-center bg-secondary/80 border border-border p-4 md:p-6 text-center transition-all duration-300 group-hover:border-primary/50"
                    style={{ clipPath: "polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}
                  >
                    <span
                      className="block font-(--font-display) text-primary"
                      style={{ transform: "skewX(-3deg)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                  {/* Hover accent */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Visual element - Phantom Thief card style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div
                className="relative bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 p-6 md:p-8"
                style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="h-12 w-12 bg-primary flex items-center justify-center"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  >
                    <span className="font-(--font-display) text-xl text-primary-foreground">S</span>
                  </div>
                  <div>
                    <span className="font-(--font-display) text-2xl uppercase text-foreground block">
                      Código: Shana
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      Phantom Developer
                    </span>
                  </div>
                </div>
                <p className="font-mono text-sm text-muted-foreground italic">
                  {'"Construyendo soluciones digitales impulsadas por datos, creatividad e inteligencia artificial."'}
                </p>

                {/* Decorative diamonds */}
                <div
                  className="absolute top-4 right-4 h-3 w-3 bg-primary"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
                <div
                  className="absolute bottom-4 left-4 h-2 w-2 bg-primary/60"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-r-2 border-b-2 border-primary/20" />
    </section>
  )
}
