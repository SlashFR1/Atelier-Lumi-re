import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
