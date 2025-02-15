'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        text: "Exceptional service! The accommodations, activities and attention to detail made our vacation truly special.",
        author: "Jake & Amanda Smith"
    },
    {
        text: "The best tour company we've ever used. Very professional and friendly. They knew what exactly to offer us and ensured all elements of the tour was handled successfully. It went beyond what we expected. Thank you for the wonderful experience.",
        author: "Marryann Boyd"
    },
    {
        text: "Unforgettable experience! Every detail was perfectly planned and the services were amazing. Highly recommend.",
        author: "Aigerim Jumabayeva"
    },
    {
        text: "Travel Synergies made our vacation truly memorable. Everything was flawless from beginning to end and we enjoyed the little surprises. Thank you for turning our dream vacation into reality.",
        author: "Henry & Mathilda Hoffman"
    }
];

const TestimonialCarousel = () => {
    return (
        <div className="bg-black py-5">
            <h2 className="text-orange-500 text-2xl md:text-3xl font-bold text-center mb-8">Testimonials</h2>
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
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-96">
                            <div className="bg-gray-900 rounded-lg p-8 h-full flex flex-col justify-between min-h-[420px]">
                                <div className="flex-1 min-h-[90%]">
                                    <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
                                    <div className="overflow-y-auto max-h-[80%] pr-2">
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                    </div>
                                    <FaQuoteRight className="text-orange-500 text-2xl mt-4 ml-auto" />
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-700">
                                    <p className="text-orange-500 font-semibold text-lg">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-center mt-8">
                    <h3 className="text-2xl md:text-3xl font-semibold">Ready to Partner with Travel Synergies?</h3>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">Whether you're planning a solo adventure, a romantic getaway, or a family vacation, our expertise and resources ensure a memorable journey.</p>
                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl">
                        Contact Us
                    </button>
                </div>
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
};

export default TestimonialCarousel;