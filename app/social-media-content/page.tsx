import type { Metadata } from 'next'
import SocialMediaContentPage from '@/components/pages/SocialMediaContentPage'

export const metadata: Metadata = {
  title: 'Social Media Content - Bharat Shiksha Ratan Award',
  description: 'Ready-to-use social media content for sharing the Bharat Shiksha Ratan Award achievement across Instagram, Facebook, YouTube, and WhatsApp.',
  openGraph: {
    title: 'Social Media Content - Bharat Shiksha Ratan Award',
    description: 'Ready-to-use social media content for sharing the Bharat Shiksha Ratan Award achievement.',
  },
}

export default function SocialMediaContent() {
  return <SocialMediaContentPage />
}

