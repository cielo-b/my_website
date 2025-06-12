import { Skill, Experience, Service, PortfolioItem } from '../types/portfolio';

export const skills: Skill[] = [
  { name: 'Backend Development', percentage: 95 },
  { name: 'Frontend Development', percentage: 90 },
  { name: 'Mobile Apps Development', percentage: 85 },
  { name: 'HTML/CSS3', percentage: 99 },
  { name: 'Javascript', percentage: 95 },
  { name: 'Java', percentage: 90 },
  { name: 'Go', percentage: 90 },
  { name: 'Kotlin', percentage: 90 },
  { name: 'Python', percentage: 90 },
  { name: 'PHP', percentage: 85 },
  { name: 'C/C++', percentage: 80 },
];

export const experiences: Experience[] = [
  {
    year: 'May 2025 - now',
    title: 'SDK and Laravel Developer',
    company: 'Snack Sprint',
    description: 'Working on innovative vending machine solutions using Java SDK for hardware integration and Laravel for robust backend systems. Focused on creating seamless user experiences and reliable payment processing systems.',
    position: 'right'
  },
  {
    year: 'Aug 2024 - now',
    title: 'Lead Backend Developer',
    company: 'Rwanda TVET Board (RTB)',
    description: 'Working as a Lead backend developer and DevOps Engineer for RTB on the E-Learning and MIS system.',
    position: 'left'
  },

  {
    year: 'Jan 2024 - now',
    title: 'Backend and Mobile app Developer',
    company: 'Aguura',
    description: 'Passionate Backend and Mobile app Developer at Aguura, specialized in Nest.js and Reactnative and crafting seamless user interfaces with high performant backend apis.',
    position: 'right'
  },
  {
    year: 'Jan 2025 - May 2025',
    title: 'Frontend Developer',
    company: 'Insight Nexus',
    description: 'Working as a frontend developer for InsihtNexus team on the portifolio platform.',
    position: 'left'
  },

  {
    year: 'July 2023 - Jan 2024',
    title: 'Backend Developer',
    company: 'Rangurura Project',
    description: 'Backend Developer at Rangurura Team skilling in Java(Springboot) and Node.js, focusing on architecting robust server-side solutions.',
    position: 'right'
  },
  {
    year: 'May 2022 - Jan 2023',
    title: 'Backend Developer',
    company: 'Vista Innovations',
    description: 'Experiencing Backend Developer at Vista Innovations adept in Nest.js and Node.js, dedicating to building scalable and efficient server-side solutions.',
    position: 'left'
  },
  {
    year: 'May 2022 - Dec 2022',
    title: 'Frontend Developer',
    company: 'RODI Rwanda',
    description: 'As a Frontend Developer at RODI Rwanda, I specialized in crafting web user interface using React.js, ensuring optimal performance and a seamless user experience.',
    position: 'right'
  },
];

export const services: Service[] = [
  {
    icon: 'fa-laptop-code',
    title: 'Web Development',
    description: "I'm a web developer skilled in Java, Go, Python, Flask, Django, Node.js, TypeScript, Nest.js, PHP, React, and Next.js. My expertise spans both front-end and back-end, enabling the creation of robust, scalable solutions.",
    delay: '0.2s'
  },
  {
    icon: 'fab fa-android',
    title: 'Mobile Apps Development',
    description: "I specialize in mobile app development using React Native for cross-platform efficiency. On Android, I'm proficient in Kotlin and Java, creating native, performance-driven applications.",
    delay: '0.4s'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Web Design',
    description: 'In responsive design, I leverage Bootstrap and Tailwind CSS to create visually appealing interfaces that seamlessly adapt to diverse devices, ensuring optimal user experiences across desktops, tablets, and mobile devices.',
    delay: '0.6s'
  },
  {
    icon: 'fa-laptop-code',
    title: 'Competitive Programming',
    description: 'With proficiency in C++, Java, Python, and Go, I excel in competitive programming, employing strong problem-solving skills and algorithmic expertise.',
    delay: '0.6s'
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'RTB GMS Application',
    description: 'Comprehensive Grant Management System for Rwanda TVET Board, streamlining the entire grant lifecycle from application to disbursement with advanced reporting and analytics.',
    image: '/images/gms.png',
    url: 'https://gms.sdfrwanda.rw/',
    category: 'filter-2',
    delay: '0.2s',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    features: [
      'Grant application management',
      'Multi-stage approval workflow',
      'Real-time reporting dashboard',
      'Document management system',
      'Email notifications'
    ],
    status: 'completed',
    year: '2024'
  },
  {
    id: 2,
    title: 'Insight Nexus',
    description: 'Modern portfolio platform and business showcase website with interactive components, advanced animations, and responsive design for professional presentation.',
    image: '/images/in.png',
    url: 'https://insightnexus.africa/',
    category: 'filter-3',
    delay: '0.4s',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    features: [
      'Interactive portfolio showcase',
      'Advanced animations',
      'Responsive design',
      'Contact form integration',
      'SEO optimized'
    ],
    status: 'completed',
    year: '2024'
  },
  {
    id: 3,
    title: 'Aguura Platform',
    description: 'Comprehensive business platform with mobile and web applications, featuring real-time data synchronization, advanced user management, and scalable architecture.',
    image: '/images/aguura.png',
    url: 'https://aguura.com/',
    category: 'filter-3',
    delay: '1s',
    technologies: ['Nest.js', 'React Native', 'PostgreSQL', 'TypeScript', 'Redis'],
    features: [
      'Cross-platform mobile app',
      'Real-time data sync',
      'Advanced user management',
      'API-first architecture',
      'Cloud deployment'
    ],
    status: 'completed',
    year: '2024'
  },
  {
    id: 4,
    title: 'TVET Management System',
    description: 'Comprehensive educational management platform for technical and vocational training institutions, handling student enrollment, course management, and certification processes.',
    image: '/images/t.png',
    url: 'https://tvetmanagement.rtb.gov.rw/',
    category: 'filter-3',
    delay: '1.4s',
    technologies: ['Spring Boot', 'Java', 'React.js', 'MySQL', 'Apache Tomcat'],
    features: [
      'Student management system',
      'Course enrollment tracking',
      'Digital certification',
      'Progress monitoring',
      'Automated reporting'
    ],
    status: 'completed',
    year: '2024'
  },
  {
    id: 5,
    title: 'ICI Trainers TVET Management System',
    description: 'Specialized training management system for ICI trainers, featuring comprehensive course tracking, trainer evaluation, and certification management capabilities.',
    image: '/images/ici.png',
    url: 'http://197.243.26.64:9020/',
    category: 'filter-3',
    delay: '1.4s',
    technologies: ['Spring Boot', 'Java', 'Angular', 'PostgreSQL', 'Docker'],
    features: [
      'Trainer management portal',
      'Course scheduling system',
      'Performance analytics',
      'Certification tracking',
      'Resource management'
    ],
    status: 'completed',
    year: '2024'
  },
  {
    id: 6,
    title: 'Snack Sprint Vending Platform',
    description: 'Innovative vending machine management platform with IoT integration, real-time inventory tracking, and mobile payment processing for modern snack distribution.',
    image: '/images/snack.png',
    url: 'https://snacksprintcommunity.com/',
    category: 'filter-3',
    delay: '1.4s',
    technologies: ['Laravel', 'Java SDK', 'React.js', 'IoT Integration', 'Payment APIs'],
    features: [
      'IoT vending machine control',
      'Real-time inventory tracking',
      'Mobile payment integration',
      'Analytics dashboard',
      'Remote monitoring'
    ],
    status: 'in-progress',
    year: '2025'
  },
  {
    id: 7,
    title: 'Future School Platform',
    description: 'Modern educational platform designed for the future of learning, featuring interactive coursework, progress tracking, and collaborative learning tools.',
    image: '/images/future.png',
    url: 'https://fwdalls-client.vercel.app',
    category: 'filter-1',
    delay: '0.0s',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
    features: [
      'Interactive learning modules',
      'Real-time collaboration',
      'Progress tracking system',
      'Video conferencing integration',
      'Assignment management'
    ],
    status: 'completed',
    year: '2023'
  },
  {
    id: 8,
    title: 'Digital eBook Platform',
    description: 'Comprehensive digital library and eBook management system with advanced search capabilities, reading progress tracking, and social features for book enthusiasts.',
    image: '/images/travel.png',
    url: 'https://bookin.vercel.app/',
    category: 'filter-1',
    delay: '0.6s',
    technologies: ['React.js', 'Firebase', 'Node.js', 'PDF.js', 'Stripe API'],
    features: [
      'Digital book library',
      'Advanced search and filters',
      'Reading progress tracking',
      'Social book sharing',
      'Secure payment processing'
    ],
    status: 'completed',
    year: '2023'
  },
  {
    id: 9,
    title: 'RODI Rwanda Platform',
    description: 'Professional business platform for RODI Rwanda, showcasing services, team information, and providing comprehensive business solutions with modern design.',
    image: '/images/rodi.png',
    url: 'https://rodirw-client-tan.vercel.app/',
    category: 'filter-2',
    delay: '0.8s',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vercel'],
    features: [
      'Professional business showcase',
      'Service portfolio display',
      'Team member profiles',
      'Contact integration',
      'SEO optimization'
    ],
    status: 'completed',
    year: '2022'
  },
  {
    id: 10,
    title: 'Air B2B Booking Platform',
    description: 'Modern booking platform inspired by Airbnb, featuring property listings, advanced search filters, booking management, and secure payment processing.',
    image: '/images/air.jpg',
    url: 'https://airbnb-mern-opal.vercel.app/',
    category: 'filter-3',
    delay: '2.2s',
    technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'Property listing management',
      'Advanced search and filters',
      'Booking system',
      'User authentication',
      'Payment integration'
    ],
    status: 'completed',
    year: '2023'
  },
];

export const typedStrings = [
  'Backend Developer',
  'Web Developer',
  'Front End Developer',
  'Mobile Apps Developer',
  'Testing Engineer',
  'Competitive Programmer'
]; 