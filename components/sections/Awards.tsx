import Card from '../ui/Card'
import type { Award } from '@/types'

interface AwardsProps {
  awards: Award[]
}

export function Awards({ awards }: AwardsProps) {
  return (
    <section id="awards" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recognition & Awards
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our commitment to transforming lives through education has been recognized and honored by esteemed organizations.
          </p>
        </div>

        <div className="space-y-12">
          {awards.map((award, index) => (
            <Card key={index} className="p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                      {award.organization}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {award.description}
                    </p>
                  </div>

                  <div className="space-y-3 border-t pt-6">
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-900 min-w-[120px]">Recipient:</span>
                      <span className="text-gray-700">{award.recipient}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-900 min-w-[120px]">Date:</span>
                      <span className="text-gray-700">{award.date}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-gray-900 min-w-[120px]">Location:</span>
                      <span className="text-gray-700">{award.location}</span>
                    </div>
                    {award.presentedBy && (
                      <div className="flex items-start">
                        <span className="font-semibold text-gray-900 min-w-[120px]">Presented By:</span>
                        <span className="text-gray-700">{award.presentedBy}</span>
                      </div>
                    )}
                  </div>

                  {award.videoUrl && (
                    <div className="mt-6">
                      <a
                        href={award.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Award Ceremony Video
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Side - Images/Video */}
                <div className="space-y-4">
                  {award.certificateImage && (
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={award.certificateImage}
                        alt={`${award.title} Certificate`}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {award.images && award.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {award.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md">
                          <img
                            src={image}
                            alt={`${award.title} - Image ${imgIndex + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

