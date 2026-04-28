"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react"

const navLinks = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/MaryJoP10" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/maryjop10/" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/maryjop10" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-border py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute left-0 top-0 h-full w-[20%] bg-primary/2"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        />
        <div
          className="absolute right-0 bottom-0 h-full w-[15%] bg-primary/2"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="flex items-center gap-3 mb-6 group">
              <div
                className="h-10 w-10 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                <span className="font-(--font-display) text-xl text-primary-foreground">S</span>
              </div>
              <div>
                <span
                  className="font-(--font-display) text-2xl uppercase text-foreground block"
                  style={{ transform: "skewX(-3deg)" }}
                >
                  Shana
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Phantom Developer
                </span>
              </div>
            </a>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transformando ideas en experiencias digitales extraordinarias.
              Desarrolladora Full Stack & Analista de Datos.
            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:text-center"
          >
            <h4
              className="font-(--font-display) text-lg uppercase text-foreground mb-6"
              style={{ transform: "skewX(-2deg)" }}
            >
              Navegación
            </h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="group relative font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:text-right"
          >
            <h4
              className="font-(--font-display) text-lg uppercase text-foreground mb-6"
              style={{ transform: "skewX(-2deg)" }}
            >
              Conecta
            </h4>
            <div className="flex gap-3 lg:justify-end">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group h-10 w-10 bg-secondary border border-border flex items-center justify-center transition-all hover:border-primary hover:bg-primary"
                  style={{ clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)" }}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="my-10 h-px bg-border origin-left"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {currentYear} Shana. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            Hecho con{" "}
            <Heart className="h-3 w-3 text-primary fill-primary animate-pulse" />
            {" "}y mucho código
          </p>
        </motion.div>

        {/* Phantom thief calling card easter egg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p
            className="font-(--font-display) text-[10px] uppercase tracking-[0.5em] text-muted-foreground/30"
            style={{ transform: "skewX(-3deg)" }}
          >
            Take Your Heart
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 h-6 w-6 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute top-6 right-6 h-6 w-6 border-r-2 border-t-2 border-primary/10" />
    </footer>
  )
}
