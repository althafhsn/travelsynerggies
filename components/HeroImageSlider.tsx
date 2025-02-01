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
</div>

    );
};

export default HeroImageOutbound;
