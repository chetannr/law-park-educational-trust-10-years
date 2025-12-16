import Button from '../ui/Button'
import { VolunteerIllustration, DonationIllustration } from '../shared/Illustration'

function CTASection() {
  return (
    <section id="get-involved" className="section-padding text-white relative overflow-hidden" style={{ backgroundColor: '#6f2e8c' }}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/3 max-w-xs">
          <VolunteerIllustration className="w-full h-auto" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 max-w-xs">
          <DonationIllustration className="w-full h-auto" />
        </div>
      </div>
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Your support can help us reach more children and create lasting change
          in their lives. Together, we can build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://razorpay.me/@lawparkeducationaltrust"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Donate Now
            </Button>
          </a>
          <a href="mailto:lawparktrust@gmail.com?subject=Volunteer%20Inquiry">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 border-2 border-white text-white hover:bg-white/30"
            >
              Become a Volunteer
            </Button>
          </a>
          <a href="mailto:lawparktrust@gmail.com?subject=Partnership%20Inquiry">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 border-2 border-white text-white hover:bg-white/30"
            >
              Partner With Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
