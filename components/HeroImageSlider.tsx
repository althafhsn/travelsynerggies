'use client';

import ImageSlider from "./Common/ImageSlider";


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
        <div className='-z-10'>
            <ImageSlider slides={sliderData}
                autoplay={true}
                navigation={true}
                buttonStyles="bg-orange-500/70 hover:text-orange-500 hover:bg-white"
                showContactButton={true}  // Hides the button
                 />
        </div>

    );
};

export default HeroImageOutbound;