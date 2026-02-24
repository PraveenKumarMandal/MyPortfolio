import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Spring Boot", level: 45 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Flask", level: 50 },
      { name: "OpenCV", level: 55 },
      { name: "DSA", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold mb-4 text-lg">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
