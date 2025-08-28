import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Database,
  ShoppingCart,
  BarChart3,
  Brain,
  ArrowUpRight,
  Zap,
  Shield,
  Rocket
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProjectInquiryModal } from "@/components/ui/project-inquiry-modal";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description: "Delivering cutting-edge, responsive websites with modern frameworks like React, Next.js, and Vue.js. We ensure your online presence stands out with exceptional performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"],
    gradient: "from-blue-500 to-cyan-600",
    bg: "from-blue-500/10 to-cyan-600/10",
    delay: 0.1,
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and Flutter. From iOS to Android, we create seamless mobile experiences that engage users and drive business growth.",
    features: ["Cross-Platform", "Native Performance", "Offline Support", "Push Notifications"],
    gradient: "from-purple-500 to-pink-600",
    bg: "from-purple-500/10 to-pink-600/10",
    delay: 0.15,
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to automate processes, enhance decision-making, and create intelligent applications that adapt to user needs and market trends.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    gradient: "from-green-500 to-emerald-600",
    bg: "from-green-500/10 to-emerald-600/10",
    delay: 0.2,
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Google Cloud, and Azure. We design, deploy, and manage cloud-native applications that grow with your business requirements.",
    features: ["Auto Scaling", "High Availability", "Cost Optimization", "Security"],
    gradient: "from-orange-500 to-red-600",
    bg: "from-orange-500/10 to-red-600/10",
    delay: 0.25,
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration, inventory management, and analytics. Built for performance, security, and seamless customer experiences.",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-500/10 to-purple-600/10",
    delay: 0.3,
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Design",
    description: "Robust database architecture and optimization for optimal performance. We design scalable data solutions that handle growth and ensure data integrity.",
    features: ["Performance Optimization", "Data Security", "Backup Solutions", "Scalable Architecture"],
    gradient: "from-teal-500 to-cyan-600",
    bg: "from-teal-500/10 to-cyan-600/10",
    delay: 0.35,
  },
];

const highlights = [
  {
    icon: <Zap className="h-6 w-6" />,
    text: "Lightning Fast Development",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.35,
  },
  {
    icon: <Shield className="h-6 w-6" />,
    text: "Enterprise-Grade Security",
    gradient: "from-green-500 to-emerald-600",
    delay: 0.4,
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    text: "Scalable Architecture",
    gradient: "from-blue-500 to-indigo-600",
    delay: 0.45,
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-600/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              <span className="text-sm font-medium text-muted-foreground">Our Services</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Digital Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drive Success
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              From concept to deployment, we provide comprehensive digital solutions that transform your business and accelerate growth in the digital landscape.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: highlight.delay }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-full",
                    "bg-card/30 backdrop-blur-sm border border-border/40"
                  )}
                >
                  <div className={cn(
                    "p-1 rounded-full bg-gradient-to-r",
                    highlight.gradient
                  )}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your digital goals.
              </p>
              <Button 
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className={cn(
                  "bg-gradient-to-r from-blue-500 to-purple-600",
                  "hover:from-blue-600 hover:to-purple-700",
                  "text-white border-0 shadow-lg shadow-blue-500/25",
                  "text-lg px-8 py-6 h-auto"
                )}
              >
                Get Started Today
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: service.delay,
        ease: [0.23, 0.86, 0.39, 0.96] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "group relative p-8 rounded-3xl overflow-hidden",
        "bg-card/30 backdrop-blur-sm",
        "border border-border/40",
        "hover:border-border/60 hover:bg-card/50",
        "transition-all duration-500"
      )}
    >
      {/* Background Gradient */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-br", service.bg,
        "transition-opacity duration-500"
      )} />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className={cn(
            "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl",
            "bg-gradient-to-br", service.gradient,
            "shadow-lg shadow-current/25"
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white">
            {service.icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/90 transition-colors">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: service.delay + (featureIndex * 0.1) 
              }}
              className="flex items-center text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors"
            >
              <div className={cn(
                "w-1.5 h-1.5 rounded-full mr-3",
                "bg-gradient-to-r", service.gradient
              )} />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}