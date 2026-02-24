import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Gandhi Institute of Engineering and Technology, Gunupur, Odisha",
    period: "2022 – 2026",
    score: "CGPA: 8.59",
  },
  {
    degree: "Intermediate (Science)",
    institution: "D.B.M.S Kadma High School, Jamshedpur",
    period: "2020 – 2022",
    score: "Score: 77%",
  },
  {
    degree: "Matriculation",
    institution: "Xavier School, Gamharia",
    period: "2018 – 2020",
    score: "Score: 85%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 mt-6" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="text-xs font-mono text-primary">{e.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{e.institution}</p>
                  <span className="text-sm font-mono text-primary">{e.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
