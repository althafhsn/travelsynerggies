// ContactButton.tsx
'use client'
import React from 'react';
import { FiPhone, FiMail } from "react-icons/fi";

interface ContactButtonProps {
    icon: 'phone' | 'mail';
    title: string;
    phoneNumber?: string;
    isOnline?: boolean;
    email?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, title, phoneNumber, isOnline, email }) => {
    const handleClick = () => {
        if (phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }
    };

    return (
        <button
            onClick={handleClick}
            className=" "
        >
            <div className="relative md:w-40 md:h-40 w-32 h-32 lg:w-52 lg:h-52 xl:w-64 xl:h-64 mx-auto">
                <div className='group'>
                    <div className="absolute inset-0 rounded-full border border-white/20 hover:border-orange-500 hover:bg-orange-500 flex group-hover:scale-110 flex-col items-center justify-center gap-2 lg:gap-4 xl:gap-6 bg-gray-900 transform transition-transform duration-300 ease-in-out overflow-hidden">
                        {icon === 'phone' ? (
                            <FiPhone className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white group-hover:text-gray-900" />
                        ) : (
                            <FiMail className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white group-hover:text-gray-900" />
                        )}
                        <div className="text-center px-2">
                            <h2 className="text-white text-[11px] md:text-lg lg:text-2xl group-hover:text-gray-900 font-bold mb-2">
                                {title}
                            </h2>
                            {phoneNumber && (
                                <p className="text-white group-hover:text-gray-800 text-[9px] md:text-sm mb-1 truncate">
                                    {phoneNumber}
                                </p>
                            )}
                            {email && (
                                <p className="text-white group-hover:text-gray-800 text-[9px] md:text-sm mb-1 truncate">
                                    {email}
                                </p>
                            )}

                            {isOnline && (
                                <p className="text-orange-400 group-hover:text-gray-700 text-[9px] md:text-sm">
                                    We are online now
                                </p>
                            )}
                        </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {/* Left Section */}
                    <div className="text-orange-500 flex flex-col items-center justify-center md:items-start text-center md:text-start md:col-span-1">
                        <h1 className="leading-[2] font-bold mb-6 text-2xl md:text-5xl font-serif">
                            Contact Your  <br />
                            <span className="text-white">Travel Designer</span>
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 justify-between items-center md:col-span-2 -gap-3">
                        {/* Call Us Button */}
                        <ContactButton
                            icon="phone"
                            title="Call Us"
                            phoneNumber="+971 544552595"
                            isOnline={true}
                        />

                        {/* Enquiry Button */}
                        <ContactButton
                            icon="mail"
                            title="Send an Enquiry"
                            email="info@travelsynergies.com"
                        />
                    </div>
                </div>
            </div>
        </div>


    );
}