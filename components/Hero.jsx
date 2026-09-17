"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full glass mb-6 inline-block text-secondary-500 font-medium text-sm md:text-base border border-secondary-500/30"
          >
            AI/ML Developer & Software Engineer 🚀
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Building Intelligent <br className="hidden sm:block"/> Solutions with <br />
            <span className="text-gradient">AI, Software & Cloud</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl">
            Computer Science Engineering Student passionate about creating practical AI-powered applications, backend APIs, and modern web solutions.
          </h2>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
             <a href="#projects" className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 rounded-full glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              Download Resume <Download size={20} />
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <a href="https://github.com/tusharsharma2905" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/tusharsharma29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors hover:scale-110 transform">
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
             <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-secondary-500 transition-colors underline underline-offset-4">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
            {/* Decorative orbit animations */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-[0%] inset-y-[0%] border border-secondary-500/20 rounded-full border-dashed scale-110"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-[0%] inset-y-[0%] border border-primary-500/30 rounded-full border-dashed scale-[1.25]"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-[0%] inset-y-[0%] border border-accent-500/10 rounded-full border-dashed scale-[1.4]"
            />
            
            <div className="absolute inset-0 rounded-full overflow-hidden glass border-4 border-white/10 shadow-[0_0_40px_rgba(138,43,226,0.4)] z-10">
              <Image 
                src="/tushar-photo.jpg" 
                alt="Tushar Sharma" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating tech badges (Optional visual flair) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity }} 
              className="absolute -top-4 -right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-secondary-500 z-20 shadow-lg border border-white/10"
            >
              Python
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, delay: 1 }} 
              className="absolute bottom-10 -left-6 glass px-3 py-1 rounded-full text-xs font-semibold text-primary-500 z-20 shadow-lg border border-white/10"
            >
              Generative AI
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Github({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function Linkedin({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
