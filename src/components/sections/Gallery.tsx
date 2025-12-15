import { useState } from 'react'
import { milestones } from '../../data/milestones'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Collect all images from milestones
  const allImages = milestones.flatMap((milestone) =>
    milestone.images.map((img) => ({
      src: img,
      alt: `${milestone.title} - ${milestone.year}`,
      year: milestone.year,
      location: milestone.location,
    }))
  )

  return (
    <>
      <section id="gallery" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gallery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Moments from our journey - the smiles, the learning, and the impact we've created together.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {allImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${image.src}`}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={`${import.meta.env.BASE_URL}images/${selectedImage}`}
            alt="Gallery image"
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
