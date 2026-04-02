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
            className="px-4 py-2 rounded-full glass mb-6 inline-block text-secondary-500 font-medium"
          >
            Welcome to my universe 🚀
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Tushar Sharma</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
            3rd Year B.Tech CSE Student & <br className="hidden md:block"/> Aspiring Software Engineer.
          </h2>
          
          <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed">
            I craft beautiful, scalable, and dynamic digital experiences. 
            Blending logic with aesthetics to build the web of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,210,255,0.5)]">
              Let's Talk <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" className="px-8 py-4 rounded-full glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Decorative orbit animations */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-[-10%] inset-y-[-10%] border border-secondary-500/30 rounded-full border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-[-20%] inset-y-[-20%] border border-primary-500/20 rounded-full border-dashed"
            />
            
            {/* Profile Image container */}
            <div className="absolute inset-0 rounded-full overflow-hidden glass border-4 border-white/10 shadow-[0_0_30px_rgba(138,43,226,0.3)]">
              <Image 
                src="/profile-placeholder.jpg" 
                alt="Tushar Sharma" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
