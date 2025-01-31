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
 

  // Add visibility change handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.location.reload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);



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