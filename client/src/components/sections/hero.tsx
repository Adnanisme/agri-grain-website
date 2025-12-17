import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/stock_images/expansive_green_grai_b83ab9b0.webp";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Expansive green grain field in Nigeria showcasing premium agricultural produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase">
              Your Global Agrilink
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-xl">
            Nigeria's Trusted Source for <span className="text-secondary">Premium Grains.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto">
            Delivering high-quality grains, reliable storage, and efficient supply chain solutions for businesses across Africa and beyond.
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
    </section>
  );
}
