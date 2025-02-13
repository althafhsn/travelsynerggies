'use client';
import React from 'react';
import { LuTreePine } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { IoLeafOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { GiElectric, GiWaterRecycling } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';

const SustainableTourismBlog = () => {
    const initiatives = [
        {
            icon: <IoLeafOutline className="w-10 h-10 text-orange-600" />,
            title: "Green Tourism Certification",
            description: "Partnering with local authorities to establish a certification program that recognizes for eco-conscious hotels, resorts and tour operators that adhere to stringent environmental and social standards."
        },
        {
            icon: <FaUsers className="w-10 h-10 text-orange-600" />,
            title: "Community-Based Tourism",
            description: "Developing immersive cultural experiences that provide travelers with authentic insights and cultral experiences firsthand, while empowering local communities."
        },
        {
            icon: <GiElectric className="w-10 h-10 text-orange-600" />,
            title: "Eco-Friendly Transportation",
            description: "Promoting eco-friendly transportation solutions, including electric and hybrid vehicles, to reduce environmental impact. "
        },
        {
            icon: <GiWaterRecycling className="w-10 h-10 text-orange-600" />,
            title: "Carbon Footprint",
            description: "Reducing our carbon footprint through offsetting and carbon reduction programs."
        },
    ];

    const BenifitsOfSustainableToursm = [
        {
            icon: <CiGlobe className="w-10 h-10 text-orange-600 mb-2" />,
            title: 'Unique Experiences',
            description: 'Connect with local culture and traditions for memorable experiences.'

        },
        {
            icon: <FaUsers className="w-10 h-10 text-orange-600 mb-2" />,
            title: 'Job Creation',
            description: 'Generate income and employment opportunities for local communities.'

        },
        {
            icon: <LuTreePine className="w-10 h-10 text-orange-600 mb-2" />,
            title: 'Environmental Conservation',
            description: 'Support initiatives that protect wildlife and ecosystems.'

        },

    ]
    const Shortsectors = [
        {
            title: 'Our Approach',
            description: ' Sustainable tourism is not just a trend, but an imperative aspect for the future of our planet. Our mission is to integrate eco-conscious practices into tourism that bring lasting value to travelers, local communities and the environment. Our strategy is anchored on three core principles'
        },
        {
            title: 'Responsible Travel',
            description: ' Encouraging travelers to honor local traditions, respect the environment and adopt sustainable habits to minimize their footprint.'
        },
        {
            title: 'Community Engagement',
            description: 'Close collaboration with local communities to drive tourism initiatives that foster cultural exchange, create jobs and implement community-based tourism projects.'
        },
        {
            title: 'Environmental Conservation',
            description: ' Close collaboration with local communities to drive tourism initiatives that foster cultural exchange, create jobs and implement community-based tourism projects.'
        },
        {
            title: 'Our Initiatives',
            description: 'We encourage and promote environmentally friendly practices to reduce carbon emissions, conserve natural resources and protect local wildlife and ecosystems.'
        },

    ]

    return (
        <div className="pt-12 bg-gray-100  px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden ">
                <div className="p-6 md:p-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">Sustainable Tourism</h1>
                    <p className="text-sm text-gray-600  text-center font-bold ">
                        At Travel Synergies, we value the efforts of sustainable tourism in the UAE and are committed to promoting environmentally friendly practices that uplifts the local community and preserve the region's natural beauty.
                    </p>

                    <main className="container mx-auto px-4 py-8">
                        <section className="mb-12">
                            <div className=''>
                                {Shortsectors.map((sector, index) => (
                                    <div key={index}>
                                        <h2 className="text-lg font-bold text-orange-500 mb-1">{sector.title}</h2>
                                        <div className="flex text-gray-500 mb-2">
                                            <div className="text-xs text-gray-500">

                                                <GoDotFill className="mr-2 mt-[4px] " />
                                            </div>
                                            <p className='text-sm'>{sector.description}</p>
                                        </div>

                                    </div>
                                ))}

                            </div>


                            <div className="grid md:grid-cols-2 gap-6 pt-5">
                                {initiatives.map((initiative, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center min-h-[120px] text-center sm:text-left"
                                    >
                                        {/* Icon Section */}
                                        <div className="flex justify-center sm:justify-start">
                                            <div className="h-10 w-10 flex items-center justify-center">
                                                {initiative.icon}
                                            </div>
                                        </div>

                                        {/* Text Content Section */}
                                        <div>
                                            <h3 className="text-sm md:text-lg font-bold text-black">
                                                {initiative.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600">
                                                {initiative.description}
                                            </p>
                                        </div>
                                    </div>



                                ))}
                            </div>
                        </section>

                        <section className="pb-8 rounded-lg ">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 p-4 mb-4 text-center">Benefits of Sustainable Tourism</h2>
                            <div className="grid md:grid-cols-2 gap-6 pt-5">
                                {BenifitsOfSustainableToursm.map((initiative, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center min-h-[120px] text-center sm:text-left"
                                    >
                                        {/* Icon Section */}
                                        <div className="flex justify-center sm:justify-start">
                                            <div className="h-10 w-10 flex items-center justify-center">
                                                {initiative.icon}
                                            </div>
                                        </div>

                                        {/* Text Content Section */}
                                        <div>
                                            <h3 className="text-sm md:text-lg font-bold text-black">
                                                {initiative.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600">
                                                {initiative.description}
                                            </p>
                                        </div>
                                    </div>


                                ))}
                            </div>
                        </section>

                        <section className="bg-orange-50 p-8 rounded-lg text-center">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Join Us</h2>
                            <p className="text-gray-600 mb-6">
                                At Travel Synergies, we invite you to join us in our mission to promote sustainable tourism in the destinations we are in. Together, we can create a meaningful impact, enrich local lives and deliver unforgettable travel experiences that align with a better future for our planet.
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SustainableTourismBlog;