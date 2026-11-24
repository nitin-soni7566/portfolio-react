// All portfolio content lives here — edit this file to update the site.
import coremotorsShot from './assets/coremotors.webp'
import vindhyShot from './assets/vindhy.webp'

export const profile = {
  name: 'Nitin Soni',
  initials: 'NS',
  role: 'Backend Engineer',
  location: 'Rewa, Madhya Pradesh, India',
  languages: 'Hindi (native) · English (professional)',
  email: 'nitinsoni815@gmail.com',
  phone: '+91 75661 16043',
  phoneHref: '+917566116043',
  linkedin: 'https://linkedin.com/in/nitin-soni-21b464229',
  github: 'https://github.com/nitin-soni7566',
  resume: './Nitin_Soni_Resume.pdf',
  tagline: 'I build fast, secure Python backends — APIs, integrations and LLM features that hold up in production.',
  open: 'Open to Backend / Python / AI roles — remote, hybrid or relocation',
  // **double asterisks** render as bold; the first paragraph is the lead
  about: [
    'I’m a backend engineer with **3.5+ years** building production REST APIs and microservices in **Python (FastAPI, Django)** for ride-hailing, healthcare and construction clients. My favourite work so far: a Mumbai ride-hailing backend that brings **Ola** and **Bharat Taxi** (through the **ONDC Mobility** network) behind one API.',
    'I care about the unglamorous parts that make systems reliable — PostgreSQL tuning, Redis caching, JWT and role-based security, rate limiting and CI/CD with Docker and Jenkins. Lately I’ve been building LLM features with LangChain, and on the side I design and ship websites for local businesses.',
  ],
  clientsNote: 'Live sites I designed, built and deployed for clients.',
  contactPitch: 'Hiring for a backend, Python or AI role — or need a website for your business? Let’s talk.',
  footer: 'Designed and built by Nitin Soni with React and Vite.',
}

export const stats = [
  { value: '3.5+', label: 'years building backends' },
  { value: '~25%', label: 'faster APIs after PostgreSQL + Redis tuning' },
  { value: '2', label: 'ride providers behind one API' },
  { value: '2', label: 'live client websites' },
]

export const experience = [
  {
    role: 'Backend Developer',
    org: 'Sirpi Products and Services Pvt. Ltd.',
    when: 'Apr 2023 – Present',
    where: 'Remote',
    tags: ['Mobility / Ride-hailing', 'Construction', 'Healthcare'],
    metrics: [
      { value: '~25%', label: 'faster APIs' },
      { value: '2', label: 'ride providers, one API' },
    ],
    points: [
      'Built the backend for a Mumbai ride-hailing app that lets users search and book rides from Ola and Bharat Taxi in one place.',
      'Designed adapter services for Ola’s APIs and the ONDC Mobility network (Bharat Taxi), mapping each provider’s ride flow (search, select, init, confirm, status) to one common interface.',
      'Built FastAPI microservices for a construction material and inventory tracking system used across sites.',
      'Worked on a healthcare client’s platform: event management page, plus the backend for data curation and data exploration.',
      'Built AI chatbot APIs with LangChain and LLM integrations for real-time conversational workflows.',
      'Integrated business messaging to automate customer notifications and workflows.',
      'Regularly take on R&D tasks for the company alongside client work, including a face-recognition attendance app.',
      'Hardened security with JWT authentication, role-based authorization and API rate limiting.',
      'Made APIs ~25% faster by optimizing PostgreSQL queries and indexes and adding Redis caching.',
      'Automated build and deploy pipelines with Jenkins, Docker and Python scripts, cutting manual release effort.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    org: 'Personal clients',
    when: 'Part-time',
    where: 'Remote',
    tags: ['Websites', 'SEO', 'Deployment'],
    points: [
      'Delivered client websites end to end: requirements, design, development, domain and hosting setup, and go-live.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Preneurship',
    when: 'Feb 2022 – May 2022',
    where: 'Remote',
    tags: ['Django', 'PostgreSQL'],
    points: [
      'Built CRUD web applications with Django and PostgreSQL — data models, business logic and REST endpoints.',
      'Worked in Git-based team workflows: branches, pull requests and code reviews.',
    ],
  },
]

export const clients = [
  {
    name: 'Core Motors, Rewa',
    url: 'https://coremotors.in',
    host: 'coremotors.in',
    kind: 'Multi-brand car service workshop',
    shot: coremotorsShot,
    points: [
      'Animated particle intro, hero slider, light/dark mode and English/Hindi toggle',
      '17 service detail pages, FAQ and a 4-step booking process',
      'One-tap call, WhatsApp and email booking, plus Google Maps directions',
      'SEO and Open Graph tags for rich link previews',
    ],
    tags: ['Responsive', 'SEO', 'Bilingual', 'Animation'],
  },
  {
    name: 'Vindhy Foundation',
    url: 'https://vindhyfoundation.org',
    host: 'vindhyfoundation.org',
    kind: 'NGO — education & social welfare (with Rewa Youth Wings)',
    shot: vindhyShot,
    points: [
      'Bilingual Hindi + English site for a non-profit working on education and community development',
      'About, Mission, Our Work, Donate and Contact sections with clear calls to action',
      'Mobile-friendly layout with SEO metadata and social-sharing previews',
    ],
    tags: ['Responsive', 'SEO', 'Bilingual'],
  },
]

export const projects = [
  {
    name: 'AI Image Generation API',
    stack: ['FastAPI', 'Python', 'Pydantic'],
    repo: 'https://github.com/nitin-soni7566/imageGen',
    text: 'AI-powered image generation service with request validation, auto-generated OpenAPI docs and a scalable request pipeline.',
  },
  {
    name: 'Auction Bidding System',
    stack: ['Django', 'PostgreSQL'],
    repo: 'https://github.com/nitin-soni7566/task',
    text: 'Secure auction platform with authentication, live bidding and auction management, on a schema designed for concurrent bids.',
  },
  {
    name: 'Online Code Editor',
    stack: ['React', 'JavaScript'],
    repo: 'https://github.com/nitin-soni7566/BlackCodeEditor',
    text: 'Browser-based editor that runs Python and JavaScript code, with an interactive UI and execution workflow.',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript'] },
  { group: 'Backend', items: ['FastAPI', 'Django', 'Django REST Framework', 'Flask', 'REST APIs', 'Microservices', 'Async Python', 'Adapter pattern', 'Third-party API integration'] },
  { group: 'Data', items: ['PostgreSQL', 'Query optimization', 'Indexing', 'Schema design', 'Redis'] },
  { group: 'AI / LLM', items: ['LangChain', 'LLM APIs', 'AI chatbots', 'Prompt engineering', 'Conversational workflows'] },
  { group: 'Security', items: ['JWT', 'Role-based access', 'Rate limiting', 'Input validation'] },
  { group: 'DevOps', items: ['Docker', 'Jenkins CI/CD', 'Git', 'GitHub', 'Linux'] },
  { group: 'Frontend & Web', items: ['React', 'HTML', 'CSS', 'Responsive design', 'SEO'] },
]

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'APS University, Rewa', when: '2020 – 2022' },
  { degree: 'Bachelor of Science (B.Sc.)', school: 'TRS College, Rewa', when: '2016 – 2019' },
]
