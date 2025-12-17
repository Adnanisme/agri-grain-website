import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { createReviewSchema, createAggregateRatingSchema } from "@/lib/structuredData";

const testimonials = [
  {
    name: "Kaigama Kashim Kaigama",
    role: "Wholesale Grain Distributor, Kano",
    content: "AFZHARS has been our most reliable partner for sorghum and maize supply for over 3 years. Their quality is consistent, and delivery is always on time. They truly understand the market.",
    initials: "KK"
  },
  {
    name: "Alhaji Ali Al-Mohap",
    role: "Food Processing CEO",
    content: "Finding clean, high-quality soya beans in bulk was a challenge until we partnered with AFZHARS. They understand the industrial standards we require for our production.",
    initials: "AA"
  },
  {
    name: "Alhaji Dayyabu Dawanau",
    role: "Market Association Leader",
    content: "Their grains are always clean and stone-free. My customers always ask for AFZHARS products specifically because of the premium quality and fair pricing.",
    initials: "DD"
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
  },
  {
    name: "Dr. Amina Bello",
    role: "Agricultural Research Institute Director",
    content: "AFZHARS's commitment to sustainable farming practices and quality control sets them apart. We've collaborated on several research projects, and their grains consistently meet our scientific standards for nutritional analysis.",
    initials: "AB"
  },
  {
    name: "Ibrahim Musa",
    role: "Bulk Storage Facility Manager, Kaduna",
    content: "Working with AFZHARS has transformed our storage operations. Their grains arrive in excellent condition, properly dried and cleaned. This reduces our handling costs and ensures we can store longer without quality degradation.",
    initials: "IM"
  }
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    // Add Review schemas for each testimonial
    testimonials.forEach((testimonial, index) => {
      const reviewSchemaData = createReviewSchema({
        author: testimonial.name,
        reviewBody: testimonial.content,
        rating: 5
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `review-schema-${index}`;
      script.textContent = JSON.stringify(reviewSchemaData);
      document.head.appendChild(script);
    });

    // Add AggregateRating schema
    const aggregateRatingData = createAggregateRatingSchema(5, testimonials.length);
    const aggregateScript = document.createElement("script");
    aggregateScript.type = "application/ld+json";
    aggregateScript.id = "aggregate-rating-schema";
    aggregateScript.textContent = JSON.stringify(aggregateRatingData);
    document.head.appendChild(aggregateScript);

    return () => {
      testimonials.forEach((_, index) => {
        const existingScript = document.getElementById(`review-schema-${index}`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      });
      const existingAggregateScript = document.getElementById("aggregate-rating-schema");
      if (existingAggregateScript) {
        document.head.removeChild(existingAggregateScript);
      }
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-[#1a4d2e] to-[#0f2e1b] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 max-w-[50vw]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#9BCF53 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      
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
                <div
                  className="bg-white/8 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col hover:bg-white/15 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 group shadow-2xl relative overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-secondary/50 ring-4 ring-white/10 group-hover:border-secondary group-hover:ring-secondary/20 transition-all duration-300 shadow-lg">
                        <AvatarFallback className="bg-gradient-to-br from-secondary via-secondary/90 to-green-600 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-white text-lg md:text-xl group-hover:text-secondary transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-secondary/90 text-sm font-medium group-hover:text-secondary transition-colors duration-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="text-white/25 h-12 w-12 group-hover:text-secondary/70 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  <p className="text-white/90 text-base md:text-lg leading-relaxed flex-grow font-light relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-8 mt-6 border-t border-white/10 group-hover:border-white/20 flex items-center justify-between relative z-10 transition-colors duration-300">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-white/50 group-hover:text-white/70 uppercase tracking-widest transition-colors duration-300">Verified Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
