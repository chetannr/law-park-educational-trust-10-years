interface IllustrationProps {
  name: string
  color?: string
  className?: string
}

// unDraw illustrations with customizable colors
// Using unDraw illustrations - download from https://undraw.co with custom color (#16a34a)
// and place them in public/illustrations/ folder
export function Illustration({ name, className = '' }: IllustrationProps) {
  // In Vite, files in public folder are served from root
  // Use BASE_URL to reference public folder correctly for GitHub Pages
  const localPath = `${import.meta.env.BASE_URL}illustrations/${name}.svg`
  
  return (
    <img
      src={localPath}
      alt=""
      className={className}
      loading="lazy"
      aria-hidden="true"
      onError={(e) => {
        // If local file doesn't exist, log error for debugging
        console.error(`Illustration "${name}" not found at ${localPath}. Please check public/illustrations/ folder.`)
        // Hide the broken image
        const target = e.target as HTMLImageElement
        if (target) {
          target.style.display = 'none'
        }
      }}
    />
  )
}

// Pre-configured illustrations for common use cases
// Using relevant unDraw illustration names for education/charity themes
export function EducationIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="educator"
      color="16a34a"
      className={className}
    />
  )
}

export function CommunityIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="community"
      color="16a34a"
      className={className}
    />
  )
}

export function ImpactIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="growth"
      color="16a34a"
      className={className}
    />
  )
}

export function VolunteerIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="team"
      color="ffffff"
      className={className}
    />
  )
}

export function DonationIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="donation"
      color="16a34a"
      className={className}
    />
  )
}

export function ScholarshipIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="graduation"
      color="16a34a"
      className={className}
    />
  )
}

export function ChildrenIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="children"
      color="16a34a"
      className={className}
    />
  )
}

export function BooksIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="books"
      color="16a34a"
      className={className}
    />
  )
}
