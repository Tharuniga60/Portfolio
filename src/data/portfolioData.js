// ==========================================================================
//  PORTFOLIO DATA — THARUNIGA N
//  All hardcoded content extracted from index.html
// ==========================================================================

export const stats = [
  { target: 210, suffix: '+', label: 'LeetCode Problems', type: 'int' },
  { target: 310, suffix: '+', label: 'GFG Problems', type: 'int' },
  { target: 8.76, suffix: '', label: 'Current CGPA', type: 'float' },
  { target: 4, suffix: '+', label: 'Major Projects', type: 'int' },
];

export const skills = {
  languages: {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'Java', percent: 90 },
      { name: 'C++', percent: 85 },
      { name: 'Python', percent: 80 },
      { name: 'C', percent: 75 },
      { name: 'JavaScript', percent: 75 },
    ],
  },
  web: {
    title: 'Web & Database',
    icon: 'fa-solid fa-globe',
    items: [
      { name: 'HTML5 & CSS3', percent: 90 },
      { name: 'Bootstrap 5', percent: 85 },
      { name: 'React.js', percent: 70 },
      { name: 'Node.js / Express', percent: 65 },
      { name: 'MySQL / PostgreSQL', percent: 80 },
    ],
  },
  tools: {
    title: 'Libraries & Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    libraries: [
      { name: 'NumPy & Pandas', percent: 80 },
      { name: 'Matplotlib & Scikit-Learn', percent: 75 },
    ],
    badges: ['VS Code', 'Git', 'GitHub', 'Firebase', 'Canva', 'Antigravity', 'Google Colab'],
  },
};

export const projects = [
  {
    id: 'crud-platform',
    icon: 'fa-solid fa-server',
    title: 'CRUD Platform',
    desc: 'A full-stack Java application implementing standard Create, Read, Update, and Delete operations with robust MySQL backend integration.',
    highlights: [
      'Secure user registration and token-based authentication system.',
      'Efficient database schema design with normalized relations in MySQL.',
      'Clean interface with transactional operations in real-time.',
    ],
    tags: ['Java', 'MySQL', 'JDBC', 'HTML/CSS'],
    githubUrl: 'https://github.com/Tharuniga60',
    liveUrl: null,
  },
  {
    id: 'os-scheduler',
    icon: 'fa-solid fa-microchip',
    title: 'OS Scheduling Simulator',
    desc: 'Interactive browser-based simulator implementing standard CPU Scheduling algorithms and deadlock prevention mechanics.',
    highlights: [
      'Simulates FCFS, SJF, Priority, and Round Robin scheduling.',
      "Visualizes Banker's Algorithm with step-by-step deadlock check paths.",
      'Gantt charts generated dynamically using custom canvas nodes.',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
    githubUrl: 'https://github.com/Tharuniga60',
    liveUrl: 'https://vercel.com',
  },
  {
    id: 'salinity-system',
    icon: 'fa-solid fa-flask-water',
    title: 'Smart Salinity Test & Alert System',
    desc: 'An IoT solution measuring water Total Dissolved Solids (TDS) levels and generating alarms based on configured threshold ranges.',
    highlights: [
      'Integrated salinity sensors with microcontroller hardware.',
      'Programmed automatic threshold alert triggers using C-script logic.',
      'Real-time telemetry log storage and data transmission pipelines.',
    ],
    tags: ['IoT Hardware', 'C++', 'Sensors', 'Embedded'],
    githubUrl: 'https://github.com/Tharuniga60',
    liveUrl: null,
  },
  {
    id: 'deforestation-ml',
    icon: 'fa-solid fa-chart-line',
    title: 'Deforestation Analysis using ML',
    desc: 'Python-based Machine Learning analysis exploring global forest trends, deforestation rates, and predictive models.',
    highlights: [
      'Wrangled multi-decade forest metrics datasets with NumPy and Pandas.',
      'Generated trend plots and correlation maps via Matplotlib & Seaborn.',
      'Trained regression pipelines to forecast deforestation risk indices.',
    ],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
    githubUrl: 'https://github.com/Tharuniga60',
    liveUrl: null,
  },
];

export const achievements = [
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
    detail: '210+ Problems Solved',
    url: 'https://leetcode.com/',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'gfg',
    icon: 'fa-solid fa-graduation-cap',
    name: 'GeeksforGeeks',
    detail: '310+ Problems Solved',
    url: 'https://www.geeksforgeeks.org/',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'hackerrank',
    icon: 'fa-brands fa-hackerrank',
    name: 'HackerRank',
    detail: 'Active Solver',
    url: 'https://www.hackerrank.com/',
    colClass: 'col-lg-4 col-md-6',
  },
  {
    id: 'codeforces',
    icon: 'fa-solid fa-chart-simple',
    name: 'Codeforces',
    detail: 'Problem Solving Practice',
    url: 'https://codeforces.com/',
    colClass: 'col-lg-6 col-md-6',
  },
  {
    id: 'cses',
    icon: 'fa-solid fa-terminal',
    name: 'CSES Problem Set',
    detail: 'Core Algorithm Drills',
    url: 'https://cses.fi/',
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
      'Current Academic Performance: <strong>8.76 CGPA</strong>',
      'Active IT Association Executive Member',
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
  },
];

export const aiTools = [
  { id: 'chatgpt', icon: 'fa-solid fa-bolt', label: 'ChatGPT' },
  { id: 'gemini', icon: 'fa-solid fa-sparkles', label: 'Gemini AI' },
  { id: 'claude', icon: 'fa-solid fa-brain', label: 'Claude AI' },
  { id: 'cursor', icon: 'fa-solid fa-wand-magic-sparkles', label: 'Cursor AI' },
  { id: 'copilot', icon: 'fa-brands fa-github-alt', label: 'GitHub Copilot' },
  { id: 'perplexity', icon: 'fa-solid fa-magnifying-glass', label: 'Perplexity' },
  { id: 'gamma', icon: 'fa-solid fa-file-powerpoint', label: 'Gamma AI' },
  { id: 'kaggle', icon: 'fa-solid fa-chart-line', label: 'Kaggle AI' },
  { id: 'bolt', icon: 'fa-solid fa-laptop-code', label: 'Bolt AI' },
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
