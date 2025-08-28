import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter, Mail, ArrowUpRight, MapPin, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Development", href: "#services" },
    { name: "AI Integration", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "E-commerce Solutions", href: "#services" },
    { name: "Database Design", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#process" },
    { name: "Our Process", href: "#process" },
    { name: "Technologies", href: "#technologies" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#", comingSoon: true },
    { name: "Case Studies", href: "#", comingSoon: true },
    { name: "Documentation", href: "#", comingSoon: true },
    { name: "Support", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  contact: [
    { 
      type: "email",
      value: "contact@optiqsolution.com",
      href: "mailto:contact@optiqsolution.com",
      icon: <Mail className="h-4 w-4" />
    },
    { 
      type: "phone",
      value: "+1 905 981 8019",
      href: "tel:+19059818019",
      icon: <Phone className="h-4 w-4" />
    },
    { 
      type: "address",
      value: "Remote • Global",
      href: "#",
      icon: <MapPin className="h-4 w-4" />
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/optiqsolution",
      icon: <Twitter className="h-5 w-5" />,
      gradient: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/optiqsolution",
      icon: <Linkedin className="h-5 w-5" />,
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      href: "https://github.com/optiqsolution",
      icon: <Github className="h-5 w-5" />,
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-300"
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Get the latest insights on digital innovation and technology trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={cn(
                  "relative p-2.5 rounded-xl",
                  "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
                  "shadow-lg shadow-blue-500/25"
                )}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Code2 className="h-6 w-6 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-sm" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  OptiqSolution
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Digital Innovation</span>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Empowering businesses through cutting-edge technology solutions. We transform ideas into 
              digital excellence with precision, clarity, and intelligence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {footerLinks.contact.map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-muted/30 group-hover:bg-blue-500/20 transition-colors">
                    {contact.icon}
                  </div>
                  <span>{contact.value}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "group relative p-3 rounded-xl",
                    "bg-card/30 backdrop-blur-sm border border-border/40",
                    "hover:border-border/60 hover:bg-card/50",
                    "transition-all duration-300", social.hoverColor
                  )}
                >
                  <div className="relative text-muted-foreground transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={link.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                    {link.comingSoon ? (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-500">
                        Coming Soon
                      </span>
                    ) : (
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    )}
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            "pt-8 border-t border-border/40",
            "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          )}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} OptiqSolution. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}