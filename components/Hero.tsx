'use client'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

const Hero = () => {

    const statements = [
        "We don't just plan tours; we craft memories",
        "Excellence is not a standard; it's a promise",
        "From intimate gatherings to grand-scale events",
        "Experience the extraordinary with Travel Synergies",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [statements.length]);
    return (
        <div>
            <main className="min-h-screen relative mt-20">
                {/* Hero Background - Changed from fixed to absolute */}


                {/* Sticky Header with transparent background */}


                {/* Hero Section */}
                <section className="relative lg:min-h-screen flex items-center py-6 ">
                    <div className="absolute inset-0 w-full top-0 -z-10">
                        <img
                            src="/landing/hero.jpg"
                            alt="Hero background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="text-center lg:text-start mx-auto lg:mx-0 px-6">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold  leading-tight">
                            Experience the world<br />
                            Live the moment
                        </h1>

                        <div className="flex items-center gap-4 mt-8 text-gray-100 xl:max-w-[520px] h-[30px]">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute font-serif"
                                >
                                    <p className="text-sm md:text-lg lg:text-xl whitespace-nowrap">
                                        {statements[currentIndex]}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button className="mt-12 bg-yellow-500 text-black px-6 py-3 font-medium hover:bg-yellow-600 transition-all flex items-center gap-2">
                            Explore more
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </section>

                {/* About Section with proper background */}
                <section className="relative py-16">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-8 relative">
                        <div className="grid md:grid-cols-2 gap-8 items-center  lg:text-start px-2">
                            <div>
                                <h2 className="text-white text-5xl font-serif font-bold text-center">Marhaba !</h2>
                                <p className="text-gray-400 mt-8 leading-relaxed">
                                    At Travel Synergies, we take pride in being recognized as a global leader in Destination Management. With an unwavering commitment to excellence, we offer unparalleled services that redefine the art of travel and event planning, creating lasting memories and experiences of a lifetime.
                                </p>
                                <p className="text-gray-400 mt-2 leading-relaxed">
                                    Our exceptional Travel Designers are more than just experts; they are local connoisseurs with a global perspective. Trained on an international scale, they bring an unmatched level of insight, ensuring that your journey is an immersion into the heart of every destination. We take pride in serving the best holiday experiences, whether it be leisure individual travel or group tours.
                                </p>

                                <div className="grid grid-cols-3 gap-8 mt-16">
                                    <div>
                                        <span className="text-white text-3xl md:text-5xl font-bold">268</span>
                                        <p className="text-gray-400 mt-2 text-xs md:text-sm">Completed Trips</p>
                                    </div>
                                    <div>
                                        <span className="text-white text-3xl md:text-5xl font-bold">176</span>
                                        <p className="text-gray-400 mt-2 text-xs md:text-sm">Tour Guides</p>
                                    </div>
                                    <div>
                                        <span className="text-white text-3xl md:text-5xl font-bold">153</span>
                                        <p className="text-gray-400 mt-2 ">Destinations</p>
                                    </div>
                                </div>

                                <button className="mt-12 border border-yellow-500 text-yellow-500 px-6 py-3 hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-2">
                                    Read More
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative hidden lg:block">
                                <img
                                    src="/landing/about.jpg"
                                    alt="Suspension bridge"
                                    className="w-full h-[600px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hero