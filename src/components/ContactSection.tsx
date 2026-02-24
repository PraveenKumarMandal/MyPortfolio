import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
    });
  }

  setSending(false);
};


  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-5 flex items-start gap-3">
              <Mail size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">Email</p>
                <a href="mailto:praveenkumarmandal2003@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  praveenkumarmandal2003@gmail.com
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">Location</p>
                <p className="text-sm text-muted-foreground">Jamshedpur, India</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-start gap-3">
              <Linkedin size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">LinkedIn</p>
                <a href="https://www.linkedin.com/in/praveen-mandal-7524302aa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  www.linkedin.com/in/praveen-mandal-7524302aa
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-start gap-3">
              <Github size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">GitHub</p>
                <a href="https://github.com/PraveenKumarMandal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  github.com/PraveenKumarMandal
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              maxLength={200}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
