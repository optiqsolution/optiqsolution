import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript", 
  "react",
  "nextdotjs",
  "vuedotjs",
  "angular",
  "nodedotjs",
  "express",
  "python",
  "django",
  "fastapi",
  "amazonwebservices",
  "googlecloud",
  "microsoftazure",
  "docker",
  "kubernetes",
  "postgresql",
  "mongodb",
  "redis",
  "firebase",
  "supabase",
  "vercel",
  "netlify",
  "git",
  "github",
  "gitlab",
  "figma",
  "tailwindcss",
  "sass",
  "webpack",
  "vite",
  "jest",
  "cypress",
  "tensorflow",
  "pytorch",
  "openai"
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full w-full aspect-square max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm px-8 sm:px-12 lg:px-20 pb-8 sm:pb-12 lg:pb-20 pt-4 sm:pt-6 lg:pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}