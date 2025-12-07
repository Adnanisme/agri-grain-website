import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@assets/AFHARS_Agri-Grain_Logo__1765148941719.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 rounded-t-3xl mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg w-fit">
              <img 
                src={logo} 
                alt="AFZHARS Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              AFZHARS AgriGrains Ltd. is your trusted partner for premium Nigerian agricultural products. Quality, sustainability, and reliability in every grain.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Grain Catalog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact - Kano */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Kano Branch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Agricultural Layout,<br/>Kano State, Nigeria</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>kano@afzhars.com</span>
              </li>
            </ul>
          </div>

          {/* Contact - Borno */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Borno Branch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>45 Grain Market Road,<br/>Maiduguri, Borno State</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+234 800 987 6543</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>borno@afzhars.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} AFZHARS AgriGrains Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
