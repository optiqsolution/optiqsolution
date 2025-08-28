import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { ProjectInquiryModal } from "@/components/ui/project-inquiry-modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
        className={cn(
          "fixed w-full z-50 top-0",
          "bg-background/95 backdrop-blur-xl border-b border-border/50"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
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
                <span className="text-xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  OptiqSolution
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Digital Innovation</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <NavLink href="#home" delay={0.3}>Home</NavLink>
                <NavLink href="#services" delay={0.35}>Services</NavLink>
                <NavLink href="#process" delay={0.4}>Process</NavLink>
                <NavLink href="#technologies" delay={0.45}>Technologies</NavLink>
                <NavLink href="#contact" delay={0.5}>Contact</NavLink>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 }}
                className="flex items-center space-x-4"
              >
                <ThemeToggle />
                <Button 
                  size="sm" 
                  onClick={() => setIsModalOpen(true)}
                  className={cn(
                    "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
                    "text-white border-0 shadow-lg shadow-blue-500/25"
                  )}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 rounded-xl bg-card/30 backdrop-blur-sm border border-border/40 transition-colors hover:bg-card/50"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
                className="lg:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
              >
                <div className="container mx-auto px-4 py-8">
                  <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                  <MobileNavLink href="#process" onClick={() => setIsOpen(false)}>Process</MobileNavLink>
                  <MobileNavLink href="#technologies" onClick={() => setIsOpen(false)}>Technologies</MobileNavLink>
                  <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                  
                  <div className="pt-4 px-4">
                    <Button 
                      className={cn(
                        "w-full bg-gradient-to-r from-blue-500 to-purple-600",
                        "text-white border-0 shadow-lg shadow-blue-500/25"
                      )}
                      onClick={() => {
                        setIsOpen(false);
                        setIsModalOpen(true);
                      }}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

function NavLink({
  href,
  children,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn(
        "relative text-sm font-medium text-muted-foreground",
        "hover:text-foreground transition-colors duration-300",
        "after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px]",
        "after:bg-gradient-to-r after:from-blue-500 after:to-purple-600",
        "after:transition-all after:duration-300 after:rounded-full",
        "hover:after:w-full"
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "block px-4 py-3 text-base font-medium text-muted-foreground",
        "hover:text-foreground hover:bg-accent/50 rounded-xl mx-4",
        "transition-colors duration-300"
      )}
      whileHover={{ x: 8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}