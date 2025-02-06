'use client'
import { MessageCircle, Phone } from 'lucide-react';
import React from 'react';

export default function ContactSection() {
    return (
        <div className="px-4 md:px-8 py-8 md:pb-16 mx-auto">
            <div className="container mx-auto px-4 xl:px-2">
                {/* Main grid - 2 columns on lg screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    
                    {/* Left Section - Heading */}
                    <div className="text-orange-500 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
                        <h1 className="leading-tight font-bold mb-6 text-2xl md:text-4xl lg:text-5xl ">
                            Contact Your  
                            <br />
                            <span className="text-white">Travel Designer</span>
                        </h1>
                    </div>

                    {/* Right Section - Cards Container */}
                    <div className="w-full">
                        {/* Cards wrapper with flex layout */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-stretch">
                            
                            {/* Sales Card */}
                            <div className="bg-gray-300 rounded-lg p-6 md:p-8 text-center flex flex-col items-center shadow-md w-full md:w-[350px] md:min-w-[300px] ">
                                <Phone className="w-12 h-12 mb-1 text-orange-500" />
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
                                Talk to Us

                                </h2>
                                <p className="text-gray-600  mb-1 md:mb-4  text-[13px] md:text-sm">
                                We are one call away from making your dream destination a reality
                                </p>
                                <a
                                    href="tel:+97154452595"
                                    className="text-orange-500 text-[17px] font-semibold hover:text-orange-700 mb-1"
                                >
                                    +971 54 455 2595
                                </a>
                            </div>

                            {/* Customer Support Card */}
                            <div className="bg-gray-300 rounded-lg p-6 md:p-8 text-center flex flex-col items-center shadow-md w-full md:w-[350px] md:min-w-[300px] ">
                                <MessageCircle className="w-12 h-12 text-orange-500 mb-4" />
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
                                Write to Us

                                </h2>
                                <p className="text-gray-600 mb-1 md:mb-4 text-[13px] md:text-sm">
                                We would love to hear from you

                                </p>
                                <button
                                    className=" text-orange-500 text-[17px] font-semibold py-2 md:py-3 rounded-md transition duration-300"
                                    onClick={() => {/* Handle contact support click */}}
                                >
                                    info@travelsynergies.com 
                                </button>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}