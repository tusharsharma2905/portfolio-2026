"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Server, Cloud, Code2 } from "lucide-react";

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
    { icon: <BrainCircuit size={30} />, title: "AI & ML", desc: "Generative AI, LLMs, Computer Vision" },
    { icon: <Server size={30} />, title: "Backend Systems", desc: "Django, FastAPI, REST APIs" },
    { icon: <Cloud size={30} />, title: "Cloud Computing", desc: "GCP, Docker, Scalable Arch" },
    { icon: <Code2 size={30} />, title: "Software Dev", desc: "Python, Modern Web Solutions" },
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
            className="lg:w-1/2 glass-card p-8 md:p-10 border-l-4 border-l-secondary-500"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="bg-primary-500/20 text-primary-500 p-2 rounded-lg">
                <BrainCircuit size={24} />
              </span>
              Driven by Intelligence
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am a Computer Science Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Generative AI, backend development, cloud technologies, and data analytics.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I enjoy building practical applications that combine AI with software engineering. My experience includes developing AI-powered chatbots, robust REST APIs, computer vision applications, automation workflows, and scalable web-based systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-medium text-secondary-500">
              I focus on learning by building real-world projects and continuously improving my technical and problem-solving skills to craft the intelligent web of tomorrow.
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
                className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_30px_rgba(138,43,226,0.15)] group"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-secondary-500 mb-4 shadow-[0_0_15px_rgba(0,210,255,0.2)] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
