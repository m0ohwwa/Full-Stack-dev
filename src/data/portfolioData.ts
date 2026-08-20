import { Skill, Project, Experience, Education, Certificate, SpokenLanguage } from '../types';
import profilePhotoImg from '../assets/images/profile_photo_avatar_1786060586535.jpg';
import bittenDonutImg from '../assets/images/bitten_donut_avatar_1786064476677.jpg';
import flutterImg from '../assets/images/flutter_app_preview_1786058251121.jpg';

export const personalInfo = {
  name: 'Touch Sovannita',
  role: 'Full-Stack Developer',
  title: 'Full-Stack Web & Mobile Engineer',
  location: 'Phnom Penh, Cambodia',
  email: 'sovannita188780@gmail.com',
  telegram: 'https://t.me/mcdonalddeu',
  telegramHandle: '@mcdonalddeu',
  github: 'https://github.com/m0ohwwa',
  linkedin: 'https://linkedin.com/in/touch-sovannita',
  instagram: 'https://www.instagram.com/kkgum_?igsh=MWdyeml4ampjY3N2eg==',
  facebook: 'https://www.facebook.com/share/1ccCQj6qwn/?mibextid=wwXIfr',
  tiktok: 'https://www.tiktok.com/@mcdonalddeu_?_r=1&_t=ZS-98y0NnrO4uu',
  spotify: 'https://open.spotify.com/user/31sj6qilthrxosnupbydd2auvnuq?si=3a507c2aba684ff7',
  avatarUrl: 'https://i.pinimg.com/736x/d9/9e/46/d99e4653ae963c9f973a23af8d3aeb77.jpg',
  donutFallbackUrl: bittenDonutImg,
  status: 'Available for Junior Full-Stack Developer Roles',
  summary: `I'm Touch Sovannita, a passionate Full-Stack Developer from Cambodia who enjoys building modern web and mobile applications that solve real-world problems. I love transforming ideas into reliable, user-friendly software by writing clean, scalable, and maintainable code.`,
  careerObjective: `I am looking for a Junior Full-Stack Developer position where I can apply my skills in web and mobile development, contribute to real-world projects, collaborate with experienced developers, and continue growing as a software engineer.`,
};

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'languages', level: 85, description: 'Core OOP, Spring Boot APIs, and Android native apps', badgeColor: 'bg-amber-500' },
  { name: 'JavaScript', category: 'languages', level: 88, description: 'ES6+, DOM manipulation, async/await, and modern frameworks', badgeColor: 'bg-yellow-500' },
  { name: 'Python', category: 'languages', level: 82, description: 'Backend development with Flask and Django web services', badgeColor: 'bg-blue-500' },
  { name: 'PHP', category: 'languages', level: 78, description: 'Web application backend development with Laravel framework', badgeColor: 'bg-indigo-500' },
  { name: 'Dart', category: 'languages', level: 85, description: 'Cross-platform mobile application development with Flutter', badgeColor: 'bg-cyan-500' },
  { name: 'C / C++', category: 'languages', level: 75, description: 'Data structures, algorithms, and memory management basics', badgeColor: 'bg-slate-600' },
  { name: 'C#', category: 'languages', level: 72, description: 'Object-oriented backend services and ASP.NET basics', badgeColor: 'bg-purple-600' },

  // Frontend
  { name: 'Tailwind CSS', category: 'frontend', level: 90, description: 'Utility-first responsive layouts, themes, and animations', badgeColor: 'bg-sky-500' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 95, description: 'Semantic markup, flexbox, grid, and modern responsive design', badgeColor: 'bg-orange-500' },
  { name: 'Bootstrap', category: 'frontend', level: 88, description: 'Rapid responsive UI prototyping and grid layout design', badgeColor: 'bg-purple-500' },
  { name: 'Angular', category: 'frontend', level: 75, description: 'Component architecture, TypeScript, services, and RxJS basics', badgeColor: 'bg-red-600' },

  // Backend
  { name: 'Spring Boot', category: 'backend', level: 85, description: 'Robust Java enterprise REST APIs, Spring Security & MVC', badgeColor: 'bg-emerald-500' },
  { name: 'Flask', category: 'backend', level: 82, description: 'Lightweight Python web APIs, Jinja templating, and ORM', badgeColor: 'bg-teal-500' },
  { name: 'Django', category: 'backend', level: 78, description: 'Batteries-included Python web applications and admin panels', badgeColor: 'bg-emerald-700' },
  { name: 'Laravel', category: 'backend', level: 76, description: 'Elegant PHP web framework for MVC web applications', badgeColor: 'bg-rose-500' },
  { name: 'ASP.NET', category: 'backend', level: 70, description: 'C# web API architecture and backend service endpoints', badgeColor: 'bg-indigo-600' },
  { name: 'RESTful API', category: 'backend', level: 90, description: 'Designing clean JSON endpoints, status codes, and security', badgeColor: 'bg-blue-600' },

  // Database
  { name: 'MySQL', category: 'database', level: 85, description: 'Relational database schema design, indexing, and complex queries', badgeColor: 'bg-sky-600' },
  { name: 'PostgreSQL', category: 'database', level: 80, description: 'Advanced relational SQL querying, transactions, and performance', badgeColor: 'bg-blue-700' },
  { name: 'MongoDB', category: 'database', level: 75, description: 'NoSQL document storage, aggregation pipelines, and JSON schemes', badgeColor: 'bg-green-600' },

  // Mobile
  { name: 'Flutter', category: 'mobile', level: 88, description: 'State management, custom UI widgets, and cross-platform apps', badgeColor: 'bg-cyan-500' },
  { name: 'Dart (Mobile SDK)', category: 'mobile', level: 85, description: 'Strong typing, asynchronous programming, and Flutter framework syntax', badgeColor: 'bg-cyan-600' },

  // Cloud & Deployment
  { name: 'Firebase', category: 'cloud', level: 82, description: 'Firestore database, Authentication, Storage, and Hosting', badgeColor: 'bg-amber-600' },
  { name: 'Telegram Bot API', category: 'cloud', level: 88, description: 'Custom bot development, webhooks, voice processing & automation', badgeColor: 'bg-cyan-600' },
  { name: 'Docker (Learning)', category: 'cloud', level: 65, description: 'Containerizing microservices and local development setup', badgeColor: 'bg-blue-500' },
  { name: 'AWS (Learning)', category: 'cloud', level: 60, description: 'EC2 instance basics, S3 bucket storage, and IAM roles', badgeColor: 'bg-amber-500' },

  // Tools & Version Control
  { name: 'Git & GitHub', category: 'version_control', level: 90, description: 'Version control branching, pull requests, merge conflict resolution', badgeColor: 'bg-slate-800' },
  { name: 'Postman', category: 'tools', level: 88, description: 'API testing, collection runner, and HTTP header verification', badgeColor: 'bg-orange-600' },
  { name: 'Linux', category: 'tools', level: 78, description: 'Bash commands, process management, and file system navigation', badgeColor: 'bg-yellow-600' },
  { name: 'VS Code & PyCharm', category: 'tools', level: 92, description: 'Primary IDEs with debugging, extensions, and code formatting', badgeColor: 'bg-blue-600' },
  { name: 'Android Studio', category: 'tools', level: 85, description: 'Mobile app debugging, Flutter dev tools, and emulator management', badgeColor: 'bg-emerald-600' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    subtitle: 'Responsive Online Presence & Developer Showcase',
    category: 'web',
    description: 'A responsive personal portfolio website that showcases my skills, projects, and experience as a Full-Stack Developer with interactive elements and dark/light mode.',
    problemSolved: 'Creates a professional online presence where recruiters and clients can easily evaluate technical competencies, view working project demos, and get in direct touch.',
    features: [
      'Responsive Cross-Device Layout',
      'Dark/Light Dynamic Theme Switcher',
      'Interactive Project Showcase & Filter',
      'Direct Contact Section & Resume Viewer',
      'Smooth Scroll & Animated Section Transitions'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/m0ohwwa/personal-portfolio',
    liveDemoUrl: 'https://sovannita-portfolio.demo.app',
    featured: true,
    architectureNotes: 'Built with modular React components and utility-first styling for fluid responsiveness and high optical performance.'
  },
  {
    id: 'project-2',
    title: 'Product Management System',
    subtitle: 'Flask Web Application for Efficient Inventory Control',
    category: 'web',
    description: 'A robust CRUD web application developed with Python Flask and MySQL for managing product inventory, pricing, and stock records efficiently.',
    problemSolved: 'Helps small-to-medium businesses organize product metadata, track inventory levels in real-time, and eliminate manual spreadsheet tracking errors.',
    features: [
      'Full Create, Read, Update, Delete (CRUD) Operations',
      'Interactive Product Data Table with Sorting',
      'Stock Level Threshold Alerts',
      'Responsive Bootstrap Interface',
      'Server-side Rendering with Jinja2 Templating'
    ],
    techStack: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'HTML5'],
    githubUrl: 'https://github.com/m0ohwwa/flask-product-management',
    featured: true,
    architectureNotes: 'Follows MVC architectural pattern in Python Flask with MySQL relational tables, parameterized queries for SQL injection prevention, and responsive form validation.',
    apiEndpoints: [
      {
        method: 'GET',
        path: '/api/products',
        description: 'Fetch list of all catalog products with current stock counts',
        sampleResponse: [
          { id: 101, name: 'MacBook Pro M3 14"', category: 'Electronics', price: 1599.00, stock: 12 },
          { id: 102, name: 'Wireless Mechanical Keyboard', category: 'Accessories', price: 89.50, stock: 45 }
        ]
      },
      {
        method: 'POST',
        path: '/api/products',
        description: 'Create a new product record',
        sampleResponse: { status: 'success', message: 'Product created successfully', productId: 103 }
      }
    ]
  },
  {
    id: 'project-3',
    title: 'Spring Boot REST API Service',
    subtitle: 'Scalable Enterprise Backend Infrastructure',
    category: 'backend',
    description: 'A backend RESTful API application developed using Spring Boot and MySQL, designed to serve as a reliable data provider for frontend web and mobile clients.',
    problemSolved: 'Provides a secure, performant backend service that decouples business logic and database persistence from client application interfaces.',
    features: [
      'RESTful Endpoint Routing & Controller Mapping',
      'Spring Data JPA / Hibernate Database Integration',
      'MySQL Transactional Safety & Entity Schemas',
      'Standardized HTTP Error Payload Handlers',
      'MVC Architecture with DTO Mapping Layer'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Maven', 'Postman'],
    githubUrl: 'https://github.com/m0ohwwa/springboot-rest-api',
    featured: true,
    architectureNotes: 'Architected with layered Controller-Service-Repository pattern. Features custom global exception handlers and Spring Security input sanitization.',
    apiEndpoints: [
      {
        method: 'GET',
        path: '/api/v1/users',
        description: 'Get paginated list of system accounts',
        sampleResponse: {
          content: [
            { id: 1, username: 'sovannita', email: 'sovannita188780@gmail.com', role: 'DEVELOPER' }
          ],
          totalPages: 1,
          totalElements: 1
        }
      },
      {
        method: 'POST',
        path: '/api/v1/auth/login',
        description: 'Authenticate user credentials and return auth status',
        sampleResponse: { token: 'eyJhbGciOiJIUzI1NiJ9...', status: 'authenticated' }
      }
    ]
  },
  {
    id: 'project-4',
    title: 'Flutter Cross-Platform Mobile App',
    subtitle: 'Unified Mobile Experience with Firebase Sync',
    category: 'mobile',
    image: flutterImg,
    description: 'A cross-platform iOS and Android mobile application engineered using Flutter and Dart, backed by Firebase real-time database and user authentication.',
    problemSolved: 'Provides a smooth mobile user experience using a single maintainable codebase that reduces mobile development overhead across iOS and Android.',
    features: [
      'Responsive Mobile UI for Multi-Screen Ratios',
      'Smooth Flutter Navigation & Route Transitions',
      'Firebase Cloud Firestore Real-time Sync',
      'Firebase Authentication (Email & Password)',
      'Offline Caching & State Management with Provider'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Android Studio'],
    githubUrl: 'https://github.com/m0ohwwa/flutter-mobile-app',
    featured: true,
    architectureNotes: 'Engineered using Flutter Provider pattern for reactive state updates, modular widget tree decomposition, and asynchronous Firebase event streams.'
  },
  {
    id: 'project-voiceconvert-bot',
    title: 'VoiceConvert AI & Telegram Bot',
    subtitle: 'AI Audio & Voice Transformation Platform (@sreysartpsbot)',
    category: 'bot',
    description: 'An AI-powered voice processing and format conversion Telegram bot (@sreysartpsbot) integrated with an interactive web platform (voiceconvert.ai.studio) for instant speech transcription, voice-to-text, and multi-format audio conversion.',
    problemSolved: 'Eliminates the friction of downloading bulky audio converter tools by providing lightning-fast audio conversions and voice memo processing directly within Telegram chats and through a responsive web app.',
    features: [
      'Telegram Bot (@sreysartpsbot) with automated voice message reply',
      'Interactive Web Application Portal at voiceconvert.ai.studio',
      'Multi-Format Conversion (MP3, WAV, OGG, M4A, FLAC, AAC)',
      'AI-Powered Speech-to-Text & Voice Synthesis Engine',
      'Webhook-driven low-latency queue & asynchronous processing',
      'Instant audio preview and direct download links'
    ],
    techStack: ['Telegram Bot API', 'Python', 'Node.js', 'AI Audio Models', 'Webhooks', 'REST API', 'Tailwind CSS'],
    liveDemoUrl: 'https://voiceconvert.ai.studio',
    botUrl: 'https://t.me/sreysartpsbot',
    botUsername: '@sreysartpsbot',
    githubUrl: 'https://github.com/m0ohwwa/voiceconvert-bot',
    featured: true,
    architectureNotes: 'Built on Telegram Bot Webhook architecture connected to an asynchronous audio processing microservice. Integrates with the voiceconvert.ai.studio web platform with rate limiting and secure temporary file storage.',
    apiEndpoints: [
      {
        method: 'POST',
        path: '/api/bot/webhook',
        description: 'Telegram incoming voice note & message update handler',
        sampleResponse: {
          update_id: 10029348,
          bot: '@sreysartpsbot',
          message: {
            chat_id: 893421,
            voice: { duration: 6, mime_type: 'audio/ogg' },
            status: 'converted_to_mp3',
            download_url: 'https://voiceconvert.ai.studio/audio/output_893421.mp3'
          }
        }
      },
      {
        method: 'GET',
        path: '/api/v1/convert/status',
        description: 'Query status of audio conversion task',
        sampleResponse: {
          job_id: 'vc_829304',
          bot_source: '@sreysartpsbot',
          status: 'completed',
          output_format: 'mp3',
          source_duration: '00:06',
          processed_at: '2026-08-17T17:45:00Z'
        }
      }
    ]
  }
];

export const experience: Experience[] = [
  {
    id: 'exp-graphic-designer',
    role: 'Graphic Designer',
    company: 'Hongtai Yinshua',
    period: '16/12/25 – 10/07/26',
    location: 'Phnom Penh, Cambodia',
    responsibilities: [
      'Assisted in creating professional designs for print materials such as posters, vouchers, calendars, and product labels.',
      'Applied industry standards for layout composition, typography hierarchy, and precise color selection for print production.',
      'Coordinated proactively with team members and production staff to complete high-quality design tasks on schedule.'
    ],
    technologies: ['Graphic Design', 'Print Layout', 'Typography', 'Color Selection', 'Poster & Label Design', 'Team Coordination']
  },
  {
    id: 'exp-digital-marketing',
    role: 'Digital Marketing Assistant',
    company: 'Edison Care',
    period: '05/09/25 – 30/11/25',
    location: 'Phnom Penh, Cambodia',
    responsibilities: [
      'Managed content creation, copywriting, and structured posting schedules across digital marketing channels.',
      'Applied digital advertising strategies to expand brand visibility and customer reach.',
      'Executed studio lighting setup, video shooting, professional video editing, and marketing script writing.'
    ],
    technologies: ['Digital Marketing', 'Content Creation', 'Video Editing', 'Script Writing', 'Lighting & Shooting', 'Digital Advertising']
  },
  {
    id: 'exp-it-officer',
    role: 'IT Officer',
    company: 'Lady Fashion Online Store',
    period: '01/05/25 – 30/08/25',
    location: 'Phnom Penh, Cambodia',
    responsibilities: [
      'Boosted and optimized live streams to maximize organic reach, viewer retention, and audience engagement.',
      'Provided end-to-end technical setup and rapid troubleshooting for hardware, audio, and network during live broadcast sessions.'
    ],
    technologies: ['IT Support', 'Live Stream Optimization', 'Hardware Setup', 'Technical Troubleshooting', 'Broadcast Audio/Video']
  },
  {
    id: 'exp-admin-page',
    role: 'Admin Page Manager',
    company: 'ជាងទឹក ជាងភ្លើង (Water & Electrical Services)',
    period: '17/01/24 – 30/06/24',
    location: 'Phnom Penh, Cambodia',
    responsibilities: [
      'Managed social media operations on Facebook, publishing updates and maintaining brand presence.',
      'Handled customer service inquiries, direct messaging communication, and customer booking coordination.'
    ],
    technologies: ['Social Media Management', 'Facebook Page Admin', 'Customer Service', 'Online Communication']
  },
  {
    id: 'exp-developer',
    role: 'Full-Stack Developer (Academic & Projects)',
    company: 'SETEC Institute & Self-Directed Projects',
    period: '2023 – Present',
    location: 'Phnom Penh, Cambodia',
    responsibilities: [
      'Engineered multi-platform web applications using Spring Boot, Flask, and modern frontend technologies.',
      'Designed and deployed RESTful API endpoints connected to MySQL, PostgreSQL, and MongoDB database clusters.',
      'Created cross-platform mobile application interfaces using Flutter and Dart with real-time Firebase backend sync.'
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'Flask', 'Flutter', 'Dart', 'MySQL', 'MongoDB', 'Tailwind CSS', 'Git']
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-etec-1',
    title: 'Basic & Advance C Programming and Project Course',
    issuer: 'Etec Center',
    issueDate: 'Completed',
    credentialId: 'ETEC-CP-PROJECT',
    category: 'academic',
    description: 'Completed in-depth coursework in fundamental and advanced C programming, data structures, algorithm problem solving, pointer logic, and end-of-course project development.',
    skills: ['C Programming', 'Data Structures', 'Algorithms', 'Pointer Management', 'Console Projects']
  },
  {
    id: 'cert-etec-2',
    title: 'Basic Computer, Networking & Installation',
    issuer: 'Etec Center',
    issueDate: 'Completed',
    credentialId: 'ETEC-NET-INST',
    category: 'academic',
    description: 'Completed foundational training in computer hardware, OS installation, network topology setup, IP configuration, cabling, router administration, and hardware troubleshooting.',
    skills: ['Computer Hardware', 'Networking Basics', 'OS Installation', 'Troubleshooting', 'LAN Setup']
  }
];

export const educationList: Education[] = [
  {
    id: 'edu-1',
    institution: 'SETEC Institute',
    degree: 'Bachelor Degree',
    major: 'Management Information System (MIS)',
    graduationYear: '2026 (Expected)',
    status: 'In Progress (Expected Graduation 2026)',
    type: 'university',
    highlights: [
      'Focus on Software Engineering, Database Systems, Systems Analysis, and Management Information Systems.',
      'Hands-on practical coursework in Java OOP, Database Administration, Web Architecture, and Mobile Computing.',
      'Active participant in academic software engineering teams and practical project development.'
    ],
    coursework: [
      'Database Management (SQL)',
      'Java OOP Systems',
      'System Analysis & Design',
      'Web Architecture',
      'Mobile Development',
      'Network Fundamentals'
    ],
    certificates: certificates
  },
  {
    id: 'edu-2',
    institution: 'Otapong High School',
    degree: 'Upper Secondary Education (BAC II)',
    major: 'National High School Curriculum',
    graduationYear: '2022 – 2023',
    status: 'Completed',
    type: 'high_school',
    highlights: [
      'Successfully completed upper secondary education and passed the National High School Examination (BAC II).',
      'Built a strong foundation in mathematics, logical reasoning, and analytical thinking.',
      'Demonstrated academic discipline, consistent dedication, and problem-solving abilities.'
    ],
    coursework: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Khmer Literature',
      'English Language',
      'Logic & Analytical Reasoning'
    ]
  }
];

export const education: Education = educationList[0];

export const currentlyLearning = [
  { name: 'Next.js', category: 'Frontend', level: 'Intermediate', icon: 'Sparkles' },
  { name: 'Advanced Spring Boot', category: 'Backend', level: 'Intermediate', icon: 'Server' },
  { name: 'Docker', category: 'DevOps', level: 'In Progress', icon: 'Box' },
  { name: 'AWS Cloud Services', category: 'Cloud', level: 'In Progress', icon: 'Cloud' },
  { name: 'DevOps Fundamentals', category: 'Infrastructure', level: 'Learning', icon: 'Workflow' },
  { name: 'AI Integration', category: 'AI', level: 'Exploring', icon: 'Cpu' },
  { name: 'Clean Architecture', category: 'Software Engineering', level: 'Practicing', icon: 'Layers' }
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    language: 'Khmer',
    proficiency: 'Mother Tongue',
    levelText: 'Native Proficiency',
    levelScore: 100,
    nativeName: 'ភាសាខ្មែរ',
    notes: 'Native language with complete fluency in verbal communication, reading, writing, and professional collaboration.'
  },
  {
    language: 'English',
    proficiency: 'Intermediate',
    levelText: 'Working Proficiency',
    levelScore: 75,
    nativeName: 'English',
    notes: 'Able to read technical documentation, write code specifications, communicate in developer teams, and engage in professional conversations.'
  }
];

export const interests = [
  'Web Development',
  'Mobile App Development',
  'Full-Stack Engineering',
  'UI/UX Design',
  'Open Source Software',
  'Cloud Computing',
  'Artificial Intelligence',
  'Ethical Hacking'
];
