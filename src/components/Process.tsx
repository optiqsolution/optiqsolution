import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const processCards = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "CLARITY",
    description:
      "Bringing sharp focus to your service operations. We help you see through complexity, using advanced analytics and AI to illuminate the path forward. Our solutions provide crystal-clear insights that drive confident decision-making and operational excellence.",
    gradient: "from-amber-500/20 to-orange-600/20",
    iconGradient: "from-amber-500 to-orange-600",
    delay: 0.1,
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "PRECISION",
    description:
      "Where accuracy meets innovation. We engineer tailored solutions that fit your exact needs, ensuring every technological implementation is precisely calibrated to optimize your service delivery and maximize ROI.",
    gradient: "from-blue-500/20 to-cyan-600/20",
    iconGradient: "from-blue-500 to-cyan-600",
    delay: 0.2,
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "INTELLIGENCE",
    description:
      "Transforming service delivery through smart technology. Our AI-powered solutions and intelligent systems evolve with your business, continuously learning and adapting to deliver sustained competitive advantage in the global service landscape.",
    gradient: "from-violet-500/20 to-purple-600/20",
    iconGradient: "from-violet-500 to-purple-600",
    delay: 0.3,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
            <span className="text-sm font-medium text-muted-foreground">Our Approach</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              CLARITY - PRECISION - INTELLIGENCE
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We partner with service companies worldwide to sharpen their competitive edge through intelligent technology solutions. Our approach combines precise analysis, clear strategy, and smart implementation to transform operations and amplify efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processCards.map((card, index) => (
            <ProcessCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  icon,
  title,
  description,
  gradient,
  iconGradient,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={cn(
        "group relative p-8 rounded-3xl",
        "bg-card/50 backdrop-blur-sm",
        "border border-border/40",
        "hover:border-border/60 hover:bg-card/70",
        "transition-all duration-500",
        "overflow-hidden"
      )}
    >
      {/* Background Gradient */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-br", gradient,
        "transition-opacity duration-500"
      )} />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className={cn(
            "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl",
            "bg-gradient-to-br", iconGradient,
            "shadow-lg shadow-current/25"
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-foreground transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg" />
      </div>
    </motion.div>
  );
}