import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@assets/logo.webp";

// Custom TikTok and Snapchat icons
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.487.535 6.624 0 11.99-5.367 11.99-11.987C23.97 5.39 18.604.026 11.98.026L12.017 0z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 rounded-t-3xl mt-auto overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 w-fit">
              <img 
                src={logo} 
                alt="AFZHARS Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              AFZHARS AgriGrains Ltd. is your trusted partner for premium Nigerian agricultural products. Quality, sustainability, and reliability in every grain.
            </p>
            <div className="flex gap-3 pt-2 flex-wrap">
              <a 
                href="https://twitter.com/AfzharsAGs_LTD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com/AfzharsAGs_LTD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/afzharsags_ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://tiktok.com/@afzharsags_ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://snapchat.com/add/afzharsags_ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Snapchat"
              >
                <SnapchatIcon className="h-4 w-4" />
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
              <li><a href="#livestock" className="hover:text-white transition-colors">Livestock & Aquaculture</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Grain Catalog</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/gargajiya-concept" className="hover:text-white transition-colors">Gargajiya Concept</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact - Kano */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Kano Branch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Fagge, Jaba Unity Estate.<br/>Alh. Idris Fadille street,<br/>Kano State, Nigeria</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>07025513414</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@afzharsagrigrains.com</span>
              </li>
            </ul>
          </div>

          {/* Contact - Borno */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Borno Branch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Biu, Almohap Service Station.<br/>Gombe Road,<br/>Borno State, Nigeria</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>07025513414</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@afzharsagrigrains.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} AFZHARS AgriGrains Ltd. All rights reserved. | Developed by Bleu Meridian Technologies</p>
        </div>
      </div>
    </footer>
  );
}
