'use client'
import { useEffect } from "react";

const TheGreatest = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <div className=" container mx-auto relative w-full h-[200px] md:h-[300px] lg:h-[300px] flex items-center justify-center text-white py-10 mb-10">
            {/* Background Image */}
            <img
                src="/landing/TheGreatest.webp"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Quote Content */}
            <div className="relative text-center px-4">
                <p className="text-lg md:text-2xl lg:text-4xl font-medium italic">
                    “The greatest journeys begin with a single step”
                </p>
                <p className="text-sm md:text-lg lg:text-xl mt-2 text-end" style={{ fontFamily: "'Dancing Script', cursive" }}>
                – Sinbad
                </p>
            </div>
        </div>
    );
}

export default TheGreatest;