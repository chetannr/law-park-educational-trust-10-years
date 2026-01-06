import type {
  Trustee,
  ProcessStep,
  Testimonial,
  Supporter,
  PartnerNGO,
  Award,
} from '../types'

export interface WebsiteContent {
  process: {
    title: string
    steps: ProcessStep[]
  }
  trustees: Trustee[]
  testimonials: Testimonial[]
  supporters: Supporter[]
  partnerNGOs: PartnerNGO[]
  awards: Award[]
}

// Default content for the website
export const websiteContent: WebsiteContent = {
  process: {
    title: 'How We Advance Our Mission',
    steps: [
      {
        title: 'Identify',
        description: 'School principals, well-wishers, and citizens of communities nominate deserving students from income deprived backgrounds who need financial support to continue their education.',
      },
      {
        title: 'Validate',
        description: 'We visit to location, gather the students with parents in one place and interview each student nomined and their parents to verify the genuineness of their case and help them financially for their education.',
      },
      {
        title: 'Embrace',
        description: 'We take the children under our folds and pay up to 75% of their tuition fees at their current school. The parents will cover the remaining part of the tuition fees to ensure their involvement in educating their children. We believe that anything given for fully free will have no value.',
      },
      {
        title: 'Incubate',
        description: 'Our team will pay the school fees directly to the school rather than giving them to the parents to prevent misappropriation of the funds. As a result, students can focus solely on their studies without constantly worrying about finances, tap into their fullest potential and thrive throughout their academic careers.',
      },
    ],
  },
  trustees: [
    {
      name: 'Mrs. Charulatha',
      role: 'Managing Trustee',
      bio: 'Mrs. Charulatha, Founder of Law Park Educational Trust, during her young age used to teach poor children in her locality free of cost. That was the foundation to start this Educational Trust in the name of Law Park Educational Trust. She did her B.A Economics, Chennai and did her L.LB., at Bangalore and completed with PGDIPRL in National Law School of India, University, Bangalore. Mrs. Charulatha, always encouraged children to study and many times she would pay fees to those children even before she started this Trust. Most of the times she is surrounded with children asking doubts in their studies which continued even today.',
    },
    {
      name: 'MR. S.M. MANJUNATHA',
      role: 'Trustee',
      bio: 'Hailing from the small and beautiful village name Sadenahalli in Karnataka and a Trustee of Law Park Educational Trust. Since childhood, he had always had a passion for inspiring the poor and so, he was the first member of his family to leave the village he was born and raised in to study in the city. He graduted with a degree in Law from Bangalore and encouraged his fellow friends and cousins to follow in his footsteps and also graduate. Moreover, he funded many children from his village who have now grown into well settled, contributing members of society.',
    },
  ],
  testimonials: [
    {
      text: "I'm impressed with the dedication & focus in bringing back the children to school, I echo their thoughts & approach in short listing each student to ensure their success is unparalleled. Appreciate this CSR initiative from Law Park Educational Trust!!",
      author: 'Sreekanth',
      role: 'Director, Tech Hat Pvt., Ltd.',
    },
    {
      text: 'We have known Law Park Educational Trust for few years. It is a genuine and selfless effort of the Trustees to provide financial and other educational resources to children in need with the main goal of right to education regardless of socioeconomic background.',
      author: 'Dr. Varalakshmi and Dr. Nandakumar',
      role: 'Hershey, USA',
    },
    {
      text: 'Law Park Education Trust is doing a phenomenal work by facilitating the provision of basic right of education to the underprivileged children of our society and country at large.',
      author: 'Aishwarya K',
      role: 'Director, Versalis International',
    },
    {
      text: "I am amazed at the level of commitment the Law Park Education Trust puts into responding to a certain community of the society. It's a privilege to be a part of a trust that provides free education, fitness programs, books, gadgets, apparels, monetary and other benefits to economically backward students in rural areas.",
      author: 'Ramya Balaji',
      role: 'Music Instructor',
    },
    {
      text: 'Charulata ji and Manjunath ji, you are highly motivated to do good for underprivileged children through Law Park Educational Trust. They make the effort to know each of the children personally and understand their problems and needs.',
      author: 'Mr. Nihar Panigrahi',
      role: 'Senior Software Engineer',
    },
  ],
  supporters: [
    {
      name: 'Geetha Jayaram',
      type: 'volunteer',
      contribution: 'Education Counselor',
      description:
        'Education counselor from HSR, Bengaluru, providing valuable guidance and counseling to students, helping them make informed decisions about their academic paths and career choices.',
    },
    {
      name: 'Mr. Chetan Kumar N',
      type: 'volunteer',
      contribution: 'Software Engineer',
      description:
        'Software Engineer from HSR, Bengaluru, who volunteers his technical expertise to help with our digital presence, website development, and technology solutions that enhance our operational efficiency.',
    },
    {
      name: 'Mrs. Jeevitha S',
      type: 'volunteer',
      contribution: 'Software Engineer',
      description:
        'Software Engineer from HSR, Bengaluru, who contributes her technical skills to support our trust operations, helping with digital initiatives and technology-driven solutions for better student management.',
    },
    {
      name: 'Mr. Sai Prashanth Pillarisetty',
      type: 'donor',
      contribution: 'International Donor & Supporter',
      description:
        'A committed donor and supporter, actively driving scholarships and programs while championing digital transformation. Plays a pivotal role in shaping future initiatives through strategic guidance and visionary advice.',
    },
    {
      name: 'Mr. Anand',
      type: 'donor',
      contribution: 'Program Manager',
      description: 'Program Manager from USA, supporting our mission through strategic contributions and program development initiatives.',
    },
    {
      name: 'Mr. Sreekanth',
      type: 'volunteer',
      contribution: 'Director',
      description: 'Director at Techhat, Bangalore, providing valuable support and guidance to our trust operations and educational programs.',
    },
    {
      name: 'Mrs. Nandini',
      type: 'volunteer',
      contribution: 'Lead Consultant - ITC',
      description: 'Lead Consultant at ITC, Bangalore, contributing expertise and support to our educational initiatives and student development programs.',
    },
    {
      name: 'K. Krishnapriya',
      type: 'volunteer',
      contribution: 'Customer Support Manager',
      description: 'Customer Support Manager from Bangalore, actively volunteering and supporting our trust activities and student assistance programs.',
    },
    {
      name: 'Roopa Gante',
      type: 'volunteer',
      contribution: 'Senior Professional Product Developer',
      description: 'Senior Professional Product Developer at Gainwell Technologies (Former HP), contributing technical expertise and support to our trust operations and digital initiatives.',
    },
    {
      name: 'Ms. Navya',
      type: 'volunteer',
      contribution: 'Public Health Research Associate',
      description: 'Public Health Research Associate at IPH, Bangalore, providing valuable support and expertise to our educational and community development programs.',
    },
    {
      name: 'Dr. Adarsh',
      type: 'donor',
      contribution: 'Manager (Product & Trade)',
      description: 'Manager (Product & Trade) at Avanti Pet Care Pvt. Ltd., Hyderabad, supporting our mission through generous contributions to educational programs.',
    },
    {
      name: 'Mrs. Bhavya',
      type: 'donor',
      contribution: 'Home maker',
      description: 'Home maker from Bangalore, generously supporting our educational initiatives and contributing to the growth and development of underprivileged students.',
    },
    {
      name: 'Mr. Rajesh',
      type: 'volunteer',
      contribution: 'Advocate',
      description:
        'Advocate from Bangalore who volunteers his legal expertise to support our trust operations and provides guidance on legal matters, ensuring our programs comply with all regulations.',
    },
    {
      name: 'Mr. Nagendra',
      type: 'volunteer',
      contribution: 'Community Volunteer',
      description:
        'Active volunteer from Bengaluru who assists with field visits, student interviews, and community outreach programs, playing a crucial role in identifying and supporting deserving students.',
    },
    {
      name: 'Dr. Nanda Kumar',
      type: 'donor',
      contribution: 'International Supporter',
      description:
        'Generous donor from USA who has been supporting our scholarship programs from abroad, helping bridge the gap for students who need financial assistance to continue their education.',
    },
    {
      name: 'Mr. Venkat',
      type: 'volunteer',
      contribution: 'Advocate',
      description:
        'Advocate from Bengaluru who provides legal support and guidance to our trust, ensuring all our operations are conducted in compliance with legal requirements and best practices.',
    },
    {
      name: 'Mrs. Lavanya',
      type: 'donor',
      contribution: 'Community Supporter',
      description:
        'Supportive donor from Bengaluru who contributes to our educational initiatives, helping us provide financial assistance to students from economically disadvantaged backgrounds.',
    },
    {
      name: 'Mrs. Sumithra',
      type: 'donor',
      contribution: 'Partner - Royal Enfield',
      description:
        'Partner from Royal Enfield, Bengaluru, who has been instrumental in providing corporate support for our educational programs, contributing to the success of our scholarship initiatives.',
    },
    {
      name: 'Ms. Pragya',
      type: 'volunteer',
      contribution: 'Community Volunteer',
      description:
        'Active volunteer from Bengaluru who assists with various trust activities including organizing events, coordinating with schools, and providing ongoing support to students and their families.',
    },
    {
      name: 'Mrs. Neha',
      type: 'donor',
      contribution: 'Community Supporter',
      description:
        'Supportive donor from Bengaluru who contributes to our educational programs, helping us provide financial assistance and resources to students who need support to continue their studies.',
    },
  ],
  partnerNGOs: [
    {
      name: 'Rural Education Foundation',
      focus: 'Rural Education & Infrastructure',
      description:
        'We partner with Rural Education Foundation to identify and support students in remote villages. Together, we have established scholarship programs in over 15 villages, ensuring that geographical barriers do not prevent children from accessing quality education.',
    },
    {
      name: 'Children Welfare Society',
      focus: 'Child Welfare & Development',
      description:
        'Our collaboration with Children Welfare Society focuses on holistic child development. We work together to provide not just financial support but also counseling, career guidance, and skill development programs for underprivileged students.',
    },
    {
      name: 'Education for All Initiative',
      focus: 'Accessible Education',
      description:
        'This partnership helps us reach a wider network of schools and students. Through joint programs, we conduct awareness campaigns, organize educational workshops, and facilitate teacher training programs in underserved communities.',
    },
  ],
  awards: [
    {
      title: 'Bharat Shiksha Ratan Award',
      recipient: 'Mrs. Charulatha M. R. (Founder)',
      organization: 'Economic and Social Development Foundation (E.S.D.F)',
      date: '19th December 2025',
      location: 'New Delhi',
      description:
        'Law Park Educational Trust received the prestigious Bharat Shiksha Ratan Award for outstanding achievements and remarkable role in the education sector. This recognition was presented at the National Summit in New Delhi, honoring our decade-long commitment to transforming lives through education. Out of 25 awardees, we were honored to receive this distinguished award, presented by Union Ministers including Mr. Kamal Singh Negi (Cabinet Minister) and Mr. Dinesh Upadhyay (Ayush Minister). This award is a testament to our joint efforts and the collective impact we have made in bringing quality education to underprivileged children across India.',
      presentedBy: 'Economic and Social Development Foundation (E.S.D.F), New Delhi',
      videoUrl: '', // Add video URL once uploaded
      certificateImage: '/images/Bharat-Shiksha-Ratan-Award-Certificate.jpeg',
      images: [], // Add award ceremony images once uploaded
    },
  ],
}
