import React from 'react';
import { LuTreePine } from "react-icons/lu";
import { CiGlobe, CiCalculator1, CiPlane } from "react-icons/ci";
import { IoLeafOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaCarAlt, FaPlane, FaRecycle } from "react-icons/fa";
import { GiElectric, GiWaterRecycling } from 'react-icons/gi';

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
        {
            icon: <CiPlane className="w-10 h-10 text-orange-600" />,
            title: "Carbon Footprint",
            description: "Reducing our carbon footprint through offsetting and carbon reduction programs."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">Sustainable Tourism</h1>
                    <p className="text-lg text-gray-600  text-start">
                        At Travel Synergies, we value the efforts of sustainable tourism in the UAE and are committed to promoting environmentally friendly practices that uplifts the local community and preserve the region's natural beauty.
                    </p>

                    <main className="container mx-auto px-4 py-8">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Approach</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Sustainable tourism is not just a trend, but an imperative aspect for the future of our planet. Our mission is to integrate eco-conscious practices into tourism that bring lasting value to travelers, local communities and the environment. Our strategy is anchored on three core principles,
                            </p>
                        </section>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Responsible Travel</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Encouraging travelers to honor local traditions, respect the environment and adopt sustainable habits to minimize their footprint.
                            </p>
                        </section>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Community Engagement</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Close collaboration with local communities to drive tourism initiatives that foster cultural exchange, create jobs and implement community-based tourism projects.
                            </p>
                        </section>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Environmental Conservation</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We encourage and promote environmentally friendly practices to reduce carbon emissions, conserve natural resources and protect local wildlife and ecosystems.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-orange-500 mb-6">Our Initiatives</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We've launched several initiatives to promote sustainable tourism in the UAE, including:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {initiatives.map((initiative, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-7 "
                                    >
                                        {/* Icon Section */}
                                        <div className=' col-span-1 md:flex items-center justify-center hidden'>

                                            <div className="h-[20px] w-[20px] flex-shrink-0">
                                                {initiative.icon}
                                            </div>
                                        </div>

                                        {/* Text Content Section */}
                                        <div className="ml-4  col-span-6 w-full">
                                            <h3 className="md:text-lg text-sm font-bold text-black">{initiative.title}</h3>
                                            <p className="text-gray-600 min-h-16 md:text-sm text-xs ">{initiative.description}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </section>

                        <section className="bg-orange-50 p-8 rounded-lg text-center">
                            <h2 className="text-2xl font-bold text-orange-700 p-4 mb-4">Benefits of Sustainable Tourism</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <CiGlobe className="w-10 h-10 text-orange-600 mb-2" />
                                    <h3 className="text-lg font-bold mb-2 text-black">Unique Experiences</h3>
                                    <p className="text-gray-600">Connect with local culture and traditions for memorable experiences.</p>
                                </div>
                                <div>
                                    <FaUsers className="w-10 h-10 text-orange-600 mb-2" />
                                    <h3 className="text-lg font-bold text-black mb-2">Job Creation</h3>
                                    <p className="text-gray-600">Generate income and employment opportunities for local communities.</p>
                                </div>
                                <div>
                                    <LuTreePine className="w-10 h-10 text-orange-600 mb-2" />
                                    <h3 className="text-lg font-bold text-black mb-2">Environmental Conservation</h3>
                                    <p className="text-gray-600">Support initiatives that protect wildlife and ecosystems.</p>
                                </div>
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