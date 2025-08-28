import { InteractiveBentoGrid } from "@/components/ui/interactive-bento-grid";

const services = [
  {
    title: "Web Development",
    description: "Delivering cutting-edge, responsive websites with technologies like React, Next.js",
    type: "analytics" as const,
    gradient: "from-blue-500/20 to-cyan-600/20",
  },
  {
    title: "Mobile Development", 
    description: "Creating native and cross-platform mobile applications for exceptional user experiences",
    type: "wave" as const,
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions crafted to align with your unique business requirements",
    type: "geometric" as const,
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructures using AWS, Azure, and GCP",
    type: "network" as const,
    gradient: "from-orange-500/20 to-red-600/20",
  },
  {
    title: "Database Design",
    description: "Robust database architectures for efficiency, reliability, and scalability",
    type: "analytics" as const,
    gradient: "from-indigo-500/20 to-blue-600/20",
  },
  {
    title: "E-commerce Solutions",
    description: "Feature-rich online stores with secure payment integrations",
    type: "wave" as const,
    gradient: "from-pink-500/20 to-rose-600/20",
  },
  {
    title: "Analytics Integration",
    description: "Transform data into actionable insights with advanced tracking and visualization",
    type: "geometric" as const,
    gradient: "from-amber-500/20 to-yellow-600/20",
  },
  {
    title: "AI Integration",
    description: "Cutting-edge AI and machine learning solutions to automate and innovate",
    type: "network" as const,
    gradient: "from-teal-500/20 to-green-600/20",
  },
];

function DemoInteractiveBentoGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <InteractiveBentoGrid items={services} />
    </div>
  );
}

export { DemoInteractiveBentoGrid };