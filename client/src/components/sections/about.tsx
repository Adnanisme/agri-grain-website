import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Sprout, Sun } from "lucide-react";
import aboutImage from "@assets/stock_images/modern_grain_silo_st_cf2a08c7.webp";

export function About() {
  const features = [
    "Quality Assurance",
    "Sustainable Farming",
    "Reliable Supply Chain",
    "Community Focused"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background - Soft Organic Gradient */}
      <div className="absolute inset-0 bg-[#F9F9F4] -z-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F3D6] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2 -z-10 max-w-[50vw]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FAF1E6] rounded-full blur-[100px] opacity-70 translate-y-1/3 -translate-x-1/3 -z-10 max-w-[50vw]" />
      
      {/* Subtle Texture Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(#1A4D2E 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
              <img 
                src={aboutImage} 
                alt="Modern grain silo storage facility at AFZHARS AgriGrains Ltd. in Nigeria" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-secondary/20 backdrop-blur-md p-2 rounded-full">
                    <Leaf className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="font-bold tracking-wider uppercase text-xs md:text-sm px-3 py-1 rounded-full bg-white/85 text-primary shadow-sm md:bg-secondary/20 md:text-secondary">
                    Our Commitment
                  </span>
                </div>
                <p className="font-serif text-3xl font-bold mb-3 leading-tight">Feeding the Nation,<br/>Growing the Future.</p>
                <p className="text-white/80 font-light">Since inception, we've been committed to excellence in Nigerian agriculture.</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 bg-white p-6 rounded-[2rem] shadow-xl z-10 max-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <span className="font-bold text-primary text-xl">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Organic & Sustainably Sourced Grains</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary inline-block"></span> About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
              Cultivating Excellence<br/>in Every Grain
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AFZHARS AgriGrains Ltd. is a leading Nigerian agricultural company specializing in grain production, importation, exportation, storage, supply management, animal feed production, and animal fattening. We are a fully integrated agribusiness committed to providing clean, reliable, and consistently high-quality grains.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-secondary/30 pl-6">
              Our mission is rooted in quality, freshness, reliability, and sustainability. We bridge the gap between local farmers and global markets, ensuring that the richness of Nigerian soil reaches every table. Through our subsidiary, <span className="font-semibold text-primary">AFZHARS Gargajiya Concept</span>, we also preserve our rich culinary heritage through naturally produced, locally sourced traditional foods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
