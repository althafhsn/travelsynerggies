// types/slider.ts

// components/ImageSlider.tsx

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
        image: "/outbound/hero/img4.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae."
    },
    {
        title: "PARCO NAZINALE",
        name: "Dalle Cinwue Tarre",
        image: "/outbound/hero/img2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae."
    },
    {
        title: "PARADISE ISLAND",
        name: "The Bahamas",
        image: "/outbound/hero/img1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae."
    },
    {
        title: "BE BE LAKE",
        name: "Bac Kan Province ",
        image: "/outbound/hero/img3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae."
    },
];

const ANIMATION_DURATION = 7000; 

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const timeRunningRef = useRef<HTMLDivElement | null>(null);

    const resetTimeAnimation = (): void => {
        if (timeRunningRef.current) {
            const element = timeRunningRef.current;
            element.style.animation = 'none';
            element.offsetHeight;
            element.style.animation = '';
            element.style.animation = 'runningTime 7s linear 1 forwards';
        }
    };

    const nextSlide = (): void => {
        setCurrentIndex((prev) => (prev + 1) % sliderData.length);
        resetTimeAnimation();
    };

    const prevSlide = (): void => {
        setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
        resetTimeAnimation();
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
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };

    const contentVariants = {
        initial: { opacity: 0, y: 100 },
        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2, // Increased duration for slower animation
                ease: "easeInOut", // Smooth easing
                delay: custom // Staggered delay for child elements
            }
        })
    };

    return (
        <div className="relative w-full lg:h-[80vh] h-[70vh] overflow-hidden bg-cover">

            {/* Main carousel */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${sliderData[currentIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"

                        }}
                    >
                        {/* Content */}
                        <div className="absolute top-1/2 left-4 md:left-12 lg:left-24 transform -translate-y-1/2 text-white max-w-xs md:max-w-lg">
                            <motion.h2
                                custom={0.3}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                className="text-orange-500 text-3xl md:text-5xl lg:text-8xl font-bold uppercase leading-none"
                            >
                                {sliderData[currentIndex].title}
                            </motion.h2>

                            <motion.h3
                                custom={0.6}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                className="text-2xl md:text-4xl lg:text-8xl font-bold uppercase leading-none"
                                style={{
                                    textShadow: '3px 4px 4px rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                {sliderData[currentIndex].name}
                            </motion.h3>

                            <motion.p
                                custom={0.9}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                className="mt-4 text-sm md:text-lg ml-1"
                            >
                                {sliderData[currentIndex].description}
                            </motion.p>

                            <motion.div
                                custom={1.2}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                className="mt-6 ml-1 space-x-4"
                            >
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full  text-orange-500 font-bold hover:text-white  transition-colors duration-500"
                    aria-label="Previous slide"
                >
                    <MdKeyboardArrowLeft className='text-[3em]' />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full  text-orange-500 font-bold hover:text-white transition-colors duration-500"
                    aria-label="Next slide"
                >
                    <MdKeyboardArrowRight className='text-[3em]' />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
