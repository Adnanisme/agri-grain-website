import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@assets/logo.webp";
import gargajiyaLogo from "@assets/gargajiya-concept/afzhars-G-logo.webp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isGargajiyaPage = location === "/gargajiya-concept";

  const mainNavLinks = [
    { name: "Home", href: "#home", isHash: true },
    { name: "About", href: "#about", isHash: true },
    { name: "Services", href: "#services", isHash: true },
    { name: "Livestock & Aquaculture", href: "#livestock", isHash: true },
    { name: "Products", href: "#products", isHash: true },
    { name: "Team", href: "#team", isHash: true },
    { name: "Contact", href: "#contact", isHash: true },
    { name: "Gargajiya Concept", href: "/gargajiya-concept", isHash: false },
  ];

  const gargajiyaNavLinks = [
    { name: "Home", href: "#home", isHash: true },
    { name: "Our Story", href: "#founder", isHash: true },
    { name: "Our Process", href: "#process", isHash: true },
    { name: "Mission & Values", href: "#mission", isHash: true },
    { name: "Products", href: "#products", isHash: true },
    { name: "Contact", href: "#contact", isHash: true },
    { name: "AgriGrains", href: "/", isHash: false },
  ];

  const navLinks = isGargajiyaPage ? gargajiyaNavLinks : mainNavLinks;

  const scrollToSection = (id: string) => {
    // If we're on the catalog page, navigate to home first with hash
    if (location !== "/") {
      window.location.href = `/${id}`;
      setIsMobileMenuOpen(false);
      return;
    }

    // If on home page, just scroll
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      // Update URL hash without scrolling
      window.history.pushState(null, "", id);
    }
  };

  const handleNavClick = (link: { href: string; isHash: boolean }) => {
    if (link.isHash) {
      scrollToSection(link.href);
    } else {
      // For route links like Gargajiya Concept
      setIsMobileMenuOpen(false);
      window.location.href = link.href;
    }
  };

  const handleHomeClick = () => {
    if (location !== "/") {
      window.location.href = "/#home";
    } else {
      scrollToSection("#home");
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
          onClick={isGargajiyaPage ? () => window.location.href = "/gargajiya-concept" : handleHomeClick}
        >
          <img
            src={isGargajiyaPage ? gargajiyaLogo : logo}
            alt={isGargajiyaPage ? "AFZHARS Gargajiya Concept" : "AFZHARS AgriGrains Ltd."}
            className="h-10 md:h-12 w-auto object-contain"
          />
          <div className={`font-serif font-bold text-base md:text-xl leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            {isGargajiyaPage ? (
              <>
                AFZHARS<br/>
                <span className="text-xs md:text-sm font-sans font-normal opacity-90">Gargajiya Concept</span>
              </>
            ) : (
              <>
                AFZHARS<br/>
                <span className="text-xs md:text-sm font-sans font-normal opacity-90">AgriGrains Ltd.</span>
              </>
            )}
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isHighlightedLink = link.name === "Gargajiya Concept" || link.name === "AgriGrains";

            if (isHighlightedLink) {
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-bold transition-all duration-300 whitespace-nowrap px-4 py-2 rounded-full flex items-center gap-2 ${
                    isScrolled
                      ? "bg-secondary text-primary hover:bg-secondary/90 hover:shadow-lg hover:scale-105"
                      : "bg-secondary/95 text-primary hover:bg-secondary hover:shadow-xl hover:scale-105 backdrop-blur-sm"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  {link.name}
                </button>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium transition-colors hover:text-secondary whitespace-nowrap ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </button>
            );
          })}
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
              {navLinks.map((link) => {
                const isHighlightedLink = link.name === "Gargajiya Concept" || link.name === "AgriGrains";

                if (isHighlightedLink) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className="text-center bg-secondary text-primary font-bold py-3 rounded-full hover:bg-secondary/90 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      {link.name}
                    </button>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-left text-foreground font-medium py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                );
              })}
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
