'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const founderServices = [
  { title: 'Fundraising Advisory', desc: 'End-to-end support across equity and debt raises.' },
  { title: 'Investor Readiness', desc: 'Positioning, narrative, and materials that open doors.' },
  { title: 'Financial Modeling', desc: 'Rigorous models that withstand institutional scrutiny.' },
  { title: 'Strategic Finance', desc: 'Aligning capital strategy with business objectives.' },
  { title: 'Investor Relations', desc: 'Building trust with capital partners over time.' },
]

const investorServices = [
  { title: 'Deal Sourcing', desc: 'Proprietary access to curated founder opportunities.' },
  { title: 'Deal Screening', desc: 'Initial filtering aligned to your investment thesis.' },
  { title: 'Due Diligence Support', desc: 'Deep-dive analysis before conviction is placed.' },
  { title: 'Market Research', desc: 'Sector intelligence and competitive landscape mapping.' },
  { title: 'Portfolio Intelligence', desc: 'Ongoing monitoring of portfolio company health.' },
]

function ServiceItem({
  title,
  desc,
  index,
  isInView,
}: {
  title: string
  desc: string
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
      className="group flex items-start gap-4 py-5 border-b border-border-subtle last:border-0 cursor-default"
    >
      <span className="text-[10px] text-gold/40 font-mono mt-0.5 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <div className="text-sm text-cream font-light group-hover:text-gold transition-colors duration-300 mb-1">
          {title}
        </div>
        <div className="text-xs text-muted/60 font-light leading-relaxed">{desc}</div>
      </div>
      <div className="ml-auto text-muted/20 group-hover:text-gold/40 transition-colors duration-300 text-xs shrink-0 mt-0.5">
        →
      </div>
    </motion.div>
  )
}

function ServiceCard({
  tag,
  headline,
  subline,
  services,
  isInView,
  delay = 0,
}: {
  tag: string
  headline: string
  subline: string
  services: typeof founderServices
  isInView: boolean
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className="service-line bg-surface-1 border border-border-subtle p-8 md:p-10 hover:border-gold/20 transition-colors duration-500"
    >
      {/* Card header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-px bg-gold/40" />
          <span className="text-[10px] tracking-widest uppercase text-gold/70 font-light">
            {tag}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-light text-cream italic mb-3">
          {headline}
        </h3>
        <p className="text-xs text-muted/60 font-light leading-relaxed max-w-xs">{subline}</p>
      </div>

      {/* Service list */}
      <div>
        {services.map((svc, i) => (
          <ServiceItem key={svc.title} {...svc} index={i} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="services" className="relative bg-background">
      {/* Top divider */}
      <hr className="hr-gold" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3 flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px bg-gold/40" />
              <span className="text-xs tracking-widest uppercase text-muted font-light">
                What We Do
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
              Advisory that sits on{' '}
              <span className="italic text-gold">both sides</span>{' '}
              of the table.
            </motion.h2>
          </div>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServiceCard
            tag="For Founders"
            headline="Raise with conviction."
            subline="From first-round readiness to late-stage capital strategy, we guide founders through every phase of their fundraising journey."
            services={founderServices}
            isInView={isInView}
            delay={0.2}
          />
          <ServiceCard
            tag="For Investors"
            headline="Source with precision."
            subline="We help institutional and individual investors find, evaluate, and monitor opportunities that align with their mandate."
            services={investorServices}
            isInView={isInView}
            delay={0.35}
          />
        </div>
      </div>
    </section>
  )
}
