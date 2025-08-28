import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative inline-flex h-10 w-10 shrink-0 cursor-pointer rounded-full",
        "border-2 border-white/[0.08] bg-white/[0.03] backdrop-blur-[2px]",
        "hover:bg-white/[0.05] transition-colors duration-300",
        "items-center justify-center"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-white/80" />
        ) : (
          <Sun className="h-5 w-5 text-white/80" />
        )}
      </motion.div>
    </motion.button>
  )
}