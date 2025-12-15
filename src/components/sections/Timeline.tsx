import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { milestones } from '../../data/milestones'
import type { Milestone } from '../../types'

// Create a flat list of all images across all milestones
function getAllImages() {
  const allImages: Array<{ milestone: Milestone; imageIndex: number; globalIndex: number }> = []
  let globalIndex = 0

  milestones.forEach((milestone) => {
    milestone.images.forEach((_, imageIndex) => {
      allImages.push({ milestone, imageIndex, globalIndex })
      globalIndex++
    })
  })

  return allImages
}

function Timeline() {
  const [selectedImage, setSelectedImage] = useState<{ milestone: Milestone; index: number; globalIndex: number } | null>(null)
  const [showIntro, setShowIntro] = useState(false)
  const allImages = useMemo(() => getAllImages(), [])

  function openLightbox(milestone: Milestone, index: number) {
    const globalIndex = allImages.findIndex(
      (img) => img.milestone === milestone && img.imageIndex === index
    )
    setSelectedImage({ milestone, index, globalIndex })
    setShowIntro(false)
  }

  const closeLightbox = useCallback(() => {
    if (introTimeoutRef.current) {
      clearTimeout(introTimeoutRef.current)
      introTimeoutRef.current = null
    }
    setSelectedImage(null)
    setShowIntro(false)
  }, [])

  const introTimeoutRef = useRef<number | null>(null)

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    // Clear any pending intro timeout
    if (introTimeoutRef.current) {
      window.clearTimeout(introTimeoutRef.current)
      introTimeoutRef.current = null
    }

    // Close intro immediately
    setShowIntro(false)

    setSelectedImage((current) => {
      if (!current) return null

      const { globalIndex, milestone } = current
      let newGlobalIndex: number

      if (direction === 'prev') {
        newGlobalIndex = globalIndex === 0 ? allImages.length - 1 : globalIndex - 1
      } else {
        newGlobalIndex = globalIndex === allImages.length - 1 ? 0 : globalIndex + 1
      }

      const newImage = allImages[newGlobalIndex]
      
      // Check if we're switching to a different year
      if (newImage.milestone.year !== milestone.year) {
        // Show intro after a brief delay to allow image to update
        introTimeoutRef.current = window.setTimeout(() => {
          setShowIntro(true)
          // Auto-hide intro after 5 seconds
          introTimeoutRef.current = window.setTimeout(() => {
            setShowIntro(false)
            introTimeoutRef.current = null
          }, 5000)
        }, 100)
      }

      return {
        milestone: newImage.milestone,
        index: newImage.imageIndex,
        globalIndex: newGlobalIndex,
      }
    })
  }, [allImages])

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    function handleKeyDown(e: KeyboardEvent) {
      // Always allow arrow keys to navigate, even when intro is showing
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopPropagation()
        navigateImage('prev')
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        navigateImage('next')
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        if (showIntro) {
          setShowIntro(false)
        } else {
          closeLightbox()
        }
        return
      }
      if (showIntro && (e.key === 'Enter' || e.key === ' ')) {
        // Allow Enter or Space to dismiss intro
        e.preventDefault()
        e.stopPropagation()
        setShowIntro(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown, true) // Use capture phase
      return () => {
      window.removeEventListener('keydown', handleKeyDown, true)
      if (introTimeoutRef.current) {
        window.clearTimeout(introTimeoutRef.current)
      }
    }
  }, [selectedImage, navigateImage, closeLightbox, showIntro])

  return (
    <>
      <section id="journey" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our 10-Year Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From our first scholarship in 2016 to supporting 550+ students across multiple locations.
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-primary-200 md:block" />

              <div className="space-y-16">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0
                  const featuredImage = milestone.images[0]

                  return (
                    <div
                      key={milestone.year}
                      className={`relative flex flex-col md:flex-row ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Year marker */}
                      <div className="relative z-10 flex items-center justify-center md:w-1/2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 text-white shadow-xl ring-4 ring-white transition-all hover:scale-110 hover:bg-primary-700">
                          <span className="text-xl font-bold">{milestone.year}</span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="mt-6 flex-1 md:mt-0 md:w-1/2">
                        <div className="mx-4 overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                          {/* Featured Image */}
                          {featuredImage && (
                            <button
                              type="button"
                              onClick={() => openLightbox(milestone, 0)}
                              className="relative h-64 w-full overflow-hidden sm:h-80"
                              aria-label={`View ${milestone.title} photos`}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}images/${featuredImage}`}
                                alt={milestone.title}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white">
                                  {milestone.title}
                                </h3>
                                {milestone.location && (
                                  <p className="mt-1 text-sm text-white/90">
                                    📍 {milestone.location}
                                  </p>
                                )}
                              </div>
                            </button>
                          )}

                          {/* Content */}
                          <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">{milestone.description}</p>

                            {milestone.impact && (
                              <div className="mt-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2">
                                <span className="text-sm font-semibold text-primary-700">
                                  ✨ Impact: {milestone.impact}
                                </span>
                              </div>
                            )}

                            {/* Image Gallery */}
                            {milestone.images.length > 1 && (
                              <div className="mt-6">
                                <p className="mb-3 text-sm font-medium text-gray-700">
                                  View More Photos ({milestone.images.length})
                                </p>
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                                  {milestone.images.slice(1, 7).map((image, imgIndex) => (
                                    <button
                                      key={imgIndex}
                                      type="button"
                                      onClick={() => openLightbox(milestone, imgIndex + 1)}
                                      className="group relative aspect-square overflow-hidden rounded-lg"
                                      aria-label={`View ${milestone.title} - Image ${imgIndex + 2}`}
                                    >
                                      <img
                                        src={`${import.meta.env.BASE_URL}images/${image}`}
                                        alt={`${milestone.title} - Image ${imgIndex + 2}`}
                                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
                                        loading="lazy"
                                      />
                                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                                    </button>
                                  ))}
                                  {milestone.images.length > 7 && (
                                    <button
                                      type="button"
                                      onClick={() => openLightbox(milestone, 0)}
                                      className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-primary-600 text-white transition-colors hover:bg-primary-700"
                                      aria-label={`View all ${milestone.images.length} photos`}
                                    >
                                      <span className="text-sm font-medium">
                                        +{milestone.images.length - 7}
                                      </span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 pb-8 md:pb-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Desktop: Side navigation buttons - always visible for cross-year navigation */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:block"
            aria-label="Previous image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:block"
            aria-label="Next image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Year Intro Overlay - Shows when switching to a new year */}
          {showIntro && selectedImage && (
            <div
              className="absolute inset-0 z-40 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation()
                setShowIntro(false)
              }}
            >
              <div
                className="max-w-2xl rounded-lg bg-white/95 p-6 shadow-2xl backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedImage.milestone.year}: {selectedImage.milestone.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowIntro(false)}
                    className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                    aria-label="Close intro"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {selectedImage.milestone.location && (
                  <p className="mb-3 text-sm font-medium text-primary-600">
                    📍 {selectedImage.milestone.location}
                  </p>
                )}
                <p className="mb-4 text-gray-700 leading-relaxed">
                  {selectedImage.milestone.description}
                </p>
                {selectedImage.milestone.impact && (
                  <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2">
                    <span className="text-sm font-semibold text-primary-700">
                      ✨ Impact: {selectedImage.milestone.impact}
                    </span>
                  </div>
                )}
                <p className="mt-4 text-xs text-gray-500">
                  Click anywhere or press any key to continue viewing images
                </p>
              </div>
            </div>
          )}

          {/* Image container */}
          <div
            className="flex max-h-[calc(100vh-180px)] max-w-full flex-col items-center md:max-h-[calc(100vh-120px)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/${selectedImage.milestone.images[selectedImage.index]}`}
              alt={`${selectedImage.milestone.title} - Image ${selectedImage.index + 1}`}
              className="max-h-full w-auto rounded-lg object-contain"
            />
          </div>

          {/* Title and navigation - Below image, no overlap */}
          <div
            className="mt-4 flex w-full max-w-3xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile: Bottom navigation arrows with info - always visible */}
            <div className="flex w-full items-center justify-center gap-4 md:hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex-1 rounded-lg bg-black/40 px-4 py-3 text-center text-white backdrop-blur-sm">
                <p className="font-semibold text-sm sm:text-base">
                  {selectedImage.milestone.year}: {selectedImage.milestone.title}
                </p>
                <p className="text-xs text-white/80 sm:text-sm">
                  {selectedImage.globalIndex + 1} of {allImages.length} • Image {selectedImage.index + 1} of {selectedImage.milestone.images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop: Center info with year */}
            <div className="hidden w-full rounded-lg bg-black/40 px-6 py-3 text-center text-white backdrop-blur-sm md:block">
              <p className="font-semibold">
                {selectedImage.milestone.year}: {selectedImage.milestone.title}
              </p>
              <p className="text-sm text-white/80">
                {selectedImage.globalIndex + 1} of {allImages.length} • Image {selectedImage.index + 1} of {selectedImage.milestone.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Timeline
