import React from 'react';

interface ServiceSection {
    title: string;
    subtitle: string;
    description: string;
    expertise?: string;
    portfolio: string[];
    commitment: string;
    additionalInfo?: {
        title: string;
        items: string[];
    };
}

const ServiceBlog: React.FC = () => {
    const services: ServiceSection[] = [
        {
            title: "TS – FIT's",
            subtitle: "Elevating Travel Experiences",
            description: "Travel Synergies specializes in crafting personalized travel experiences tailored to individual preferences. As a leading DMC, we offer exceptional leisure holiday services, including highly customizable FIT options for ultimate travel freedom.",
            expertise: "We are Experts in Handling Individual Travelers (FIT's). Our dedicated team is passionate about travel and brings a deep understanding of the UAE and its unique offerings.",
            portfolio: [
                "Choice of flexible accommodation",
                "Logistics and ground services",
                "Professional guides with local insights",
                "Convenient booking engine",
                "Conceirge service",
                "Restaurant reservations",
                "Access to tickets"
            ],
            commitment: "Our team is commited to go above and beyond to provide personalized service at every step of the journey. From curating bespoke itineraries to offering round-the-clock support, we ensure a seamless and enriching travel experience to ensure our guests experience the best of what the destination has to offer."
        },
        {
            title: "TS – Groups",
            subtitle: "The Pioneer in Group Travel",
            description: "We specialize in creating unforgettable experiences, from intimate gatherings to grand-scale events. Leveraging our expertise, we seamlessly connect with the perfect hotels, venues, tours and logistics. Our portfolio spans diplomatic events, concerts, sporting spectacles and corporate MICE programs, all powered by advanced in-house technology for flawless execution.",
            expertise: "Our dedicated team brings a wealth of knowledge with hands-on experience to deliver tailored solutions, catering to specific requests and value additions that exceeds expectations. ",
            portfolio: [
                "Leisure group tours",
                "Corporate retreat",
                "Reunions & family get togethers",
                "Logistics & planning",
                "Activity coordination",
                "Itinerary design",
            ],
            commitment: "Our team is committed to delivering exceptional services for leisure groups, ensuring every journey exceeds expectations. Our approach is client-centric, and we work closely with our partners to understand their preferences and customize our services to create unforgettable group tours"
        },
        {
            title: "TS - MICE",
            subtitle: "Making M.I.C.E Experiences More Exciting",
            description: "We specialize in creating unforgettable experiences, from intimate gatherings to grand-scale events. Leveraging our expertise, we seamlessly connect with the perfect hotels, venues, tours and logistics. Our portfolio spans diplomatic events, concerts, sporting spectacles and corporate MICE programs, all powered by advanced in-house technology for flawless execution.",
            expertise: "At Travel Synergies, we specialize in delivering comprehensive M.I.C.E. services, dedicated to delivering exceptional and seamless event experiences with extensive expertise.",
            portfolio: [
                "Dedicated experts",
                "Venue sourcing",
                "Technology integration",
                "Branding",
                "Cultural immersion",
                "Team building",
                "Post event evaluation",
            ],
            commitment: "Our team has successfully handled several high-profile events for partners such as Visa, Takeda, Nestle, Johnson and Johnson, Kaspersky, Astra Zeneca, Novartis, Pfizer, Stada, Chanel, Microsoft, Samsung, Mars, BAT, Loreal, Colgate, Santander."
        },
        {
            title: "TS – Congresses",
            subtitle: "Premier Congresses of Global Excellence",
            description: "At Travel Synergies, we are a leading Professional Congress Organizer (PCO) with a proven history of managing and delivering world-class congresses and events. Our portfolio includes prestigious global events, such as those organized by the United Nations for the Federal Government of the UAE, showcasing our expertise and commitment to excellence.",
            expertise: "With a team of seasoned professionals, we bring deep industry knowledge and precision to every project. We have successfully managed congresses of all scales, from small intimate gatherings to large international events from diverse industries.",
            portfolio: [
                "Venue sourcing & logistics",
                "Congress management",
                "Marketing, promotions & branding",
                "Contract negotiations",
                "On-site management",
            ],
            commitment: "*  ITU (International elecommunication Union) Congresses* WTSA (World Telecommunication Standardization Assembly)* GSS (Global Standards Symposium):* WCIT (World Conference on International Telecommunications)"
        },

        // Add other services similarly...
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-12">
                    Our Service Spectrum
                </h1>

                <div className="grid gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="space-y-6">
                                    {/* Header Section */}
                                    <div className="border-b border-gray-200 pb-4">
                                        <h2 className="text-3xl font-semibold text-orange-500 mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-gray-700 font-medium">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    {/* Main Content */}
                                    <div className="space-y-6">
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {service.expertise && (
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <p className="text-gray-700">
                                                    {service.expertise}
                                                </p>
                                            </div>
                                        )}

                                        {/* Service Portfolio */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                                Our Service Portfolio
                                            </h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {service.portfolio.map((item, idx) => (
                                                    <li key={idx} className="flex items-center space-x-2">
                                                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Commitment Section */}
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                                Our Commitment
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.commitment}
                                            </p>
                                        </div>

                                        {/* Additional Info if available */}
                                        {service.additionalInfo && (
                                            <div className="border-t border-gray-200 pt-6">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                                    {service.additionalInfo.title}
                                                </h3>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {service.additionalInfo.items.map((item, idx) => (
                                                        <li key={idx} className="text-gray-600">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceBlog;