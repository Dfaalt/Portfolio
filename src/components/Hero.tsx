import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const typingTexts = ["Electrical Engineering", "Computer Engineering"];

const Hero = () => {
  const { displayText } = useTypingEffect({
    texts: typingTexts,
    typingSpeed: 100,
    deletingSpeed: 60,
    pauseDuration: 2000,
  });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-bg pt-24 sm:pt-32 md:pt-36 lg:pt-20 pb-16"
    >
      {/* Floating Shapes */}
      <div className="floating-shape w-48 sm:w-72 h-48 sm:h-72 bg-primary -top-20 -left-20 animate-float" />
      <div className="floating-shape w-64 sm:w-96 h-64 sm:h-96 bg-accent -bottom-32 -right-32 animate-float-delay" />
      <div className="floating-shape w-32 sm:w-48 h-32 sm:h-48 bg-primary top-1/3 right-1/4 animate-pulse-glow" />

      <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Open to Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight"
            >
              Hi, I'm <span className="gradient-text">Ilham Maulana</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-muted-foreground"
            >
              <span className="text-primary">{displayText}</span>
              <span className="text-primary animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Engineering fast, elegant, and scalable web applications for the
              modern digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
            >
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Dfaalt",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/ilham-maulana1101",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="shrink-0 relative"
          >
            {/* Animated background rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-accent to-primary opacity-30 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "120%",
                height: "120%",
                left: "-10%",
                top: "-10%",
              }}
            />

            {/* Orbiting dots */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </motion.div>

            {/* Hexagonal frame effect */}
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-3 sm:-inset-4 rounded-full bg-linear-to-tr from-primary via-transparent to-accent opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Glass border */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-linear-to-br from-primary/40 via-accent/20 to-primary/40 backdrop-blur-sm" />

              {/* Inner border */}
              <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-background/80" />

              {/* Profile image with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-primary/20">
                  <AvatarImage
                    src="/Foto.webp"
                    alt="Profile Photo"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-accent text-primary-foreground">
                    Dfaalt
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          {/* <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
