function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Law Park Educational Trust</h3>
            <p className="text-gray-400">
              Helping children from rural areas across India get their right to education through partially funded scholarships.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-white transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-gray-400">
              For inquiries about scholarships, volunteering, or partnerships, please reach out to us.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Law Park Educational Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
