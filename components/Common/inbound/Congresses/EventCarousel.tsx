"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaClipboardList, FaBullhorn, FaCalendarAlt, FaTicketAlt, FaHotel, FaShuttleVan, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const eventFeatures = [
    {
        title: "Seamless Event Registration",
        description:
            "Our user-friendly platform offers a hassle-free registration process, with customizable forms to collect all necessary attendee information.",
        icon: <FaClipboardList className="text-4xl md:text-6xl text-orange-500" />,
    },
    {
        title: "Effective Event Promotion",
        description:
            "Craft a customized event page with essential details, media, and social links to boost attendee engagement and sharing.",
        icon: <FaBullhorn className="text-4xl md:text-6xl text-orange-500" />,
    },
    {
        title: "Event Planning and Coordination",
        description:
            "From corporate conferences to weddings, our platform manages every detail for a seamless and memorable event.",
        icon: <FaCalendarAlt className="text-4xl md:text-6xl text-orange-500" />,
    },
    {
        title: "Ticketing Solutions",
        description:
            "Sell and manage tickets effortlessly with real-time updates to monitor event attendance.",
        icon: <FaTicketAlt className="text-4xl md:text-6xl text-orange-500" />,
    },
    {
        title: "Hotel Accommodations",
        description:
            "Browse a curated selection of hotels near your event, ensuring guests enjoy a comfortable stay.",
        icon: <FaHotel className="text-4xl md:text-6xl text-orange-500" />,
    },
    {
        title: "Transportation and Logistics",
        description:
            "Simplify event logistics with real-time tracked transportation, from airport transfers to group shuttles.",
        icon: <FaShuttleVan className="text-4xl md:text-6xl text-orange-500" />,
    },
];

export default function EventCarousel() {
    return (
        <div className="bg-black">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 7000,
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
                        <SwiperSlide key={index} className="h-96">
                            <div className="bg-gray-900 rounded-lg p-8 h-full flex flex-col justify-between min-h-[400px]">
                                <div className="flex flex-col items-center text-center  p-6 rounded-lg ">
                                    {testimonial.icon}

                                </div>
                                <div className="mt-4 pt-4 border-b border-gray-700">
                                    <p className="text-orange-500 font-semibold text-lg pb-2">
                                        {testimonial.title}
                                    </p>
                                </div>
                                <div className="flex-1 py-1">
                                    <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
                                    <div className="overflow-y-auto max-h-36 pr-2">
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
