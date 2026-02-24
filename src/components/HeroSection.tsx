import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Praveen Kumar <span className="gradient-text">Mandal</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            B.Tech Computer Science Student | Software Developer
          </p>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Jamshedpur, India</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Aspiring AI Product Engineer passionate about problem-solving and
            continuous learning. Seeking a dynamic role where I can apply my
            technical skills and contribute to innovative solutions.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>

            <a
              href="/PraveenResume.pdf"
              download
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PraveenKumarMandal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-mandal-7524302aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:praveenkumarmandal2003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border animate-pulse-glow">
              <img
                src="/images/profile1.png"
                alt="Praveen Kumar Mandal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 animate-float">
              <span className="text-sm font-mono text-primary">
                AI Product Engineer
              </span>
            </div>
            <div className="absolute -top-9 -right-9 bg-card border border-border rounded-xl px-4 py-2 animate-float">
              <span className="text-sm font-mono text-primary">
                Adaptibility
              </span>
            </div>
            
            <div className="absolute -top-6 -left-8 bg-card border border-border rounded-xl px-4 py-2 animate-float">
              <span className="text-sm font-mono text-primary">
                 Problem-Solving
              </span>
            </div>
            
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;