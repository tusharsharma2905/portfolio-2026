"use client";
import { motion } from "framer-motion";
import { Code, Server, Database, Sparkles } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    { icon: <Code size={30} />, title: "Frontend", desc: "React, Next.js, UI/UX" },
    { icon: <Server size={30} />, title: "Backend", desc: "Node.js, Express, APIs" },
    { icon: <Database size={30} />, title: "Database", desc: "MongoDB, SQL, Firebase" },
    { icon: <Sparkles size={30} />, title: "Problem Solving", desc: "Data Structures & Algorithms" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a driven 3rd-year B.Tech Computer Science student with a profound passion for full-stack web development and software engineering. I love transforming complex problems into elegant, intuitive, and highly functional digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not writing code or debugging, you can find me exploring new technologies, participating in hackathons, or contributing to exciting open-source projects. I believe in continuous learning and always strive to push the boundaries of what's possible on the web.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-secondary-500 mb-4 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
