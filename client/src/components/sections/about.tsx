import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/stock_images/modern_grain_silo_st_cf2a08c7.jpg"; // Using silo image for about section context

export function About() {
  const features = [
    "Quality Assurance",
    "Sustainable Farming",
    "Reliable Supply Chain",
    "Community Focused"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src={aboutImage} 
                alt="AFZHARS Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl font-bold mb-2">Feeding the Nation</p>
                <p className="text-white/80">Since inception, we've been committed to excellence in Nigerian agriculture.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Cultivating Excellence in Every Grain
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AFZHARS AgriGrains Ltd. is a leading Nigerian agricultural company specializing in grain production, importation, exportation, storage, supply management, animal feed production, and animal fattening.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is rooted in quality, freshness, reliability, and sustainability. We bridge the gap between local farmers and global markets, ensuring that the richness of Nigerian soil reaches every table.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary h-6 w-6" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
