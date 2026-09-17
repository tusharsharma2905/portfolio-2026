"use client";
import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Cloud, Box, Layers, MonitorSmartphone, LayoutGrid } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} />,
      skills: ["Python", "C++", "Java", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={20} />,
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Generative AI", "RAG", "Agentic AI"]
    },
    {
      title: "AI / ML Frameworks",
      icon: <Box size={20} />,
      skills: ["TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "NumPy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      title: "Backend & Web Dev",
      icon: <ServerIcon size={20} />,
      skills: ["Django", "FastAPI", "REST APIs", "API Integration", "Backend Development"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={20} />,
      skills: ["Google Cloud Platform (GCP)", "Docker", "Cloud technologies", "Git"]
    },
    {
      title: "AI APIs / Platforms",
      icon: <Layers size={20} />,
      skills: ["Google Gemini API", "OpenAI API", "Fireworks AI", "Perplexity AI"]
    },
    {
      title: "Computer Vision",
      icon: <MonitorSmartphone size={20} />,
      skills: ["OpenCV", "MediaPipe", "Pose Estimation", "Image/Video Processing"]
    },
    {
      title: "Databases & Other",
      icon: <Database size={20} />,
      skills: ["SQL", "SQLite", "Django ORM", "GitHub", "DSA", "OOP", "Problem Solving"]
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Technologies and tools I work with to build intelligent solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col hover:border-primary-500/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4 text-white font-semibold">
                <span className="p-2 bg-white/5 rounded-lg text-secondary-500 group-hover:bg-secondary-500/10 transition-colors">
                  {category.icon}
                </span>
                <h3 className="text-lg leading-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-sm px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-md text-gray-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServerIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}
