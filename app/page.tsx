import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { PhilosophySection } from './components/PhilosophySection'
import { ServicesSection } from './components/ServicesSection'
import { ProcessSection } from './components/ProcessSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
