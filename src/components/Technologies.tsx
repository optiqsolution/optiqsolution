import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// source: https://techicons.dev/icons

const technologies = [
  { 
    name: "React", 
    icon: "/tech/react.svg",
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-500/10 to-blue-600/10"
  },
  { 
    name: "TypeScript", 
    icon: "/tech/typescript.svg",
    gradient: "from-blue-600 to-indigo-700",
    bg: "from-blue-600/10 to-indigo-700/10"
  },
  { 
    name: "Spring Boot", 
    icon: "/tech/springboot.svg",
    gradient: "from-green-500 to-emerald-600",
    bg: "from-green-500/10 to-emerald-600/10"
  },
  { 
    name: "Nest.js", 
    icon: "/tech/nestjs.svg",
    gradient: "from-red-500 to-pink-600",
    bg: "from-red-500/10 to-pink-600/10"
  },
  { 
    name: "Python", 
    icon: "/tech/python.svg",
    gradient: "from-yellow-500 to-blue-600",
    bg: "from-yellow-500/10 to-blue-600/10"
  },
  { 
    name: "JavaScript", 
    icon: "/tech/javascript.svg",
    gradient: "from-yellow-500 to-orange-600",
    bg: "from-yellow-500/10 to-orange-600/10"
  },
  { 
    name: "Next.js", 
    icon: "/tech/nextjs.svg",
    gradient: "from-gray-800 to-gray-900",
    bg: "from-gray-800/10 to-gray-900/10"
  },
  { 
    name: "Docker", 
    icon: "/tech/docker.svg",
    gradient: "from-blue-600 to-cyan-700",
    bg: "from-blue-600/10 to-cyan-700/10"
  },
  { 
    name: "AWS", 
    icon: "/tech/aws.svg",
    gradient: "from-orange-500 to-yellow-600",
    bg: "from-orange-500/10 to-yellow-600/10"
  },
  { 
    name: "Kubernetes", 
    icon: "/tech/k8s.svg",
    gradient: "from-blue-600 to-indigo-700",
    bg: "from-blue-600/10 to-indigo-700/10"
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600" />
            <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Technologies We Master
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We stay at the forefront of technology, utilizing the latest tools and frameworks to deliver exceptional solutions that scale with your business.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.23, 0.86, 0.39, 0.96] 
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-card/30 backdrop-blur-sm",
                "border border-border/40",
                "hover:border-border/60 hover:bg-card/50",
                "transition-all duration-300",
                "flex flex-col items-center justify-center aspect-square"
              )}
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl",
                "bg-gradient-to-br", tech.bg,
                "transition-opacity duration-300"
              )} />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  className="w-12 h-12 mb-3 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
                  />
                </motion.div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}