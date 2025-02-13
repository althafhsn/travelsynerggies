import KeyBenefits from '@/components/travel-Tech/KeyBenifits';
import TravelFeatures from '@/components/travel-Tech/TravelFeatures';
import { Globe, Search, Settings } from 'lucide-react';
import React from 'react'

const page = () => {
    const techSolutions = [
        {
            name: 'TS Connect',
            category: "FIT'S",
            logo: "/partners/traminno.png"
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
        <div className=''>
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
                <div className="bg-black pt-5 px-4 md:px-8 lg:px-16">
                    <div className=" mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
                            Our Tech Solutions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-lg p-5">
                            {techSolutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-8 transform transition-all 
                           duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="flex justify-center mb-6">
                                        <div className="min-h-24  flex justify-center">

                                            <img
                                                src={solution.logo}
                                                alt={`${solution.name} logo`}
                                                className=' object-contain h-[60%] w-[60%]'
                                            />
                                        </div>
                                    </div>
                                    <p className="text-orange-500 font-bold text-sm md:text-lg">
                                        {solution.category}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Innovative Solutions Section */}
                <div className="pt-5 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto my-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center">
                            Innovative solutions for destinations services
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg text-center leading-relaxed">
                            We utilize advanced Distribution and Destination Management Solutions across our
                            comprehensive range of services. These solutions not only handle the booking process for our
                            partners but also oversee the entire customer lifecycle at their destination.
                        </p>
                    </div>
                    <div className='p-10'>
                        <img src="/inbound/Inbound/travel-tech/my-vacay-app.webp" alt="" />
                    </div>
                    <div className="max-w-6xl mx-auto my-5">

                        <p className="text-gray-200 text-base md:text-lg text-center leading-relaxed">
                            <span className='font-bold'>Travel Synergies</span> supports their tour operators by offering access to a complete range of services. Our company’s strengths are our high-quality standards, which are ensured throughout our strong network of local experts and our robust systems.
                        </p>
                    </div>
                </div>
                <section className="py-5 px-4 md:px-8 lg:px-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h1 className="text-xl md:text-3xl  font-bold text-orange-500">
                                    XML Connectivity
                                </h1>
                                <p className="text-gray-200 text-base  md:text-lg">
                                    Connect any and all our products into your business.
                                </p>
                                <div className=" text-sm md:text-base rounded-lg shadow-md">
                                    <p className="text-gray-300">
                                        We offer an <span className="font-semibold">XML-Web Service</span> that facilitates the integration of all our products into your business infrastructure. These encompass a wide array of offering such as hotels, transfers, excursions & activities, rental cars, and additional services.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-[75%]">
                                <div className="relative ">
                                    <img src="/inbound/Inbound/travel-tech/XML-connectivity.webp" alt="" className='object-contain rounded-xl ' />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How can we assist section */}
                <section className="py-5 px-4 md:px-8 lg:px-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl md:text-3xl font-bold mb-6 text-orange-500">How can our XML Gateway assist you?</h2>
                        <p className="text-gray-300 text-sm md:text-base">
                            With both the technology and expertise, we comprehend the intricacies of inbound business. This empowers us to provide IT solutions that enhance operational efficiency in our destinations.
                        </p>
                    </div>
                </section>

                {/* We Offer Solutions Banner */}
                <section className="py-5 px-4 md:px-8 lg:px-16">
                    <div className="container mx-auto px-4">
                        <img src="/inbound/Inbound/travel-tech/the-best-tech-solutions.webp" alt="" className='rounded-3xl' />
                    </div>
                </section>

                {/* Innovative Solutions Section */}
                <section className="py-5 px-4 md:px-8 lg:px-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className=" rounded-lg overflow-hidden">
                                <img
                                    src="/inbound/Inbound/travel-tech/xml.webp"
                                    alt="Network visualization"
                                    className="w-full h-[450px] object-cover opacity-70"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-xl md:text-3xl font-bold text-orange-500">Innovative Solutions</h2>
                                <div className="space-y-4">
                                    <p className="text-gray-300 text-sm md:text-base">
                                        We have developed IT solutions to streamline booking management, coordinate transfers, and provide excursion services.
                                    </p>
                                    <p className="text-gray-300 text-sm md:text-base">
                                        Our tools streamline, automate, and centralize the extensive workflow involved in daily incoming business operations. By minimizing time spent on operational tasks, we enable you to focus more on serving your customers.
                                    </p>
                                    <p className="text-gray-300 text-sm md:text-base">
                                        With the aid of AI, data entry is significantly reduced. As integration and XML delivery experts, we seamlessly integrate our products to enhance your sales optimization.
                                    </p>
                                    <p className="text-gray-300 text-sm md:text-base" >
                                        You have the capability to perform a search, obtain quotes, and make bookings using the standard OTA format, alongside conducting detailed product searches. This affords you the opportunity to market hotel, transfer, and excursion packages seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <KeyBenefits />
                <TravelFeatures />
            </div>
        </div>
    )
}

export default page
