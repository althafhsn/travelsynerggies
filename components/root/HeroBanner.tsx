import React from 'react'
import ImageSlider from '../Common/ImageSlider'

const HeroBanner = () => {
    const heroImage = [
        {

            image: '/inbound/Inbound/Slider/Dubai-creek.webp',

        },
        {

            image: '/inbound/Inbound/Slider/Falcon-hunting.webp',

        },
        {
            image: '/inbound/Inbound/Slider/Serene-desert.webp'
        }

    ]
    return (
        <div className='relative'>
            <ImageSlider slides={heroImage} />
            <div className="absolute top-2 md:top-[120px] right-7 md:right-[80px] flex z-20">
                <div className="h-16 md:h-28 flex flex-col gap-4 md:gap-12 items-start">
                    {/* Vertical text aligned to the top */}
                    <p className="text-[10px] md:text-sm tracking-[0.2em] rotate-180 [writing-mode:vertical-rl] h-full flex items-start font-mono text-orange-500 font-bold">
                        SCROLL
                    </p>
                    <div className='h-full ml-2'>
                        <div className='w-[2px] h-12 md:h-28 bg-orange-100 overflow-hidden'>
                            <div className='progress h-full w-full bg-orange-500'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBanner
