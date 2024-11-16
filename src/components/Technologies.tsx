import { motion } from "framer-motion";

// source: https://techicons.dev/icons

const technologies = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Springboot", icon: "/tech/springboot.svg" },
  { name: "Nest.js", icon: "/tech/nestjs.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "AWS", icon: "/tech/aws.svg" },
  { name: "Kubernetes", icon: "/tech/k8s.svg" },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technologies We Master</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stay at the forefront of technology, utilizing the latest tools
            and frameworks to deliver exceptional solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{
              x: [0, -1035],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-12 py-8"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[150px]"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="text-gray-700 font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
