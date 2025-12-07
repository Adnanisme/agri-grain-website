import { motion } from "framer-motion";
import { Sprout, Globe, Warehouse, Truck, Beef, Wheat, Leaf, Droplets, Factory } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Grain Production",
    description: "Cultivating high-yield, disease-resistant crops using modern sustainable farming techniques across Nigerian farmlands."
  },
  {
    icon: Globe,
    title: "Importation & Exportation",
    description: "Bridging global markets with premium Nigerian produce, ensuring international standards in trade and logistics."
  },
  {
    icon: Warehouse,
    title: "Grain Storage",
    description: "State-of-the-art silo facilities preserving grain quality, reducing post-harvest losses, and ensuring year-round availability."
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Efficient logistics network connecting farms to markets, ensuring timely delivery and freshness of all agricultural products."
  },
  {
    icon: Leaf,
    title: "Animal Feed Production",
    description: "Nutrient-rich feed formulations derived from quality grains to support healthy livestock growth and productivity."
  },
  {
    icon: Beef,
    title: "Animal Fattening",
    description: "Specialized livestock programs focusing on health and weight gain for premium meat production."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Comprehensive Agricultural Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From soil to silo, we manage every aspect of the agricultural value chain with professionalism and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-muted/10 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/20 group relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
