'use client';

const HeroImageOutbound = () => {

    return (
        <div className='relative'>
            <video 
                autoPlay 
                loop 
                muted 
                className='w-full h-full object-cover'>
                <source src="/outbound/hero/travel-synergies-outbound.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold">Discover Your Next Adventure</h1>
                <p className="mt-2 text-xl">Explore the world like never before</p>
            </div> */}
            <div className="absolute bottom-4 left-4">
                <button 
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default HeroImageOutbound;
