import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-b from-blue-50 to-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 min-h-[160px]">
            <Typewriter
              options={{
                strings: [
                  "Building the Future with Code",
                  "Transforming Ideas into Reality",
                  "Creating Digital Excellence",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            We transform innovative ideas into powerful digital solutions. From
            web apps to mobile experiences, we bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-10 py-5 rounded-lg flex items-center gap-3 text-xl font-semibold"
            >
              Start Your Project <ArrowRight className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg text-xl font-semibold"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
