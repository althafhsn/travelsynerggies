'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Explore from "@/components/Explore";
import FeaturesSection from "@/components/FeatursSection";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/HeroImageSlider";
import CookiesPopup from "@/components/Common/Coockies";



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
      <CookiesPopup />
    </main>
  );
}