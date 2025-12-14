export interface Milestone {
  year: number
  title: string
  description: string
  location?: string
  images: string[]
  impact?: string
}

export interface Activity {
  title: string
  description: string
  icon: React.ReactNode
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface GalleryImage {
  src: string
  alt: string
  year?: number
  location?: string
}

export interface Trustee {
  name: string
  role: string
  bio: string
  image?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
  image?: string
}
