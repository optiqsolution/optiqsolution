import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Rocket } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectInquiryForm {
  name: string;
  email: string;
  projectDescription: string;
}

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues: ProjectInquiryForm = {
  name: "",
  email: "",
  projectDescription: "",
};

export function ProjectInquiryModal({ isOpen, onClose }: ProjectInquiryModalProps) {
  const [formState, setFormState] = useState<ProjectInquiryForm>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/v1/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: `Project Inquiry:\n\n${formState.projectDescription}`,
          type: "project_inquiry"
        }),
      });

      if (response.ok) {
        setFormState(initialValues);
        onClose();
        alert(
          "Thank you for your project inquiry! We'll get back to you within 24 hours."
        );
      } else {
        throw new Error("Failed to send inquiry");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Something went wrong! Please contact us directly at contact@optiqsolution.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={cn(
              "relative w-full max-w-md mx-auto",
              "bg-card/95 backdrop-blur-xl border border-border/60 rounded-3xl",
              "shadow-2xl shadow-black/25 overflow-hidden"
            )}
          >
            {/* Header */}
            <div className="relative px-6 py-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-b border-border/40">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-accent/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Start Your Project</h2>
                  <p className="text-sm text-muted-foreground">Tell us about your vision</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "bg-background/50 border border-border/60",
                    "focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20",
                    "transition-colors duration-200",
                    "text-foreground placeholder:text-muted-foreground"
                  )}
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "bg-background/50 border border-border/60",
                    "focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20",
                    "transition-colors duration-200",
                    "text-foreground placeholder:text-muted-foreground"
                  )}
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Project Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  className={cn(
                    "w-full px-4 py-3 rounded-xl resize-none",
                    "bg-background/50 border border-border/60",
                    "focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20",
                    "transition-colors duration-200",
                    "text-foreground placeholder:text-muted-foreground"
                  )}
                  value={formState.projectDescription}
                  onChange={(e) =>
                    setFormState({ ...formState, projectDescription: e.target.value })
                  }
                />
              </div>

              <motion.div
                className="pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-xl",
                    "bg-gradient-to-r from-blue-500 to-purple-600",
                    "hover:from-blue-600 hover:to-purple-700",
                    "text-white font-medium",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200",
                    "shadow-lg shadow-blue-500/25"
                  )}
                >
                  {isSubmitting ? (
                    "Sending Inquiry..."
                  ) : (
                    <>
                      Send Project Inquiry
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>

            {/* Footer */}
            <div className="px-6 py-4 bg-muted/30 border-t border-border/40">
              <p className="text-xs text-muted-foreground text-center">
                We'll review your inquiry and get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}