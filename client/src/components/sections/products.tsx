import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { createProductListSchema } from "@/lib/structuredData";

// Import product images - Using WebP format for optimal performance
import maizeImg from "@assets/stock_images/maize.webp";
import sorghumImg from "@assets/stock_images/Red-Sorghum.webp";
import milletImg from "@assets/stock_images/millet-grains.webp";
import riceImg from "@assets/stock_images/rice.webp";
import beansImg from "@assets/stock_images/beans.webp";
import soyaImg from "@assets/stock_images/soybeans.webp";

const products = [
  {
    id: 1,
    name: "Maize (Corn)",
    description: "Premium quality yellow and white maize, perfect for food processing and animal feed.",
    image: maizeImg,
    tag: "Top Seller"
  },
  {
    id: 2,
    name: "Sorghum (Guinea Corn)",
    description: "Nutrient-rich red and white sorghum varieties, ideal for beverages and food.",
    image: sorghumImg,
    tag: "Native"
  },
  {
    id: 3,
    name: "Pearl Millet",
    description: "High-energy millet grains, cleaned and processed for optimal nutritional value.",
    image: milletImg,
    tag: "Organic"
  },
  {
    id: 4,
    name: "Premium Rice",
    description: "Long-grain polished rice, locally grown and processed to international standards.",
    image: riceImg,
    tag: "Staple"
  },
  {
    id: 5,
    name: "Brown Beans",
    description: "Protein-rich Nigerian brown beans, sorted and cleaned for immediate use.",
    image: beansImg,
    tag: "Protein"
  },
  {
    id: 6,
    name: "Soya Beans",
    description: "High-protein soya beans for industrial oil production and livestock feed.",
    image: soyaImg,
    tag: "Industrial"
  }
];

export function Products() {
  const handleInquiry = () => {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add product schema for homepage products
    const productSchemaData = createProductListSchema(
      products.map(product => ({
        name: product.name,
        description: product.description,
        image: typeof window !== "undefined"
          ? `${window.location.origin}${product.image}`
          : `https://afzharsagrigrains.com${product.image}`,
        category: "Cereal Grains & Legumes"
      }))
    );

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "homepage-products-schema";
    script.textContent = JSON.stringify(productSchemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("homepage-products-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="products" className="py-24 md:py-32 relative bg-[#FDFDFB] overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="leaf-pattern" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
               <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" fill="none" stroke="#E8F3D6" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Grain Catalog</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
              Our Harvest
            </h2>
            <p className="text-lg text-muted-foreground">
              Sourced directly from fertile Nigerian soils, our grains represent the best of West African agriculture.
            </p>
          </div>
          <Link href="/catalog">
            <Button
              variant="link"
              className="text-primary font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-4 text-xl p-0"
              onClick={() => {
                // ensure next page starts at top after navigation
                setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
              }}
            >
              View Full Catalog
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[2rem] group bg-white ring-1 ring-black/5 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Premium ${product.name} grain from AFZHARS AgriGrains Ltd., Nigeria`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/95 text-primary hover:bg-white backdrop-blur-md border-none shadow-lg px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      {product.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pr-12">
                    {product.description}
                  </p>

                  {/* Inquiry Button - Bottom Right */}
                  <button
                    onClick={handleInquiry}
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group/btn"
                    aria-label="Contact us about this product"
                  >
                    <Mail className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only View Full Catalog Link */}
        <div className="md:hidden mt-10 text-center">
          <Link href="/catalog">
            <Button
              variant="link"
              className="text-primary font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-4 text-lg p-0"
              onClick={() => {
                // ensure next page starts at top after navigation
                setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
              }}
            >
              View Full Catalog →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
