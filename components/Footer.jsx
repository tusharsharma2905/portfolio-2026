"use client";
import { Globe, Code, FileText, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass py-10 mt-20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gradient mb-6">Tushar Sharma</h2>
        
        <div className="flex gap-6 mb-8">
          <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-secondary-500 transition-colors">
            <Code size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-secondary-500 transition-colors">
            <Globe size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-secondary-500 transition-colors">
            <FileText size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-secondary-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <div className="text-gray-400 text-sm text-center">
          <p>© {currentYear} Tushar Sharma. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ using Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
