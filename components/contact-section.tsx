"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/MaryJoP10" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/maryjop10/" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/maryjop10" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 1. Configura tu número aquí (formato internacional sin el +)
    // Ejemplo para Colombia: "573001234567"
    const phoneNumber = "573332808002" 
    
    // 2. Creamos el mensaje formateado
    const text = `*Nuevo mensaje de contacto*\n\n*Nombre:* ${formState.name}\n*Email:* ${formState.email}\n\n*Mensaje:* ${formState.message}`
    
    // 3. Abrimos WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank')
    
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative min-h-screen py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-[5%] h-[60%] w-[35%] bg-primary/5"
          style={{ clipPath: "polygon(0 0, 100% 5%, 85% 100%, 0% 95%)" }}
        />
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 bottom-[10%] h-[40%] w-[25%] bg-primary/3"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        {/* Diagonal lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-[20%] top-0 h-full w-px bg-primary/10 origin-top"
          style={{ transform: "rotate(-8deg)" }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-[30%] top-0 h-full w-0.5 bg-border/20 origin-top"
          style={{ transform: "rotate(5deg)" }}
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
              05 // Contacto
            </span>
          </div>
          <div className="relative">
            <h2
              className="font-(--font-display) text-5xl uppercase text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ transform: "skewX(-3deg)" }}
            >
              Hablemos <span className="text-primary">!</span>
            </h2>
            <div
              className="absolute -bottom-2 left-0 h-1 w-36 bg-primary"
              style={{ transform: "skewX(-12deg)" }}
            />
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="font-sans text-xl leading-relaxed text-muted-foreground mb-8">
              ¿Tienes un proyecto en mente o simplemente quieres conectar?
              Me encantaría escucharte. Estoy siempre abierta a nuevas oportunidades
              y colaboraciones interesantes.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <motion.a
                href="mailto:hola@shana.dev"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex items-center gap-4"
              >
                <div
                  className="h-12 w-12 bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                >
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                    Email
                  </span>
                  <span className="font-(--font-display) text-lg text-foreground group-hover:text-primary transition-colors">
                    consulshanis@gmail.com
                  </span>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div
                  className="h-12 w-12 bg-primary/20 flex items-center justify-center"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                >
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                    Ubicación
                  </span>
                  <span className="font-(--font-display) text-lg text-foreground">
                    Medellín, COL
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 block">
                Sígueme
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="group h-12 w-12 bg-secondary border border-border flex items-center justify-center transition-all hover:border-primary hover:bg-primary"
                    style={{ clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div
                className="bg-card/50 backdrop-blur-sm border border-border p-8"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-primary/50" />

                <div className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Nombre
                    </label>
                    <div
                      className="relative"
                      style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
                    >
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full bg-secondary/80 border-0 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <div
                      className="relative"
                      style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
                    >
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full bg-secondary/80 border-0 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Mensaje
                    </label>
                    <div
                      className="relative"
                      style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
                    >
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full bg-secondary/80 border-0 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-primary transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ transform: "skewX(-4deg)" }}
                  >
                    <span
                      className="flex items-center justify-center gap-3 font-(--font-display) text-lg uppercase text-primary-foreground"
                      style={{ transform: "skewX(4deg)" }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative shadow */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 -z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}
              />
            </form>
          </motion.div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-r-2 border-b-2 border-primary/20" />
    </section>
  )
}
