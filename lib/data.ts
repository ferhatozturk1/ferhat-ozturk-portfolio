import {
  Award,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from "lucide-react";

export const profile = {
  name: "Ferhat Öztürk",
  title: "Computer Engineering Student | Full Stack Developer | AI & Deep Learning Enthusiast",
  location: "Bursa, Türkiye",
  email: "ferrhat.ozturk@gmail.com",
  phone: "+90 534 209 2766",
  github: "https://github.com/ferhatozturk1",
  linkedin: "https://linkedin.com/in/ferhatozturk-dev",
  cvPath: "/cv/Ferhat_Ozturk_CV.pdf"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

export const heroBadges = [
  "Full Stack Developer",
  "AI & Deep Learning",
  "Computer Vision",
  "Cyber Security Learner",
  "TEKNOFEST 2025 Finalist"
];

export const aboutStats = [
  {
    label: "Education",
    value: "Computer Engineering, Çanakkale Onsekiz Mart University",
    icon: GraduationCap
  },
  { label: "Location", value: "Bursa, Türkiye", icon: MapPin },
  { label: "GPA", value: "2.87 / 4.00", icon: Award },
  { label: "Language", value: "English B1", icon: Sparkles },
  { label: "Graduation", value: "2026", icon: GraduationCap }
];

export const experience = {
  role: "Full Stack Developer Intern",
  company: "ENM Digital",
  location: "Manisa, Türkiye",
  date: "07/2025 - 09/2025",
  bullets: [
    "Developed scalable RESTful API architectures using Node.js and NestJS.",
    "Designed modern, component-based and responsive web interfaces using React.",
    "Used PostgreSQL for database design, data management and query optimization.",
    "Utilized Docker containerization for development environments.",
    "Used Git and GitHub for version control and team collaboration."
  ],
  technologies: ["Node.js", "NestJS", "React", "PostgreSQL", "Docker", "Git", "GitHub"]
};

export const projects = [
  {
    title: "QR Code Based Digital Attendance System",
    category: "Full Stack Web Application",
    date: "07/2025 - 09/2025",
    description:
      "A web-based attendance system that digitizes the traditional paper-based attendance process. Instructors can generate dynamic QR codes through a management panel, while students use a mobile-first scanning interface. The backend verifies scanned QR codes within seconds and saves attendance data to the database in real time.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "REST API", "QR Code Libraries"],
    href: null
  },
  {
    title: "AI-Based Mammography Tumor Detection System",
    category: "Artificial Intelligence / Medical Image Analysis",
    description:
      "An AI-based medical image analysis project focused on detecting tumors from mammography images. The project includes a preprocessing pipeline for raw DICOM medical images, literature review of CNN architectures, transfer learning and fine-tuning of pretrained models to improve detection performance.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "pydicom", "NumPy", "Transfer Learning", "CNN"],
    href: null
  },
  {
    title: "Autonomous Plant Disease Detection System",
    category: "Deep Learning / Computer Vision",
    description:
      "A deep learning system developed to detect plant diseases from leaf images. EfficientNetV2 and MobileNetV2 architectures were compared in terms of accuracy and processing speed. Transfer learning techniques were used to achieve strong results with limited datasets.",
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNetV2", "MobileNetV2", "Computer Vision"],
    href: null
  },
  {
    title: "YOLO-Based Mammography Mass Detection",
    category: "Computer Vision / YOLO",
    description:
      "A computer vision study focused on mass detection from mammography images in DICOM format. YOLO architecture was used for anomaly detection and segmentation-oriented medical image analysis.",
    technologies: ["YOLO", "OpenCV", "DICOM Processing", "Python"],
    href: null
  },
  {
    title: "TEKNOFEST 2025 AI Film Competition",
    category: "Generative AI / Prompt Engineering",
    description:
      "A finalist project in TEKNOFEST 2025 Artificial Intelligence Film Competition. The project focused on combining visual and textual content consistently using generative AI tools, managing the process from scenario design to visualization.",
    technologies: ["Prompt Engineering", "Generative AI", "Model Integration", "Visual Optimization"],
    href: null
  }
];

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: TerminalSquare,
    skills: ["Node.js", "NestJS", "REST API"]
  },
  {
    title: "Database & DevOps",
    icon: Database,
    skills: ["PostgreSQL", "Docker", "Git", "GitHub", "Postman"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: BrainCircuit,
    skills: ["Python", "Deep Learning", "CNN", "TensorFlow", "Keras", "OpenCV", "Image Processing", "Transfer Learning", "YOLO"]
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    skills: ["Secure Software Development", "Applied Penetration Testing", "Mobile Security Basics"]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL", "C++"]
  }
];

export type CertificateCategory = "AI & Machine Learning" | "Cyber Security" | "Achievement";

export const certificateFilters = ["All", "AI & Machine Learning", "Cyber Security", "Achievement"] as const;

export const certificates: Array<{
  title: string;
  institution: string;
  date: string;
  category: CertificateCategory;
  description: string;
}> = [
  {
    title: "TEKNOFEST 2025 Artificial Intelligence Film Competition - Finalist",
    institution: "T3 Foundation & Ministry of Industry and Technology",
    date: "2025",
    category: "Achievement",
    description: "Finalist recognition for a generative AI film project focused on scenario design and visual consistency."
  },
  {
    title: "Deep Learning & Image Processing Achievement Certificate",
    institution: "Presidency of the Republic of Türkiye Digital Transformation Office",
    date: "2024",
    category: "AI & Machine Learning",
    description: "Achievement certificate covering applied deep learning and image processing concepts."
  },
  {
    title: "YOLO ile Mamografi Görüntülerinden Kitle Tespiti Uygulaması",
    institution: "Presidency of the Republic of Türkiye Digital Transformation Office",
    date: "27 December 2024",
    category: "AI & Machine Learning",
    description: "Applied computer vision training focused on YOLO-based mass detection from mammography images."
  },
  {
    title: "Machine Learning",
    institution: "Presidency of the Republic of Türkiye Digital Transformation Office",
    date: "8 July - 12 August 2024",
    category: "AI & Machine Learning",
    description: "Machine learning program covering model development, evaluation and practical AI foundations."
  },
  {
    title: "Intermediate Machine Learning Workshop",
    institution: "BTK Academy",
    date: "26 August - 31 August 2024",
    category: "AI & Machine Learning",
    description: "30-hour workshop focused on intermediate machine learning workflows and applied exercises."
  },
  {
    title: "Deep Learning A-Z™: Hands-On Artificial Neural Networks / Python ile Derin Öğrenme",
    institution: "Udemy",
    date: "11 August 2024",
    category: "AI & Machine Learning",
    description: "10.5-hour course on practical neural networks and deep learning with Python."
  },
  {
    title: "Secure Software Development",
    institution: "BTK Academy",
    date: "19 June 2025",
    category: "Cyber Security",
    description: "Training on security-aware development practices and common application risks."
  },
  {
    title: "Mobile Security and Penetration Techniques",
    institution: "BTK Academy",
    date: "29 June 2025",
    category: "Cyber Security",
    description: "Introductory mobile security training covering testing basics and mobile threat surfaces."
  },
  {
    title: "Applied Penetration Testing",
    institution: "BTK Academy",
    date: "2 July 2025",
    category: "Cyber Security",
    description: "Applied penetration testing certificate focused on hands-on security assessment methods."
  }
];

export const education = {
  degree: "Computer Engineering - Bachelor’s Degree",
  school: "Çanakkale Onsekiz Mart University",
  date: "10/2022 - 06/2026",
  location: "Çanakkale, Türkiye",
  gpa: "2.87 / 4.00",
  status: "4th Year Student"
};

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
  { label: "GitHub", value: "github.com/ferhatozturk1", href: profile.github, icon: GitBranch },
  { label: "LinkedIn", value: "linkedin.com/in/ferhatozturk-dev", href: profile.linkedin, icon: Link }
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: GitBranch },
  { label: "LinkedIn", href: profile.linkedin, icon: Link },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

export const aboutCopy =
  "I am a 4th-year Computer Engineering student at Çanakkale Onsekiz Mart University. I develop projects in Full Stack Web Development using Node.js, NestJS, React and PostgreSQL, and I also work on Artificial Intelligence, Deep Learning and Computer Vision projects. I am passionate about building real-world software solutions, learning modern software architectures and improving myself as an engineer.";
