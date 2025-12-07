import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Existing images (will be updated with new imports in the actual file implementation)
import maizeImg from "@assets/stock_images/white_maize_corn_gra_b609867d.jpg";
import sorghumImg from "@assets/stock_images/red_sorghum_grains_p_cd26aa06.jpg";
import milletImg from "@assets/stock_images/pearl_millet_grains__de458967.jpg";
import riceImg from "@assets/stock_images/raw_white_rice_grain_f8c8b950.jpg";
import beansImg from "@assets/stock_images/nigerian_brown_beans_9a5c8231.jpg";
import soyaImg from "@assets/stock_images/soya_beans_pile_agri_247d9184.jpg";

// New images (placeholders until downloaded)
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
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6">
          
          {/* Header */}
          <div className="mb-12">
            <Link href="/">
              <a className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </a>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Full Grain Catalog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our extensive range of premium Nigerian agricultural products. From staple grains to export-grade nuts and seeds.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGrains.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl bg-white flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-border mt-auto">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider">
                        Specifications
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {item.specs}
                      </p>
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
