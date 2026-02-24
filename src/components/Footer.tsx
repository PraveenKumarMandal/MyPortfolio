import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Praveen Kumar Mandal. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart size={14} className="text-primary" /> using React
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/PraveenKumarMandal" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/praveen-mandal-7524302aa" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:praveenkumarmandal2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
