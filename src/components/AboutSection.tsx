import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Target } from "lucide-react";

const stats = [
  { icon: Code, label: "Tech Stack", value: "MERN" },
  { icon: Briefcase, label: "Internships", value: "2+" },
  { icon: GraduationCap, label: "CGPA", value: "8.59" },
  { icon: Target, label: "Projects", value: "4+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border aspect-[3/4] max-w-md mx-auto">
              <img
                src="/images/profile2.jpeg"
                alt="Praveen Kumar Mandal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <s.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I am a B.Tech Computer Science student at Gandhi Institute of Engineering and Technology, passionate about building intelligent, scalable, and user-centric digital products. As an aspiring AI Product Engineer, I focus on combining full-stack development with artificial intelligence to create real-world solutions that solve meaningful problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I have hands-on experience developing full-stack web applications using the MERN stack and integrating AI-powered features. I enjoy solving complex problems through code, designing seamless user experiences, and deploying scalable applications. My goal is to contribute to innovative, AI-powered solutions while continuously evolving as a developer who bridges the gap between cutting-edge technology and practical user needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
