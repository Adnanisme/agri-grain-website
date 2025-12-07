import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Images
import maizeImg from "@assets/stock_images/white_maize_corn_gra_b609867d.jpg";
import sorghumImg from "@assets/stock_images/red_sorghum_grains_p_cd26aa06.jpg";
import milletImg from "@assets/stock_images/pearl_millet_grains__de458967.jpg";
import riceImg from "@assets/stock_images/raw_white_rice_grain_f8c8b950.jpg";
import beansImg from "@assets/stock_images/nigerian_brown_beans_9a5c8231.jpg";
import soyaImg from "@assets/stock_images/soya_beans_pile_agri_247d9184.jpg";
import fonioImg from "@assets/stock_images/fonio_grains_acha_pi_5bf222d4.jpg";
import bambaraImg from "@assets/stock_images/bambara_groundnut_nu_52a5afca.jpg";
import groundnutImg from "@assets/stock_images/shelled_groundnuts_p_b7953ac2.jpg";
import sesameImg from "@assets/stock_images/sesame_seeds_pile_be_e8f41e48.jpg";
import cashewImg from "@assets/stock_images/raw_cashew_nuts_in_s_e9e84fcd.jpg";
import hibiscusImg from "@assets/stock_images/dried_hibiscus_flowe_80238da8.jpg";

const allGrains = [
  {
    id: 1,
    name: "Maize (Corn)",
    description: "Premium quality yellow and white maize, perfect for food processing, flour production, and animal feed. Sourced from the fertile belts of Kaduna and Niger states.",
    image: maizeImg,
    category: "Cereal",
    specs: "Moisture: <12% | Purity: 99%"
  },
  {
    id: 2,
    name: "Sorghum (Guinea Corn)",
    description: "Nutrient-rich red and white sorghum varieties. Essential for beverages, brewing, and traditional meals like Tuwo.",
    image: sorghumImg,
    category: "Cereal",
    specs: "Moisture: <11% | Cleaned"
  },
  {
    id: 3,
    name: "Pearl Millet",
    description: "High-energy millet grains, drought-resistant and rich in minerals. A staple for Fura da Nono and pap production.",
    image: milletImg,
    category: "Cereal",
    specs: "Type: Pearl | Stone-free"
  },
  {
    id: 4,
    name: "Premium Rice",
    description: "Long-grain polished and parboiled rice options. Locally grown with international processing standards for a stone-free experience.",
    image: riceImg,
    category: "Cereal",
    specs: "Polished | Parboiled"
  },
  {
    id: 5,
    name: "Brown Beans",
    description: "Protein-rich Nigerian brown beans (Honey Beans/Oloyin). Sweet, fast-cooking, and weevil-free storage guaranteed.",
    image: beansImg,
    category: "Legume",
    specs: "Type: Oloyin/Drum | Cleaned"
  },
  {
    id: 6,
    name: "Soya Beans",
    description: "High-protein soya beans ideal for industrial oil extraction, soy milk production, and livestock feed formulation.",
    image: soyaImg,
    category: "Legume",
    specs: "Oil Content: High | Dried"
  },
  {
    id: 7,
    name: "Fonio (Acha)",
    description: "The ancient supergrain. Gluten-free, diabetic-friendly, and packed with amino acids. Sourced from the Plateau highlands.",
    image: fonioImg,
    category: "Superfood",
    specs: "Sand-free | Whole Grain"
  },
  {
    id: 8,
    name: "Bambara Nut",
    description: "A complete food hard-nut legume. Rich in protein and tough enough to grow in harsh conditions. Great for Okpa flour.",
    image: bambaraImg,
    category: "Legume",
    specs: "Dried | Shelled"
  },
  {
    id: 9,
    name: "Groundnuts (Peanuts)",
    description: "Premium shelled groundnuts for oil production, peanut butter, and snacks. High oil content and aflatoxin-free.",
    image: groundnutImg,
    category: "Nut/Oilseed",
    specs: "Shelled | Red/Kampala"
  },
  {
    id: 10,
    name: "Sesame Seeds (Beniseed)",
    description: "High-grade white sesame seeds. A major export crop used for oil and bakery products globally.",
    image: sesameImg,
    category: "Oilseed",
    specs: "Purity: 99.5% | White"
  },
  {
    id: 11,
    name: "Raw Cashew Nuts",
    description: "High-quality raw cashew nuts in shell. Excellent kernel output ratio (KOR), perfect for processing and export.",
    image: cashewImg,
    category: "Nut",
    specs: "KOR: 48-52lbs | Dried"
  },
  {
    id: 12,
    name: "Hibiscus (Zobo)",
    description: "Dried hibiscus flowers for beverages and medicinal teas. Deep red color and strong flavor profile.",
    image: hibiscusImg,
    category: "Flower",
    specs: "Dried | Whole Flower"
  }
];

export default function Catalog() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      
      {/* Modern Catalog Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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
            Explore our extensive range of premium Nigerian agricultural products. From staple grains to export-grade nuts and seeds.
          </motion.p>

          {/* Search/Filter Bar */}
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
            />
            <Button className="rounded-full px-6 h-12 bg-primary hover:bg-primary/90">
              Search
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="py-20 -mt-10 relative z-20">
        <div className="container px-4 md:px-6">
          {/* Categories / Filters - Horizontal Scroll on Mobile */}
          <div className="flex gap-4 overflow-x-auto pb-8 mb-4 no-scrollbar justify-start md:justify-center">
             {["All Products", "Cereals", "Legumes", "Nuts & Oilseeds", "Superfoods"].map((cat, i) => (
               <Button 
                key={cat} 
                variant={i === 0 ? "default" : "outline"} 
                className={`rounded-full px-6 ${i === 0 ? 'bg-primary text-white' : 'bg-white border-border hover:bg-muted'}`}
               >
                 {cat}
               </Button>
             ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {allGrains.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[2rem] bg-white flex flex-col group cursor-pointer ring-1 ring-black/5">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm font-bold px-3 py-1">
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                       {/* Content that slides up on hover if needed, or static */}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="w-12 h-1 bg-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-300" />
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="bg-muted/30 -mx-6 -mb-6 p-4 px-6 border-t border-border/50 group-hover:bg-primary/5 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Specifications
                          </p>
                          <p className="text-sm font-bold text-foreground mt-0.5">
                            {item.specs}
                          </p>
                        </div>
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-secondary hover:text-primary transition-colors">
                           <ArrowLeft className="rotate-180 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
