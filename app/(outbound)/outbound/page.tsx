'use client';

import ContactSection from "@/components/outbound/ContactSection";
import Explore from "@/components/outbound/Explore";
import FeaturesSection from "@/components/outbound/FeatursSection";
import Hero from "@/components/outbound/Hero";
import ImageSlider from "@/components/outbound/HeroImageSlider";



export default function Home() {
 



  return (
    <main className="relative min-h-screen">
      <div className="flex flex-col">
        <ImageSlider />
        <Hero />
        <FeaturesSection />
        <Explore />
        <ContactSection />
      </div>
    </main>
  );
}