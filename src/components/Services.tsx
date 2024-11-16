import { motion } from 'framer-motion';
import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Smartphone,
  Store
} from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Modern, responsive websites built with React, Next.js, and other cutting-edge technologies.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs.'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment using AWS, Azure, or GCP.'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for your applications.'
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: 'E-commerce Solutions',
    description: 'Custom online stores with secure payment integration and inventory management.'
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Analytics Integration',
    description: 'Data tracking and visualization to help you make informed decisions.'
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI Integration',
    description: 'Implement AI and machine learning solutions to automate and enhance your business.'
  }
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
            We offer a comprehensive range of digital solutions to help your business
            thrive in the modern technological landscape.
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