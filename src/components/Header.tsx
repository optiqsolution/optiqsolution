import { motion } from "framer-motion";
import { Code2, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Optiq Solution</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <NavLink href="#services" mobile>
              Services
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact Us
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  mobile,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`text-gray-600 hover:text-blue-600 transition-colors ${
        mobile ? "block py-2" : ""
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
