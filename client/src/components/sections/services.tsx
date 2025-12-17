import { motion } from "framer-motion";
import { Sprout, Globe, Warehouse, Truck, Package, Wheat } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Grain Production",
    description: "High-yield, disease-resistant crops grown with sustainable practices. We partner with farmers, supply quality seeds, and share best practices to keep yields strong and soils healthy.",
    color: "bg-green-100 text-green-700"
  },
  {
    icon: Globe,
    title: "Import & Export",
    description: "Bridging markets with premium Nigerian grains that meet global standards. We manage documentation, customs, certifications, and logistics for smooth cross-border trade.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: Warehouse,
    title: "Grain Storage",
    description: "Modern silos and warehouses that keep grains fresh and pest-free. Climate control protects quality and cuts post-harvest losses.",
    color: "bg-orange-100 text-orange-700"
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Reliable logistics from farm gate to destination. We coordinate transport, warehousing, and distribution to deliver on time across Nigeria and beyond.",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    icon: Package,
    title: "Farm Supply & Inputs Distribution",
    description: "Comprehensive supply of agricultural inputs including seeds, fertilizers, pesticides, and farming equipment. We ensure quality inputs reach farmers efficiently.",
    color: "bg-purple-100 text-purple-700"
  },
  {
    icon: Wheat,
    title: "Quality & Procurement",
    description: "Trusted sourcing, inspections, and certifications to keep your supply chain compliant and on spec.",
    color: "bg-amber-100 text-amber-700"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#F3F6F1]" />
      <div className="absolute top-0 left-0 w-full h-full" 
           style={{ 
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             opacity: 0.3
           }} 
      />
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/4" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/4 max-w-[50vw]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
              Comprehensive<br/>Agricultural Solutions
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              From soil to silo, we manage every aspect of the agricultural value chain with professionalism.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-[2rem] p-8 hover:bg-primary transition-colors duration-500 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary overflow-hidden"
            >
              {/* Icon Background Blob */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-50 rounded-full group-hover:bg-white/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.color} group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-sm`}>
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-500">
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
