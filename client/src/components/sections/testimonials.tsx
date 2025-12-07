import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Alhaji Musa Ibrahim",
    role: "Wholesale Grain Distributor, Kano",
    content: "AFZHARS has been our most reliable partner for sorghum and maize supply for over 3 years. Their quality is consistent, and delivery is always on time. They truly understand the market.",
    initials: "MI"
  },
  {
    name: "Dr. Ngozi Adeleke",
    role: "Livestock Farm Manager",
    content: "The quality of animal feed we source from AFZHARS has significantly improved our livestock health. Their fattening program expertise is unmatched in the industry.",
    initials: "NA"
  },
  {
    name: "Emmanuel Okafor",
    role: "Food Processing CEO",
    content: "Finding clean, high-quality soya beans in bulk was a challenge until we partnered with AFZHARS. They understand the industrial standards we require for our production.",
    initials: "EO"
  },
  {
    name: "Hajiya Fatima Bello",
    role: "Market Association Leader",
    content: "Their grains are always clean and stone-free. My customers always ask for AFZHARS products specifically because of the premium quality and fair pricing.",
    initials: "FB"
  },
  {
    name: "John Danjuma",
    role: "Export Partner",
    content: "We export sesame seeds to Asia, and AFZHARS has been our main supplier. Their purity levels consistently meet international export standards.",
    initials: "JD"
  },
  {
    name: "Sarah Oladipo",
    role: "Restaurant Chain Owner",
    content: "We buy rice and beans in bulk from AFZHARS. The consistency in taste and texture is exactly what our customers love. Highly recommended!",
    initials: "SO"
  }
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-[#1a4d2e] to-[#0f2e1b] relative overflow-hidden">
      {/* Abstract Soft Shapes Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              Testimonials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight"
            >
              Trusted by Agro-Allied<br/>Businesses Across Africa
            </motion.h2>
          </div>
          
          <div className="flex gap-2">
            {/* Custom Navigation Controls could go here */}
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 md:pl-8 min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col hover:bg-white/10 transition-colors duration-300 group shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-secondary ring-4 ring-white/5">
                        <AvatarFallback className="bg-gradient-to-br from-secondary to-green-600 text-white font-bold text-lg">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-secondary/80 text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="text-white/20 h-10 w-10 group-hover:text-secondary/50 transition-colors" />
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed flex-grow font-light">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Verified Partner</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
