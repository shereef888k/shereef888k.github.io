/**
 * Central portfolio data for Muhammed Shereef K.
 * B.Tech / BCA in AI, Machine Learning, Robotics & IoT graduate.
 * Every section is an episode, every project is an Original.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Muhammed Shereef K',
  displayName: 'Muhammed Shereef K',
  firstName: 'SHEREEF',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHEREEF ORIGINAL',
  role: 'AI/ML Developer & Full-Stack Engineer',
  tagline: ['AI / ML Developer', 'Full-Stack Engineer', 'Robotics & IoT'],
  intro:
    'A motivated and detail-oriented BCA graduate from Yenepoya (Deemed to be University) specializing in Artificial Intelligence, Machine Learning, Robotics, and IoT. Experienced in building real-world AI applications, full-stack web solutions, and autonomous IoT robotics systems.',
  location: 'Mangalore, Karnataka, India',
  email: 'shereef888k@gmail.com',
  phone: '+91 9207101461',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammed-shereef-k-0b3094292',
    github: 'https://github.com/shereef888k',
    instagram: 'https://www.instagram.com/shereef_k_/',
  },
  resumePdf: './Muhammed-Shereef-K-Resume.pdf',
  portrait: {
    src: './assets/portrait-720.webp',
    srcSet: './assets/portrait-420.webp 420w, ./assets/portrait-720.webp 720w, ./assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Muhammed Shereef K',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Robotics & IoT', 'Full-Stack Web Development', 'Cloud Computing (Azure)'],
};

export const education = [
  {
    school: 'Yenepoya (Deemed to be University)',
    place: 'Mangalore, Karnataka',
    degree: 'Bachelor of Computer Applications (BCA – Artificial Intelligence, Machine Learning, Robotics & IoT)',
    collaboration: 'In collaboration with Microsoft',
    period: '2023 – 2026',
    score: 'Graduated 2026',
    photo: './graduation.jpeg',
  },
];

export const experience = [
  {
    company: 'QTest Software Solution LLP',
    role: 'AI Intern',
    place: 'Remote / Hybrid',
    period: 'Mar 2026 – May 2026',
    points: [
      'Developed AI-based applications using Python and integrated REST APIs with Python backend logic.',
      'Worked on RAG-based systems (Retrieval-Augmented Generation) and performed data preprocessing and model improvement.',
      'Integrated asynchronous backend pipelines, debugged and optimized application performance for production workflows.',
    ],
    certificate: './Internship_Certificate_Muhammed_Shereef.pdf',
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
  hasShowcase?: boolean;
};

export const projects: Project[] = [
  {
    id: 'hospital-triage-ai',
    title: 'Hospital Triage AI System',
    year: '2026',
    genre: 'AI • Healthcare • Full-Stack',
    logline: 'AI-powered hospital support system that analyzes patient symptoms, evaluates urgency tiers, and suggests clinical departments for faster decision-making.',
    stack: ['Python', 'AI/ML', 'JavaScript', 'REST API', 'Vercel'],
    build: [
      'Built an AI-driven triage workflow to process patient symptoms and evaluate urgency categories in real time.',
      'Designed automated department routing algorithms with an administrative queue and historical triage logging.',
      'Implemented clean responsive interfaces ensuring medical staff can triage emergency admissions in seconds.',
    ],
    features: [
      'Patient symptom and detail intake form',
      'AI-based triage and urgency scoring',
      'Intelligent department routing system',
      'Patient history and real-time administrative triage logs',
    ],
    metrics: [
      { value: 'Real-time', label: 'symptom triage scoring' },
      { value: 'Multi-dept', label: 'routing & priority sorting' },
      { value: '100%', label: 'responsive patient & admin UI' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    github: 'https://github.com/shereef888k',
    live: 'https://hospital-ai-system-five.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'medical-report-analyzer',
    title: 'Medical Report Analyzer',
    year: '2026',
    genre: 'AI • HealthTech • NLP',
    logline: 'AI-driven diagnostic analyzer that ingests medical reports, extracts vital biomarker data, and presents structured clinical insights in a user-friendly format.',
    stack: ['Python', 'NLP', 'Flask', 'JavaScript', 'Vercel'],
    build: [
      'Engineered NLP pipelines to parse unstructured lab test reports and extract vital indicators, standard ranges, and diagnostic metrics.',
      'Created an intuitive patient-facing dashboard highlighting abnormal metrics with contextual explanations.',
      'Integrated fast REST APIs enabling direct file upload and instant report breakdown.',
    ],
    features: [
      'Multi-format medical report upload and parsing',
      'Automatic biomarker and clinical parameter extraction',
      'Abnormal indicator flagging with contextual insights',
      'Clean, accessible frontend interface for rapid interpretation',
    ],
    metrics: [
      { value: 'Instant', label: 'diagnostic report parsing' },
      { value: 'Multi-format', label: 'report document ingestion' },
      { value: 'Contextual', label: 'clinical health insights' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    github: 'https://github.com/shereef888k/medical-report-analyzer',
    live: 'https://medical-report-analyzer-beta.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'human-following-robot',
    title: 'Human Following Robot',
    year: '2026',
    genre: 'Robotics • Embedded IoT • Hardware',
    logline: 'Autonomous mobile robotic system engineered with ultrasonic & IR sensor fusion, dynamic motor control, and IoT telemetry to detect, track, and follow humans.',
    stack: ['Arduino', 'Raspberry Pi', 'Ultrasonic / IR Sensors', 'Python', 'C++', 'IoT'],
    build: [
      'Designed real-time sensor fusion algorithms on microcontrollers to calculate human target distance and direction.',
      'Programmed dynamic PID feedback motion control and autonomous collision avoidance with custom chassis and motor drivers.',
      'Documented working prototype build with 4 high-resolution photo logs and 6 operational video demonstrations.',
    ],
    features: [
      'Real-time ultrasonic & infrared sensor target acquisition',
      'Dynamic feedback motion control algorithm implementation',
      'Human detection, target locking, and continuous following',
      'Autonomous collision avoidance & embedded hardware telemetry',
    ],
    metrics: [
      { value: 'Real-time', label: 'sensor telemetry loop' },
      { value: 'Autonomous', label: 'target tracking & obstacle avoidance' },
      { value: '4 Photos', label: 'hardware build gallery' },
      { value: '6 Videos', label: 'live operational demonstrations' },
    ],
    github: 'https://github.com/shereef888k',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
    hasShowcase: true,
  },
  {
    id: 'blood-donation-connect',
    title: 'Blood Donation Connect',
    year: '2025',
    genre: 'Web App • Real-Time DB • Firebase',
    logline: 'Responsive emergency blood mobilization platform pairing urgent patient requests with local registered blood donors via real-time database synchronization.',
    stack: ['JavaScript', 'Firebase', 'Supabase', 'HTML5', 'CSS3'],
    build: [
      'Architected real-time database workflows linking blood seekers with verified community donors filtered by blood type and location.',
      'Built responsive user interfaces for urgent blood dispatch and donor communication.',
      'Integrated cloud synchronization for instant request notifications across local networks.',
    ],
    features: [
      'Urgent blood request creation and broadcast',
      'Verified donor registry and blood group filtering',
      'Real-time synchronization via Firebase / Supabase',
      'Direct emergency contact and notification flow',
    ],
    metrics: [
      { value: 'Real-time', label: 'database synchronization' },
      { value: '0-latency', label: 'request broadcast' },
      { value: 'Community', label: 'emergency health response' },
      { value: 'Live', label: 'deployed on GitHub Pages' },
    ],
    github: 'https://github.com/shereef888k',
    live: 'https://shereef888k.github.io/blood-donation-connect/',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'blood-support-system',
    title: 'Blood Support System',
    year: '2025',
    genre: 'Web Platform • Netlify • Community',
    logline: 'Community-oriented blood donor management and emergency assistance platform deployed for high availability on Netlify.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Netlify'],
    build: [
      'Developed clean donor registration and emergency dispatch workflows optimized for mobile accessibility.',
      'Deployed on Netlify with automated CDN distribution for fast loading during critical donor mobilization.',
      'Designed practical community workflows for local social support organizations.',
    ],
    features: [
      'Donor registry and automated request handling',
      'Blood group categorization and geographic search',
      'Mobile-optimized responsive design',
      'High-availability hosting on Netlify',
    ],
    metrics: [
      { value: '100%', label: 'mobile responsive' },
      { value: 'Fast CDN', label: 'hosted on Netlify' },
      { value: 'Community', label: 'social impact focus' },
      { value: 'Live', label: 'deployed on Netlify' },
    ],
    github: 'https://github.com/shereef888k',
    live: 'https://nationalclub-bloodsupport.netlify.app/',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  images?: string[];
};

export const achievements: Achievement[] = [
  {
    id: 'bca-graduation-convocation',
    title: 'BCA Convocation & Degree',
    org: 'Yenepoya University & Microsoft',
    detail: 'Proudly completed Bachelor of Computer Applications (BCA) in AI, Machine Learning, Robotics & IoT in collaboration with Microsoft — three years of learning, dedication, and growth leading to this milestone moment.',
    laurel: 'Graduation 2026',
    link: './graduation.jpeg',
    images: ['./graduation.jpeg'],
  },
  {
    id: 'nss-volunteer-award',
    title: 'University NSS Best Volunteer Award',
    org: 'Yenepoya (Deemed to be University)',
    detail: 'Honoured to receive the University NSS Best Volunteer Award 2025–26, presented by Dr. Amitabh Ranjan (Registrar, Indian Institute of Public Administration) for exemplary leadership, community service, and social impact initiatives.',
    laurel: 'Best Volunteer 2025–26',
    link: './nss-award-1.jpeg',
    images: ['./nss-award-1.jpeg', './nss-award-2.jpeg', './nss-award-3.jpeg', './nss-award-4.jpeg'],
  },
  {
    id: 'qtest-ai-internship',
    title: 'AI Internship Certificate',
    org: 'QTest Software Solution LLP',
    detail: 'Completed professional internship in AI engineering, developing Python applications, RAG pipelines, and REST backend architectures.',
    laurel: 'Industry AI Intern',
    link: './Internship_Certificate_Muhammed_Shereef.pdf',
  },
  {
    id: 'one-million-prompters',
    title: 'One Million Prompters Initiative',
    org: 'Dubai Future Foundation / DCAI',
    detail: 'Successfully certified in prompt engineering for AI systems under the global One Million Prompters initiative by Dubai Centre for Artificial Intelligence.',
    laurel: 'Global AI Initiative',
    link: './One_Million_Prompters_Certificate.pdf',
  },
  {
    id: 'microsoft-azure-suite',
    title: 'Microsoft Azure Certified',
    org: 'Microsoft',
    detail: 'Certified in Azure AI Fundamentals, Azure Data Fundamentals, Azure Fundamentals, Power Platform Fundamentals, and Security, Compliance & Identity Fundamentals.',
    laurel: '5x Microsoft Certifications',
    link: './Azure AI Fundamentals.pdf',
  },
  {
    id: 'global-youth-summit',
    title: 'Global Youth Summit 2025',
    org: 'Global Youth Summit',
    detail: 'Selected volunteer coordinator assisting in international delegate management, event coordination, and logistics.',
    laurel: 'International Summit',
  },
  {
    id: 'robotics-seminar',
    title: 'Feedback Control in Mobile Robots',
    org: 'Yenepoya Technical Seminar',
    detail: 'Researched and delivered a technical presentation on sensor feedback control loops and PID algorithms in autonomous mobile robots.',
    laurel: 'Technical Presentation',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
  category: string;
  date?: string;
  description?: string;
};

export const certifications: Certification[] = [
  { issuer: 'Dubai Future Foundation', name: 'One Million Prompters – Certificate of Completion', link: './One_Million_Prompters_Certificate.pdf', category: 'AI', date: '2026-05-15', description: 'Prompt engineering for AI systems.' },
  { issuer: 'QTest Solutions', name: 'AI Internship Certificate', link: './Internship_Certificate_Muhammed_Shereef.pdf', category: 'Internship', date: '2026-04-25', description: 'AI application development, RAG systems, and REST APIs.' },
  { issuer: 'Microsoft', name: 'Azure AI Fundamentals', link: './Azure AI Fundamentals.pdf', category: 'Microsoft', date: '2026-03-02', description: 'Machine learning, computer vision, and NLP on Microsoft Azure.' },
  { issuer: 'Microsoft', name: 'Azure Fundamentals', link: './Azure Fundamentals.pdf', category: 'Microsoft', date: '2026-02-13', description: 'Cloud concepts, Azure architecture, and management tools.' },
  { issuer: 'Microsoft', name: 'Azure Data Fundamentals', link: './Azure Data Fundamentals.pdf', category: 'Microsoft', date: '2025-01-15', description: 'Relational and non-relational data concepts on Azure.' },
  { issuer: 'Microsoft', name: 'Power Platform Fundamentals', link: './Power Platform Fundamentals.pdf', category: 'Microsoft', date: '2026-03-02', description: 'Business app building, automation, and analytics.' },
  { issuer: 'Microsoft', name: 'Security, Compliance, and Identity Fundamentals', link: './Security Compliance and Identity Fundamentals.pdf', category: 'Microsoft', date: '2026-03-03', description: 'Cloud security, compliance, and identity management.' },
  { issuer: 'Wingspan', name: 'Basics of Python', link: './1-a9dcc8fc-0f62-44ef-8b9d-d7f339834013.pdf', category: 'Programming', date: '2025-03-27', description: 'Python programming syntax and fundamental algorithms.' },
  { issuer: 'Wingspan', name: 'Explore Machine Learning using Python', link: './1-f1178325-04ad-4ebc-83df-8bb76acdb2c6.pdf', category: 'AI', date: '2025-03-27', description: 'Model training and evaluation in Python.' },
  { issuer: 'Coursera', name: 'AI For Everyone', link: './Coursera MP0EWFNWUEIO.pdf', category: 'AI', date: '2025-09-20', description: 'DeepLearning.AI – AI capabilities and strategy.' },
  { issuer: 'Coursera', name: 'Introduction to Artificial Intelligence (AI)', link: './Coursera KQEAFRFA586C.pdf', category: 'AI', date: '2025-09-20', description: 'IBM – Fundamentals of modern artificial intelligence.' },
  { issuer: 'Coursera', name: 'Supervised Machine Learning: Classification', link: './Coursera WDUYDZMT2616.pdf', category: 'AI', date: '2025-09-20', description: 'Classification algorithms, decision boundaries, and loss functions.' },
  { issuer: 'Coursera', name: 'Unsupervised Machine Learning', link: './Coursera NTRNMJVIGZBW.pdf', category: 'AI', date: '2025-09-20', description: 'Clustering, dimensionality reduction, and anomaly detection.' },
  { issuer: 'Coursera', name: 'Machine Learning Capstone', link: './Coursera RU59ODG78DCT.pdf', category: 'AI', date: '2025-09-20', description: 'End-to-end ML pipeline implementation and validation.' },
  { issuer: 'Coursera', name: 'Deep Learning and Reinforcement Learning', link: './Coursera ME4JUH36CTZD.pdf', category: 'AI', date: '2025-09-20', description: 'Neural networks, policy gradients, and Q-learning.' },
  { issuer: 'Coursera', name: 'Data Visualization with Python', link: './Coursera HLWR8ZJYIV9X.pdf', category: 'Data', date: '2025-09-20', description: 'Matplotlib, Seaborn, and interactive dashboards.' },
  { issuer: 'Coursera', name: 'Networking Fundamentals', link: './Coursera 92R6SQX5ZUXG.pdf', category: 'Networking', date: '2024-04-16', description: 'TCP/IP model, subnetting, and network protocols.' },
  { issuer: 'Coursera', name: 'Data Forwarding Across Computer Networks', link: './Coursera 5HV368DA44LM.pdf', category: 'Networking', date: '2024-04-16', description: 'Routing algorithms, packet switching, and IP architecture.' },
  { issuer: 'Coursera', name: 'Fundamentals of Robotics & Industrial Automation', link: './Coursera NUBC3BZRFOIE.pdf', category: 'Robotics', date: '2025-09-20', description: 'Robotic kinematics, actuators, and industrial automation.' },
  { issuer: 'Coursera', name: 'Robotics Engineering & Applications', link: './Coursera E74B06YR612O.pdf', category: 'Robotics', date: '2025-09-20', description: 'Sensor integration, control systems, and robotic hardware.' },
  { issuer: 'Coursera', name: 'Industrial Fluid Systems & Smart Factory Automation', link: './Coursera GW550I4MXQAZ.pdf', category: 'Robotics', date: '2025-09-20', description: 'Pneumatics, hydraulics, and smart factory integration.' },
  { issuer: 'Coursera', name: 'Collaborative Robotics in Industry (Specialization)', link: './Coursera NAVP7ZRHNWHG.pdf', category: 'Robotics', date: '2025-09-20', description: 'Cobot systems, safety standards, and factory floor workflows.' },
  { issuer: 'Coursera', name: 'Introduction to Internet of Things & Embedded Systems', link: './Coursera V6BP5VBPZYFS.pdf', category: 'IoT', date: '2025-02-06', description: 'Embedded architecture, sensor telemetry, and IoT protocols.' },
  { issuer: 'Wingspan', name: 'Internet of Things 201', link: './ed5ec614-5de9-4f0e-80e9-548b18c54457.pdf', category: 'IoT', date: '2026-02-25', description: 'Advanced IoT hardware platforms and sensor interfacing.' },
  { issuer: 'Wingspan', name: 'IoT Communication Technologies', link: './e52b338b-901f-4be4-ac32-3f675b59b822.pdf', category: 'IoT', date: '2026-02-25', description: 'Wireless protocols, MQTT, and IoT cloud connectivity.' },
  { issuer: 'Coursera', name: 'Introduction to HTML5', link: './Coursera EOS6N1XOGTMA.pdf', category: 'Web Dev', date: '2025-11-03', description: 'Modern semantic HTML5 markup and web accessibility.' },
  { issuer: 'Coursera', name: 'Intro to Object-Oriented Programming with Java', link: './Coursera KQSJGKEC6LDU.pdf', category: 'Programming', date: '2024-02-05', description: 'OOP fundamentals, encapsulation, and class hierarchies.' },
  { issuer: 'Coursera', name: 'Java Class Library', link: './Coursera JJYFV6V866NX.pdf', category: 'Programming', date: '2025-09-20', description: 'Java collections framework, I/O streams, and utilities.' },
  { issuer: 'Coursera', name: 'Foundations of Digital Marketing & E-commerce', link: './Coursera PRT9XYNKBBS0.pdf', category: 'Other', date: '2025-09-20', description: 'Digital strategy, user acquisition, and web analytics.' },
  { issuer: 'Coursera', name: 'Use Canva to Create Social Media Designs', link: './Coursera Q5M79BVZLAU4.pdf', category: 'Design', date: '2024-10-14', description: 'Visual communication and presentation design.' },
  { issuer: 'Wingspan', name: 'Online Android Course Training', link: './51a06a26-fc32-4143-9a0b-04a254055048.pdf', category: 'Mobile', date: '2026-02-25', description: 'Android application development and mobile architecture.' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    subtitle: 'Machine Learning • RAG • Computer Vision',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'RAG Systems', mono: 'Rg' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Data Visualization', mono: 'Dv' },
    ],
  },
  {
    id: 'robotics-iot',
    title: 'Robotics & IoT',
    subtitle: 'Embedded hardware • Sensor fusion',
    skills: [
      { name: 'Arduino', mono: 'Ar', note: 'Hardware' },
      { name: 'Raspberry Pi', mono: 'Pi' },
      { name: 'NodeMCU', mono: 'Mc' },
      { name: 'Sensor Fusion', mono: 'Sf' },
      { name: 'Feedback Control', mono: 'Fc' },
      { name: 'Embedded C/C++', mono: 'C+' },
      { name: 'MQTT & Telemetry', mono: 'Iot' },
      { name: 'Industrial Automation', mono: 'Ia' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Languages & algorithmic problem solving',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sql' },
      { name: 'HTML5 & CSS3', mono: 'Web' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web',
    subtitle: 'Frontend interfaces & backend logic',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Responsive UI', mono: 'Ui' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Supabase', mono: 'Sb' },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & DevOps',
    subtitle: 'Microsoft Azure • Deployment • Git',
    skills: [
      { name: 'Azure AI', mono: 'Az', note: 'Certified' },
      { name: 'Azure Data', mono: 'Ad' },
      { name: 'Azure Cloud', mono: 'Ac' },
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Netlify', mono: 'Nl' },
      { name: 'Vercel', mono: 'Vc' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Systems',
    subtitle: 'Relational data & structured storage',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'SQL', mono: 'Sql' },
      { name: 'DBMS Fundamentals', mono: 'Db' },
      { name: 'Cloud Storage', mono: 'Cs' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Hospital Triage AI System', 'Medical Report Analyzer', 'QTest AI Internship', 'Wingspan Basics of Python'],
  'Machine Learning': ['Coursera ML Specialization', 'QTest AI Internship', 'Wingspan ML using Python'],
  'Deep Learning': ['Coursera Deep Learning & RL', 'Hospital Triage AI System'],
  'Prompt Engineering': ['One Million Prompters Certificate', 'Dubai Future Foundation'],
  'RAG Systems': ['QTest Software Solution LLP AI Internship', 'Medical Report Analyzer'],
  NLP: ['Medical Report Analyzer', 'Hospital Triage AI System'],
  Arduino: ['Human Following Robot', 'Robotics Showcase'],
  'Raspberry Pi': ['Human Following Robot', 'IoT Embedded Systems'],
  'Sensor Fusion': ['Human Following Robot', 'Technical Seminar: Feedback Control'],
  'Feedback Control': ['Technical Seminar Presentation', 'Human Following Robot'],
  Java: ['Coursera OOP with Java', 'Coursera Java Class Library'],
  JavaScript: ['Blood Donation Connect', 'Hospital Triage AI System', 'Blood Support System'],
  React: ['Shereef The Series Portfolio', 'Full-Stack Web Interfaces'],
  Flask: ['Medical Report Analyzer', 'Python REST API Services'],
  'REST APIs': ['Hospital Triage AI System', 'QTest AI Internship', 'Medical Report Analyzer'],
  'Azure AI': ['Microsoft Certified: Azure AI Fundamentals (AI-900)'],
  'Azure Data': ['Microsoft Certified: Azure Data Fundamentals (DP-900)'],
  'Azure Cloud': ['Microsoft Certified: Azure Fundamentals (AZ-900)'],
  'Git & GitHub': ['github.com/shereef888k', 'Blood Donation Connect', 'Medical Report Analyzer'],
  MySQL: ['Yenepoya BCA AIML DBMS Lab', 'Blood Donation DB Architecture'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2024',
    synopsis: 'Starting the BCA journey at Yenepoya University — mastering core programming in C, Python, Java, and computer networks.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Entering Yenepoya',
        description: 'BCA in Artificial Intelligence, Machine Learning, Robotics & IoT at Yenepoya (Deemed to be University), Mangalore.',
        tags: ['Yenepoya', 'BCA', 'AI & ML'],
        runtime: '2023',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'Core Code & Networks',
        description: 'Building deep foundations across Python, Java, C, and Computer Networking through Coursera and university coursework.',
        tags: ['Python', 'Java', 'Networking'],
        runtime: '2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI, ML & Robotics',
    period: '2024 – 2025',
    synopsis: 'Expanding from software to autonomous hardware — diving deep into machine learning models, robotics engineering, and IoT embedded systems.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Robotics Lab',
        description: 'Studying robotic kinematics, industrial automation, and microcontrollers (Arduino, Raspberry Pi, NodeMCU).',
        tags: ['Robotics', 'Arduino', 'Raspberry Pi'],
        runtime: '2024 – 2025',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'Machine Learning Deep Dive',
        description: 'Supervised & Unsupervised Machine Learning, Deep Learning, and Data Visualization with Python.',
        tags: ['Machine Learning', 'Deep Learning', 'Python'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'Feedback Control Seminar',
        description: 'Delivered technical presentation on "Feedback Control in Mobile Robots" to faculty and engineering peers.',
        tags: ['Seminar', 'PID Control', 'Mobile Robots'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building for the Community',
    period: '2025 – 2026',
    synopsis: 'Developing community healthcare platforms, building the Human Following Robot, and earning prestigious university recognition.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Autonomous Follower',
        description: 'Engineered the Human Following Robot prototype using ultrasonic sensor fusion and dynamic feedback motor control.',
        tags: ['Robot', 'Sensors', 'Telemetry'],
        runtime: '2025 – 2026',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Blood Support Systems',
        description: 'Built Blood Donation Connect and Blood Support System for instant community emergency blood mobilization.',
        tags: ['Web App', 'Firebase', 'Netlify'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'University Best Volunteer Award',
        description: 'Honoured with the University NSS Best Volunteer Award 2025–26, presented by Dr. Amitabh Ranjan.',
        tags: ['NSS Award', 'Leadership', 'Social Impact'],
        runtime: '2025 – 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Production AI & Cloud',
    period: '2026',
    synopsis: 'Industry internship as AI Intern at QTest Solutions, 5x Microsoft Azure certifications, and production AI healthcare platforms.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Intern',
        description: 'Interned at QTest Software Solution LLP — building Python AI systems, RAG workflows, and REST backend services.',
        tags: ['QTest', 'RAG', 'Python', 'APIs'],
        runtime: 'Mar – May 2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'Azure Cloud Suite',
        description: 'Earned 5 Microsoft certifications across Azure AI, Data, Security, Power Platform, and Core Cloud.',
        tags: ['Azure AI', 'Azure Data', 'Cloud'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'Hospital Triage & Medical Reports',
        description: 'Launched Hospital Triage AI System and Medical Report Analyzer live on Vercel for instant diagnostic support.',
        tags: ['Hospital AI', 'NLP', 'HealthTech'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E04',
        title: 'The Convocation',
        description: 'A Milestone Achieved — Completed Bachelor of Computer Applications (BCA) in AI, Machine Learning, Robotics and IoT from Yenepoya University in collaboration with Microsoft.',
        tags: ['Convocation 2026', 'Graduation', 'Microsoft Collab'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Graduating in 2026 and preparing for the next frontier in autonomous AI, robotics, and production intelligent systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Frontier',
        description: 'Deploying autonomous mobile robotics, scalable RAG architectures, and intelligent systems in enterprise production.',
        tags: ['Autonomous AI', 'Robotics', 'Full-Stack'],
        runtime: 'In production',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Milestone Achieved', title: 'BCA Convocation 2026', detail: 'Yenepoya University in collaboration with Microsoft', palette: jade },
  { label: 'The AI Original', title: 'Hospital Triage AI', detail: 'Real-time patient symptom analysis & clinical urgency triage', palette: crimson },
  { label: 'Featured Honor', title: 'NSS Best Volunteer Award', detail: 'University Award 2025–26 presented by Dr. Amitabh Ranjan', palette: jade },
  { label: 'Robotics Showcase', title: 'Human Following Robot', detail: 'Autonomous tracking prototype with 4 photos & 6 videos', palette: amber },
  { label: 'Industry Arc', title: 'QTest AI Internship', detail: 'Python, RAG-based systems & REST API engineering', palette: ocean },
  { label: 'Cloud Credential', title: 'Microsoft Azure AI', detail: 'Azure AI Fundamentals (AI-900) Certified', palette: violet },
  { label: 'HealthTech Original', title: 'Medical Report Analyzer', detail: 'NLP-based biomarker extraction & diagnostic insights', palette: ocean },
  { label: 'Global AI Program', title: 'One Million Prompters', detail: 'Dubai Future Foundation / DCAI Prompt Engineering', palette: crimson },
  { label: 'Credentials', title: '30+ Certifications', detail: 'Microsoft • Coursera • Wingspan • Dubai Future Foundation', palette: jade },
  { label: 'Community Platform', title: 'Blood Donation Connect', detail: 'Real-time emergency donor registry & dispatch system', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Milestone Achieved',
    title: 'BCA · AI, ML & Robotics',
    lines: ['Yenepoya (Deemed to be University), Mangaluru', 'In collaboration with Microsoft · Convocation 2026', 'Three years of learning, dedication & technological innovation'],
    chips: ['Graduated 2026', 'Yenepoya', 'Microsoft Collaboration'],
  },
  {
    kicker: 'Experience',
    title: 'AI Intern · QTest Solutions',
    lines: ['AI application engineering with Python', 'RAG-based systems, REST APIs & data preprocessing', 'Performance debugging & backend integration'],
    chips: ['Python', 'RAG Systems', 'REST APIs'],
  },
  {
    kicker: 'Robotics Prototype',
    title: 'Human Following Robot',
    lines: ['Autonomous mobile robot with real-time sensor tracking', 'Ultrasonic sensor fusion, PID feedback control & obstacle avoidance', 'Demonstrated with live hardware video logs & photo gallery'],
    chips: ['Arduino', 'Raspberry Pi', 'Sensor Fusion'],
  },
  {
    kicker: 'Featured Originals',
    title: 'AI & Healthcare Systems',
    lines: ['Hospital Triage AI System — Real-time urgency triage & routing', 'Medical Report Analyzer — NLP diagnostic parameter parsing', 'Blood Donation Connect — Real-time donor mobilization'],
  },
  {
    kicker: 'Honor & Recognition',
    title: 'NSS Best Volunteer Award',
    lines: ['University NSS Best Volunteer Award 2025–26', 'Presented by Dr. Amitabh Ranjan (Registrar, IIPA)', 'Anti-Drug Walkathon Organizer & Global Youth Summit Volunteer'],
  },
  {
    kicker: 'Certified',
    title: '30+ Certifications',
    lines: ['5x Microsoft (Azure AI, Azure Data, Azure Cloud, Security)', 'Dubai Future Foundation (One Million Prompters)', 'Coursera Specializations & Wingspan Technical Honors'],
  },
];

export type ProfileId = 'shereef' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'iot' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shereef',
    name: 'Shereef',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'iot', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, certificates & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'iot', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'iot', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Robotics & AI',
    blurb: 'IoT showcase, robotics & innovations first',
    color: '#ffb547',
    order: ['iot', 'originals', 'picks', 'journey', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & AI journey', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • AI & Full-Stack`, palette: crimson },
  iot: { nav: 'IoT Showcase', card: 'Robotics Feature', meta: 'Human Following Robot • Photos & Videos', palette: amber },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • AI, Robotics, Web`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

export const robotMedia = {
  images: [
    { src: './1.jpeg', alt: 'Human Following Robot Hardware Build 1' },
    { src: './2.jpeg', alt: 'Human Following Robot Hardware Build 2' },
    { src: './3.jpeg', alt: 'Human Following Robot Ultrasonic Sensor Assembly' },
    { src: './4.jpeg', alt: 'Human Following Robot Chassis & Motor Drivers' },
  ],
  videos: [
    { src: './9.mp4', title: 'Target Tracking & Motion Following' },
    { src: './10.mp4', title: 'Ultrasonic Sensor Obstacle Detection' },
    { src: './6.mp4', title: 'Chassis Drive & Directional Steering' },
    { src: './7.mp4', title: 'Autonomous Following in Motion' },
    { src: './8.mp4', title: 'Prototype Speed & Response Test' },
  ],
};

