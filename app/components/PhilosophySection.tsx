'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MARQUEE_ITEMS = [
  'Fundraising Advisory',
  'Investor Relations',
  'Deal Sourcing',
  'Strategic Finance',
  'Capital Markets',
  'Due Diligence',
  'Portfolio Intelligence',
  'Market Research',
]

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="philosophy" className="relative bg-background">
      {/* Marquee ticker */}
      <div className="border-y border-border-subtle overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6 mx-6">
              <span className="text-[10px] tracking-widest uppercase text-muted font-light">
                {item}
              </span>
              <span className="text-gold/30 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main philosophy content */}
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: label */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px bg-gold/40" />
              <span className="text-xs tracking-widest uppercase text-muted font-light">
                Our Philosophy
              </span>
            </motion.div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] text-cream mb-16"
            >
              Capital is abundant.{' '}
              <span className="italic text-gold">Trust</span>{' '}
              is scarce.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-muted text-base font-light leading-relaxed">
                  Successful fundraising is not just about introductions. It is about preparation,
                  positioning, and building the right relationships — long before a term sheet
                  is ever discussed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <p className="text-muted text-base font-light leading-relaxed">
                  At Dee & Co, we work closely with founders and investors to create meaningful
                  connections that lead to long-term value creation — not transactional outcomes.
                </p>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-20 pt-12 border-t border-border-subtle grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                { value: 'Founders', label: 'We prepare for capital' },
                { value: 'Investors', label: 'We source for conviction' },
                { value: 'Capital', label: 'We connect with purpose' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="font-display text-xl md:text-2xl text-cream font-light italic mb-2 group-hover:text-gold transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] tracking-wider uppercase text-muted/60 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
