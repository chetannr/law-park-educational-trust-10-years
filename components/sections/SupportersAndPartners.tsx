import Card from '../ui/Card'
import type { Supporter, PartnerNGO } from '../../types'

interface SupportersAndPartnersProps {
  supporters: Supporter[]
  partnerNGOs: PartnerNGO[]
}

export function SupportersAndPartners({
  supporters,
  partnerNGOs,
}: SupportersAndPartnersProps) {
  return (
    <section id="supporters-partners" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Supporters & Partners
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our journey is made possible by the generosity of our donors, the dedication of our volunteers, and the collaboration with like-minded organizations.
          </p>
        </div>

        {/* Supporters Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Generous Donors & Dedicated Volunteers
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We are deeply grateful to the individuals who have supported our mission through financial contributions and those who have volunteered their time and expertise throughout our journey. Their commitment has been instrumental in transforming the lives of countless children.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supporters.map((supporter, index) => (
              <Card key={index} hover className="p-6">
                <div className="text-center">
                  {supporter.image && (
                    <div className="mb-4">
                      <img
                        src={supporter.image}
                        alt={supporter.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {/* <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        supporter.type === 'donor'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {supporter.type === 'donor' ? 'Donor' : 'Volunteer'}
                    </span>
                  </div> */}
                  <h4 className="text-xl font-bold mb-2">{supporter.name}</h4>
                  {supporter.contribution && (
                    <p className="text-primary-600 font-semibold mb-3">
                      {supporter.contribution}
                    </p>
                  )}
                  {supporter.description && (
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {supporter.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner NGOs Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Partner Organizations
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We collaborate with several NGOs and organizations that share our vision of empowering children through education. Together, we create a stronger impact and reach more communities in need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerNGOs.map((partner, index) => (
              <Card key={index} hover className="p-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">{partner.name}</h4>
                  {partner.focus && (
                    <p className="text-primary-600 font-semibold mb-3">
                      Focus: {partner.focus}
                    </p>
                  )}
                  <p className="text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
