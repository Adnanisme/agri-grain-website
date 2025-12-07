import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@assets/AFHARS_Agri-Grain_Complete_Logo__1765147662701.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollToSection("#home")}
        >
          <img 
            src={logo} 
            alt="AFZHARS AgriGrains Ltd." 
            className="h-12 w-auto object-contain"
          />
          <div className={`hidden md:block font-serif font-bold text-xl leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            AFZHARS<br/>
            <span className="text-sm font-sans font-normal opacity-90">AgriGrains Ltd.</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection("#contact")}
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-6"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary text-white rounded-full"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
