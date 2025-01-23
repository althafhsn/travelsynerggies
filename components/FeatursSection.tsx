'use client'
import React, { useEffect, useState } from 'react';
import { MdDesignServices, MdLightbulb } from "react-icons/md";
import { FaGlobe, FaHotel, FaPlaneDeparture, FaHeadset } from 'react-icons/fa'
import { GiTrophyCup } from "react-icons/gi";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-12 space-y-6 min-w-[400px] ">
    <div className="p-6 bg-gray-50 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white  transition-all duration-300 ease-in-out transform hover:scale-125 cursor-pointer">
      {icon}
    </div>
    <h3 className="text-orange-500 font-semibold text-xl tracking-wide mt-4">{title}</h3>
    <div className="h-px w-16 bg-orange-500/30"></div>
    <p className="text-gray-100 text-base font-light max-w-[280px] leading-relaxed tracking-wide">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const [position, setPosition] = useState(0);

  const features = [
    {
      icon: <MdDesignServices size={32} />,
      title: "•	Tailored Itineraries",
      description: "We design personalized travel plans that reflect your interests, whether it's cultural immersion, adventure, relaxation or a combination of experiences."
    },
    {
      icon: <FaGlobe size={32} />,
      title: "Global Destinations ",
      description: "Our extensive network allows us to offer journeys to a wide array of destinations across Africa, Asia, Europe, the Americas and beyond."
    },
    {
      icon: <FaHotel size={32} />,
      title: "Choice of Accommodations",
      description: "We partner with global hotels, resorts, and boutique properties to ensure your stay is both comfortable and memorable."
    },
    {
      icon: <GiTrophyCup size={32} />,
      title: "Exclusive Experiences",
      description: "From private tours to unique cultural encounters, we provide access to experiences that are often unavailable to the general public."
    },
    {
      icon: <FaPlaneDeparture size={32} />,
      title: "Seamless Logistics",
      description: "Our team handles all aspects of travel planning, including flights, transfers and reservations, ensuring a hassle-free journey from start to finish."
    },
    {
      icon: <MdLightbulb size={32} />,
      title: "Expert Insights",
      description: "Our team of experts bring a wealth of knowledge and expertise to discover hidden gems, navigate cultural nuances, and enjoy personalized travel recommendations for an exceptional journey."
    },
    {
      icon: <FaHeadset size={32} />,
      title: "Dedicated Support",
      description: "With a commitment to exceptional service, our travel experts are available to assist you at every stage of your trip, providing peace of mind and personalized attention."
    }
  ];

  const doubledFeatures = [...features, ...features];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1;
        if (Math.abs(newPosition) >= features.length * 432) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="w-full overflow-hidden py-2 ">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {doubledFeatures.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;