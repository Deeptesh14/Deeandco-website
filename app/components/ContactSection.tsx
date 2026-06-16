'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { KeystoneMark } from './KeystoneMark'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="contact" className="relative bg-background overflow-hidden">
      {/* Subtle background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,165,106,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <KeystoneMark className="w-10 h-12 text-gold/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-gold/40" />
            <span className="text-xs tracking-widest uppercase text-muted font-light">
              Get in Touch
            </span>
            <div className="w-6 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream italic mb-8"
          >
            Let's Talk.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-muted text-base font-light leading-relaxed mb-12 max-w-xl mx-auto"
          >
            Whether you're preparing for a raise, evaluating opportunities, or exploring strategic
            growth initiatives — we'd love to hear from you.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-10"
          >
            <a
              href="mailto:deeptesh@deeandco.in"
              className="group inline-flex items-center gap-2 font-display text-xl md:text-2xl text-gold italic hover:text-gold-light transition-colors duration-300"
            >
              deeptesh@deeandco.in
              <span className="text-base group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <a
              href="mailto:deeptesh@deeandco.in"
              className="group inline-flex items-center gap-3 bg-gold text-background text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Schedule a Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
