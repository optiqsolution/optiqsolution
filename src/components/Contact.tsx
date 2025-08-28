import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IContactUsForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "contact@optiqsolution.com",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "+1 905 981 8019",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Remote • Global",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState<IContactUsForm>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("/api/v1/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      setFormState(initialValues);
      alert(
        "Thank you for contacting us. We have successfully sent your message to our team."
      );
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Something went wrong! Please contact us via contact@optiqsolution.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600" />
            <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "group relative p-6 rounded-2xl",
                    "bg-card/30 backdrop-blur-sm border border-border/40",
                    "hover:border-border/60 hover:bg-card/50",
                    "transition-all duration-300"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={cn(
                        "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                        "bg-gradient-to-br", info.gradient,
                        "shadow-lg shadow-current/25"
                      )}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {info.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          >
            <form
              onSubmit={handleSubmit}
              className={cn(
                "p-8 rounded-3xl",
                "bg-card/50 backdrop-blur-sm border border-border/40",
                "space-y-6"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-background/50 border border-border/60",
                      "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
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
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-background/50 border border-border/60",
                      "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
                      "transition-colors duration-200",
                      "text-foreground placeholder:text-muted-foreground"
                    )}
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Company Name
                </label>
                <input
                  type="text"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "bg-background/50 border border-border/60",
                    "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
                    "transition-colors duration-200",
                    "text-foreground placeholder:text-muted-foreground"
                  )}
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl resize-none",
                    "bg-background/50 border border-border/60",
                    "focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
                    "transition-colors duration-200",
                    "text-foreground placeholder:text-muted-foreground"
                  )}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl flex items-center justify-center gap-2",
                  "bg-gradient-to-r from-blue-600 to-violet-600",
                  "text-white font-medium",
                  "hover:from-blue-700 hover:to-violet-700",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-200",
                  "shadow-lg shadow-blue-500/25"
                )}
                type="submit"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}