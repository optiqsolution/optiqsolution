import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconCloudDemo } from "@/components/DemoInteractiveIconCloud";
import { ProjectInquiryModal } from "@/components/ui/project-inquiry-modal";
import { useState } from "react";

function DemoHeroGeometric() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-foreground">New Platform Launch</span>
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" />
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Elevate Your
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                                Digital Vision
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            Transform your business with cutting-edge technology solutions. 
                            We deliver <span className="text-blue-500 font-semibold">precision</span>, 
                            <span className="text-purple-500 font-semibold"> clarity</span>, and 
                            <span className="text-pink-500 font-semibold"> intelligence</span> in every project.
                        </motion.p>


                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex justify-center lg:justify-start mb-8"
                        >
                            <Button 
                                size="lg"
                                onClick={() => setIsModalOpen(true)}
                                className={cn(
                                    "bg-gradient-to-r from-blue-500 to-purple-600",
                                    "hover:from-blue-600 hover:to-purple-700",
                                    "text-white border-0 shadow-lg shadow-blue-500/25",
                                    "text-lg px-8 py-6 h-auto"
                                )}
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>

                        {/* PromptCache Announcement */}
                        <motion.a
                            href="https://promptcache.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className={cn(
                                "inline-flex items-center gap-3 px-6 py-3 rounded-xl",
                                "bg-gradient-to-r from-orange-500/10 to-pink-500/10",
                                "border border-orange-500/20 backdrop-blur-sm",
                                "hover:from-orange-500/20 hover:to-pink-500/20 hover:border-orange-500/30",
                                "transition-all duration-300 group"
                            )}
                        >
                            <Zap className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-semibold text-foreground">New: PromptCache</span>
                                <span className="text-xs text-muted-foreground">Advanced prompt management platform</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                    {/* Right Visual - Interactive Icon Cloud */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative"
                            >
                                <IconCloudDemo />
                                
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl -z-10" />
                            </motion.div>

                            {/* Floating Technology Labels */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 sm:-top-4 left-4 sm:left-8 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                            >
                                <span className="text-xs font-semibold text-white">React</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-2 sm:-top-4 right-4 sm:right-8 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg"
                            >
                                <span className="text-xs font-semibold text-white">AWS</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 15, -5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute -bottom-2 sm:-bottom-4 left-4 sm:left-8 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 shadow-lg"
                            >
                                <span className="text-xs font-semibold text-white">AI/ML</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [15, -5, 15] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-2 sm:-bottom-4 right-4 sm:right-8 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 shadow-lg"
                            >
                                <span className="text-xs font-semibold text-white">Node.js</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-border/40 flex justify-center p-1"
                >
                    <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
                </motion.div>
            </motion.div>
            </section>

            {/* Project Inquiry Modal */}
            <ProjectInquiryModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export { DemoHeroGeometric };