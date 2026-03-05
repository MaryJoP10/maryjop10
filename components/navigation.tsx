"use client"

import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {Menu, X} from "lucide-react"

const navLinks = [
    {label: "Sobre Mí", href: "#about"},
    {label: "Habilidades", href: "#skills"},
    {label: "Proyectos", href: "#projects"},
    {label: "Experiencia", href: "#experience"},
    {label: "Contacto", href: "#contact"},
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
            <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-7 w-7 bg-primary flex items-center justify-center" style={{ transform: "skewX(-8deg)" }}>
                <span className="font-(--font-display) text-primary-foreground text-xs" style={{ transform: "skewX(8deg)" }}>D</span>
              </div>
              <span className="font-(--font-display) text-foreground text-lg tracking-wider uppercase">DEV</span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative font-(--font-display) text-sm uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:text-foreground hover:-skew-x-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 text-foreground md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>


          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
              >

                <div
                  className="absolute top-0 right-0 h-full w-[40%] bg-primary/5"
                  style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
                />

                <div className="relative flex flex-col items-center gap-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="group flex items-center gap-4"
                    >
                      <span className="font-(--font-display) text-3xl uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                        style={{ transform: "skewX(-4deg)" }}
                      >
                        {link.label}
                      </span>
                      <span className="h-0.75 w-0 bg-primary transition-all duration-300 group-hover:w-12" />
                    </motion.a>
                  ))}
                </div>

                <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-primary/20" />
                <div className="absolute bottom-6 right-6 h-8 w-8 border-r-2 border-b-2 border-primary/20" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
    )
}