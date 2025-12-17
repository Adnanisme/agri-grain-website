import { motion } from "framer-motion";
import { Award, Leaf, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import meetFacesImage from "@assets/meet-the-faces.webp";

export function MeetFaces() {
  const values = [
    { icon: Target, label: "Sustainability" },
    { icon: Leaf, label: "Innovation" },
    { icon: Users, label: "Community Impact" }
  ];

  return (
    <section id="meet-faces" className="relative w-full bg-gradient-to-br from-[#F9FCF6] via-white to-[#F5F9F1] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 max-w-[40vw]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 max-w-[40vw]" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9BCF53 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 max-w-7xl relative z-10">
        {/* Grid Layout: Text Left, Image Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-4 w-4 text-gray-500" />
              <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-600">
                Leadership Excellence
              </span>
            </div>

            {/* Heading with Subtle Green Accent */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Meet the Faces Behind{" "}
              <span className="relative inline-block">
                AFZHARS AgriGrains
                <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-full"></span>
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Visionary leaders committed to excellence in agriculture, driving innovation and sustainability across Nigeria's grain industry.
            </p>

            {/* Value Chips */}
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <value.icon className="h-3.5 w-3.5 text-gray-500" />
                    {value.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src={meetFacesImage}
                alt="MD and CEO of AFZHARS AgriGrains holding company plaque"
                className="w-full h-full object-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: '65% 30%'
                }}
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

