"use client";
import { motion } from "framer-motion";
import { Copy, Send, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tushar.professional29@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something <span className="text-gradient">intelligent together.</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm currently seeking internship opportunities starting May 2026 in Software Engineering, Backend Development, and AI/ML. 
            Whether you have a question or a project idea, my inbox is open!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary-500/50 transition-colors">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary-500 mb-6 shadow-[0_0_15px_rgba(138,43,226,0.2)] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Me</h3>
              <p className="text-gray-400 mb-6 break-all">{email}</p>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-sm font-medium w-full justify-center"
              >
                <Copy size={16} /> 
                {copied ? <span className="text-green-400">Copied to clipboard!</span> : "Copy Email Address"}
              </button>
            </div>
            
            {/* Social Links Card */}
            <div className="glass-card p-8 text-center bg-gradient-to-br from-[#030014] to-primary-500/10 border-white/10">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/tusharsharma2905" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/tusharsharma29" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-[#0a66c2] hover:bg-white/10 hover:scale-110 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                  placeholder="Internship Opportunity / Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white resize-none"
                  placeholder="Hello Tushar, I'd like to talk about..."
                />
              </div>
              
              <button 
                type="button" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-bold text-white w-full hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all hover:-translate-y-1 mt-4"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
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

function Linkedin({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
