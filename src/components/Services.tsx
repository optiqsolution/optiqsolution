import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Smartphone,
  Store,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Delivering cutting-edge, responsive websites with technologies like React, Next.js, and more, ensuring your online presence stands out and performs flawlessly.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description:
      "Delivering cutting-edge, responsive websites with technologies like React, Next.js, and more, ensuring your online presence stands out and performs flawlessly.",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Custom Software",
    description:
      "Creating tailored software solutions meticulously crafted to align with your unique business requirements and drive growth.",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description:
      "Designing scalable, secure cloud infrastructures using AWS, Azure, and GCP to power your digital transformation.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Design",
    description:
      "Optimizing your applications with robust database architectures for efficiency, reliability, and scalability.",
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description:
      "Building feature-rich online stores with secure payment integrations and streamlined inventory management for smooth operations.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Analytics Integration",
    description:
      "Transforming data into actionable insights with advanced tracking and visualization tools to guide smarter decisions.",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Integration",
    description:
      "Implementing cutting-edge AI and machine learning solutions to automate, innovate, and elevate your business processes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            We offer a comprehensive range of digital solutions to help your
            business thrive in the modern technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
