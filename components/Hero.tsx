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
            <main className=" relative">
                {/* Hero Background - Changed from fixed to absolute */}

                {/* About Section with proper background */}
                <section className="relative py-16">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-8 relative">
                        <div className="grid lg:grid-cols-2 gap-8 items-center  lg:text-start px-2">
                            <div>
                                <h2 className="text-orange-500 text-5xl font-serif font-bold text-center">Marhaba !</h2>
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

                                <button className="mt-12 border border-orange-500 text-orange-500 px-6 py-3 hover:bg-orange-500 hover:text-black transition-all flex items-center gap-2">
                                    Read More
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative hidden md:block">
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