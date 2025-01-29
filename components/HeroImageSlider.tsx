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
import ImageSlider from './Common/ImageSlider';

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

const HeroImageOutbound = () => {


    return (
        <div >
            <ImageSlider slides={sliderData}
                autoplay={true}
                height="h-[80vh]"
                navigation={true}
                buttonStyles="bg-orange-500/70 hover:text-orange-500 hover:bg-white"
                showContactButton={true}  // Hides the button
                 />
        </div>

    );
};

export default HeroImageOutbound;