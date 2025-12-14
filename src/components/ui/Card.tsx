interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hover ? 'transition-transform duration-200 hover:shadow-xl hover:-translate-y-1' : 'transition-shadow hover:shadow-lg'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
