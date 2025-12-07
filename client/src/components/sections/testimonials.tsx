import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alhaji Musa Ibrahim",
    role: "Wholesale Grain Distributor, Kano",
    content: "AFZHARS has been our most reliable partner for sorghum and maize supply for over 3 years. Their quality is consistent, and delivery is always on time.",
    initials: "MI"
  },
  {
    name: "Dr. Ngozi Adeleke",
    role: "Livestock Farm Manager",
    content: "The quality of animal feed we source from AFZHARS has significantly improved our livestock health. Their fattening program expertise is unmatched.",
    initials: "NA"
  },
  {
    name: "Emmanuel Okafor",
    role: "Food Processing CEO",
    content: "Finding clean, high-quality soya beans in bulk was a challenge until we partnered with AFZHARS. They understand the industrial standards we require.",
    initials: "EO"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Trusted by Agro-Allied Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
            >
              <Quote className="text-secondary h-8 w-8 mb-6 opacity-50" />
              <p className="text-white/90 text-lg mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-secondary">
                  <AvatarFallback className="bg-white text-primary font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
