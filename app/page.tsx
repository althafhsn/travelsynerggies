'use client'
import { useState, useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import Explore from "@/components/Explore";
import FeaturesSection from "@/components/FeatursSection";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/HeroImageSlider";

const CookiesPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-16 right-0 Md:right-4 bg-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 z-50 w-[40%]">
      <p className="text-sm text-gray-700 w-full">
        We use cookies to improve your experience. By using our site, you accept our
        <a href="/privacy-policy" className="text-orange-600 underline ml-1">Privacy Policy</a>.
      </p>
      <button
        onClick={handleAccept}
        className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        Accept Cookies
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <Hero />
      <FeaturesSection />
      <Explore />
      <ContactSection />
      <CookiesPopup />
    </div>
  );
}
