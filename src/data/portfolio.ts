import { PersonalInfo, Education, SkillCategory, Experience, Project, Course, Language } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Muhamed Hussein Abd El-Azim",
  shortName: "MUHAMED HUSSEIN",
  title: "AI & Machine Learning Engineer",
  location: "Beni Suef, Egypt",
  email: "mohamedoail1113@gmail.com",
  phone: "01221828895",
  linkedInName: "Muhammed Hussein",
  heroHeading: "Building Intelligent Systems That Solve Real Problems.",
  heroDescription:
    "Motivated AI & ML Engineer with a solid foundation in Machine Learning, Deep Learning, and Computer Vision. Proficient in developing neural network models (CNNs, LSTMs, Transformers), data processing, and building automated workflows using modern AI tools and APIs. Dedicated to solving complex problems and deploying scalable intelligent systems.",
  heroMetadata: {
    location: "Beni Suef, Egypt",
    field: "Artificial Intelligence & Data Science",
    period: "2023 — 2027",
  },
  aboutBio: [
    "Motivated AI & ML Engineer with a solid foundation in Machine Learning, Deep Learning, and Computer Vision.",
    "Proficient in developing neural network models including CNNs, LSTMs, and Transformers, processing data, and building automated workflows using modern AI tools and APIs.",
    "Dedicated to solving complex problems and deploying scalable intelligent systems.",
  ],
  aboutTags: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "AI Automation",
    "Neural Networks",
  ],
};

export const education: Education = {
  institution: "Beni Suef National University",
  degree: "Bachelor’s Degree in Artificial Intelligence & Data Science",
  faculty: "Faculty of Computers and Artificial Intelligence",
  period: "2023 — 2027",
  location: "Egypt",
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ml-dl",
    title: "MACHINE LEARNING & DEEP LEARNING",
    accent: "blue",
    skills: [
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Transformers",
      "LSTMs",
      "CNNs",
    ],
  },
  {
    id: "ai-auto",
    title: "AI & AUTOMATION",
    accent: "purple",
    skills: [
      "Workflow Automation",
      "OpenAI API",
      "n8n",
      "UiPath",
    ],
  },
  {
    id: "prog-tools",
    title: "PROGRAMMING & TOOLS",
    accent: "cyan",
    skills: [
      "Python",
      "C++",
      "SQL",
      "Git/GitHub",
      "VS Code",
      "Docker",
      "Anaconda",
    ],
  },
  {
    id: "data-proc",
    title: "DATA PROCESSING & ANALYTICS",
    accent: "green",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    id: "soft-skills",
    title: "SOFT SKILLS",
    accent: "orange",
    skills: [
      "Problem-Solving",
      "Critical Thinking",
      "Teamwork",
      "Technical Communication",
      "Fast Learner",
      "Adaptable",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "nti-nlp-trainee",
    company: "National Telecommunication Institute (NTI)",
    role: "Natural Language Processing (NLP) Trainee",
    period: "06/2026 — 07/2026",
    description:
      "Completed 120 hours of hands-on training focused on NLP architectures, text preprocessing, and deep learning models.",
    responsibilities: [
      "Developed and evaluated text classification and sentiment analysis pipelines using Python, TensorFlow, and Transformers.",
      "Applied feature extraction and tokenization techniques to optimize model accuracy on real-world text datasets.",
    ],
    technologies: ["Python", "TensorFlow", "Transformers", "NLP", "Deep Learning"],
    hoursBadge: "120 HOURS",
  },
  {
    id: "iti-elearning-trainee",
    company: "Information Technology Institute (ITI)",
    role: "e-Learning & AI Automation Trainee",
    period: "07/2026 — 08/2026",
    responsibilities: [
      "Applied machine learning and workflow automation techniques to build interactive e-learning solutions.",
      "Integrated Python scripts and external APIs to streamline data processing and system workflows.",
    ],
    technologies: ["Python", "Machine Learning", "Workflow Automation", "APIs"],
  },
];

export const projects: Project[] = [
  {
    id: "flight-planner",
    slug: "flight-itinerary-route-planner",
    number: "01",
    title: "Flight Itinerary & Route Planner",
    category: "Machine Learning & Search Optimization Project",
    date: "02/2026 — 03/2026",
    description:
      "Built an optimal flight route planner in Python using A* search algorithms and an interactive Tkinter GUI.",
    overview:
      "Built an optimal flight route planner in Python using A* search algorithms and an interactive Tkinter GUI.",
    technologies: ["Python", "A* Search Algorithm", "Tkinter"],
    accentColor: "cyan",
    visualType: "route-planner",
    githubPlaceholder: "https://github.com/MuhamedHussien7/flight-itinerary-route-planner",
  },
  {
    id: "customer-support-ai",
    slug: "customer-support-ai-agent",
    number: "02",
    title: "Customer Support AI Agent with n8n & OpenAI",
    category: "AI & Workflow Automation Project",
    date: "06/2026 — 07/2026",
    description:
      "Built an automated AI customer support workflow using n8n and OpenAI API to analyze customer inquiries and generate responses.",
    overview:
      "Built an automated AI customer support workflow using n8n and OpenAI API to analyze customer inquiries and generate responses.",
    technologies: ["n8n", "OpenAI API", "AI", "Workflow Automation"],
    accentColor: "purple",
    visualType: "support-agent",
    githubPlaceholder: "https://github.com/MuhamedHussien7/customer-support-ai-agent",
  },
  {
    id: "sentiment-classifier",
    slug: "deep-learning-sentiment-classifier",
    number: "03",
    title: "Deep Learning Sentiment Analysis & Text Classifier",
    category: "NLP & Machine Learning Project",
    date: "07/2026 — 08/2026",
    description:
      "Developed a text classification model using Python, TensorFlow, and Transformers to evaluate customer feedback.",
    overview:
      "Developed a text classification model using Python, TensorFlow, and Transformers to evaluate customer feedback.",
    technologies: ["Python", "TensorFlow", "Transformers", "NLP", "Deep Learning"],
    accentColor: "orange",
    visualType: "sentiment-pipeline",
    githubPlaceholder: "https://github.com/MuhamedHussien7/deep-learning-sentiment-classifier",
  },
];

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Python for Machine Learning & Data Analysis",
    provider: "Digital Egypt Pioneers Initiative (DEPI) – MCIT",
    date: "01/2026 — 02/2026",
    description:
      "Focused on Python fundamentals, functional programming, and data manipulation libraries.",
    status: "COMPLETED",
  },
  {
    id: "course-2",
    title: "AI Automation Diploma",
    provider: "Route IT Training Center",
    date: "03/2026 — 06/2026",
    achievement: "Top Achiever",
    status: "COMPLETED",
  },
  {
    id: "course-3",
    title: "Natural Language Processing (NLP)",
    provider: "National Telecommunication Institute (NTI) & ITIDA",
    date: "06/2026 — 07/2026",
    details: "120 Hours",
    score: "95%",
    status: "COMPLETED",
  },
  {
    id: "course-4",
    title: "Microsoft Machine Learning Engineer",
    provider:
      "Digital Egypt Pioneers Initiative (DEPI) – Ministry of Communications and Information Technology (MCIT)",
    date: "07/2026 — 03/2027",
    status: "IN PROGRESS",
  },
];

export const languages: Language[] = [
  {
    language: "Arabic",
    proficiency: "Native",
  },
  {
    language: "English",
    proficiency: "Very Good",
  },
];

export const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/muhammed-hussein-",
  github: "https://github.com/MuhamedHussien7",
  email: "mohamedoail1113@gmail.com",
  phone: "01221828895",
};
