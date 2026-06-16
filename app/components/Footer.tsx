import { KeystoneMark } from './KeystoneMark'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-1 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <KeystoneMark className="w-5 h-6 text-gold/60" />
            <span className="text-cream font-sans text-xs tracking-widest uppercase font-light">
              Dee <span className="text-gold/60">&</span> Co
            </span>
          </div>

          {/* Center tagline */}
          <p className="text-[10px] tracking-widest uppercase text-muted/40 font-light">
            Connecting Capital with Opportunity
          </p>

          {/* Copyright */}
          <p className="text-[10px] text-muted/30 font-light">
            © {year} Dee & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
