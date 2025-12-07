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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-l-8 border-secondary"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-primary text-xs font-bold tracking-wider mb-6 uppercase">
            Since 2025
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Premium Grains & <span className="text-primary">Agricultural Solutions</span> From Nigeria.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Connecting Nigerian soil to the world. We specialize in sustainable grain production, storage, and supply chain management for a food-secure future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-lg h-14"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 text-lg h-14"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
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
