import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Dfaalt", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ilham-maulana1101",
    label: "LinkedIn",
  },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text order-1 md:order-1"
          >
            Portfolio
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 order-2 md:order-2"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm text-center order-3 md:order-3"
          >
            © {new Date().getFullYear()} Dfaalt. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
