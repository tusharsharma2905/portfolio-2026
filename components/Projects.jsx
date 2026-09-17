"use client";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "UDAAN Saathi AI Chatbot",
      description: "An AI-powered conversational assistant developed for UDAAN Society to provide users with accurate information about the organization's services, initiatives, volunteering, donations, healthcare, and blood donation activities.",
      problemSolved: "Streamlines information access for users and automates responses to common queries related to the NGO's operations.",
      features: ["Context-aware conversations", "Knowledge-base retrieval", "UDAAN-specific system prompt", "Response caching"],
      tech: ["Python", "Django", "FastAPI", "Google Gemini API", "RAG", "LRU Caching", "SQLite"],
      highlights: ["Separate FastAPI AI service", "Gemini 2.5 Flash", "Django + FastAPI integration"],
      image: "/project1.jpg",
      github: "", // Left empty as per instruction not to invent URLs
      demo: ""
    },
    {
      title: "Blood Donation & Request Tracking System",
      description: "A web-based blood donation and blood request management system designed to help manage donor information, blood requests, donations, and tracking workflows.",
      problemSolved: "Digitalizes the blood request and donation workflow (Received → Verified → Fulfilling → Closed) for efficient management.",
      features: ["Blood donor/request registration", "DIN-based tracking", "Availability status", "Emergency requests"],
      tech: ["Python", "Django", "Django ORM", "SQLite", "REST APIs", "HTML/CSS/JS"],
      highlights: ["Request status workflow", "Donor & Request identification", "Historical tracking"],
      image: "/project2.jpg",
      github: "",
      demo: ""
    },
    {
      title: "FitVision AI",
      description: "An AI-powered computer vision fitness assistant designed to analyze exercise movements and provide real-time exercise tracking using pose estimation.",
      problemSolved: "Automates form checking and repetition counting for fitness enthusiasts using just a camera.",
      features: ["Real-time camera input", "Exercise movement analysis", "Squat detection", "Repetition counting"],
      tech: ["Python", "OpenCV", "MediaPipe", "Pose Estimation", "Computer Vision"],
      highlights: ["MediaPipe Pose Landmarker", "Real-time frame analysis", "Knee-angle calculation", "Movement-state detection"],
      image: "/project3.jpg",
      github: "",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">Showcasing my expertise in building intelligent systems, backend APIs, and web applications.</p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl -z-10 shadow-[0_0_30px_rgba(138,43,226,0.15)] group-hover:shadow-[0_0_40px_rgba(138,43,226,0.3)] transition-shadow duration-500"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-white/10 group-hover:border-white/20 transition-all z-10">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
                  {/* Using profile-placeholder as a fallback image since actual project images aren't available */}
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  {/* Overlay text for placeholder visual interest */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/60 backdrop-blur-sm">
                    <span className="text-white font-semibold flex items-center gap-2"><Layers size={20}/> Project Preview</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-secondary-500 font-mono text-sm tracking-wider font-semibold">0{index + 1} / Featured</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                
                <div className="glass-card p-6 mb-6 text-gray-300 text-sm md:text-base leading-relaxed relative z-20 shadow-xl border-white/5 bg-[#030014]/80 backdrop-blur-xl lg:-ml-6 lg:mr-0 group-hover:-translate-y-1 transition-transform">
                  <p className="mb-3">{project.description}</p>
                  <p className="text-gray-400 font-medium italic"><span className="text-white/50 not-italic">Problem Solved:</span> {project.problemSolved}</p>
                </div>

                <div className="mb-6 space-y-3">
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2 opacity-80 uppercase tracking-wider">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-primary-500/10 text-primary-300 px-2.5 py-1 rounded-md border border-primary-500/20">{feature}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2 opacity-80 uppercase tracking-wider">Tech Stack & Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-md border border-white/10">{tech}</span>
                      ))}
                      {project.highlights.map((highlight, i) => (
                        <span key={`h-${i}`} className="text-xs bg-secondary-500/10 text-secondary-300 px-2.5 py-1 rounded-md border border-secondary-500/20">{highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-secondary-500 transition-colors">
                      <Github size={20} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-500 transition-colors">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-sm font-medium text-gray-500 italic flex items-center gap-2">
                      Private Repository / Enterprise Project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Github({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}
