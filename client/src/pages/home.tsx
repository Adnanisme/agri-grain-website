import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
