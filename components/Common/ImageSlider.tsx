'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

interface ImageSliderProps {
    slides: SlideImage[];
    autoplay?: boolean;
    delay?: number;
    navigation?: boolean;
    height?: string;
    buttonStyles?: string;
    showContactButton?: boolean;
}

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
    height = "h-[80vh] lg:h-[90vh]",
    buttonStyles = "bg-orange-500/60 hover:text-orange-500 hover:bg-white",
    showContactButton = true
}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperKey, setSwiperKey] = useState(0); // Forces re-render

    // 🛠 Force Swiper Re-render When Navigating Back
    useEffect(() => {
        setSwiperKey((prev) => prev + 1);
    }, []);

    return (
        <div className={`relative w-full ${height} overflow-hidden`}>
            {/* Swiper Component */}
            <Swiper
                key={swiperKey} // ✅ Forces Swiper re-render when navigating back
                modules={[Autoplay, Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
                loop={true}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full"
                speed={1000}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="absolute inset-0 w-full h-full">
                            <div className="relative w-full h-full">
                                {/* 🛠 Fix Image Not Showing After Navigation */}
                                <Image
                                    src={slide.image}
                                    alt={slide.name}
                                    fill
                                    priority={index === 0} // Load first image faster
                                    className="w-full h-full object-cover"
                                />

                                {/* 🛠 Fix Motion Reset on Slide Change */}
                                <motion.div
                                    key={activeIndex} // ✅ Animation resets for each slide
                                    className="absolute top-1/3 flex items-center justify-start text-white px-6 md:px-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <motion.div>
                                        <motion.h3
                                            className="text-xl lg:text-6xl font-bold uppercase text-orange-500 leading-none md:text-5xl"
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ textShadow: "2px 2px 4px white" }}
                                        >
                                            {slide.name}
                                        </motion.h3>

                                        <motion.p
                                            className="mt-4 text-lg md:text-4xl font-bold ml-1 uppercase max-w-4xl"
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            style={{ textShadow: "2px 2px 4px white" }}
                                        >
                                            {slide.description}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            {navigation && (
                <div className="absolute bottom-4 md:bottom-8 right-8 md:right-20 z-30 flex flex-col items-center gap-2 ">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white ${buttonStyles} font-bold transition-colors duration-500  flex items-center justify-center pointer-events-auto`}
                        aria-label="Previous slide"
                    >
                        <IoMdArrowBack className="" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-white ${buttonStyles} font-bold transition-colors duration-500  flex items-center justify-center pointer-events-auto`}
                        aria-label="Next slide"
                    >
                        <IoMdArrowForward  className="" />
                    </button>
                </div>
            )}

            {/* Contact Us Button - Fixed Position (Now Clickable) */}
            {showContactButton && (
                <motion.div
                    className="absolute bottom-4 left-8 md:left-20 md:bottom-8 md:right-8 z-20 pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button className="bg-orange-500 px-4 py-2 rounded-sm text-white hover:scale-110 transition-all duration-300 ease-in-out hover:bg-orange-600 shadow-md font-bold">
                        Contact Us
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default ImageSlider;
