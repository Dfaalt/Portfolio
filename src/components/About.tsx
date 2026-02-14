import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "3.75", label: "GPA" },
];

const education = {
  degree: "Bachelor of Engineering",
  university: "Yogyakarta State University",
  period: "2021 - 2025",
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="floating-shape w-64 h-64 bg-accent top-20 -right-32 animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Profile Photo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto mb-6"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="shrink-0 relative"
          >
            {/* Animated background glow */}
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
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </motion.div>

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary via-transparent to-accent opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glass border */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 backdrop-blur-sm" />
            <div className="absolute -inset-0.5 rounded-full bg-background/80" />

            {/* Avatar with hover effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-primary/20">
                <AvatarImage
                  src="/Foto.jpg"
                  alt="Profile Photo"
                  className="object-cover object-[center_10%]"
                />
                <AvatarFallback className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  Dfaalt
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg text-center md:text-left leading-relaxed">
            Fresh graduate in Electrical Engineering from Yogyakarta State
            University with a focus on Control Systems, Automation, and Computer
            Engineering. Experienced in developing microcontroller-based systems
            and Internet of Things (IoT) solutions. I also have hands-on
            experience in web development using React.js, integrating frontend
            applications with backend APIs and modern web technologies.
            Currently seeking opportunities as a Web Developer, IoT Engineer,
            Embedded/Hardware Engineer, Control System Engineer, or Automation
            Engineer.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-card rounded-xl sm:rounded-2xl px-6 py-4 text-center glow-effect">
            <div className="text-sm font-medium text-foreground">
              {education.degree}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {education.university}
            </div>
            <div className="text-xs text-muted-foreground/70 mt-0.5">
              {education.period}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center glow-effect"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
