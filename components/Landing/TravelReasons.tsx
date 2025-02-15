"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAward, FaClipboardCheck, FaLaptopCode, FaUserCheck, FaMapMarkedAlt, FaRoute, FaStar, FaGlobe, FaPlaneDeparture, FaHeadset, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const eventFeatures = [
  {
    title: "Proven Track Record",
    description:
      "OYears of experience in managing high profile events and tours speaks of our reliability and expertise. ",
    icon: <FaAward className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Comprehensive Services",
    description:
      "From initial planning and in destination support, to post-trip feedback, we cover every aspect of travel management with utmost precision.",
    icon: <FaClipboardCheck className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Innovative Technology",
    description:
      "We leverage on the latest technology to enhance coordination and efficiency to ensure a smooth operation and overall experience of the tour. We offer real-time availability and instant booking with our booking engine and seamless XML connectivity.",
    icon: <FaLaptopCode className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Personalized Approach",
    description:
      "We customize and provide a personalized services to suit the unique needs and preferences of every traveler.",
    icon: <FaUserCheck className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Local Expertise",
    description:
      "Our team has extensive knowledge of each destination, providing insider tips and recommendations to enhance your experience. Our deep knowledge of the locality ensures that you experience the best of what the destination has to offer.",
    icon: <FaMapMarkedAlt className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Customized Itineraries",
    description:
      "We craft tailored itineraries that reflect your interests and preferences, whether you're passionate about history, seeking thrilling adventures or simply looking to relax and unwind. ",
    icon: <FaRoute className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Unique Experiences",
    description:
      "We offer access to exclusive and unique experiences, from traditional dining opportunities and unique safaris to cultural tours and adventure activities. ",
    icon: <FaStar className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Global Network",
    description:
      "Our connections span renowned accommodation partners, cruise lines, industry stakeholders and key destinations worldwide, allowing unparalleled opportunities for our clients.",
    icon: <FaGlobe className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Memorable Destinations",
    description:
      "From the exotic to the serene, we take you to the world's most sought-after locations.",
    icon: <FaPlaneDeparture className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
  {
    title: "Dedicated staff",
    description:
      "Our dedicated staff offers 24/7 support to ensure seamless, stress-free travel with expert assistance available anytime for all your needs.",
    icon: <FaHeadset className="text-4xl md:text-6xl lg:text-7xl text-orange-500" />,
  },
];

const TravelReasons = () => {
  return (
    <div className="bg-black py-6 lg:py-12">
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10 font-sans text-orange-500">Top 10 Reasons Why We Are Your Perfect Travel Partner!</h1>
      <div className="container mx-auto px-4 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-orange-500',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-orange-500',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {eventFeatures.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <div className="bg-gray-900 rounded-lg p-2 lg:p-8 flex flex-col justify-center items-center min-h-[25rem] lg:min-h-[31.25rem]">
                <div className="flex flex-col items-center text-center p-2 lg:p-6 rounded-lg">
                  {testimonial.icon}
                </div>
                <div className="mt-4 pt-4 border-b border-gray-700">
                  <p className="text-orange-500 font-semibold text-lg lg:text-xl pb-2">
                    {testimonial.title}
                  </p>
                </div>
                <div className="flex-1 py-1">
                  <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
                  <div className="overflow-y-auto max-h-[12rem] pr-2">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
                      {testimonial.description}
                    </p>
                  </div>
                  <FaQuoteRight className="text-orange-500 text-2xl mt-4 ml-auto" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #666;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: rgb(249, 115, 22);
                }
                .testimonial-swiper {
                    padding-bottom: 50px;
                }
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: #2d2d2d;
                    border-radius: 20px;
                }
                ::-webkit-scrollbar-thumb {
                    background: rgb(249, 115, 22);
                    border-radius: 20px;
                }
            `}</style>
    </div>
  );
}


export default TravelReasons; 