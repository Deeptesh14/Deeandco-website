'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeystoneMark } from './KeystoneMark'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Dee & Co">
            <KeystoneMark className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110" />
            <span className="text-cream font-sans text-sm tracking-widest uppercase font-light">
              Dee <span className="text-gold">&</span> Co
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-muted hover:text-cream transition-colors duration-300 text-xs tracking-widest uppercase font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="mailto:deeptesh@deeandco.in"
              className="text-xs tracking-widest uppercase font-light text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              Book a Conversation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-muted hover:text-cream transition-colors p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-px bg-current origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center transition-all"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="font-display text-3xl text-cream hover:text-gold transition-colors duration-300 italic"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:deeptesh@deeandco.in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xs tracking-widest uppercase font-light text-gold border border-gold/30 px-6 py-3"
              onClick={() => setMenuOpen(false)}
            >
              Book a Conversation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
