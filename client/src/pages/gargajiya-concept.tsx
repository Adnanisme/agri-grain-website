import { Navbar } from "@/components/layout/navbar";
import { SEOHead } from "@/components/seo/SEOHead";
import { useEffect } from "react";
import { createProductListSchema, gargajiyaOrganizationSchema } from "@/lib/structuredData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Instagram, Droplet, Droplets, Apple, Leaf, TreeDeciduous, UtensilsCrossed, Flame, Soup, Container, Sparkles, Coffee, Sprout, Users, ShieldCheck, TrendingUp, HeartPulse, Heart, Mail } from "lucide-react";
import { Link } from "wouter";
import { GargajiyaContact } from "@/components/sections/gargajiya-contact";

// Import Gargajiya assets - Using WebP format for optimal performance
import heroBg from "@assets/gargajiya-concept/hero.webp";
import logo from "@assets/gargajiya-concept/afzhars-G-logo.webp";
import founderImg from "@assets/gargajiya-concept/HadizaAliyu-Muhammad.webp";

// Import product images
import sheaButterImg from "@assets/gargajiya-concept/shea-butter.webp";
import driedTomatoesImg from "@assets/gargajiya-concept/dried-tomatoes.webp";
import karkashiImg from "@assets/gargajiya-concept/karkashi.webp";
import kukaImg from "@assets/gargajiya-concept/kuka.webp";
import taliyarHausaImg from "@assets/gargajiya-concept/taliyar-hausa.webp";
import yajiImg from "@assets/gargajiya-concept/yaji.webp";
import garinDanwakeImg from "@assets/gargajiya-concept/garin-danwake.webp";
import manAleyidiImg from "@assets/gargajiya-concept/man-aleyidi.webp";
import ndalangImg from "@assets/gargajiya-concept/ndalang.webp";
import neemOilImg from "@assets/gargajiya-concept/neem-oil.webp";
import mixedSpicesImg from "@assets/gargajiya-concept/mixed-spices.webp";
import coconutOilImg from "@assets/gargajiya-concept/coconut-oil.webp";
import curryImg from "@assets/gargajiya-concept/curry.webp";

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const products = [
  {
    id: 1,
    name: "Shea Butter",
    icon: Droplets,
    shortDesc: "Pure, rich moisture.",
    image: sheaButterImg
  },
  {
    id: 2,
    name: "Dried Tomatoes",
    icon: Apple,
    shortDesc: "Sun-dried for sauces.",
    image: driedTomatoesImg
  },
  {
    id: 3,
    name: "Karkashi",
    icon: Leaf,
    shortDesc: "Traditional dried leaves.",
    image: karkashiImg
  },
  {
    id: 4,
    name: "Kuka",
    icon: TreeDeciduous,
    shortDesc: "Ground baobab leaves.",
    image: kukaImg
  },
  {
    id: 5,
    name: "Taliyar Hausa",
    icon: UtensilsCrossed,
    shortDesc: "Traditional Hausa noodles.",
    image: taliyarHausaImg
  },
  {
    id: 6,
    name: "Yaji",
    icon: Flame,
    shortDesc: "Authentic suya spice.",
    image: yajiImg
  },
  {
    id: 7,
    name: "Garin Danwake",
    icon: Soup,
    shortDesc: "Milled danwake flour.",
    image: garinDanwakeImg
  },
  {
    id: 8,
    name: "Man Aleyidi",
    icon: Droplets,
    shortDesc: "Traditional herbal oil.",
    image: manAleyidiImg
  },
  {
    id: 9,
    name: "Ndalang",
    icon: Container,
    shortDesc: "Naturally processed.",
    image: ndalangImg
  },
  {
    id: 10,
    name: "Neem Oil",
    icon: Droplets,
    shortDesc: "Pure antibacterial oil.",
    image: neemOilImg
  },
  {
    id: 11,
    name: "Mixed Spices",
    icon: Sparkles,
    shortDesc: "Blended traditional spices.",
    image: mixedSpicesImg
  },
  {
    id: 12,
    name: "Coconut Oil",
    icon: Coffee,
    shortDesc: "Versatile and pure.",
    image: coconutOilImg
  },
  {
    id: 13,
    name: "Curry",
    icon: Sparkles,
    shortDesc: "Warm flavor seasoning.",
    image: curryImg
  }
];

const missionValues = [
  {
    title: "Sustainable & Modern Farming",
    description: "Promoting sustainable and modern farming systems that preserve our agricultural heritage while embracing innovation.",
    icon: Sprout
  },
  {
    title: "Supporting Local Farmers",
    description: "Supporting local farmers and local value chains to strengthen our communities and ensure fair trade.",
    icon: Users
  },
  {
    title: "Quality & Hygiene",
    description: "Delivering high-quality, hygienically processed traditional foods that meet the highest standards of safety and purity.",
    icon: ShieldCheck
  },
  {
    title: "Value Addition",
    description: "Adding value through cutting-edge agro-processing techniques that enhance nutritional content and extend shelf life.",
    icon: TrendingUp
  },
  {
    title: "Accessible Nutrition",
    description: "Making natural, healthy, and affordable local food products available to every home across Nigeria.",
    icon: HeartPulse
  },
  {
    title: "Community Empowerment",
    description: "Empowering local communities by creating sustainable livelihoods and supporting grassroots agricultural development.",
    icon: Heart
  }
];

export default function GargajiyaConcept() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    // Add product schema for Gargajiya products
    const productSchemaData = createProductListSchema(
      products.map(product => ({
        name: product.name,
        description: product.shortDesc,
        image: typeof window !== "undefined"
          ? `${window.location.origin}${product.image}`
          : `https://afzharsagrigrains.com${product.image}`,
        category: "Traditional Nigerian Foods",
        brand: "AFZHARS Gargajiya Concept"
      }))
    );

    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "gargajiya-products-schema";
    productScript.textContent = JSON.stringify(productSchemaData);
    document.head.appendChild(productScript);

    // Add Gargajiya Organization schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "gargajiya-organization-schema";
    orgScript.textContent = JSON.stringify(gargajiyaOrganizationSchema);
    document.head.appendChild(orgScript);

    return () => {
      const existingProductScript = document.getElementById("gargajiya-products-schema");
      if (existingProductScript) {
        document.head.removeChild(existingProductScript);
      }
      const existingOrgScript = document.getElementById("gargajiya-organization-schema");
      if (existingOrgScript) {
        document.head.removeChild(existingOrgScript);
      }
    };
  }, []);

  const handleInquiry = () => {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="AFZHARS Gargajiya Concept | Natural Food, Healthy Living | Traditional Nigerian Foods"
        description="Naturally produced traditional Nigerian foods: shea butter, dried tomatoes, kuka, yaji, spices & more. Preserving culinary heritage with modern hygiene. Explore our products!"
        url={typeof window !== "undefined" ? window.location.href : ""}
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30 overflow-x-hidden w-full max-w-full">
        <Navbar />
        
        <main className="w-full max-w-full overflow-x-hidden">
          {/* Hero Section */}
          <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Strong Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroBg}
                alt="AFZHARS Gargajiya Concept - Traditional Nigerian Foods"
                className="w-full h-full object-cover"
              />
              {/* Stronger gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/60" />
            </div>

            {/* Clean Hero Content - No Logo, No Stacked Boxes */}
            <div className="container relative z-10 px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
              >
                {/* Eyebrow Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-sm md:text-base text-white/80 uppercase tracking-widest font-semibold mb-6"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                >
                  Gargajiya Concept • Natural Food, Healthy Living
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
                >
                  Authentic Tradition, <span className="text-secondary">Modern Quality</span>
                </motion.h1>

                {/* Supporting Sentence */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                >
                  Preserving indigenous food heritage through naturally sourced, carefully processed traditional ingredients.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  {/* Primary CTA */}
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10 text-lg h-16 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    onClick={() => {
                      const catalog = document.getElementById("products");
                      if (catalog) {
                        catalog.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Explore Our Products
                  </Button>

                  {/* Secondary Button - Outline Style */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full px-10 text-lg h-16 backdrop-blur-sm transition-all"
                    onClick={() => {
                      const founder = document.getElementById("founder");
                      if (founder) {
                        founder.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Learn More <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Founder Section */}
          <section id="founder" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#F9F9F4] via-[#FAFAF7] to-[#F7F7F4]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F3D6] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2 -z-10 max-w-[50vw]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FAF1E6] rounded-full blur-[100px] opacity-35 translate-y-1/3 -translate-x-1/3 -z-10 max-w-[50vw]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 max-w-[45vw]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A4D2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex justify-center lg:justify-start"
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] w-full max-w-sm border-8 border-white">
                    <img
                      src={founderImg}
                      alt="Hadiza Aliyu Muhammad - MD, AFZHARS Gargajiya Concept"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:pt-8"
                >
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-secondary inline-block"></span> Our Founder
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                    Hadiza Aliyu Muhammad
                  </h2>
                  <p className="text-xl text-secondary font-semibold mb-6">
                    MD, AFZHARS Gargajiya Concept
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Providing visionary leadership in blending traditional food heritage with modern agricultural excellence. Dedicated to ensuring our local products remain natural, hygienic, and trusted by households everywhere.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* How We Source & Process Section */}
          <section id="process" className="py-24 md:py-32 relative bg-gradient-to-br from-white via-[#FCFDF9] to-[#F9FBF6] overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 max-w-[50vw]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
            <div className="absolute inset-0 opacity-[0.012] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #9BCF53 1px, transparent 1px), linear-gradient(-45deg, #9BCF53 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="container px-4 md:px-6 relative z-10">
              {/* Section Header */}
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block flex items-center justify-center gap-2"
                >
                  <span className="w-8 h-[2px] bg-secondary inline-block"></span>
                  Our Process
                  <span className="w-8 h-[2px] bg-secondary inline-block"></span>
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6"
                >
                  How We Source & Process
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground"
                >
                  Traditional Wisdom Meets Modern Standards
                </motion.p>
              </div>

              {/* Process Flow */}
              <div className="max-w-7xl mx-auto">
                {/* Desktop: Horizontal Flow */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
                  {/* Connecting Lines - Desktop */}
                  <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 mx-[12.5%]" style={{ width: '75%' }} />

                  {/* Step 1: Traditional Sourcing */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Leaf className="w-10 h-10 text-secondary" />
                      </div>
                      <div className="absolute top-[5.5rem] right-0 translate-x-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 hidden md:flex">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">Traditional Sourcing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We partner with local farmers and gatherers who understand indigenous ingredients, ensuring authenticity from farm to table.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 2: Careful Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <UtensilsCrossed className="w-10 h-10 text-secondary" />
                      </div>
                      <div className="absolute top-[5.5rem] right-0 translate-x-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 hidden md:flex">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">Careful Selection</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every ingredient is hand-inspected and quality-tested to meet our standards for purity, freshness, and traditional integrity.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 3: Hygienic Processing */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Sparkles className="w-10 h-10 text-secondary" />
                      </div>
                      <div className="absolute top-[5.5rem] right-0 translate-x-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 hidden md:flex">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">Hygienic Processing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We blend time-honored processing methods with modern hygiene practices, preserving natural flavors while ensuring safety.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 4: Clean Packaging */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Container className="w-10 h-10 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">Clean Packaging</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sealed with care to maintain freshness, our products reach your kitchen ready to bring authentic tradition to your meals.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile: Vertical Flow */}
                <div className="md:hidden space-y-8 relative">
                  {/* Connecting Line - Mobile */}
                  <div className="absolute left-10 top-24 bottom-24 w-[2px] bg-gradient-to-b from-secondary/30 via-secondary to-secondary/30" />

                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                          <Leaf className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-2">Traditional Sourcing</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            We partner with local farmers and gatherers who understand indigenous ingredients, ensuring authenticity from farm to table.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-10 top-20 w-6 h-6 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 -translate-x-1/2">
                      <ArrowRight className="w-3 h-3 text-secondary rotate-90" />
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                          <UtensilsCrossed className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-2">Careful Selection</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Every ingredient is hand-inspected and quality-tested to meet our standards for purity, freshness, and traditional integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-10 top-20 w-6 h-6 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 -translate-x-1/2">
                      <ArrowRight className="w-3 h-3 text-secondary rotate-90" />
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                          <Sparkles className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-2">Hygienic Processing</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            We blend time-honored processing methods with modern hygiene practices, preserving natural flavors while ensuring safety.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-10 top-20 w-6 h-6 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-20 -translate-x-1/2">
                      <ArrowRight className="w-3 h-3 text-secondary rotate-90" />
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                          <Container className="w-8 h-8 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-2">Clean Packaging</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Sealed with care to maintain freshness, our products reach your kitchen ready to bring authentic tradition to your meals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values Section */}
          <section id="mission" className="py-24 md:py-32 relative bg-gradient-to-br from-white via-[#FDFDFB] to-[#FAFAF7] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 max-w-[50vw]" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] max-w-[40vw]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A4D2E 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            {/* Decorative grain pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #9BCF53 1px, transparent 1px), linear-gradient(-45deg, #9BCF53 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            <div className="container px-4 md:px-6 relative z-10">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
                >
                  Our Commitment
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6"
                >
                  Our Mission & Values
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {missionValues.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white p-8 group">
                        <div className="w-16 h-16 mb-6 bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:from-secondary/30 group-hover:via-secondary/20 transition-all duration-500">
                          <IconComponent className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Product Catalog Section */}
          <section id="products" className="py-24 md:py-32 relative bg-gradient-to-br from-[#FDFDFB] via-[#FAFAF7] to-[#F7F7F4] overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F3D6] rounded-full blur-[120px] opacity-35 -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FAF1E6] rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/3 max-w-[50vw]" />
            <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-[#E8F3D6]/20 rounded-full blur-[100px] max-w-[40vw]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A4D2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            {/* Subtle wave pattern */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #9BCF53 0px, transparent 2px, transparent 40px)', backgroundSize: '100% 100%' }}></div>
            
            <div className="container px-4 md:px-6 relative z-10">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
                >
                  Our Products
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6"
                >
                  Traditional Food Catalog
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  Discover our range of naturally produced, locally sourced traditional foods that celebrate our rich culinary heritage.
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {products.map((product, index) => {
                  return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={handleInquiry}
                    className="cursor-pointer"
                  >
                    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl md:rounded-[2rem] bg-white flex flex-col group">
                      {/* Square Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
                        <img
                          src={product.image}
                          alt={`${product.name} - Traditional Nigerian Food from AFZHARS Gargajiya Concept`}
                          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 p-3 md:p-4"
                          loading="lazy"
                        />
                      </div>

                      {/* Compact Content - Mobile Optimized */}
                      <CardContent className="p-3 md:p-5 flex flex-col flex-grow">
                        <h3 className="text-base md:text-xl font-serif font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm line-clamp-1 w-full">
                          {product.shortDesc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Section with Footer Content */}
          <section id="contact" className="py-24 md:py-32 pb-16 relative bg-gradient-to-br from-primary via-[#1a4d2e] to-[#0f2e1b] text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 max-w-[50vw]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px] max-w-[40vw]" />
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #9BCF53 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold mb-4"
                  >
                    Get In Touch
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-white/80 mb-8"
                  >
                    Contact us to learn more about our traditional food products or place an order.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
                  >
                    <a
                      href="tel:08029829552"
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="font-semibold">08029829552</span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-4 mb-12"
                  >
                    <a
                      href="https://instagram.com/Afzhars_Gargajiya_Concepts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://tiktok.com/@afzharsgargajiyaconcepts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </a>
                  </motion.div>
                </div>

                <GargajiyaContact />

                {/* Footer Content Integrated */}
                <div className="mt-16 pt-12 border-t border-white/10">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <img
                          src={logo}
                          alt="AFZHARS Gargajiya Concept Logo"
                          className="h-12 w-auto"
                        />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed max-w-md mb-3">
                        AFZHARS Gargajiya Concept - Preserving our rich culinary heritage through naturally produced, locally sourced traditional foods.
                      </p>
                      <p className="text-white/60 text-xs font-medium italic">
                        A Proud Subsidiary of AFZHARS AGRI-GRAINS LTD
                      </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                      <Link href="/">
                        <Button
                          variant="outline"
                          className="bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full px-8"
                        >
                          Back to Main Site
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Minimal Footer - Copyright Only */}
        <footer className="bg-primary text-white py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
              <p>&copy; {new Date().getFullYear()} AFZHARS AgriGrains Ltd. All rights reserved. | Developed by Bleu Meridian Technologies</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

