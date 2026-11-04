// ==========================================================================
//  PORTFOLIO DATA — THARUNIGA N
//  All hardcoded content extracted from index.html
// ==========================================================================

export const stats = [
  { target: 310, suffix: '+', label: 'LeetCode Problems', type: 'int' },
  { target: 411, suffix: '+', label: 'GFG Problems', type: 'int' },
  { target: 8.82, suffix: '', label: 'Current CGPA', type: 'float' },
  { target: 4, suffix: '+', label: 'Major Projects', type: 'int' },
];

export const skills = {
  languages: {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'C++', logo: 'devicon-cplusplus-plain colored' },
      { name: 'Python', logo: 'devicon-python-plain colored' },
      { name: 'C', logo: 'devicon-c-plain colored' },
      { name: 'JavaScript', logo: 'devicon-javascript-plain colored' },
    ],
  },
  web: {
    title: 'Web & Database',
    icon: 'fa-solid fa-globe',
    items: [
      { name: 'HTML5', logo: 'devicon-html5-plain colored' },
      { name: 'CSS3', logo: 'devicon-css3-plain colored' },
      { name: 'Bootstrap 5', logo: 'devicon-bootstrap-plain colored' },
      { name: 'React.js', logo: 'devicon-react-original colored' },
      { name: 'Node.js', logo: 'devicon-nodejs-plain colored' },
      { name: 'Express', logo: 'devicon-express-original' },
      { name: 'MySQL', logo: 'devicon-mysql-original colored' },
      { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored' },
    ],
  },
  tools: {
    title: 'Libraries & Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      { name: 'NumPy', logo: 'devicon-numpy-plain colored' },
      { name: 'Pandas', logo: 'devicon-pandas-plain colored' },
      { name: 'Matplotlib', logo: 'devicon-matplotlib-plain colored' },
      { name: 'Scikit-Learn', logo: 'devicon-scikitlearn-plain colored' },
      { name: 'VS Code', logo: 'devicon-vscode-plain colored' },
      { name: 'Git', logo: 'devicon-git-plain colored' },
      { name: 'GitHub', logo: 'devicon-github-original' },
      { name: 'Firebase', logo: 'devicon-firebase-plain colored' },
      { name: 'Canva', logo: 'devicon-canva-original colored' },
      { name: 'Google Colab', logo: 'devicon-googlecolab-plain colored' },
      { name: 'Antigravity', logo: 'fa-solid fa-rocket' },
    ],
  },
};

export const projects = [
  {
    id: 'campora',
    icon: 'fa-solid fa-store',
    title: 'Campora: Campus Marketplace',
    desc: 'A verified, trust-based campus marketplace, task board and pick-and-drop network where every deal is mutually agreed and paid through escrow.',
    highlights: [
      'Escrow payments released only after a 4-digit delivery OTP, with disputes and moderation tools.',
      'Live chat, deal updates and notifications over Server-Sent Events, with AES-256-GCM encryption of personal data.',
      'Zero-dependency Node.js backend and an installable PWA frontend with English and Tamil support.',
    ],
    tags: ['Node.js', 'JavaScript', 'PWA', 'SSE', 'REST API'],
    githubUrl: 'https://github.com/Tharuniga60/Campora-001',
    liveUrl: 'https://campora-001.vercel.app',
  },
  {
    id: 'os-scheduler',
    icon: 'fa-solid fa-microchip',
    title: 'CPU Scheduling Simulator',
    desc: 'Interactive web lab with a dedicated simulation page for 11 CPU scheduling algorithms, from FCFS and SJF to Round Robin, MLQ and MLFQ.',
    highlights: [
      'Simulates FCFS, SJF, SRTF, LJF, LRTF, Priority (both modes), Round Robin, HRRN, MLQ and MLFQ.',
      'Tick-by-tick playback with live CPU state, ready queues, event log and animated Gantt chart.',
      'Computes waiting, turnaround and response times and compares all algorithms on one workload.',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
    githubUrl: 'https://github.com/Tharuniga60/cpu-scheduling-simulator',
    liveUrl: 'https://cpu-scheduling-simulator-gilt-nine.vercel.app',
  },
  {
    id: 'peoplepay360',
    icon: 'fa-solid fa-money-check-dollar',
    title: 'PeoplePay360: Payroll & HR System',
    desc: 'A full-stack HR and payroll platform covering employees, contracts, attendance, leave management, and automated pay runs.',
    highlights: [
      'Configurable salary structures and formula-based payroll rules evaluated per pay run.',
      'Employee, contract, attendance, and leave allocation management with secure NextAuth login.',
      'Downloadable PDF payslips and reporting dashboards backed by Drizzle ORM and Neon PostgreSQL.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    githubUrl: 'https://github.com/Tharuniga60/PeoplePay360',
    liveUrl: 'https://people-pay360.vercel.app',
  },
  {
    id: 'transitops',
    icon: 'fa-solid fa-bus',
    title: 'TransitOps: Fleet Management System',
    desc: 'A full-stack smart transport operations platform for managing fleets, drivers, safety, and finances with role-based dashboards.',
    highlights: [
      'Role-based access for Admin, Fleet Manager, Driver, Safety Officer, and Financial Analyst using JWT auth.',
      'REST API built with Express, Prisma ORM, and a PostgreSQL (Neon) database.',
      'Interactive analytics dashboards with Recharts and PDF report export via jsPDF.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/Tharuniga60/Smart-Transport-Operations-Platform',
    liveUrl: 'https://smart-transport-operations-platform.vercel.app',
  },
];

export const achievements = [
  {
    id: 'ieee-project',
    icon: 'fa-solid fa-medal',
    title: 'Project Presentation Winner',
    desc: 'Won the project presentation event conducted by the IEEE association, presenting a working project to a panel of judges.',
  },
  {
    id: 'odoo-hackathon',
    icon: 'fa-solid fa-laptop-code',
    title: 'Odoo Hackathon Finalist',
    desc: 'Reached the finals of the Odoo Hackathon held in Gandhinagar, Gujarat, building a solution against a tight deadline.',
  },
  {
    id: 'sih',
    icon: 'fa-solid fa-trophy',
    title: 'Smart India Hackathon',
    desc: 'Shortlisted in the internal round at Kongu Engineering College for the prestigious national Smart India Hackathon (SIH 2025 - 2026).',
  },
  {
    id: 'paper',
    icon: 'fa-solid fa-file-powerpoint',
    title: 'Paper Presentation',
    desc: 'Presented research papers at multiple technical symposiums both inside and outside KEC, covering topics on emerging cloud services.',
  },
  {
    id: 'coding-winner',
    icon: 'fa-solid fa-award',
    title: 'Coding Contests Winner',
    desc: 'Won top placements in local coding contest rounds, demonstrating efficiency and command over DSA principles.',
  },
  {
    id: 'quizzes',
    icon: 'fa-solid fa-lightbulb',
    title: 'Technical Quizzes',
    desc: 'Secured prizes and certificates in numerous state-level IT quizzes covering Computer Networks, OS, and Database internals.',
  },
  {
    id: 'hackathon',
    icon: 'fa-solid fa-code-fork',
    title: 'Hackathon Experience',
    desc: 'Experienced in console-based application hackathons, converting specifications into working programs under tight deadlines.',
  },
  {
    id: 'certifications',
    icon: 'fa-solid fa-certificate',
    title: 'Verified Certifications',
    desc: 'Completed DSA validation courses by GFG, Python certification by HCL, AWS Fundamentals, and Infosys Springboard Frontend.',
  },
];

export const codingProfiles = [
  {
    id: 'leetcode',
    icon: 'fa-solid fa-code',
    name: 'LeetCode',
    detail: '310+ Problems Solved',
    url: 'https://leetcode.com/u/Tharuni_2006/',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'gfg',
    icon: 'fa-solid fa-graduation-cap',
    name: 'GeeksforGeeks',
    detail: '411+ Problems Solved',
    url: 'https://www.geeksforgeeks.org/profile/tharuniga1306',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'hackerrank',
    icon: 'fa-brands fa-hackerrank',
    name: 'HackerRank',
    detail: 'Active Solver',
    url: 'https://www.hackerrank.com/profile/tharuniga_n',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'codeforces',
    icon: 'fa-solid fa-chart-simple',
    name: 'Codeforces',
    detail: 'Problem Solving Practice',
    url: 'https://codeforces.com/profile/Tharuniga',
    colClass: 'col-lg-6 col-md-6',
  },
  {
    id: 'cses',
    icon: 'fa-solid fa-terminal',
    name: 'CSES Problem Set',
    detail: 'Core Algorithm Drills',
    url: 'https://cses.fi/user/432429',
    colClass: 'col-lg-6 col-md-12',
  },
];

export const education = [
  {
    id: 'btech',
    meta: '2022 - Present',
    title: 'B.Tech - Information Technology',
    institution: 'Kongu Engineering College, Perundurai',
    details: [
      'Current Academic Performance: <strong>8.82 CGPA</strong>',
      'Active IT Association Executive Member',
      'Mobile App Development Club Member',
      'Student Placement Co-ordinator managing corporate drives',
    ],
  },
  {
    id: 'hsc',
    meta: 'Completed 2022',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Rank International School (CBSE)',
    details: [
      'Aggregate Performance: <strong>90.6%</strong>',
      'Focused on Mathematics, Physics, Chemistry, and Computer Science',
    ],
  },
  {
    id: 'sslc',
    meta: 'Completed 2020',
    title: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Rank International School (CBSE)',
    details: ['Aggregate Performance: <strong>89.6%</strong>'],
  },
];

export const internships = [
  {
    id: 'gateway',
    meta: 'Junior Software Intern',
    title: 'Gateway Software Solutions',
    institution: 'Coimbatore, Tamil Nadu',
    details: [
      'Gained hands-on experience working on enterprise software paradigms and OOP concepts.',
      'Collaborated with senior engineers to troubleshoot and fix software application modules.',
      'Learned standard source control pipelines and basic database interactions in Java/MySQL.',
    ],
    documentUrl: '/docs/gateway-internship-certificate.pdf',
    documentLabel: 'View Proof',
  },
  {
    id: 'newmak',
    meta: 'Software Trainee',
    title: 'NewMak Technologies',
    institution: 'Coimbatore, Tamil Nadu',
    details: [
      'Trained in web tech frameworks and client-server communication channels.',
      'Designed functional web page templates adhering to modern visual design criteria.',
      'Participated in daily reviews and logic analysis discussions.',
    ],
    documentUrl: '/docs/newmak-inplant-certificate.pdf',
    documentLabel: 'View Proof',
  },
  {
    id: 'aniivexx',
    meta: 'Web Development & Growth Associate Intern',
    title: 'AniiVexx Private Limited',
    institution: 'Sathyamangalam, Erode, Tamil Nadu · Sep 2026 - Present',
    ongoing: true,
    details: [
      'Building, testing and optimizing responsive front-end interfaces, landing pages and dynamic web portals with HTML5, CSS3, JavaScript, APIs and modern frameworks.',
      'Improving site reliability, load speed and cross-browser compatibility across the company\'s web platforms.',
      'Setting up conversion funnels, tracking tools and lead capture to support customer acquisition.',
      'Supporting marketing campaigns, email and content automation, and monitoring traffic and attribution metrics.',
    ],
    documentUrl: '/docs/aniivexx-offer-letter.pdf',
    documentLabel: 'View Offer Letter',
  },
];

export const aiTools = [
  { id: 'chatgpt', logo: '/ai-logos/chatgpt.svg', label: 'ChatGPT', use: 'Conversational AI assistant' },
  { id: 'gemini', logo: '/ai-logos/gemini.svg', label: 'Gemini AI', use: 'Google multimodal assistant' },
  { id: 'claude', logo: '/ai-logos/claude.svg', label: 'Claude AI', use: 'Coding & writing assistant' },
  { id: 'cursor', logo: '/ai-logos/cursor.svg', label: 'Cursor AI', use: 'AI-powered code editor' },
  { id: 'copilot', logo: '/ai-logos/copilot.svg', label: 'GitHub Copilot', use: 'In-editor code completion' },
  { id: 'perplexity', logo: '/ai-logos/perplexity.svg', label: 'Perplexity', use: 'AI search & research' },
  { id: 'gamma', icon: 'fa-solid fa-wand-magic-sparkles', label: 'Gamma AI', use: 'AI presentation builder' },
  { id: 'kaggle', logo: '/ai-logos/kaggle.svg', wide: true, label: 'Kaggle AI', use: 'Datasets & ML notebooks' },
  { id: 'bolt', icon: 'fa-solid fa-bolt', label: 'Bolt AI', use: 'AI full-stack app builder' },
];

export const contactInfo = [
  {
    id: 'phone',
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    display: '+91 7305366452',
    href: 'tel:+917305366452',
  },
  {
    id: 'email',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    display: 'tharunallu07@gmail.com',
    href: 'mailto:tharunallu07@gmail.com',
  },
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    display: 'Tharuniga N',
    href: 'https://linkedin.com',
    external: true,
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    display: 'Tharuniga60',
    href: 'https://github.com/Tharuniga60',
    external: true,
  },
];

export const socialLinks = [
  { id: 'linkedin', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'github', icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/Tharuniga60' },
  { id: 'email', icon: 'fa-solid fa-envelope', label: 'Gmail', href: 'mailto:tharunallu07@gmail.com' },
];
