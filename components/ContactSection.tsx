'use client'
import { MessageCircle, Phone } from 'lucide-react';
import React from 'react';

export default function ContactSection() {
    return (
        <div className="px-4 md:px-8 py-8 md:py-16 mx-auto">
            <div className="container mx-auto px-4 xl:px-2">
                {/* Main grid - 2 columns on lg screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Left Section - Heading */}
                    <div className="text-orange-500 flex flex-col items-center lg:items-start text-center lg:text-left">
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
                            <div className="bg-gray-300 rounded-lg p-6 md:p-8 text-center flex flex-col items-center shadow-md w-full md:w-[350px]">
                                <Phone className="w-12 h-12 mb-1 text-orange-500" />
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
                                    Talk to Sales
                                </h2>
                                <p className="text-gray-600 mb-1 text-[13px] md:text-sm">
                                    Interested in our software? Just pick up the phone
                                    to chat with a member of our sales team.
                                </p>
                                <a
                                    href="tel:+97154452595"
                                    className="text-orange-500 text-sm lg:text-xl font-semibold hover:text-orange-700 mb-1"
                                >
                                    +971 544552595
                                </a>
                                <button
                                    className="text-orange-500 hover:text-orange-700 text-sm lg:text-lg flex items-center"
                                >
                                    We're online Now
                                </button>
                            </div>

                            {/* Customer Support Card */}
                            <div className="bg-gray-300 rounded-lg p-6 md:p-8 text-center flex flex-col items-center shadow-md w-full md:w-[350px]">
                                <MessageCircle className="w-12 h-12 text-orange-500 mb-4" />
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-2">
                                    Customer Support
                                </h2>
                                <p className="text-gray-600 mb-1 md:mb-4 text-[13px] md:text-sm">
                                    Sometimes you need a little help from a
                                    support rep. Don't worry... we're here for you.
                                </p>
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 md:py-3 px-8 rounded-md transition duration-300"
                                    onClick={() => {/* Handle contact support click */}}
                                >
                                    Contact
                                </button>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}