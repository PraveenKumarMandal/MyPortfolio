import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Virtual Intern",
    company: "HighRadius",
    location: "Hyderabad, Telangana, India",
    period: "May 2025 – Jun 2025",
    highlights: [
      "Gained exposure to B2B lead generation, CRM tools, and client communication",
      "Learned how marketing data aids business decision-making in product-driven software roles",
      "Built cross-functional skills valuable in software product development and client-focused engineering",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Ardent Computech Pvt Ltd",
    location: "Kolkata, West Bengal, India",
    period: "Jun 2024 – Jul 2024",
    highlights: [
      "Built a full-featured e-commerce platform with product listings, auth, cart, and payments using MERN",
      "Gained hands-on experience in API development, database management, and frontend optimization",
      "Improved coding, debugging, and teamwork skills in a professional environment",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Where I've Worked</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Building2 size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
