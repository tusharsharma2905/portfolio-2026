"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient cursor-pointer flex items-center gap-2"
          >
            Tushar<span className="text-white text-sm bg-white/10 px-2 py-0.5 rounded-md hidden sm:inline-block">AI/ML</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center text-sm xl:text-base">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name === "Resume" ? "_blank" : "_self"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`text-gray-300 hover:text-white transition-colors relative group ${link.name === 'Resume' ? 'px-4 py-2 glass rounded-full hover:bg-white/10' : ''}`}
            >
              {link.name}
              {link.name !== "Resume" && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 transition-all group-hover:w-full"></span>
              )}
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 shadow-2xl h-screen"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Resume" ? "_blank" : "_self"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg text-gray-300 hover:text-secondary-500 ${link.name === 'Resume' ? 'px-6 py-2 glass rounded-full' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
