import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import ImpactOverview from '../components/sections/ImpactOverview'
import Activities from '../components/sections/Activities'
import { Process } from '../components/sections/Process'
import Timeline from '../components/sections/Timeline'
import Gallery from '../components/sections/Gallery'
import { Trustees } from '../components/sections/Trustees'
import { Testimonials } from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'
import { websiteContent } from '../data/websiteContent'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ImpactOverview />
      <Activities />
      <Process process={websiteContent.process} />
      <Timeline />
      <Gallery />
      <Trustees trustees={websiteContent.trustees} />
      <Testimonials testimonials={websiteContent.testimonials} />
      <CTASection />
    </div>
  )
}
