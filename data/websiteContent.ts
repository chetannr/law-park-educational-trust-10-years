import type {
  Trustee,
  ProcessStep,
  Testimonial,
  Supporter,
  PartnerNGO,
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
      name: 'Mrs. Geetha',
      type: 'volunteer',
      contribution: 'Education Counselor',
      description:
        'Education counselor from HSR, Bengaluru, providing valuable guidance and counseling to students, helping them make informed decisions about their academic paths and career choices.',
    },
    {
      name: 'Mrs. Bhavya Shravanth',
      type: 'donor',
      contribution: 'Partner',
      description:
        'Partner from Bengaluru who has been a generous supporter of our educational initiatives, contributing to the growth and development of underprivileged students.',
    },
    {
      name: 'Dr. Adarsh',
      type: 'donor',
      contribution: 'Medical Professional & Supporter',
      description:
        'Medical professional from Hyderabad who supports our mission by contributing to educational programs and helping students access quality education regardless of their financial background.',
    },
    {
      name: 'Mr. Rajesh',
      type: 'volunteer',
      contribution: 'Advocate',
      description:
        'Advocate from Bangalore who volunteers his legal expertise to support our trust operations and provides guidance on legal matters, ensuring our programs comply with all regulations.',
    },
    {
      name: 'Mrs. Mamtha',
      type: 'donor',
      contribution: 'Community Supporter',
      description:
        'Dedicated supporter from Bengaluru who has been actively contributing to our educational programs, helping us reach more children in need of financial assistance for their studies.',
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
      name: 'Mr. Krishnapriya',
      type: 'volunteer',
      contribution: 'Community Volunteer',
      description:
        'Dedicated volunteer from Bengaluru who actively participates in our field work, helping with student identification, fee distribution, and ongoing support throughout the academic year.',
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
      name: 'Mrs. Roopa',
      type: 'volunteer',
      contribution: 'Community Volunteer',
      description:
        'Active volunteer from Bengaluru who assists with various trust activities including student interviews, fee distribution, and maintaining regular contact with supported students and their families.',
    },
    {
      name: 'Mrs. Sumithra',
      type: 'donor',
      contribution: 'Partner - Royal Enfield',
      description:
        'Partner from Royal Enfield, Bengaluru, who has been instrumental in providing corporate support for our educational programs, contributing to the success of our scholarship initiatives.',
    },
    {
      name: 'Mrs. Nandini',
      type: 'donor',
      contribution: 'Community Supporter',
      description:
        'Generous supporter from Bengaluru who has been contributing to our mission of providing quality education to underprivileged children, making a positive impact on their lives.',
    },
    {
      name: 'Ms. Navya',
      type: 'volunteer',
      contribution: 'Community Volunteer',
      description:
        'Dedicated volunteer from Bengaluru who actively participates in our field work and student support programs, helping us reach more children in need of educational assistance.',
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
}
