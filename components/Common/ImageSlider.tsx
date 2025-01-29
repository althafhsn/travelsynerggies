'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Define props interface
interface ImageSliderProps {
    slides: SlideImage[];
    autoplay?: boolean;
    delay?: number;
    navigation?: boolean;
    height?: string;
    buttonStyles?: string;
    showContactButton?: boolean;
}

// Define SlideImage interface
export interface SlideImage {
    name: string;
    image: string;
    description: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    slides,
    autoplay = true,
    delay = 3000,
    navigation = true,
    height = "h-[70vh] lg:h-[80vh]",
    buttonStyles = "bg-orange-500/60 hover:text-orange-500 hover:bg-white",
    showContactButton = true
}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slideVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    const contentVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50 }
    };

    return (
        <div className={`relative w-full ${height}`}>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
                loop={true}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <motion.div
                            key={`slide-${index}`}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                            variants={slideVariants}
                            initial="initial"
                            animate={activeIndex === index ? "animate" : "initial"}
                            exit="exit"
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 transform -translate-y-1/2 text-white max-w-xs md:max-w-lg">
                                <motion.h3
                                    key={`title-${index}`}
                                    variants={contentVariants}
                                    initial="initial"
                                    animate={activeIndex === index ? "animate" : "initial"}
                                    className="text-3xl lg:text-6xl font-bold uppercase text-orange-500 leading-none md:text-5xl"
                                    style={{ textShadow: '3px 4px 4px #ffcc80' }}
                                >
                                    {slide.name}
                                </motion.h3>

                                <motion.p
                                    key={`desc-${index}`}
                                    variants={contentVariants}
                                    initial="initial"
                                    animate={activeIndex === index ? "animate" : "initial"}
                                    className="mt-4 text-2xl md:text-4xl font-bold ml-1"
                                >
                                    {slide.description}
                                </motion.p>
                            </div>

                            {/* Optional Contact Us Button */}
                            {showContactButton && (
                                <motion.div
                                    key={`btn-${index}`}
                                    variants={contentVariants}
                                    initial="initial"
                                    animate={activeIndex === index ? "animate" : "initial"}
                                    className="absolute bottom-4 right-4 md:bottom-8 md:right-8"
                                >
                                    <button className="bg-orange-500 px-4 py-2 rounded-sm text-lg text-white hover:scale-110 transition-all duration-300 ease-in-out hover:bg-orange-600 shadow-md">
                                        Contact Us
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            {navigation && (
                <div className="absolute inset-0 z-10 flex justify-between items-center">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white ${buttonStyles} font-bold transition-colors duration-500 absolute left-4 md:right-2 flex items-center justify-center`}
                        aria-label="Previous slide"
                    >
                        <MdKeyboardArrowLeft className="text-[3em]" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white ${buttonStyles} font-bold transition-colors duration-500 absolute right-4 md:right-2 flex items-center justify-center`}
                        aria-label="Next slide"
                    >
                        <MdKeyboardArrowRight className="text-[3em]" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
