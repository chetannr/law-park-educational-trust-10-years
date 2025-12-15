import { useEffect, useState } from 'react'
import { stats } from '../../data/stats'

function StatCard({ label, value, suffix, customText }: { label: string; value: number; suffix?: string; customText?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated || customText) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [value, label, hasAnimated, customText])

  return (
    <div id={`stat-${label}`} className="text-center">
      <div className="text-4xl font-bold text-primary-600 sm:text-5xl">
        {customText || `${count.toLocaleString()}${suffix || ''}`}
      </div>
      <div className="mt-2 text-base text-gray-600 sm:text-lg">{label}</div>
    </div>
  )
}

function ImpactOverview() {
  return (
    <section id="impact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Over the past 10 years, we've made a meaningful difference in the lives of hundreds of children across rural India.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              customText={stat.customText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactOverview
