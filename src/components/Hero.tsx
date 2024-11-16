import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Rocket, Target } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[144px]">
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
          <p className="text-xl text-gray-600 mb-10">
            We transform innovative ideas into powerful digital solutions. From
            web apps to mobile experiences, we bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="IDEATE"
              description="We facilitate you in shaping your ideas to ensure market fit and technical feasibility, giving you the competitive edge."
            />
            <ProcessCard
              icon={<Rocket className="h-8 w-8" />}
              title="INNOVATE"
              description="We don't just execute. We continue to innovate and show you creative ways of achieving your vision."
            />
            <ProcessCard
              icon={<Target className="h-8 w-8" />}
              title="REALIZE"
              description="We 'walk the talk'. We will be a partner in your journey from inception to realization and beyond."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-lg text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
