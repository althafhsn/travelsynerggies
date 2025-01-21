import ContactSection from "@/components/ContactSection";
import Explore from "@/components/Explore";
import FeaturesSection from "@/components/FeatursSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/HeroImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <Hero />
      <FeaturesSection />
      <Explore />
      <ContactSection />
      <Footer />
    </div>
  );
}
