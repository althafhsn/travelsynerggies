'use client';

const HeroImageOutbound = () => {

    return (
        <div className='relative'>
            <video
                autoPlay
                loop
                muted
                className='w-full max-h-[90vh] h-auto object-cover'>
                <source src="/outbound/hero/travel-synergies-outbound.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-4 left-4">
                <button
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm md:text-base hover:bg-orange-600 transition-all">
                    Contact Us
                </button>
            </div>
            <div className="absolute top-1/4 right-7 md:right-[100px] flex">
                <div className="h-16 md:h-28 flex flex-col gap-4 md:gap-20 items-start">
                    {/* Vertical text aligned to the top */}
                    <p className="text-[10px] md:text-sm tracking-[0.2em] rotate-180 [writing-mode:vertical-rl] h-full flex items-start font-mono">
                        SCROLL
                    </p>
                    <div className='h-full ml-2'>
                        <div className='w-[2px] h-12 md:h-28 bg-pink-100 overflow-hidden'>
                            <div className='progress h-full w-full bg-orange-500'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HeroImageOutbound;
