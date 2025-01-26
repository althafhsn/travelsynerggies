'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export interface SlideImage {
    name: string;
    image: string;
    description: string;
}

const sliderData: SlideImage[] = [
    {
        name: "Vietnam",
        image: "/outbound/hero/img4.webp",
        description: "Uncover the vibrant culture and landscapes of Vietnam."
    },
    {
        name: "Santorini",
        image: "/outbound/hero/img2.webp",
        description: "Experience the captivating views of Santorini"
    },
    {
        name: "Italy",
        image: "/outbound/hero/img3.webp",
        description: "A journey through art, history and flavors of Italy"
    },
    {
        name: "Bahamas",
        image: "/outbound/hero/img1.webp",
        description: "Where turquoise waters meet golden sands"
    },
];

const ImageSlider: React.FC = () => {
    const swiperRef = React.useState(() => {
        const ref = { current: null as SwiperType | null };
        return ref;
    })[0];

    const slideVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };

    const contentVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };

    return (
        <div className="relative w-full lg:h-[80vh] h-[70vh]">
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                navigation={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="h-full"
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={`bg-${index}`}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ 
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="absolute  top-1/2 left-4 md:left-12 lg:left-24 transform -translate-y-1/2 text-white max-w-xs md:max-w-lg">
                                    <motion.h3 
                                        key={`title-${index}`}
                                        variants={contentVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.8 }}
                                        className=" text-3xl lg:text-6xl font-bold uppercase leading-none md:text-5xl"
                                        style={{
                                            textShadow: '3px 4px 4px rgba(255, 255, 255, 0.8)'
                                        }}
                                    >
                                        {slide.name}
                                    </motion.h3>

                                    <motion.p 
                                        key={`desc-${index}`}
                                        variants={contentVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 1 }}
                                        className="mt-4 text-sm md:text-lg ml-1"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div 
                                        key={`btn-${index}`}
                                        variants={contentVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 1 }}
                                        className="mt-4 text-sm md:text-lg ml-1"
                                    >
                                        <button className='bg-orange-500 px-4 py-2 rounded-full text-lg hover:scale-110 transition-all duration-300 ease-in-out hover:bg-orange-600'>
                                            Contact Us
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-40 lg:gap-96">
                <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full text-orange-500 font-bold hover:text-white transition-colors duration-500"
                    aria-label="Previous slide"
                >
                    <MdKeyboardArrowLeft className="text-[3em]" />
                </button>
                <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full text-orange-500 font-bold hover:text-white transition-colors duration-500"
                    aria-label="Next slide"
                >
                    <MdKeyboardArrowRight className="text-[3em]" />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;