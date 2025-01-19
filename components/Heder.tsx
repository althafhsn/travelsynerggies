'use client'

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";


const Header = () => {

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
            {/* <section className="min-h-[80vh] flex items-center justify-center pt-0">
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="relative h-full w-full">
                        <video
                            autoPlay
                            playsInline
                            muted
                            loop
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
                        </video>

                        <svg
                            className="absolute inset-0 h-full w-full"
                            preserveAspectRatio="xMidYMid slice"
                            viewBox="0 0 1000 1000"
                        >
                            <defs>
                                <mask id="textMask">
                                    <rect width="100%" height="100%" fill="white" />
                                    <text
                                        x="500"
                                        y="500"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="black"
                                        className=" text-[3em] md:text-[4em] lg:text-[6em] font-mono font-bold uppercase transition-all duration-1000"
                                    >
                                        Travel synergies
                                    </text>
                                </mask>
                            </defs>

                            <rect
                                width="100%"
                                height="100%"
                                fill="black"
                                mask="url(#textMask)"
                            />
                        </svg>
                    </div>
                </div>
            </section> */}
            {/* <nav className="sticky top-0 w-full bg-black/95 backdrop-blur-sm  z-50 border-b-[1px] border-white">
                <div className="flex justify-between mx-auto max-w-7xl padding-container py-3 px-5 z-0 ">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={150} height={29} className="scale-150" />
                    </Link>

                    <ul className="hidden h-full gap-6 md:flex lg:pt-2 my-auto">
                        {NAV_LINKS.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className="text-[16px]  text-gray-50 flex justify-center cursor-pointer pb-1.5 transition-all hover:text-orange-500 hover:border-orange-500 hover:border-b-2 active:text-orange-500 duration-300 ease-in-out z-0 hover:blur-0 hover:scale-105"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                    <div className="inline-block cursor-pointer md:hidden text-orange-500 text-lg font-extrabold my-auto">
                        <CiMenuFries />

                    </div>
                </div>

            </nav> */}
            <main className="min-h-screen relative">
                {/* Hero Background - Changed from fixed to absolute */}
                <div className="absolute inset-0 w-full">
                    <img
                        src="/landing/hero.jpg"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Sticky Header with transparent background */}
                <header className="sticky top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300">
                    <div className="container mx-auto px-8 py-6">
                        <nav className="flex items-center justify-between">
                            <Link href="/" className="w-[50%] md:w-[25%] lg:w-[15%] xl:w-[12%]">
                                <img src="/whitelogo.png" alt="Logo" />
                            </Link>

                            <div className="hidden lg:flex items-center gap-12">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/about", label: "About" },
                                    { href: "/discover", label: "Careers" },
                                    { href: "/blog", label: "Social Responsibility" },
                                    { href: "/contact", label: "Contact" },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`pb-1 text-white transition-all ${window.location.pathname === link.href
                                            ? "text-yellow-500 border-yellow-500 border-b-2"
                                            : "hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="inline-block cursor-pointer lg:hidden text-2xl font-extrabold my-auto text-white">
                                <CiMenuFries />
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative lg:min-h-screen flex items-center pt-6 ">
                    <div className="text-center mx-auto">
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
                <section className="relative py-24">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-8 relative">
                        <div className="grid md:grid-cols-2 gap-8 items-center text-center lg:text-start px-2">
                            <div>
                                <h2 className="text-white text-5xl font-serif font-bold">Marhaba !</h2>
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

                                <button className="mt-12 border border-yellow-500 text-yellow-500 px-8 py-4 hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-2">
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
    );
};

export default Header;
