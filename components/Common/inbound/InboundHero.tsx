import Link from 'next/link';
import React from 'react';

const InboundHeader = () => {
    return (
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="container        mx-auto text-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-4">
                    Redefining the art of Travel
                </h2>
                <div className="flex justify-center flex-col items-center mb-4 gap-4">
                    <Link href='/'>
                        <img
                            src="/logo.png"
                            alt="Travel Synergies Logo"
                            className="w-16 md:w-48 mr-3 object-contain"
                        />
                    </Link>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                        Travel Synergies
                    </h1>
                </div>



                <p className="md:text-base text-sm text-gray-300 leading-relaxed max-w-6xl mx-auto">
                    At Travel Synergies, we don't just plan tours; we craft lasting memories. We meticulously weave every detail into a tapestry of exceptional experiences that your guests will cherish forever. Whether it's a conference designed to ignite innovation or a couple in pursuit of a romantic getaway, our commitment is to guarantee lasting memories and an experience of a lifetime.
                </p>
            </div>
        </div>
    );
};

export default InboundHeader;