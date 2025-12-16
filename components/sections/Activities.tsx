import { activities } from '../../data/activities'
import Card from '../ui/Card'

function Activities() {
  return (
    <section id="activities" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive approach to education support includes scholarships, supplies, activities, and awareness programs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <Card key={activity.title} className="p-6">
              <div className="mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
