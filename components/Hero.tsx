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
                        <div className="grid lg:grid-cols-2 gap-8 lg:text-start px-2">
                            <div>
                                <h2 className=" text-5xl font-serif font-bold py-2">Travel the World,</h2>
                                 <h2 className="text-orange-500 text-5xl font-serif font-bold text-center py-2 ">Live the Moment ! </h2>
                                <p className="text-gray-400 mt-8 leading-relaxed">
                                    Imagine waking up to the sound of waves gently crashing on a pristine beach, the golden sun warming your skin as you sip on a fresh coconut. Or picture yourself standing atop a snow-capped mountain, the crisp air filling your lungs as you take in the panoramic views of nature’s grandeur. Whether you’re dreaming of a tropical paradise, a cultural adventure, or a serene retreat, we’ve curated the world’s most stunning destinations to match your travel desires.
                                </p>
        

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