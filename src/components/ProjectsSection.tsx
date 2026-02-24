import { motion } from "framer-motion";
import { ExternalLink, Github, Leaf, Briefcase, Bot, BookOpen, ShieldCheck, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "CropCure",
    icon: Leaf,
    tech: ["Python", "Flask", "ML", "React"],
    description:
      "A CNN-based system for real-time potato leaf disease detection. Analyzes leaf images to identify diseases early, helping improve crop health. Built with a responsive React UI for easy image uploads and instant predictions.",
    github: "https://github.com/PraveenKumarMandal/CROPCURE",
    live: "https://cropcure-ai.netlify.app/",
  },
  {
    title: "Job & Internship Platform",
    icon: Briefcase,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description:
      "A full-stack platform for technical students, ensuring only tech-related jobs are listed. Students can create profiles, search/apply for roles, and track applications. Recruiters manage openings via a dedicated dashboard.",
    github: "https://github.com/PraveenKumarMandal/Job-and-Intership-Platform",
    live: "https://job-and-internship-platform.netlify.app/",
  },
  {
    title: "AI Desktop Assistant",
    icon: Bot,
    tech: ["Python", "Speech Recognition", "TTS"],
    description:
      "An AI-powered desktop assistant that performs voice-controlled tasks — executing system commands, opening apps, fetching web info, setting reminders, and responding to queries for a hands-free computing experience.",
    github: "#",
    live: "#",
  },
  {
    title: "E-Learning Platform",
    icon: BookOpen,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description:
      "A full-stack e-learning platform for interactive online learning. Users enroll in courses, watch video lectures, track progress, and access materials. Admins manage courses and users through a dashboard.",
    github: "https://github.com/PraveenKumarMandal/E-Learning",
    live: "#",
  },
  {
  title: "Intelligent Helmet Detection & Number Plate Recognition",
  icon: ShieldCheck,
  tech: ["Python", "OpenCV", "YOLO", "CNN", "Tesseract OCR", "Flask"],
  description:
    "An AI-powered traffic safety system that detects whether motorcyclists are wearing helmets and automatically recognizes vehicle number plates. The system uses computer vision and deep learning to identify violations in real time, helping authorities improve road safety, automate monitoring, and enforce traffic regulations efficiently.",
  github: "#",
  live: "#",
},
{
  title: "E-Commerce Web Application UI",
  icon: ShoppingCart,
  tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "REST API"],
  description:
    "A modern and responsive user interface for an e-commerce platform that enables users to browse products, view detailed information, add items to the cart, and complete purchases seamlessly. The UI focuses on clean design, smooth navigation, and mobile-friendly layouts to enhance user experience and simplify online shopping.",
  github: "#",
  live: "#",
},
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={p.live}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
