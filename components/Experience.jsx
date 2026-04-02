"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechNova Solutions",
      date: "May 2025 - Aug 2025",
      description: "Developed responsive UI components using React and Tailwind CSS. Improved website performance by 20% and collaborated with the design team to implement new features."
    },
    {
      title: "Open Source Contributor",
      company: "Various OS Projects",
      date: "Jan 2025 - Present",
      description: "Contributed to popular React and Node.js repositories. Fixed critical bugs, improved documentation, and added new features using modern JavaScript practices."
    },
    {
      title: "Web Developer Lead",
      company: "University Tech Club",
      date: "Aug 2024 - Present",
      description: "Led a team of 5 students to build the official club website. Organized web development workshops and mentored junior members."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#030014] border-2 border-secondary-500 flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.8)] z-10">
                  <Briefcase size={14} className="text-secondary-500" />
                </div>
                
                <div className="glass-card p-6 md:p-8 hover:border-secondary-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-sm text-gray-400">
                    <span className="font-semibold text-primary-500">{exp.company}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{exp.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
