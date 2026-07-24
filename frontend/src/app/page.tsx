import { Categories } from "@/components/landing/categories";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/howitworks";
import { Navbar } from "@/components/landing/navbar";
import { WhyBiliNow } from "@/components/landing/whybilinow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <WhyBiliNow />
        <FAQ />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
