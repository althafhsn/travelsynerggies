'use client';

import CookiesPopup from "@/components/Common/Coockies";
import VideoSection from "@/components/Landing/HeroVideoSection";
import Marhaba from "@/components/Landing/Marhaba";
import Services from "@/components/Landing/Services";
import TravelReasons from "@/components/Landing/TravelReasons";
import Footer from "@/components/outbound/Footer";



export default function Home() {




  return (
    <main className="relative min-h-screen">
      <div className="flex flex-col">
        <VideoSection />
        <Marhaba />

        <Services />
        <TravelReasons />
      </div>
      <CookiesPopup />

    </main>
  );
}