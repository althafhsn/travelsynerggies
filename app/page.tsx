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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle page reload on back navigation
    const handleBackNavigation = () => {
      window.location.reload();
    };

    // Add event listener for back/forward navigation
    window.addEventListener('popstate', handleBackNavigation);

    // Initial page load handling
    const loadPage = () => {
      setIsLoading(true);
      
      // Force a reload if coming from another page
      const navigationEntry = performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry?.type === 'back_forward') {
        window.location.reload();
        return;
      }

      // Regular page load
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    loadPage();

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, []);

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

  // Loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

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