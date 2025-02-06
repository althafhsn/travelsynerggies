'use client';

import InboundHero from "@/components/Common/inbound/InboundHero";
import InboundInstagram from "@/components/Common/inbound/InboundInstagram";
import QuoteBanner from "@/components/Common/inbound/TheWorldIsABook";
import TravelTech from "@/components/Common/inbound/TravelTech";
import HeroBanner from "@/components/root/HeroBanner";





export default function Home() {




  return (
    <main className="relative min-h-screen">
      <div className="flex flex-col">
        <HeroBanner />
        <InboundHero />
        <QuoteBanner />
        <InboundInstagram />
        <TravelTech />
      </div>
    </main>
  );
}