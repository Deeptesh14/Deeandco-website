'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Understand',
    body: 'We begin with deep listening. Understanding your business, your capital needs, your timeline, and the specific outcome you are working toward.',
  },
  {
    number: '02',
    title: 'Evaluate',
    body: 'We assess readiness, refine positioning, and identify the right investor profiles — aligning strategy before any outreach begins.',
  },
  {
    number: '03',
    title: 'Connect',
    body: 'We make warm, well-timed introductions to investors who genuinely fit. Not volume. Quality access built on existing relationships.',
  },
  {
    number: '04',
    title: 'Execute',
    body: 'We remain engaged through term sheet negotiation, due diligence, and close — ensuring the process moves efficiently toward a decisive outcome.',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="process" className="relative bg-surface-1">
      <hr className="hr-gold" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px bg-gold/40" />
              <span className="text-xs tracking-widest uppercase text-muted font-light">
                How We Work
              </span>
            </motion.div>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight"
            >
              A deliberate process,{' '}
              <span className="italic text-gold">not a pipeline.</span>
            </motion.h2>
          </div>
        </div>

        {/* Steps: horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.12,
                }}
                className="group relative"
              >
                {/* Step number + dot */}
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full border border-gold/40 group-hover:border-gold transition-colors duration-300 bg-surface-1 relative z-10" />
                    <div className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500 scale-150" />
                  </div>
                  <span className="font-mono text-[10px] text-gold/50 tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-light text-cream italic mb-4 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm text-muted/70 font-light leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <hr className="hr-gold" />
    </section>
  )
}
