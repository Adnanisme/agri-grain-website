import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/stock_images/expansive_green_grai_b83ab9b0.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Nigerian Grain Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-secondary text-primary text-sm font-bold tracking-wider mb-8 uppercase shadow-lg">
            Since 2025
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-xl">
            Premium Grains & <span className="text-secondary">Agricultural Solutions</span> From Nigeria.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto">
            Connecting Nigerian soil to the world. We specialize in sustainable grain production, storage, and supply chain management for a food-secure future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10 text-lg h-16 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full px-10 text-lg h-16 backdrop-blur-sm transition-all"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wavy Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
