import { motion } from "framer-motion";
import { Fish, Egg, ShieldCheck, Wheat as WheatIcon, Factory, Beef } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@assets/stock_images/livestock-aqua-hero.webp";
import broodingImg from "@assets/stock_images/brooding.webp";
import poultryImg from "@assets/stock_images/poultry.webp";
import fishImg from "@assets/stock_images/fish-farming.webp";
import livestockImg from "@assets/stock_images/livestock-rearing.webp";
import feedImg from "@assets/stock_images/feed-production.webp";
import fatteningImg from "@assets/stock_images/animal-fattening.webp";

const offerings = [
  {
    icon: Egg,
    title: "Brooding",
    description: "Controlled brooding programs that stabilize temps, boost early survival, and set chicks up for healthy growth.",
    image: broodingImg,
  },
  {
    icon: ShieldCheck,
    title: "Livestock Rearing",
    description: "Structured husbandry for cattle and goats with vaccination plans, weight tracking, and welfare-led routines.",
    image: livestockImg,
  },
  {
    icon: Fish,
    title: "Fish Farming",
    description: "Managed ponds and tank systems with quality fingerlings, feeding schedules, and water-quality checks for strong yields.",
    image: fishImg,
  },
  {
    icon: Factory,
    title: "Feed Production",
    description: "Formulated rations for poultry, fish, and ruminants, consistent, lab-checked batches for predictable performance.",
    image: feedImg,
  },
  {
    icon: WheatIcon,
    title: "Poultry",
    description: "End-to-end poultry management, housing, nutrition, and health oversight, to hit target weights on time.",
    image: poultryImg,
  },
  {
    icon: Beef,
    title: "Animal Fattening",
    description: "Structured programs for healthy weight gain and premium meat quality. Nutrition plans and veterinary oversight keep herds on target.",
    image: fatteningImg,
  },
];

export function LivestockAquaculture() {
  return (
    <section id="livestock-aquaculture" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#f3f7f0] via-[#eef4eb] to-[#e7f0e5]">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(#1A4D2E 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2.25rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="Livestock and aquaculture operations at AFZHARS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">Livestock & Aquaculture</p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">Healthy stock, reliable yields.</h3>
                <p className="text-white/80 text-sm md:text-base">Programs built for animal welfare, consistency, and market-ready performance.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Livestock & Aquaculture</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-4">Specialized care for poultry, fish, and herds.</h2>
            <p className="text-muted-foreground text-lg mb-6">Dedicated programs with the right environments, nutrition, and oversight to keep stock healthy and on-spec.</p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm font-semibold text-primary">
              <span className="bg-white shadow-sm px-3 py-1 rounded-full border border-primary/10">Vet oversight</span>
              <span className="bg-white shadow-sm px-3 py-1 rounded-full border border-primary/10">Performance tracking</span>
              <span className="bg-white shadow-sm px-3 py-1 rounded-full border border-primary/10">Biosecurity focus</span>
            </div>
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full px-6">
              Request a Quote
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-white/80 backdrop-blur-sm border border-primary/10 rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 shadow">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Service</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

