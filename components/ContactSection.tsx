// ContactButton.tsx
'use client'
import React from 'react';
import { FiPhone, FiMail } from "react-icons/fi";

interface ContactButtonProps {
    icon: 'phone' | 'mail';
    title: string;
    phoneNumber?: string;
    isOnline?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, title, phoneNumber, isOnline }) => {
    const handleClick = () => {
        if (phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }
    };

    return (
        <button
            onClick={handleClick}
            className="w-full h-full group"
        >
            <div className="relative md:w-40 md:h-40 w-32 h-32 lg:w-52 lg:h-52 xl:w-64 xl:h-64 mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <div className="absolute inset-0 rounded-full border border-white/20 hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 flex flex-col items-center justify-center gap-2 lg:gap-4 xl:gap-6 bg-gray-900">
                    {icon === 'phone' ? (
                        <FiPhone className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white group-hover:text-gray-900" />
                    ) : (
                        <FiMail className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white group-hover:text-gray-900" />
                    )}
                    <div className="text-center">
                        <h2 className="text-white text-sm md:text-lg lg:text-2xl group-hover:text-gray-900 font-bold mb-2">
                            {title}
                        </h2>
                        {phoneNumber && (
                            <p className="text-white group-hover:text-gray-800 text-sm md:text-lg lg:text-2xl mb-1">
                                {phoneNumber}
                            </p>
                        )}
                        {isOnline && (
                            <p className="text-orange-400 group-hover:text-gray-700 text-[10px]  md:text-sm xl:text-lg">
                                We are online now
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </button>



    );
};

// ContactSection.tsx
export default function ContactSection() {
    return (
        <div className="px-4 md:px-8 py-16 md:py-20 mx-auto">
            <div className="container mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {/* Left Section */}
                    <div className="text-orange-500 text-center lg:text-start col-span-1 ">
                        <h1 className="text-[2em] xl:text-[3em] leading-[1.1] font-bold mb-6">
                            Contact a Travel Researcher
                        </h1>
                        <p className="text-orange-50 text-lg lg:text-xl">
                            We always aim to reply within 24 hours.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="grid  grid-cols-2 justify-between items-center col-span-2 -gap-3">
                        {/* Call Us Button */}
                        <ContactButton
                            icon="phone"
                            title="Call Us"
                            phoneNumber="+91 95654563"
                            isOnline={true}
                        />

                        {/* Enquiry Button */}
                        <ContactButton
                            icon="mail"
                            title="Send us an Enquiry"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}