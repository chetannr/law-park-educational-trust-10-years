import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '10-Year Anniversary Magazine',
  description: 'Print-ready A4 magazine templates for Law Park Educational Trust’s 10-year anniversary. Export to PDF from the browser.',
  openGraph: {
    title: '10-Year Anniversary Magazine | Law Park Educational Trust',
    description: 'Print-ready magazine templates for the 10-year celebration.',
  },
}

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            10-Year Anniversary Magazine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Print-ready A4 templates. Open a template, then use your browser to save as PDF.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Template 1</h2>
            <p className="text-gray-600 mb-4">
              Full 12-page magazine: cover, trustees’ note, our story, timeline, activities, children’s voices, testimonials, award, team, how to help. Greens and neutrals, section labels, cards and callouts.
            </p>
            <Link
              href="/magazine/template-01.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Open Template 1
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Template 2</h2>
            <p className="text-gray-600 mb-4">
              Editorial single-column style with illustrations and project images. Deep forest green cover with graduation illustration; section accents (community, growth, books, children, team, donation); photos from our journey (school visits, library, community, support). Running headers, timeline, pull-quotes.
            </p>
            <Link
              href="/magazine/template-02.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Open Template 2
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Template 3</h2>
            <p className="text-gray-600 mb-4">
              Same 12-page content as Template 1 with an editorial look: .org palette (deep green #093532, orange accent #F58222), accent stripe on cover, bordered pull-quotes, and orange section labels.
            </p>
            <Link
              href="/magazine/template-03.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Open Template 3
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-primary-50 p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Save as PDF (Chrome)</p>
            <p className="mb-0">
              Open the template in a new tab, then use <strong>File → Print</strong> (or Ctrl/Cmd+P). Choose <strong>Save as PDF</strong>, set paper size to <strong>A4</strong>, orientation <strong>Portrait</strong>, and enable <strong>Background graphics</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
