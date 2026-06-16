'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })

  const parallaxX = useTransform(springX, [-1, 1], [-12, 12])
  const parallaxY = useTransform(springY, [-1, 1], [-8, 8])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(nx)
      mouseY.set(ny)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern animate-grid-pulse pointer-events-none" />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #0A0A0A 75%)'
        }}
      />

      {/* Subtle gold glow upper-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(200,165,106,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Parallax content */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-px bg-gold opacity-60" />
          <span className="text-xs tracking-widest uppercase text-muted font-light">
            Capital Advisory
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={fadeUp}
            custom={0.35}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight text-cream text-balance"
          >
            Capital Advisory
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight italic text-gold"
          >
            for Founders
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h1
            variants={fadeUp}
            custom={0.65}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight text-cream"
          >
            and Investors.
          </motion.h1>
        </div>

        {/* Subheading and CTAs row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.p
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            animate="visible"
            className="max-w-md text-muted text-base font-light leading-relaxed"
          >
            We help ambitious companies prepare for growth, raise capital, and build meaningful
            investor relationships that endure.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.95}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="mailto:deeptesh@deeandco.in"
              className="group relative inline-flex items-center gap-3 bg-gold text-background text-xs tracking-widest uppercase font-medium px-7 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Book a Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#philosophy"
              className="text-xs tracking-widest uppercase font-light text-muted hover:text-cream transition-colors duration-300 flex items-center gap-2 px-2 py-4"
            >
              Learn More
              <span className="text-gold">↓</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
