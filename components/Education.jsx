"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "JECRC University",
      date: "3rd Year",
      grade: "Pursuing",
      description: "Focusing on core computer science subjects, software development, and gaining practical experience through building modern web applications."
    },
    {
      degree: "Secondary Education (CBSE 12th)",
      institution: "Vidyasthali Public School",
      date: "Completed",
      grade: "72%",
      description: "Completed my higher secondary education, establishing a robust academic foundation and developing strong analytical and problem-solving abilities."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary-500">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-secondary-500 font-medium">{edu.institution}</p>
                </div>
              </div>
              
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1 bg-white/5 py-1 px-3 rounded-full">
                  <Calendar size={14} />
                  <span>{edu.date}</span>
                </div>
                <div className="bg-white/5 py-1 px-3 rounded-full font-semibold text-accent-500">
                  {edu.grade}
                </div>
              </div>
              
              <p className="text-gray-300 flex-grow">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
