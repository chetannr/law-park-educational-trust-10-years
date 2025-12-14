import Card from '../ui/Card'

export interface ProcessStep {
  title: string
  description: string
}

interface ProcessProps {
  process: {
    title: string
    steps: ProcessStep[]
  }
}

export function Process({ process }: ProcessProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {process.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our systematic approach ensures that every child receives the support they need
            to succeed in their educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step, index) => (
            <Card key={index} hover className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
