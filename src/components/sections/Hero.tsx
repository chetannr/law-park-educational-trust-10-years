function Hero() {
  const baseUrl = import.meta.env.BASE_URL
  const imagePath = `${baseUrl}images/slide_28_Picture_3_00`
  
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={`${imagePath}.webp`} type="image/webp" />
          <img
            src={`${imagePath}.jpg`}
            alt="Children learning and education"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
            <span className="block">10 Years of</span>
            <span className="block text-primary-400">Transforming Lives</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/95 sm:text-xl drop-shadow-md">
            Law Park Educational Trust helps children from rural areas across India get their right to education through partially funded scholarships.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#get-involved"
              className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Involved
            </a>
            <a
              href="#journey"
              className="text-base font-semibold leading-6 text-white transition-colors hover:text-primary-300 drop-shadow-md"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
