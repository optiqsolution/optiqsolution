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
            CLARITY - PRECISION - INTELLIGENCE
          </h2>
          <p className="text-xl text-gray-600">
            We partner with service companies worldwide to sharpen their
            competitive edge through intelligent technology solutions. Our
            approach combines precise analysis, clear strategy, and smart
            implementation to transform operations and amplify efficiency. From
            established global service providers to emerging innovators, our
            data-driven methodology consistently delivers measurable impact and
            lasting value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard
            icon={<Lightbulb className="h-8 w-8" />}
            title="CLARITY"
            description="Bringing sharp focus to your service operations. We help you see through complexity, using advanced analytics and AI to illuminate the path forward. Our solutions provide crystal-clear insights that drive confident decision-making and operational excellence."
          />
          <ProcessCard
            icon={<Rocket className="h-8 w-8" />}
            title="PRECISION"
            description="Where accuracy meets innovation. We engineer tailored solutions that fit your exact needs, ensuring every technological implementation is precisely calibrated to optimize your service delivery and maximize ROI."
          />
          <ProcessCard
            icon={<Target className="h-8 w-8" />}
            title="INTELLIGENCE"
            description="Transforming service delivery through smart technology. Our AI-powered solutions and intelligent systems evolve with your business, continuously learning and adapting to deliver sustained competitive advantage in the global service landscape."
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
