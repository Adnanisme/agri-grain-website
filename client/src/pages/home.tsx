import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MeetFaces } from "@/components/sections/meet-faces";
import { Team } from "@/components/sections/team";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { LivestockAquaculture } from "@/components/sections/livestock";
import { Products } from "@/components/sections/products";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { SEOHead } from "@/components/seo/SEOHead";
import { organizationSchema, localBusinessKano, localBusinessBorno, mainServicesSchema, livestockAquacultureServiceSchema } from "@/lib/structuredData";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add structured data for home page
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = JSON.stringify(localBusinessKano);
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.textContent = JSON.stringify(localBusinessBorno);
    document.head.appendChild(script3);

    const script4 = document.createElement("script");
    script4.type = "application/ld+json";
    script4.textContent = JSON.stringify(mainServicesSchema);
    document.head.appendChild(script4);

    const script5 = document.createElement("script");
    script5.type = "application/ld+json";
    script5.textContent = JSON.stringify(livestockAquacultureServiceSchema);
    document.head.appendChild(script5);

    // Handle hash scrolling on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
      document.head.removeChild(script5);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="AFZHARS AgriGrains | Premium Nigerian Grains Supplier | Kano & Borno"
        description="Leading Nigerian agricultural company supplying premium grains: maize, rice, sorghum, beans & more. Trusted quality from Kano & Borno. Contact us for quotes today!"
        url={typeof window !== "undefined" ? window.location.href : ""}
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30 overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero />
          <MeetFaces />
          <Team />
          <About />
          <Services />
          <LivestockAquaculture />
          <Products />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
