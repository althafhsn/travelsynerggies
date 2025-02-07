'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const VideoSection = () => {
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
        }, 2500);
        return () => clearInterval(interval);
    }, [statements.length]);

    return (
        <section className="relative flex items-center justify-center min-h-[100vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    src="/landing/ts-landing.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover brightness-75"
                />

            </div>

            <div className="relative z-10 text-gray-10 flex flex-col md:text-center px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-mono leading-tight">
                    Experience the world<br />Live the moment
                </h1>

                <div className="impact-statements flex flex-col items-center justify-center h-16 relative">
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
                            className="absolute font-serif text-gray-10"
                        >
                            <h3 className="text-md md:text-lg lg:text-xl whitespace-nowrap">
                                {statements[currentIndex]}
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;