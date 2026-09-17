"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology – Computer Science & Engineering",
      institution: "JECRC University",
      date: "Current Student",
      description: "Pursuing a comprehensive curriculum in Computer Science, focusing on Software Engineering, Data Structures, Algorithms, Database Management, and Artificial Intelligence.",
      icon: <GraduationCap size={28} />
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Vidyasthali Public School (CBSE)",
      date: "Completed",
      description: "Built a strong foundation in Mathematics and Sciences, fostering analytical and logical problem-solving abilities.",
      icon: <Award size={24} />
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Vidyasthali Public School (CBSE)",
      date: "Completed",
      description: "Developed core academic competencies with a focus on fundamental sciences and mathematics.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-card p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group ${index === 0 ? 'lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 border-primary-500/30' : ''}`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className={`flex ${index === 0 ? 'lg:flex-col lg:justify-center' : ''} items-start gap-4 mb-6 relative z-10 shrink-0`}>
                <div className={`w-14 h-14 rounded-full glass flex items-center justify-center text-primary-500 shadow-[0_0_15px_rgba(138,43,226,0.2)] group-hover:shadow-[0_0_25px_rgba(138,43,226,0.5)] transition-shadow`}>
                  {edu.icon}
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-secondary-500 font-medium mb-4 text-lg">{edu.institution}</p>
                
                <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/5">
                    <Calendar size={14} />
                    <span>{edu.date}</span>
                  </div>
                  {edu.grade && (
                    <div className="bg-white/5 py-1 px-3 rounded-full font-semibold text-accent-500 border border-accent-500/20">
                      {edu.grade}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
