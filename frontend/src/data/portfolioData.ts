import { ProfileData, Project, MicroProject, BlogPost, QuickNote } from "../types/portfolio";

export const profileData: ProfileData = {
  name: "Thiên",
  title: "Java Backend & Full-Stack Developer",
  subtitle: "Fourth-year Information Technology student at PTIT • GPA 3.60/4.00",
  bioParagraphs: [
    "I'm Thiên (Tạ Thanh Thiên) — a fourth-year Information Technology student at Posts and Telecommunications Institute of Technology (PTIT) passionate about building robust backend architectures and performant web applications.",
    "Specialized in Java, Spring Boot, Spring Data JPA, RESTful API design, MySQL, and modern frontend with ReactJS. Experienced in engineering end-to-end features including JWT authentication, role-based access control (RBAC), and machine learning prediction models.",
    "Currently seeking an Internship / Junior Software Engineer opportunity to contribute to real-world software systems and solve impactful engineering problems.",
  ],
  socials: {
    github: "https://github.com/ThienTa2005",
    x: "",
    linkedin: "https://www.linkedin.com/in/t%E1%BA%A1-thi%C3%AAn-a14a82390/",
    email: "thien24112005@gmail.com",
  },
};

export const selectedProjects: Project[] = [
  {
    id: "soundbook",
    number: "1",
    name: "Soundbook Social Network",
    category: "Full Stack",
    description:
      "Social audio & book discovery platform. Built comprehensive authentication & authorization (JWT, Google OAuth, token blacklist logout), session management, and custom Taste DNA recommendation logic analyzing user preferences.",
    domain: "github.com/ThienTa2005",
    url: "https://github.com/Vinhdiesel28/Soundbook-social-network-web",
    toneColor: "#4a6fd4",
    logoText: "SB",
    logoBg: "#4a6fd4",
    blogPostTitle: "View project architecture on GitHub",
    blogPostUrl: "https://github.com/Vinhdiesel28/Soundbook-social-network-web",
    previewSubtitle: "Team size: 3 • Authentication, Taste DNA Match Algorithm, Protected Routes",
    tags: ["ReactJS", "Spring Boot", "JWT", "MySQL", "Recommendation Algorithm"],
  },
  {
    id: "bookstore",
    number: "2",
    name: "Bookstore Web Platform",
    category: "E-Commerce",
    description:
      "Comprehensive bookstore management system featuring real-time staff support chat with Firebase, robust RESTful APIs for conversations, unread status badges, product inventory, and strict Role-Based Access Control (RBAC).",
    domain: "github.com/ThienTa2005",
    url: "https://github.com/TranTrongHung123/book-store",
    toneColor: "#0f8a7a",
    logoText: "BS",
    logoBg: "#0f8a7a",
    blogPostTitle: "Explore staff chat & API design",
    blogPostUrl: "https://github.com/longchunnn/bookstore",
    previewSubtitle: "Team size: 4 • Spring Boot, ReactJS, Firebase Realtime, MySQL",
    tags: ["Spring Boot", "ReactJS", "Firebase", "MySQL", "RESTful API"],
  },
  {
    id: "freshlink",
    number: "3",
    name: "FreshLink Web App",
    category: "Production",
    description:
      "Full-stack web application designed for fresh goods supply and distributor coordination. Deployed live with modern responsive UI and reliable backend data synchronization.",
    domain: "fresh-link-eight.vercel.app",
    url: "https://fresh-link-eight.vercel.app",
    toneColor: "#2d7a4f",
    logoText: "FL",
    logoBg: "#2d7a4f",
    blogPostTitle: "Explore repository on GitHub",
    blogPostUrl: "https://github.com/ThienTa2005/FreshLink",
    previewSubtitle: "Live on Vercel • Java Backend & Modern React Frontend",
    tags: ["Java", "React", "Vercel", "TailwindCSS"],
  },
  {
    id: "hospital",
    number: "4",
    name: "Hospital Web Management",
    category: "Enterprise",
    description:
      "Enterprise healthcare management web application built with Java JSP/Servlet and MySQL. Features appointment scheduling, patient medical history, staff portal, and database indexing for high efficiency.",
    domain: "github.com/ThienTa2005/Hospital-web",
    url: "https://github.com/ThienTa2005/Hospital-web",
    toneColor: "#c17a3a",
    logoText: "HW",
    logoBg: "#c17a3a",
    blogPostTitle: "View source on GitHub",
    blogPostUrl: "https://github.com/ThienTa2005/Hospital-web",
    previewSubtitle: "Java JSP/Servlet + MySQL Architecture",
    tags: ["Java", "JSP/Servlet", "MySQL", "MVC Pattern"],
  },
  {
    id: "sjc-predict",
    number: "5",
    name: "SJC Gold Price Predictor",
    category: "AI / ML",
    description:
      "Machine learning pipeline and time-series model for predicting SJC domestic gold price fluctuations with historical data analysis and predictive evaluation metrics.",
    domain: "github.com/ThienTa2005/SJC_Price_Predict_AI",
    url: "https://github.com/ThienTa2005/SJC_Price_Predict_AI",
    toneColor: "#eab308",
    logoText: "SJ",
    logoBg: "#eab308",
    blogPostTitle: "View prediction notebook & pipeline",
    blogPostUrl: "https://github.com/ThienTa2005/SJC_Price_Predict_AI",
    previewSubtitle: "Time Series Forecasting • Python, Scikit-learn, Pandas",
    tags: ["Python", "Machine Learning", "Time Series", "Data Analysis"],
  },
  {
    id: "amzn-predict",
    number: "6",
    name: "Amazon Stock Price AI",
    category: "AI / ML",
    description:
      "Financial market forecasting system modeling Amazon stock price patterns using automated feature extraction and regression techniques.",
    domain: "github.com/ThienTa2005/AMZN_Predict_AI",
    url: "https://github.com/ThienTa2005/AMZN_Predict_AI",
    toneColor: "#3b6ea8",
    logoText: "AZ",
    logoBg: "#3b6ea8",
    blogPostTitle: "View stock modeling on GitHub",
    blogPostUrl: "https://github.com/ThienTa2005/AMZN_Predict_AI",
    previewSubtitle: "Predictive Analytics • Python, Matplotlib, Machine Learning",
    tags: ["Python", "Financial Modeling", "Deep Learning"],
  },
  {
    id: "avocado-predict",
    number: "7",
    name: "Avocado Price Trend AI",
    category: "AI / ML",
    description:
      "Agricultural market trend intelligence and pricing regression model evaluating supply-demand elasticity across major geographic regions.",
    domain: "github.com/ThienTa2005/Avocado_Predict_AI",
    url: "https://github.com/ThienTa2005/Avocado_Predict_AI",
    toneColor: "#10b981",
    logoText: "AV",
    logoBg: "#10b981",
    blogPostTitle: "Explore dataset & model",
    blogPostUrl: "https://github.com/ThienTa2005/Avocado_Predict_AI",
    previewSubtitle: "Market Elasticity Analysis • Python & Jupyter",
    tags: ["Python", "Jupyter", "Data Science"],
  },
];

// export const alsoShippingProjects: MicroProject[] = [
//   {
//     name: "Hospital-web",
//     initials: "HW",
//     bg: "#b4532a",
//     url: "https://github.com/ThienTa2005/Hospital-web",
//     description: "Hospital Web Management System",
//   },
// ];

export const blogPosts: BlogPost[] = [
  {
    title: "Engineering Scalable RESTful APIs with Spring Boot and JWT",
    slug: "spring-boot-jwt-architecture",
    date: "Oct 2026",
    readTime: "4 min",
    category: "Backend",
    summary:
      "A deep dive into building stateless authentication with JWT, refresh token rotation, token blacklisting, and role-based route protection in Spring Boot.",
    url: "https://github.com/ThienTa2005",
    featured: true,
  },
  {
    title: "Taste DNA: Recommendation Logic from User Preference Analysis",
    slug: "taste-dna-recommendation",
    date: "Sep 2026",
    readTime: "3 min",
    category: "Algorithms",
    summary:
      "How we designed and calculated matching scores for the Soundbook platform based on interactive user taste profiles and behavioral data.",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "Real-time Support Chat with Spring Boot, Firebase & React",
    slug: "realtime-chat-architecture",
    date: "Aug 2026",
    readTime: "5 min",
    category: "Full Stack",
    summary:
      "Bridging relational databases with Firebase real-time listeners for live staff customer service, conversation tags, and unread badges.",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "Time-Series Forecasting for Financial Markets with Python",
    slug: "time-series-forecasting",
    date: "Jul 2026",
    readTime: "4 min",
    category: "AI / ML",
    summary:
      "Lessons learned building SJC gold price and Amazon stock prediction pipelines with Scikit-learn, moving averages, and Pandas.",
    url: "https://github.com/ThienTa2005",
  },
];

export const quickNotes: QuickNote[] = [
  {
    title: "Certificate in Algorithm Applications – Samsung & PTIT",
    date: "Certified",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "TOEIC 765/990 – Working proficiency in English",
    date: "Certified",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "NVIDIA Fundamentals of Deep Learning Certification",
    date: "Certified",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "Student of 5 Merits (Sinh viên 5 tốt)",
    date: "Honors",
    url: "https://github.com/ThienTa2005",
  },
  {
    title: "Third Prize of PTIT Young E-Business 2026",
    date: "Award",
    url: "https://github.com/ThienTa2005",
  },
];

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "https://github.com/ThienTa2005", external: true },
  { label: "CV (PDF)", href: "/cv.pdf", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/t%E1%BA%A1-thi%C3%AAn-a14a82390/", external: true },
];

export const footerColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "#projects" },
      { label: "About Me", href: "#about" },
      { label: "Curriculum Vitae (PDF)", href: "/cv.pdf" },
    ],
  },
  {
    title: "Featured Projects",
    links: [
      { label: "Soundbook Social Network", href: "https://github.com/ThienTa2005" },
      { label: "Bookstore Web App", href: "https://github.com/ThienTa2005" },
      { label: "FreshLink (Live)", href: "https://fresh-link-eight.vercel.app" },
      { label: "Hospital Management", href: "https://github.com/ThienTa2005/Hospital-web" },
      { label: "SJC Price Predict AI", href: "https://github.com/ThienTa2005/SJC_Price_Predict_AI" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub: @ThienTa2005", href: "https://github.com/ThienTa2005" },
      { label: "LinkedIn: Tạ Thiên", href: "https://www.linkedin.com/in/t%E1%BA%A1-thi%C3%AAn-a14a82390/" },
      { label: "Email: thien24112005@gmail.com", href: "mailto:thien24112005@gmail.com" },
    ],
  },
  {
    title: "Profile & AI",
    links: [
      { label: "Download CV (PDF)", href: "/cv.pdf" },
      { label: "llms.txt", href: "/llms.txt" },
      { label: "PTIT Information Tech", href: "https://ptit.edu.vn" },
    ],
  },
];
