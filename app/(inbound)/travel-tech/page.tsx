import React from 'react'

const page = () => {
    const techSolutions = [
        {
            name: 'TS Connect',
            category: "FIT'S",
            logo: "/partners/tsconnect2.png"
        },
        {
            name: 'Evintry',
            category: 'Events',
            logo: '/partners/evinty.png'
        },
        {
            name: 'tix2gigs',
            category: 'Tickets',
            logo: '/partners/Tix2Gigs.png'
        }
    ];
    return (
        <div>
            <div className=" container mx-auto min-h-screen flex flex-col">
                {/* Header Section */}
                <div className=" pt-12 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto ">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-4 text-center">
                            Travel Synergies <span className="text-orange-500">Travel Tech</span>
                        </h1>
                        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4 text-center">
                            Travel Synergies leads the way in embracing advanced technology, employing state-of-the-art
                            online systems for a seamless user experience. Our innovative approach facilities direct
                            connections with top-tier global hotel chains, solidifying our position at the forefront of
                            technological progresses as a fundamental component of our business strategy.
                        </p>
                    </div>
                </div>

                {/* Tech Solutions Section */}
                <div className="bg-black pt-12 px-4 md:px-8 lg:px-16">
                    <div className=" mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-12">
                            Our Tech Solutions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-600/50 rounded-lg p-5">
                            {techSolutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50/40 rounded-lg p-8 transform transition-all 
                           duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="flex justify-center mb-6">
                                        <div className="min-h-48 w-48 flex justify-center">

                                            <img
                                                src={solution.logo}
                                                alt={`${solution.name} logo`}
                                                className=' object-contain'
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl text-black font-semibold mb-2">
                                        {solution.name}
                                    </h3>
                                    <p className="text-gray-900">
                                        {solution.category}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Innovative Solutions Section */}
                <div className="py-12 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto my-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center">
                            Innovative solutions for destinations services
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg text-center leading-relaxed">
                            We utilize advance Distribution and Destination Management Solutions across our
                            comprehensive range of services. These solutions not only handle the booking process for our
                            partners but also oversee the entire customer lifecycle at their destination.
                        </p>
                    </div>
                    <div className='p-10 bg-white'>
                        <img src="/inbound/Inbound/travel-tech/my-vacay-app.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
