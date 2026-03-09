"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function HeroSection() {
  const [showMenu, setShowMenu] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showPrompt, setShowPrompt] = useState(true)

  const handleStart = useCallback(() => {
    if (!showMenu) {
      setShowMenu(true)
      setShowPrompt(false)
    }
  }, [showMenu])

  useEffect(() => {
    const handleKey = () => handleStart()
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [handleStart])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
      id="hero"
      onClick={handleStart}
    >
      {/* Fondo de cuadros */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Recuadros rojos arriba derecha */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute -right-10 top-[5%] h-[55%] w-[35%] bg-primary/[0.07]"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)", transform: "skewX(-6deg)" }}
        />
        {/* Cuadrado rojo abajo izquierda */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="absolute -left-10 bottom-[5%] h-[40%] w-[25%] bg-primary/4"
          style={{ clipPath: "polygon(0 0, 100% 15%, 80% 100%, 0% 100%)" }}
        />
        {/* Acentuar líneas de fondo*/}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-[30%] top-0 h-full w-0.5 bg-primary/15 origin-top"
          style={{ transform: "rotate(-10deg)" }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-[32%] top-0 h-full w-px bg-border/40 origin-top"
          style={{ transform: "rotate(-10deg)" }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="absolute left-[20%] top-0 h-full w-px bg-primary/10 origin-top"
          style={{ transform: "rotate(6deg)" }}
        />
        {/* Diamantes rojos */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="absolute top-[15%] right-[20%] h-3 w-3 bg-primary"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="absolute bottom-[25%] left-[15%] h-2 w-2 bg-primary/60"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        {/* Cuadricula de fondo */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Bloque principal de texto */}
      <div className="relative flex flex-col items-center">
        {/* Subtítulo superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <div className="h-0.5 w-8 bg-primary mb-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
            Alias Shana
          </span>
          <div className="h-0.5 w-8 bg-primary mb-4" />
        </motion.div>

        {/* Sombra de título - nombre */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="relative text-center"
        >
          {/* Sombra de título principal */}
          <div className="absolute inset-0 translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 select-none pointer-events-none" aria-hidden>
            <div className="font-(--font-display)] text-[4.5rem] leading-[0.85] uppercase text-primary/20 sm:text-[7rem] md:text-[9rem] lg:text-[12rem]">
              <span className="block mb-6">María José</span>
              <span className="block">Peña Ruiz</span>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="relative font-(--font-mono)] text-[4.5rem] leading-[0.85] uppercase text-foreground sm:text-[7rem] md:text-[9rem] lg:text-[12rem]">
            <motion.span
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block mb-6"
            >
              María José
            </motion.span>
            <motion.span
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="block text-primary"
            >
              Peña Ruiz
            </motion.span>
          </h1>

          {/* Subtitle bar beneath title — the "Royal" equivalent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mx-auto mt-8 flex items-center justify-center gap-4"
          >
            <div className="h-0.5 w-20 bg-primary/40" />
            <div className="text-center">
              <span className="block font-(--font-display) text-lg uppercase tracking-[0.5em] sm:text-xl md:text-2xl">
                Desarrolladora de Software &
              </span>
              <span className="block font-(--font-display) text-lg uppercase tracking-[0.5em] sm:text-xl md:text-2xl">
                Analista de Datos
              </span>
            </div>
            <div className="h-0.5 w-20 bg-primary/40" />
          </motion.div>
        </motion.div>

        {/* Prompt para inicio con Click */}
        <AnimatePresence>
          {showPrompt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-16 md:mt-14"
            >
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Botón */}
                <div
                  className="relative px-8 py-3"
                  style={{ transform: "skewX(-8deg)" }}
                >
                  <div className="absolute inset-0 bg-primary/90" />
                  <span
                    className="relative font-(--font-display) text-sm uppercase tracking-[0.3em] text-primary-foreground sm:text-base"
                    style={{ transform: "skewX(8deg)", display: "inline-block" }}
                  >
                    Click para Empezar
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menú horizontal, después de iniciar (dar click) */}
        <AnimatePresence>
          {showMenu && (
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 md:mt-20"
              aria-label="Main menu"
            >
              <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-4 sm:gap-x-3 md:gap-x-4">
                {menuItems.map((item, i) => {
                  const isActive = i === activeIndex
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`group relative cursor-pointer px-2 py-1 transition-all duration-300 sm:px-3 ${
                        isActive ? "" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      {/* Active item marker — small diamond */}
                      {isActive && (
                        <motion.div
                          layoutId="menu-marker"
                          className="absolute -top-3 left-1/2 -translate-x-1/2 h-2 w-2 bg-primary"
                          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Label — active is bigger and white, inactive is smaller and muted */}
                      <span
                        className={`font-(--font-display) uppercase transition-all duration-300 block whitespace-nowrap ${
                          isActive
                            ? "text-xl text-foreground sm:text-2xl md:text-3xl -skew-x-3"
                            : "text-sm text-muted-foreground sm:text-base md:text-lg opacity-60 hover:opacity-90"
                        }`}
                        style={isActive ? { textShadow: "2px 2px 0px rgba(227,6,19,0.3)" } : {}}
                      >
                        {item.label}
                      </span>

                      {/* Underline accent on active */}
                      {isActive && (
                        <motion.div
                          layoutId="menu-underline"
                          className="mt-1 h-[3px] w-full bg-primary"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Separator dot between items */}
                      {i < menuItems.length - 1 && (
                        <span className="absolute -right-1 bottom-1/2 translate-y-1/2 text-muted-foreground/30 sm:-right-1.5 md:-right-2 select-none pointer-events-none" aria-hidden>
                          &#x2716;
                        </span>
                      )}
                    </motion.a>
                  )
                })}
              </div>

              {/* Bottom bar hint — like P5's controller buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex items-center justify-center gap-6 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-6 items-center justify-center bg-secondary px-2 font-mono text-[10px] uppercase text-muted-foreground">
                    Scroll
                  </kbd>
                  <span className="text-[10px] uppercase tracking-widest">Explore</span>
                </div>
                <div className="h-3 w-[1px] bg-border" />
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-6 items-center justify-center bg-secondary px-2 font-mono text-[10px] uppercase text-muted-foreground">
                    Click
                  </kbd>
                  <span className="text-[10px] uppercase tracking-widest">Select</span>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator — bottom center */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-8 w-[2px] bg-primary/40"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Scroll Down
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner decorative elements */}
      <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-6 right-6 h-8 w-8 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-r-2 border-b-2 border-primary/20" />
    </section>
  )
}