"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Certifications() {
  const certifications = [
    { name: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud" },
    { name: "Essential Google Cloud Infrastructure: Foundation", issuer: "Google Cloud" },
    { name: "Essential Google Cloud Infrastructure: Core Services", issuer: "Google Cloud" },
    { name: "Elastic Google Cloud Infrastructure: Scaling and Automation", issuer: "Google Cloud" },
    { name: "Reliable Google Cloud Infrastructure: Design and Process", issuer: "Google Cloud" },
  ];

  return (
    <section id="certifications" className="py-24 relative z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Continuous learning and professional development validated by industry leaders.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 border-t-4 border-t-secondary-500">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10 border-b border-white/10 pb-8">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 overflow-hidden relative">
                {/* Fallback to text if GCP logo isn't available, ideally replace with GCP SVG */}
                 <div className="text-center">
                    <span className="text-[#4285F4] font-bold text-3xl">G</span>
                    <span className="text-[#EA4335] font-bold text-3xl">C</span>
                    <span className="text-[#FBBC05] font-bold text-3xl">P</span>
                 </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">5+ Google Cloud Certifications</h3>
                <p className="text-gray-400 text-lg">Demonstrating expertise in cloud infrastructure, core services, scaling, and automation on Google Cloud Platform.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors group"
                >
                  <CheckCircle2 size={20} className="text-secondary-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-gray-200 leading-snug">{cert.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
               <motion.div
                 whileHover={{ scale: 1.02 }}
                 className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full"
               >
                 <Award size={16} className="text-primary-500" /> Additional learning in AI/ML & Backend Tech
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
