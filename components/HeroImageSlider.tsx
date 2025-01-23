'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export interface SlideImage {
    title: string;
    name: string;
    image: string;
    description: string;
}

const sliderData: SlideImage[] = [
    {
        title: "SANTORINI",
        name: "The Geek Island",
        image: "/outbound/hero/img4.webp",
        description: "Uncover the vibrant culture and landscapes of Vietnam."
    },
    {
        title: "PARCO NAZINALE",
        name: "Dalle Cinwue Tarre",
        image: "/outbound/hero/img2.webp",
        description: "Experience the captivating views of Santorini"
    },
    {
        title: "PARADISE ISLAND",
        name: "Italy",
        image: "/outbound/hero/img1.webp",
        description: "A journey through art, history and flavors of Italy"
    },
    {
        title: "BE BE LAKE",
        name: "Bac Kan Province ",
        image: "/outbound/hero/img3.webp",
        description: "Where turquoise waters meet golden sands."
    },
];

const ANIMATION_DURATION = 3000; // Slide duration in milliseconds

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = (): void => {
        setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    };

    const prevSlide = (): void => {
        setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(nextSlide, ANIMATION_DURATION);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex]);

    const slideVariants = {
        enter: { opacity: 0, x: 100, zIndex: 0 },
        center: { opacity: 1, x: 0, zIndex: 1 },
        exit: { opacity: 0, x: -100, zIndex: 0 }
    };

    return (
        <div className="relative w-full lg:h-[80vh] h-[70vh] overflow-hidden bg-cover">
            {/* Main carousel */}
            <div className="relative w-full h-full">
                <AnimatePresence initial={false} mode="popLayout">
                    {sliderData.map((slide, index) => (
                        index === currentIndex && (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    opacity: { duration: 0.6 },
                                    x: { duration: 0.6, },
                                }}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                {/* Content */}
                                <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 transform -translate-y-1/2 text-white max-w-xs md:max-w-lg">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-orange-500 text-3xl md:text-4xl lg:text-6xl font-bold uppercase leading-none"
                                    >
                                        {slide.title}
                                    </motion.h2>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-none"
                                        style={{
                                            textShadow: '3px 4px 4px rgba(255, 255, 255, 0.8)'
                                        }}
                                    >
                                        {slide.name}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 1 }}
                                        className="mt-4 text-sm md:text-lg ml-1"
                                    >
                                        {slide.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full text-orange-500 font-bold hover:text-white transition-colors duration-500"
                    aria-label="Previous slide"
                >
                    <MdKeyboardArrowLeft className="text-[3em]" />
                </button>
                <button
                    onClick={nextSlide}
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
