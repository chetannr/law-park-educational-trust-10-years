'use client'

import Link from 'next/link'
import { DONATION_URL } from '@/data/constants'
import { getImageSources } from '@/utils/image'

const HERO_IMAGE = 'images/slide_28_Picture_3_00.jpg'
const STORY_IMAGE = 'images/slide_27_Picture_1_00.jpg'

function InviteWebpage() {
  const heroSources = getImageSources(HERO_IMAGE)
  const storySources = getImageSources(STORY_IMAGE)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            10 Years of Service – Help Us Bring Children to Bangalore
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Sponsor our celebration event and give children their first trip to the city. Your support brings smiles and lasting change.
          </p>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition-colors hover:bg-gray-100"
          >
            Donate Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Hero image from gallery */}
      <section className="relative w-full aspect-[21/9] min-h-[200px] max-h-[400px] bg-gray-200">
        <picture className="block w-full h-full">
          <source srcSet={heroSources.webp} type="image/webp" />
          <img
            src={heroSources.fallback}
            alt="Law Park Educational Trust – children and our journey"
            className="w-full h-full object-cover"
            width={1200}
            height={514}
            loading="eager"
          />
        </picture>
      </section>

      {/* About / Intro */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Law Park Educational Trust is completing 10 years of service to our Nation. We help children across India—in rural areas, tribal communities, and children of HIV patients and acid-attack survivors—by supporting their education so no child under our care is left unschooled.
            </p>
            <p>
              To celebrate this milestone, we want to bring all the children under our care to Bangalore: an event, a one-day educational tour, surprise gifts, and lasting memories. For many of these children, it will be their first time visiting Bangalore—in fact, their first time stepping out of their abode.
            </p>
            <p>
              We need your sponsorship to make this happen. Your support will be heartwarming for all of us and will create a great change in these children&apos;s lives.
            </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <picture className="block w-full h-full">
                <source srcSet={storySources.webp} type="image/webp" />
                <img
                  src={storySources.fallback}
                  alt="Children and community – Law Park Educational Trust"
                  className="w-full h-full object-cover"
                  width={600}
                  height={450}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Your Support Matters</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold shrink-0">•</span>
              <span>Law Park Educational Trust – 10 years of service to the Nation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold shrink-0">•</span>
              <span>Supporting children across India: rural, tribal, HIV-affected, acid-attack survivors</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold shrink-0">•</span>
              <span>No child under our care left unschooled – we pay school fees and provide essentials</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold shrink-0">•</span>
              <span>Celebrating with a Bangalore event: one-day tour, surprise gifts, memories for a lifetime</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold shrink-0">•</span>
              <span>For many children, this will be their first time visiting Bangalore—first time stepping out of their abode</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Support This Cause</h2>
          <p className="text-xl text-gray-700 mb-8">
            Your support can bring smiles and create lasting change in these children&apos;s lives. We request your financial help for this noble cause.
          </p>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Donate Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="mt-6 text-gray-600">
            Or contact us: <a href="tel:+919945665379" className="text-primary-600 font-semibold hover:underline">+919945665379</a> · <a href="mailto:lawparktrust@gmail.com" className="text-primary-600 font-semibold hover:underline">lawparktrust@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <p className="font-semibold">Charulatha M. R.</p>
          <p className="text-gray-400">Founder, Law Park Educational Trust</p>
          <p className="text-gray-400 mt-1">Representing our entire Team</p>
          <a href="tel:+919945665379" className="inline-block mt-2 text-primary-400 hover:text-primary-300 font-semibold">
            +919945665379
          </a>
          <p className="mt-6 text-sm text-gray-500">
            <Link href="/content/webpage" className="underline hover:text-gray-400">
              Need copy for your own webpage?
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default InviteWebpage
