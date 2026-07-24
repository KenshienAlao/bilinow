import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/howitworks";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
}
