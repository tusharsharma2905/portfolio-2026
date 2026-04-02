"use client";
import { motion } from "framer-motion";
import { Copy, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tushar.sharma@example.com");
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
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
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary-500 mb-4 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-gray-400 mb-4 break-all">tushar.sharma@example.com</p>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-sm font-medium"
              >
                <Copy size={16} /> 
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
            
            <div className="glass-card p-8 text-center bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/30">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="text-gray-300 mb-6">I'm currently looking for internship opportunities starting May 2026.</p>
              <a href="/resume.pdf" className="inline-block px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-500/80 text-white font-medium transition-colors w-full">
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 glass-card p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500 transition-colors text-white resize-none"
                  placeholder="Hello Tushar, I would like to talk about..."
                />
              </div>
              
              <button 
                type="button" 
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white w-full hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
