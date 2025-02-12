'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        text:" The thoughtful planning, reliable logistics and local expertise have been invaluable to our tours. The proactive approach of the Travel Synergies team has been very attentive to our needs and ensure smooth coordination, making it easier to deliver memorable experiences to our clients",
        author: "Almuth Intamann"
    },
    {
        text: "Our group couldn’t stop talking about how amazing everything was. Thank you for making it so easy and enjoyable.",
        author: "Michael Fernandez"
    },
    {
        text: "Das Travel Synergies team hat uns nicht nur durch hervorragenden Service, sondern durch echte Leidenschaft und Hingabe überzeugt. Was Travel Synergies leistet, geht weit über die üblichen Standards hinaus. Selbst an Wochenenden und nach Bürozeiten stand das Team stets für uns bereit, um Fragen zu beantworten, Änderungen vorzunehmen oder letzte Details zu klären. Diese Flexibilität und Verfügbarkeit haben uns tief beeindruckt.Jeder Kontakt war geprägt von Freundlichkeit, Professionalität und einem echten Interesse daran, unsere Reise zu etwas Besonderem zu machen. Egal, ob kurzfristige Änderungen oder unerwartete Situationen – das Team blieb stets gelassen und lösungsorientiert.Travel Synergies hat unsere Erwartungen nicht nur erfüllt, sondern weit übertroffen.",
        author: "Rena Kahle"
    },

];

const TestimonialCarousel = () => {
    return (
        <div className="bg-black py-16">
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
                            <div className="bg-gray-900 rounded-lg p-8 h-full flex flex-col justify-between min-h-[400px]">
                                <div className="flex-1">
                                    <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
                                    <div className="overflow-y-auto max-h-36 pr-2">
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
                        Sign Up
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