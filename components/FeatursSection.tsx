'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { MdDesignServices, MdLightbulb } from "react-icons/md";
import { FaGlobe, FaHotel, FaPlaneDeparture, FaHeadset } from 'react-icons/fa'
import { GiTrophyCup } from "react-icons/gi";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="border-2 border-white rounded-2xl my-12 p-8 flex flex-col items-center text-center space-y-6 min-w-[350px] h-[400px] shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-grabbing ">
    <div className="p-6 bg-gray-50 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
      {icon}
    </div>
    <h3 className="text-orange-500 font-semibold text-xl tracking-wide mt-4">{title}</h3>
    <div className="h-px w-16 bg-orange-500/30"></div>
    <p className="text-white text-base font-light max-w-[280px] leading-relaxed tracking-wide">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const features = [
    {
      icon: <MdDesignServices size={32} />,
      title: "Tailored Itineraries",
      description: "We design personalized travel plans that reflect your interests, whether it's cultural immersion, adventure, relaxation or a combination of experiences."
    },
    {
      icon: <FaGlobe size={32} />,
      title: "Global Destinations",
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

  return (
    <div className="w-full py-10 relative group">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={3000}
        navigation={{
          enabled: true,
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button'
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          }
        }}
        className="features-swiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <Feature
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div 
        className="custom-prev-button absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 bg-orange-500/20 rounded-full"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </div>
      <div 
        className="custom-next-button absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 bg-orange-500/20 rounded-full"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </div>
  );
};

export default FeaturesSection;