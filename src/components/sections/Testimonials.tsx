import Card from '../ui/Card'

export interface Testimonial {
  text: string
  author: string
  role: string
  image?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  // Use first 6 testimonials
  const displayTestimonials = testimonials.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Words of Gratitude
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from our community about the impact of our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <Card key={index} hover className="p-6">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4 italic text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
