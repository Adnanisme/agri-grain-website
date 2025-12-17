import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/seo/SEOHead";
import { useEffect } from "react";
import { createProductListSchema, breadcrumbSchema } from "@/lib/structuredData";

// Updated Images - Using WebP format for optimal performance
import maizeImg from "@assets/stock_images/maize.webp";
import sorghumImg from "@assets/stock_images/Red-Sorghum.webp";
import milletImg from "@assets/stock_images/millet-grains.webp";
import riceImg from "@assets/stock_images/rice.webp";
import beansImg from "@assets/stock_images/beans.webp";
import soyaImg from "@assets/stock_images/soybeans.webp";
import fonioImg from "@assets/stock_images/fonio.webp";
import bambaraImg from "@assets/stock_images/bambara-nut.webp";
import groundnutImg from "@assets/stock_images/groundnut.webp";
import sesameImg from "@assets/stock_images/sesame.webp";

// Feed & Industrial Images
import wheatImg from "@assets/stock_images/wheat.webp";
import sunflowerImg from "@assets/stock_images/sunflower.webp";
import cottonseedImg from "@assets/stock_images/cottonseed-cake.webp";
import maizeBranImg from "@assets/stock_images/Corn-bran.webp";
import wheatBranImg from "@assets/stock_images/wheat-bran.webp";
import soybeanMealImg from "@assets/stock_images/soybean-cake.webp";
import groundnutCakeImg from "@assets/stock_images/groundnut_cake.webp";
import ofadaImg from "@assets/stock_images/ofada.webp";
import tigernutImg from "@assets/stock_images/tigernuts.webp";
import cowpeasImg from "@assets/stock_images/cowpeas.webp";


const categories = [
  "Cereal Grains",
  "Legumes & Pulses",
  "Oil & Feed Grains",
  "Feed & Industrial",
  "Specialty Grains"
];

const allGrains = [
  // 🌾 Cereal Grains
  {
    id: 1,
    name: "Maize (Corn)",
    description: "High-yield yellow and white maize. Used for food processing, animal feed, flour, and industrial starch production.",
    image: maizeImg,
    category: "Cereal Grains",
    specs: "Moisture: <12% | Purity: 99%"
  },
  {
    id: 2,
    name: "Sorghum (Guinea Corn)",
    description: "Nutrient-rich red and white sorghum varieties. Essential for beverages, brewing, and traditional meals like Tuwo.",
    image: sorghumImg,
    category: "Cereal Grains",
    specs: "Moisture: <11% | Cleaned"
  },
  {
    id: 3,
    name: "Millet (Pearl Millet)",
    description: "Drought-resistant grain with excellent energy content. Ideal for pap, couscous, livestock feed, and fortified foods.",
    image: milletImg,
    category: "Cereal Grains",
    specs: "Type: Pearl | Stone-free"
  },
  {
    id: 4,
    name: "Rice (White & Parboiled)",
    description: "Clean, well-milled grains with consistent quality. Perfect for retail packaging, bulk supply, and everyday consumption.",
    image: riceImg,
    category: "Cereal Grains",
    specs: "Polished | Parboiled"
  },
  {
    id: 5,
    name: "Wheat",
    description: "High-quality wheat grains suitable for flour mills, bakeries, and large-scale food processing industries.",
    image: wheatImg,
    category: "Cereal Grains",
    specs: "Hard Red/White | Dried"
  },
  {
    id: 6,
    name: "Acha (Fonio)",
    description: "Light, gluten-free ancient grain. Popular for health foods, porridges, and premium nutrition products.",
    image: fonioImg,
    category: "Cereal Grains",
    specs: "Sand-free | Whole Grain"
  },

  // 🫘 Legumes & Pulses
  {
    id: 7,
    name: "Beans (Brown & Honey)",
    description: "Protein-rich Nigerian beans. Perfect for akara, moi-moi, home cooking, and bulk food processing.",
    image: beansImg,
    category: "Legumes & Pulses",
    specs: "Type: Oloyin/Drum | Cleaned"
  },
  {
    id: 8,
    name: "Soya Beans",
    description: "Versatile high-protein legume. Used for animal feed, oil extraction, milk production, and industrial processing.",
    image: soyaImg,
    category: "Legumes & Pulses",
    specs: "Oil Content: High | Dried"
  },
  {
    id: 9,
    name: "Groundnuts (Peanuts)",
    description: "Fresh, oil-dense nuts ideal for roasting, oil milling, confectionery, and export markets.",
    image: groundnutImg,
    category: "Legumes & Pulses",
    specs: "Shelled | Red/Kampala"
  },
  {
    id: 10,
    name: "Cowpeas",
    description: "Staple West African pulse. Excellent for home meals, packaging, and commercial food production.",
    image: cowpeasImg,
    category: "Legumes & Pulses",
    specs: "Dried | Cleaned"
  },
  {
    id: 11,
    name: "Bambara Nuts",
    description: "Nutrient-rich traditional legume. Used in flours, snacks, and specialty health-food applications.",
    image: bambaraImg,
    category: "Legumes & Pulses",
    specs: "Dried | Shelled"
  },

  // 🌱 Oil & Feed Grains
  {
    id: 12,
    name: "Sesame Seeds",
    description: "Premium hulled and unhulled sesame. Essential for oil pressing, export, tahini, and bakery use.",
    image: sesameImg,
    category: "Oil & Feed Grains",
    specs: "Purity: 99.5% | White"
  },
  {
    id: 13,
    name: "Sunflower Seeds",
    description: "Oil-rich seeds perfect for feed production, oil extraction, and food-grade processing.",
    image: sunflowerImg,
    category: "Oil & Feed Grains",
    specs: "High Oil Content | Dried"
  },
  {
    id: 14,
    name: "Cottonseed Cake",
    description: "Protein-rich by-product used in poultry and livestock feed formulations.",
    image: cottonseedImg,
    category: "Oil & Feed Grains",
    specs: "Protein: High | Feed Grade"
  },

  // 🐄 Feed & Industrial
  {
    id: 15,
    name: "Maize Bran",
    description: "Affordable, energy-dense feed ingredient for poultry, cattle, and fish farming.",
    image: maizeBranImg,
    category: "Feed & Industrial",
    specs: "Dry Matter | Fiber Rich"
  },
  {
    id: 16,
    name: "Wheat Bran",
    description: "Fiber-rich supplement widely used in livestock rations and feed mills.",
    image: wheatBranImg,
    category: "Feed & Industrial",
    specs: "Flaked | Dried"
  },
  {
    id: 17,
    name: "Soybean Meal / Cake",
    description: "High-protein feed concentrate essential for poultry, aquaculture, and livestock growth.",
    image: soybeanMealImg,
    category: "Feed & Industrial",
    specs: "Protein: 44-48% | Defatted"
  },
  {
    id: 18,
    name: "Groundnut Cake",
    description: "Nutritious feed ingredient used in animal fattening and commercial feed production.",
    image: groundnutCakeImg,
    category: "Feed & Industrial",
    specs: "Oil Residual: Low | Pressed"
  },

  // 🌾 Specialty Nigerian Grains
  {
    id: 19,
    name: "Ofada Rice",
    description: "Local aromatic rice variety. Known for its unique flavor, premium value, and cultural significance.",
    image: ofadaImg,
    category: "Specialty Grains",
    specs: "Aromatic | Short Grain"
  },
  {
    id: 20,
    name: "Tigernuts",
    description: "Naturally sweet, fiber-rich tubers. Popular for drinks, flours, snacks, and health-food products.",
    image: tigernutImg,
    category: "Specialty Grains",
    specs: "Dried | Sweet/Yellow"
  }
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleInquiry = () => {
    // Navigate to home page contact section
    setLocation("/#contact");
    // Small delay to ensure navigation completes, then scroll
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Ensure page starts at the top when navigating to the catalog
    window.scrollTo({ top: 0, behavior: "auto" });

    // Add product schema for all catalog products
    const productSchemaData = createProductListSchema(
      allGrains.map(grain => ({
        name: grain.name,
        description: grain.description,
        image: typeof window !== "undefined"
          ? `${window.location.origin}${grain.image}`
          : `https://afzharsagrigrains.com${grain.image}`,
        category: grain.category
      }))
    );

    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "catalog-products-schema";
    productScript.textContent = JSON.stringify(productSchemaData);
    document.head.appendChild(productScript);

    // Add breadcrumb schema
    const breadcrumbData = breadcrumbSchema([
      {
        name: "Home",
        url: typeof window !== "undefined" ? window.location.origin : "https://afzharsagrigrains.com"
      },
      {
        name: "Grain Catalog",
        url: typeof window !== "undefined" ? window.location.href : "https://afzharsagrigrains.com/catalog"
      }
    ]);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "catalog-breadcrumb-schema";
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const existingProductScript = document.getElementById("catalog-products-schema");
      if (existingProductScript) {
        document.head.removeChild(existingProductScript);
      }
      const existingBreadcrumbScript = document.getElementById("catalog-breadcrumb-schema");
      if (existingBreadcrumbScript) {
        document.head.removeChild(existingBreadcrumbScript);
      }
    };
  }, []);

  const filteredGrains = useMemo(() => {
    return allGrains.filter((item) => {
      const matchesCategory = activeCategory === "All Products" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEOHead
        title="Grain Catalog | Maize, Rice, Sorghum, Wheat | AFZHARS AgriGrains"
        description="Browse 20+ premium Nigerian grains: maize, rice, sorghum, millet, wheat, beans, soya & specialty grains. Quality assured from Kano & Borno. Shop our full catalog now!"
        url={typeof window !== "undefined" ? window.location.href : ""}
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30 overflow-x-hidden w-full max-w-full">
        <Navbar />
      
      {/* Modern Catalog Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           {/* Abstract pattern */}
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 0 L100 80 Q50 100 0 80 Z" fill="white" />
           </svg>
        </div>
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-8 rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Product <span className="text-secondary">Catalog</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12"
          >
            Explore our extensive range of premium Nigerian agricultural products. Organized for your convenience.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-xl bg-white p-2 rounded-full shadow-2xl flex items-center gap-2 pl-6"
          >
            <Search className="text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search grains, nuts, seeds..." 
              className="border-none shadow-none focus-visible:ring-0 text-base h-12 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      <main className="py-20 -mt-10 relative z-20 w-full max-w-full overflow-x-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-full">
          {/* Categories / Filters - Horizontal Scroll on Mobile */}
          <div className="flex gap-3 overflow-x-auto pb-8 mb-4 no-scrollbar justify-start lg:justify-center px-1 snap-x snap-mandatory scroll-smooth">
            <Button 
                onClick={() => setActiveCategory("All Products")}
                variant={activeCategory === "All Products" ? "default" : "outline"} 
                className={`rounded-full px-6 h-12 flex-shrink-0 snap-center ${activeCategory === "All Products" ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white border-border hover:bg-muted'}`}
            >
              All Products
            </Button>
             {categories.map((cat) => (
               <Button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                variant={activeCategory === cat ? "default" : "outline"} 
                className={`rounded-full px-6 h-12 flex-shrink-0 snap-center transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white border-border hover:bg-muted'}`}
               >
                 {cat}
               </Button>
             ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGrains.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[2rem] bg-white flex flex-col group cursor-pointer ring-1 ring-black/5">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={`Premium ${item.name} - ${item.category} from AFZHARS AgriGrains Ltd., Nigeria`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm font-bold px-3 py-1">
                          {item.category.split(' ')[0]}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col flex-grow relative">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors flex-1 pr-3">
                          {item.name}
                        </h3>

                        {/* Inquiry Button - Next to Heading */}
                        <button
                          onClick={handleInquiry}
                          className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/90 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group/btn flex-shrink-0"
                          aria-label="Contact us about this product"
                        >
                          <Mail className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>

                      <div className="w-12 h-1 bg-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>

                      <div className="bg-muted/30 -mx-6 -mb-6 p-4 px-6 border-t border-border/50 group-hover:bg-primary/5 transition-colors mt-auto">
                        <div className="text-center">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Specifications
                          </p>
                          <p className="text-xs md:text-sm font-bold text-foreground mt-0.5">
                            {item.specs}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredGrains.length === 0 && (
             <div className="text-center py-20 text-muted-foreground">
               <p className="text-lg">No products found matching your search.</p>
               <Button 
                 variant="link" 
                 onClick={() => {setSearchQuery(""); setActiveCategory("All Products")}}
                 className="text-primary mt-2"
               >
                 Clear filters
               </Button>
             </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
