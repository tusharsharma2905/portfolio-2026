"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AI & Web Development Intern",
      company: "UDAAN Society",
      date: "July 2026 – Present",
      description: [
        "Developing and integrating the UDAAN Saathi AI chatbot for the organization's website to provide context-aware conversational responses.",
        "Building a knowledge-based AI assistant focused on services, initiatives, blood donation, volunteering, and healthcare using Google Gemini API.",
        "Developing and integrating backend APIs using Django and FastAPI with response caching and robust AI application architecture.",
        "Contributing to blood donation and request tracking functionality involving Donor Identification Numbers (DIN) and Request Identification Numbers (RIN).",
        "Improving the integration between AI services and the Django web application for seamless user experience."
      ],
      tech: ["Django", "FastAPI", "Python", "Google Gemini API", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#030014] border-2 border-secondary-500 flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,210,255,0.8)] group-hover:scale-110 transition-all z-10">
                  <Briefcase size={14} className="text-secondary-500" />
                </div>
                
                <div className="glass-card p-6 md:p-8 hover:border-secondary-500/50 transition-colors border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6 text-sm text-gray-400">
                    <span className="font-bold text-lg text-primary-500">{exp.company}</span>
                    <span className="hidden md:inline text-gray-600">•</span>
                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full"><Calendar size={14}/> {exp.date}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6 relative z-10">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-2">
                        <ChevronRight size={18} className="text-secondary-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
