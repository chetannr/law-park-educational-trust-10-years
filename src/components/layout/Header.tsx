import { Link } from '@tanstack/react-router'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Law Park Educational Trust"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-700 transition-colors hover:text-primary-600"
              activeProps={{ className: 'text-primary-600 font-medium' }}
            >
              Home
            </Link>
            <a
              href="#journey"
              className="text-gray-700 transition-colors hover:text-primary-600"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Journey
            </a>
            <a
              href="#activities"
              className="text-gray-700 transition-colors hover:text-primary-600"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Activities
            </a>
            <a
              href="#gallery"
              className="text-gray-700 transition-colors hover:text-primary-600"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Gallery
            </a>
            <a
              href="#get-involved"
              className="rounded-md bg-primary-600 px-4 py-2 text-white transition-colors hover:bg-primary-700"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Involved
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#journey"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Journey
              </a>
              <a
                href="#activities"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Activities
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Gallery
              </a>
              <a
                href="#get-involved"
                className="block rounded-md bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-700"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Involved
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
