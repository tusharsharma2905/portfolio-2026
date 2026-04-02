"use client";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React & Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js & Express", level: 80 },
    { name: "MongoDB & SQL", level: 75 },
    { name: "C++ / Data Structures", level: 85 },
    { name: "Python", level: 70 },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-200">{skill.name}</span>
                  <span className="text-secondary-500 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-[0_0_10px_rgba(0,210,255,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
