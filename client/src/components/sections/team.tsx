import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Users, Briefcase, Settings } from "lucide-react";
import { useEffect } from "react";
import { createPersonSchema } from "@/lib/structuredData";

// Import team member images - Using WebP format for optimal performance
import muhammadImg from "@assets/Muhammad-Ahmad-Aliyu.webp";
import zainabImg from "@assets/Zainab-Aliyu-Muhammad.webp";
import abubakarImg from "@assets/Abubakar-Ibrahim-Dawood.webp";
import shuaibuImg from "@assets/Shuaibu-Ali-Kwaya.webp";

const ceo = {
  id: 1,
  name: "Muhammad Ahmad Aliyu",
  position: "Founder and CEO",
  bio: "Growing up in Southern Borno, I saw how agriculture sustains families and empowers communities, shaping my belief that quality food supply is not just a business, but a responsibility. I founded AFZHARS Agri-Grains Ltd to deliver clean, reliable, consistently high-quality grains. Today, we're a fully integrated agribusiness spanning grain production, processing, import/export, livestock, and authentic Arewa processed foods. My goal is to build one of the most trusted grain supply companies regionally and globally, setting a standard for integrity, innovation, and food security.",
  image: muhammadImg,
  icon: Crown,
  objectPosition: "50% 20%"
};

const teamMembers = [
  {
    id: 3,
    name: "Abubakar Ibrahim Dawood",
    position: "Managing Director",
    bio: "Oversees daily operations ensuring efficiency, quality, and productivity while delivering consistent value to partners.",
    image: abubakarImg,
    icon: Briefcase,
    objectPosition: "50% 18%"
  },
  {
    id: 4,
    name: "Shuaibu Ali Kwaya",
    position: "Head of Operations",
    bio: "Manages sourcing, quality control, and logistics to ensure smooth delivery of our grains and agricultural services.",
    image: shuaibuImg,
    icon: Settings,
    objectPosition: "50% 8%"
  },
  {
    id: 2,
    name: "Zainab Aliyu Muhammad",
    position: "Shareholder",
    bio: "Integral to our investment structure, strengthening our mission and supporting sustainable agricultural growth.",
    image: zainabImg,
    icon: Users,
    objectPosition: "50% 12%"
  }
];

export function Team() {
  const CEOIcon = ceo.icon;

  useEffect(() => {
    // Add Person schemas for all team members
    const allMembers = [ceo, ...teamMembers];

    allMembers.forEach((member, index) => {
      const personSchemaData = createPersonSchema({
        name: member.name,
        jobTitle: member.position,
        description: member.bio,
        image: typeof window !== "undefined"
          ? `${window.location.origin}${member.image}`
          : `https://afzharsagrigrains.com${member.image}`
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `person-schema-${index}`;
      script.textContent = JSON.stringify(personSchemaData);
      document.head.appendChild(script);
    });

    return () => {
      allMembers.forEach((_, index) => {
        const existingScript = document.getElementById(`person-schema-${index}`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      });
    };
  }, []);

  return (
    <section id="team" className="py-24 md:py-32 relative bg-gradient-to-br from-[#FDFDFB] via-[#FAFAF7] to-[#F7F7F4] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F3D6] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2 max-w-[50vw]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FAF1E6] rounded-full blur-[100px] opacity-25 translate-y-1/3 -translate-x-1/3 max-w-[50vw]" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A4D2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-600 mb-4 block"
          >
            Our Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate leaders driving excellence in Nigerian agriculture, committed to quality, sustainability, and community impact.
          </motion.p>
        </div>

        {/* Featured CEO Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-12"
        >
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl bg-white group ring-1 ring-black/5 hover:-translate-y-1">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0">
              {/* CEO Image - Fixed Portrait Frame */}
              <div className="relative w-full h-[420px] lg:h-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={ceo.image}
                  alt={`${ceo.name} - ${ceo.position} at AFZHARS AgriGrains`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    objectPosition: ceo.objectPosition,
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white text-primary border-none shadow-lg px-4 py-2 flex items-center gap-2 font-bold">
                    <CEOIcon className="h-4 w-4" />
                    {ceo.position}
                  </Badge>
                </div>
              </div>

              {/* CEO Content */}
              <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {ceo.name}
                </h3>
                <div className="w-16 h-1.5 bg-secondary rounded-full mb-5 group-hover:w-24 transition-all duration-300" />

                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {ceo.bio}
                </p>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Team Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl bg-white group ring-1 ring-black/5 hover:-translate-y-1">
                  {/* Fixed Portrait Image Frame */}
                  <div className="relative w-full h-[380px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.position} at AFZHARS AgriGrains`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        objectFit: 'cover',
                        objectPosition: member.objectPosition,
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white text-primary border-none shadow-md px-3 py-1.5 flex items-center gap-2 font-semibold text-sm">
                        <IconComponent className="h-3.5 w-3.5" />
                        {member.position}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="w-12 h-1 bg-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                    <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

