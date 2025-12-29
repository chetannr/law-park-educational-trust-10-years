'use client'

import { useState } from 'react'
import Card from '../ui/Card'

function SocialMediaContentPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }).catch(() => {
      alert('Failed to copy. Please select and copy manually.')
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Social Media Content
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Ready-to-use content for sharing the Bharat Shiksha Ratan Award achievement
          </p>
          
          {/* How to Use Instructions */}
          <Card className="p-6 bg-blue-50 border-2 border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-blue-900">📋 How to Use This Page</h3>
            <div className="text-left text-gray-700 space-y-2">
              <p><strong>Option 1 - Quick Copy:</strong> Click the "Copy" button next to any content section. The content will be copied to your clipboard instantly!</p>
              <p><strong>Option 2 - Manual Selection:</strong> You can also select and copy any text directly from the content boxes below.</p>
              <p className="text-sm text-gray-600 mt-3">💡 <strong>Tip:</strong> After clicking "Copy", you'll see a confirmation message. Then simply paste (Ctrl+V / Cmd+V) into your social media platform!</p>
            </div>
          </Card>
        </div>

        {/* Award Information */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary-50 to-primary-100">
          <h2 className="text-3xl font-bold mb-6 text-center">🏆 Award Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-semibold">Award:</span> Bharat Shiksha Ratan Award
            </div>
            <div>
              <span className="font-semibold">Recipient:</span> Mrs. Charulatha M. R. (Founder)
            </div>
            <div>
              <span className="font-semibold">Organization:</span> Economic and Social Development Foundation (E.S.D.F)
            </div>
            <div>
              <span className="font-semibold">Date:</span> 19th December 2025
            </div>
            <div>
              <span className="font-semibold">Location:</span> New Delhi
            </div>
            <div>
              <span className="font-semibold">Total Awardees:</span> 25
            </div>
          </div>
        </Card>

        {/* Instagram Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">📱 Instagram Post</h2>
            <button
              onClick={() => copyToClipboard(instagramContent)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Copy Content
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Title/Headline:</h3>
              <p className="text-lg font-bold text-primary-600">
                🏆 Bharat Shiksha Ratan Award - A Milestone Achievement! 🎓
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Caption:</h3>
              <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap text-gray-700 leading-relaxed">
                {instagramContent}
              </div>
            </div>
          </div>
        </Card>

        {/* Facebook Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">📘 Facebook Post</h2>
            <button
              onClick={() => copyToClipboard(facebookContent)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Copy Content
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Title:</h3>
              <p className="text-lg font-bold text-primary-600">
                🏆 Law Park Educational Trust Receives Prestigious Bharat Shiksha Ratan Award!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Post Content:</h3>
              <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap text-gray-700 leading-relaxed">
                {facebookContent}
              </div>
            </div>
          </div>
        </Card>

        {/* YouTube Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">📺 YouTube Video</h2>
            <button
              onClick={() => copyToClipboard(youtubeContent)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Copy Description
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Video Title:</h3>
              <p className="text-lg font-bold text-primary-600">
                🏆 Bharat Shiksha Ratan Award 2025 | Law Park Educational Trust | New Delhi
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Video Description:</h3>
              <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
                {youtubeContent}
              </div>
            </div>
          </div>
        </Card>

        {/* WhatsApp Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">💬 WhatsApp (Short)</h2>
              <button
                onClick={() => copyToClipboard(whatsappShort)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Copy
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
              {whatsappShort}
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">💬 WhatsApp (Long)</h2>
              <button
                onClick={() => copyToClipboard(whatsappLong)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Copy
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
              {whatsappLong}
            </div>
          </Card>
        </div>

        {/* Email Subject Lines */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">📧 Email Newsletter Subject Lines</h2>
          <div className="space-y-3">
            {emailSubjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{subject}</span>
                <button
                  onClick={() => copyToClipboard(subject)}
                  className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors text-sm"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Messages */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🎯 Key Messages to Emphasize</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li><strong>Achievement:</strong> Prestigious national recognition</li>
            <li><strong>Recognition:</strong> Out of 25 awardees, we were honored</li>
            <li><strong>Credibility:</strong> Presented by Union Ministers</li>
            <li><strong>Journey:</strong> 10 years of dedicated service</li>
            <li><strong>Collective Effort:</strong> Thanks to all supporters</li>
            <li><strong>Continued Mission:</strong> Commitment to continue the work</li>
            <li><strong>Call to Action:</strong> Join us in our mission</li>
          </ul>
        </Card>

        {/* Notes */}
        <Card className="p-8 bg-blue-50">
          <h2 className="text-3xl font-bold mb-6">📝 Notes for Content Creation</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Video Upload:</strong> Once the 1-minute video is uploaded, add the URL to YouTube description, website awards section, social media posts, and WhatsApp messages.</li>
            <li><strong>Images to Include:</strong> Award certificate, photos with Union Ministers, award ceremony photos, Mrs. Charulatha M. R. receiving the award.</li>
            <li><strong>Timing:</strong> Post the content within 24-48 hours of the award ceremony for maximum impact.</li>
            <li><strong>Engagement:</strong> Respond to comments and messages promptly to maintain engagement.</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

// Content strings
const instagramContent = `🏆 We are thrilled and honored to announce that Law Park Educational Trust has received the prestigious BHARAT SHIKSHA RATAN AWARD! 🎓

✨ This recognition was presented to our Founder, Mrs. Charulatha M. R., at the National Summit in New Delhi on 19th December 2025, by the Economic and Social Development Foundation (E.S.D.F).

🌟 Out of 25 distinguished awardees, we were honored to receive this award, presented by Union Ministers:
• Mr. Kamal Singh Negi (Cabinet Minister, New Delhi)
• Mr. Dinesh Upadhyay (Ayush Minister)

💫 This award is a testament to our 10 years of dedication in transforming lives through education. It represents the collective efforts of our trustees, volunteers, donors, and supporters who have been with us on this incredible journey.

🙏 All thanks to each one of you for being with us! This is our joint effort, and together we continue to bring change in our society.

📚 Join us as we continue our mission to provide quality education to underprivileged children across India.

#BharatShikshaRatanAward #EducationForAll #LawParkEducationalTrust #SocialImpact #EducationMatters #TransformingLives #AwardWinner #NewDelhi #EducationSector #MakingADifference #CommunityImpact #10YearsOfService`

const facebookContent = `🎉 We are incredibly proud and honored to share that Law Park Educational Trust has been awarded the prestigious BHARAT SHIKSHA RATAN AWARD! 🏆

This distinguished recognition was presented to our Founder, Mrs. Charulatha M. R., at the National Summit held in New Delhi on 19th December 2025, by the Economic and Social Development Foundation (E.S.D.F).

🌟 The award ceremony was graced by Union Ministers:
• Mr. Kamal Singh Negi (Cabinet Minister, New Delhi)
• Mr. Dinesh Upadhyay (Ayush Minister)

Out of 25 awardees, we were honored to be recognized for our outstanding achievements and remarkable role in the education sector.

💫 This award is a celebration of our 10-year journey dedicated to transforming lives through education. It represents the collective efforts of:
• Our dedicated trustees
• Generous donors
• Committed volunteers
• Supportive community members

🙏 We extend our heartfelt gratitude to each and every one of you who has been part of this incredible journey. This recognition belongs to all of us!

📚 As we move forward, we remain committed to our mission of providing quality education to underprivileged children across India. Together, we can continue to bring positive change in our society.

Join us in this celebration and help us reach more children in need! 🌟

#BharatShikshaRatanAward #EducationForAll #LawParkEducationalTrust #SocialImpact #EducationMatters`

const youtubeContent = `🏆 Law Park Educational Trust Receives Prestigious Bharat Shiksha Ratan Award! 🎓

We are thrilled to share this momentous achievement! Law Park Educational Trust has been honored with the Bharat Shiksha Ratan Award, presented by the Economic and Social Development Foundation (E.S.D.F) at the National Summit in New Delhi.

📅 Date: 19th December 2025
📍 Location: New Delhi
👤 Recipient: Mrs. Charulatha M. R. (Founder, Law Park Educational Trust)
🏛️ Presented By: Economic and Social Development Foundation (E.S.D.F)
👔 Honored by: Union Ministers - Mr. Kamal Singh Negi (Cabinet Minister) & Mr. Dinesh Upadhyay (Ayush Minister)

🌟 About the Award:
This prestigious award recognizes outstanding achievements and remarkable contributions in the education sector. Out of 25 distinguished awardees, we were honored to receive this recognition for our decade-long commitment to transforming lives through education.

💫 Our Journey:
For 10 years, Law Park Educational Trust has been dedicated to providing quality education to underprivileged children across India. Through partially funded scholarships, we have helped countless students continue their education and achieve their dreams.

🙏 Gratitude:
This award is a testament to the collective efforts of our trustees, donors, volunteers, and supporters. We extend our heartfelt gratitude to everyone who has been part of this incredible journey.

📚 Our Mission Continues:
As we celebrate this achievement, we remain committed to our mission of bringing quality education to every child in need. Together, we can continue to make a positive impact in our society.

🔔 Subscribe to our channel for more updates on our educational initiatives and impact stories.

📞 Contact Us:
Website: [Your Website URL]
Email: [Your Email]
Phone: [Your Phone Number]

#BharatShikshaRatanAward #EducationForAll #LawParkEducationalTrust #SocialImpact #EducationMatters #TransformingLives #AwardWinner #NewDelhi #EducationSector #MakingADifference #CommunityImpact #10YearsOfService

---

Timestamps:
00:00 - Introduction
00:15 - Award Ceremony Highlights
00:45 - Acceptance by Mrs. Charulatha M. R.
01:00 - Closing Message`

const whatsappShort = `🏆 *Bharat Shiksha Ratan Award 2025* 🎓

We are thrilled to share that *Law Park Educational Trust* has received the prestigious *Bharat Shiksha Ratan Award*!

✨ *Award Details:*
• Presented to: Mrs. Charulatha M. R. (Founder)
• Date: 19th December 2025
• Location: New Delhi
• Organization: Economic and Social Development Foundation (E.S.D.F)
• Presented by: Union Ministers - Mr. Kamal Singh Negi & Mr. Dinesh Upadhyay

🌟 This award recognizes our 10 years of dedication in transforming lives through education.

🙏 All thanks to each one of you for being with us! This is our joint effort, and together we continue to bring change in our society.

📚 Join us as we continue our mission to provide quality education to underprivileged children across India.

#BharatShikshaRatanAward #EducationForAll #LawParkEducationalTrust`

const whatsappLong = `🏆 *BHARAT SHIKSHA RATAN AWARD 2025* 🎓

We are incredibly proud and honored to announce that *Law Park Educational Trust* has received the prestigious *Bharat Shiksha Ratan Award*!

✨ *Award Details:*
• *Award:* Bharat Shiksha Ratan Award
• *Recipient:* Mrs. Charulatha M. R. (Founder, Law Park Educational Trust)
• *Date:* 19th December 2025
• *Location:* New Delhi
• *Organization:* Economic and Social Development Foundation (E.S.D.F)
• *Presented By:* Union Ministers
   - Mr. Kamal Singh Negi (Cabinet Minister, New Delhi)
   - Mr. Dinesh Upadhyay (Ayush Minister)
• *Total Awardees:* 25 (We were one of the honored recipients!)

🌟 *What This Means:*
This prestigious award recognizes our outstanding achievements and remarkable role in the education sector. It celebrates our 10-year journey dedicated to transforming lives through education.

💫 *Our Journey:*
For the past 10 years, Law Park Educational Trust has been committed to providing quality education to underprivileged children across India. Through partially funded scholarships, we have helped countless students continue their education and achieve their dreams.

🙏 *Gratitude:*
This award is a testament to the collective efforts of:
• Our dedicated trustees
• Generous donors
• Committed volunteers
• Supportive community members

All thanks to each one of you for being with us! This is our joint effort, and together we continue to bring change in our society.

📚 *Our Mission Continues:*
As we celebrate this achievement, we remain committed to our mission of bringing quality education to every child in need. Join us as we continue our services and bring a change in our society!

🔗 Watch the award ceremony video: [Add video link once uploaded]

#BharatShikshaRatanAward #EducationForAll #LawParkEducationalTrust #SocialImpact #EducationMatters #TransformingLives`

const emailSubjects = [
  '🏆 We Won! Law Park Educational Trust Receives Bharat Shiksha Ratan Award',
  'Celebrating a Milestone: Bharat Shiksha Ratan Award 2025',
  'Award Recognition: Our Journey of 10 Years Honored in New Delhi',
  'Thank You! Together We Achieved the Bharat Shiksha Ratan Award',
]

export default SocialMediaContentPage

