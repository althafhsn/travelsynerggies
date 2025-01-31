import React from 'react';
import { Leaf, Battery, Recycle, Users, UserCheck } from 'lucide-react';

const EnvironmentPolicy = () => {
    const initiatives = [
        "Energy-efficient lighting and HVAC systems in our offices",
        "Recycling programs for paper, plastic, and glass",
        "Water conservation measures, such as low-flow toilets and sinks",
        "Sustainable procurement practices, such as purchasing eco-friendly cleaning products and office supplies"
    ];

    const commitments = [
        "Reducing energy consumption and greenhouse gas emissions",
        "Conserving water and reducing waste",
        "Promoting eco-friendly transportation and accommodations",
        "Supporting local communities and conservation efforts",
        "Educating our staff, partners, and customers on the importance of environmental sustainability",
        "Adopting to the use of digital business cards to reduce paper use",
        "Printing or using paper only when necessary with an aim towards a 100% paperless workflow by 2026",
        "Investing in cloud-based tech for admin and HR purposes"
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden py-4 ">
                <div className=" mx-auto text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center md:pt-16">Environment Policy</h1>
                    <p className="text-sm font-bold  mx-auto text-black p-2">
                        At Travel Synergies, we are committed to preserving the environment and protecting the natural beauty of the destinations we serve.
                    </p>
                </div>


                {/* Main Content */}
                <div className="max-w-7xl mx-auto py-2">
                    {/* Our Commitment Section */}
                    <section className="mb-8">
                        <div className="flex items-center mb-6 px-2 justify-center md:justify-start">
                            <Leaf className="text-orange-500 w-8 h-8 mr-3" />
                            <h2 className="text-lg md:text-xl  font-bold text-black">Our Commitment</h2>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 text-gray-600 mx-2">
                            <p className="mb-6">
                                We are committed to minimizing our environmental footprint and promoting sustainable tourism practices throughout our operations, as well as with our partners in their destinations.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 ">
                                {commitments.map((commitment, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-orange-500 mr-2">•</span>
                                        {commitment}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Environmental Initiatives Section */}
                    <section className="mb-8 px-2">
                        <div className="flex items-center mb-6 justify-center md:justify-start">
                            <Battery className="text-orange-500 w-8 h-8 mr-3" />
                            <h2 className="text-lg md:text-xl font-bold text-black">Environmental Initiatives</h2>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6">
                            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                                {initiatives.map((initiative, index) => (
                                    <li key={index} className="flex items-start">
                                        <Recycle className="text-orange-500 w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                        {initiative}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Community Engagement Section */}
                    <section className="mb-8 px-2">
                        <div className="flex items-center mb-6 justify-center md:justify-start">
                            <Users className="text-orange-500 w-8 h-8 mr-3" />
                            <h2 className="text-lg md:text-xl font-bold text-black">Community Engagement</h2>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 text-gray-600">
                            <p className="mb-4">
                                We believe that community involvement is essential in fostering environmental sustainability and supporting local conservation efforts.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Support conservation efforts and protect endangered species
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Promote sustainable tourism practices and responsible travel behaviors
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">•</span>
                                    Educate and raise awareness amongst the local communities on the importance of environmental sustainability
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Customer Engagement Section */}
                    <section>
                        <div className="flex items-center mb-6 px-2 text-center justify-center md:justify-start">
                            <UserCheck className="text-orange-500 w-8 h-8 mr-3" />
                            <h2 className="text-lg md:text-xl font-bold text-black">Customer Engagement</h2>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 text-gray-600">
                            <p>
                                We encourage our customers to join us in our efforts to promote environmental sustainability and reduce our impact on the environment. By providing resources and guidance on sustainable tourism practices and responsible travel behaviors we empower travelers to adopt responsible travel habits and share their own environmental efforts and experiences with us.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentPolicy;