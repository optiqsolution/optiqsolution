import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            IDEATE - INNOVATE - REALIZE
          </h2>
          <p className="text-xl text-gray-600">
            We collaborate with our customers to unlock exceptional value by
            guiding them through the strategic selection of cutting-edge
            technologies to bring their vision to life. From concept to
            execution, our transparent and agile delivery model has consistently
            delivered outstanding results for both Fortune 500 companies and
            innovative startups. Let us help make your next success story a
            reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard
            icon={<Lightbulb className="h-8 w-8" />}
            title="IDEATE"
            description="Empowering your vision with cutting-edge expertise. Together, we refine your concepts, ensuring market relevance and technical feasibility to provide you with a winning edge in the competitive landscape."
          />
          <ProcessCard
            icon={<Rocket className="h-8 w-8" />}
            title="INNOVATE"
            description="Beyond execution lies transformation. We relentlessly innovate to uncover creative solutions, ensuring your vision evolves into groundbreaking realities."
          />
          <ProcessCard
            icon={<Target className="h-8 w-8" />}
            title="REALIZE"
            description="From vision to value, we’re your strategic partner in every step. Together, we bring your ideas to life, ensuring sustained success beyond realization."
          />
        </div>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
