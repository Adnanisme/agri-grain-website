import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import product images
import maizeImg from "@assets/stock_images/dry_maize_corn_grain_6b8838c6.jpg";
import sorghumImg from "@assets/stock_images/sorghum_grains_pile__7370144f.jpg";
import milletImg from "@assets/stock_images/pearl_millet_grains__0765bfb3.jpg";
import riceImg from "@assets/stock_images/raw_white_rice_grain_f8c8b950.jpg";
import beansImg from "@assets/stock_images/brown_beans_pile_agr_eed00a7f.jpg";
import soyaImg from "@assets/stock_images/soya_beans_pile_agri_247d9184.jpg";

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
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Grain Catalog</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Harvest
            </h2>
            <p className="text-lg text-muted-foreground">
              Sourced directly from fertile Nigerian soils, our grains represent the best of West African agriculture.
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-secondary transition-colors underline decoration-2 underline-offset-4">
            View Full Catalog
          </button>
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
              <Card className="border-none shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden rounded-3xl group bg-muted/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm">
                      {product.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
