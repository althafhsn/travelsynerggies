'use client'
import { useState } from "react";
import { GoDotFill } from "react-icons/go";


const InboundServiceSpectrum = () => {
    const [activeSection, setActiveSection] = useState<string>('fit');
    const services = [
        {
            id: 'fit',
            title: "TS – FIT’s",
            subtitle: "Elevating Travel Experiences",
            description:
                "Travel Synergies specializes in crafting personalized travel experiences tailored to individual preferences. As a leading DMC, we offer exceptional leisure holiday services, including highly customizable FIT options for ultimate travel freedom.",

            items: [
                "Choice of flexible accommodation",
                "Logistics and ground services",
                "Professional guides with local insights",
                "Convenient booking engine",
                "Concierge service",
                "Restaurant reservations",
                "Access to tickets",
            ],
            stack: [
                {
                    subTitle: 'We are Experts in Handling Individual Travelers ( FIT’s )',
                    subDescription: 'Our dedicated team is passionate about travel and brings a deep understanding of the UAE and its unique offerings. ',

                },
                {
                    subTitle: 'Our Promise to Deliver',
                    subDescription: 'Our dedicated team is passionate about travel and brings a deep understanding of the UAE and its unique offerings. ',

                },

            ]


        },
        {
            id: 'groups',
            title: "TS – Groups",
            subtitle: "The Pioneer in Group Travel",
            description:
                "We excel in crafting seamless and personalized group travel experiences. From small tours to corporate retreats or family vacations, our expertise and resources bring your vision to life, ensuring every journey is memorable and stress-free.",
            items: [
                "Leisure group tours",
                "Corporate retreats",
                "Reunions & family get togethers",
                "Logistics & planning",
                "Activity coordination",
                "Itinerary design",
            ],
            stack: [
                {
                    subTitle: 'Our Expertise in Handling Leisure Groups',
                    subDescription: 'Our dedicated team brings a wealth of knowledge with hands-on experience to deliver tailored solutions, catering to specific requests and value additions that exceeds expectations. ',

                },
                {
                    subTitle: 'Our Commitment to Excellence',
                    subDescription: 'Our team is committed to delivering exceptional services for leisure groups, ensuring every journey exceeds expectations. Our approach is client-centric, and we work closely with our partners to understand their preferences and customize our services to create unforgettable group tours. ',

                },

            ],
        },
        {
            id: 'mice',
            title: "TS - MICE",
            subtitle: "Making M.I.C.E Experiences More Exciting",
            description:
                "We specialize in creating unforgettable experiences, from intimate gatherings to grand-scale events. Leveraging our expertise, we seamlessly connect with the perfect hotels, venues, tours, and logistics.",
            items: [
                "Dedicated experts",
                "Venue sourcing",
                "Technology integration",
                "Branding",
                "Cultural immersion",
                "Team building",
                "Post event evaluation",
            ],
            stack: [
                {
                    subTitle: 'We are your go to MICE Operator',
                    subDescription: 'At Travel Synergies, we specialize in delivering comprehensive M.I.C.E. services, dedicated to delivering exceptional and seamless event experiences with extensive expertise.',

                },
                {
                    subTitle: 'Our Experience in Handling Top MICE Events',
                    subDescription: 'Our team has successfully handled several high-profile events for partners such as Visa, Takeda, Nestle, Johnson and Johnson, Kaspersky, Astra Zeneca, Novartis, Pfizer, Stada, Chanel, Microsoft, Samsung, Mars, BAT, Loreal, Colgate, Santander. ',

                },

            ],


        },
        {
            id: 'congresses',
            title: "TS – Congresses",
            subtitle: "Premier Congresses of Global Excellence",
            description:
                "At Travel Synergies, we are a leading Professional Congress Organizer (PCO) with a proven history of managing and delivering world-class congresses and events. Our portfolio includes prestigious global events, such as those organized by the United Nations for the Federal Government of the UAE, showcasing our expertise and commitment to excellence.",
            items: [
                "Venue sourcing & logistics",
                "Congress management",
                "Marketing, promotions & branding",
                "Contract negotiations",
                "On-site management",
            ],
            stack: [
                {
                    subTitle: 'Our Expertise in Congress Organization',
                    subDescription: 'With a team of seasoned professionals, we bring deep industry knowledge and precision to every project. We have successfully managed congresses of all scales, from small intimate gatherings to large international events from diverse industries. ',

                },
                {
                    subTitle: 'Our Commitment to Excellence',
                    subDescription: "We meticulously select cruises that embody luxury, comfort and unparalleled service. Whether you're sailing the Mediterranean or discovering the charm of the Caribbean, we take you to the world’s most captivating destinations with sophistication and style.",

                },

            ],
        },
        {
            id: 'events',
            title: "TS Events",
            subtitle: "Experience the Art of Exceptional Events",
            description:
                "At TS Events, we craft unforgettable experiences that elevate your business retreat, social event, or private party to new heights. As an experience-led events specialist, we place unique and memorable moments at the heart of every occasion",
            items: [
                "Award-winning desert experiences",
                "Desert-based team-building exercises",
                "Dune Buggy and Camel Polo activities",
                "Bespoke dining experiences",
                "Conferencing opportunities",
                "Transportation management",
            ],
            stack: [
                {
                    subTitle: 'Your Vision, Our Commitment',
                    subDescription: "Transform your vision into reality. Whether you're hosting a team-building retreat or managing a large-scale event, we understand what it takes to create an unforgettable experience. Our team of experts will collaborate with you to design a bespoke event that exceeds your expectations and leaves a lasting impression on your guests.",

                },
                {
                    subTitle: 'A Legacy of Excellence',
                    subDescription: 'We are committed to upholding the highest standards of operational excellence and customer-first approach. Our multiple awards and accolades are a testament to our dedication to delivering first-class experiences that surpass your expectations.',

                },
                {
                    subTitle: 'Your Event, Our Expertise',
                    subDescription: 'At TS Events, we handle every detail of your event with care, ensuring a seamless and hassle-free experience. Simply bring your team along and let us create memories that will last a lifetime. We handle every detail of your event with care, delivering a smooth and hassle-free experience',

                },
                {
                    subTitle: 'Get in Touch',
                    subDescription: 'To enquire about creating your fully customized event, reach out to our dedicated event specialists at info@travelsynergies.com We look forward to crafting an unforgettable experience for you. ',

                },

            ],
        },
        {
            id: 'cruises',
            title: "TS - Cruises",
            subtitle: "Raising the Bar for Your Cruise Experience",
            description:
                "We are your DMC go-to resource for designing extraordinary and unforgettable cruises. Travel Synergies offers a variety of services that improve your cruise experience.",
            items: [
                "Exceptional service",
                "Shore excursions",
                "Pre and post tours",
                "Sustainable and responsible travel",
                "Comprehensive service for cruise liners",
            ],
            stack: [
                {
                    subTitle: 'Discover the Ultimate Getaway Experience with Travel Synergies',
                    subDescription: "We craft unforgettable cruise experiences that redefine travel. Whether you're seeking the tranquility of a secluded beach, the excitement of bustling port cities, or the adventure of exploring remote destinations, we have the perfect cruise for you. From pre- and post-cruise tours to comprehensive event management, every detail is handled with precision and excellence.",

                },
                {
                    subTitle: 'Our Commitment to Excellence',
                    subDescription: "We meticulously select cruises that embody luxury, comfort and unparalleled service. Whether you're sailing the Mediterranean or discovering the charm of the Caribbean, we take you to the world’s most captivating destinations with sophistication and style.",

                },

            ],
        }
    ];
    const activeContent = services.find((s) => s.id === activeSection);

    return (
        <div className=" bg-gray-100 text-gray-800 p-4 sm:p-8">
            <div className="container mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-6 sm:p-8">
                {/* Title */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                    UAE Service Spectrum 
                </h1>

                <p className="text-sm text-black mb-4 text-center font-bold ">
                    At Travel Synergies, we prioritize the safety and well-being of our customers and partners when traveling to the United Arab Emirates (UAE). We understand that safety is a key concern for travelers and our goal is to ensure your experience is both secure and enjoyable.

                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="space-y-2 md:space-y-4" role="tablist">
                        {services.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                role="tab"
                                tabIndex={0}
                                aria-selected={activeSection === section.id}
                                className={`w-full px-5 py-3 rounded-sm text-sm md:text-sm font-semibold transition-all duration-300 text-start ${activeSection === section.id
                                    ? 'bg-orange-500 text-white scale-105 shadow-md'
                                    : ' bg-gray-100 text-orange-500 hover:bg-orange-200'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-md min-h-[680px]">


                        <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-2 "> {activeContent?.subtitle}</h3>
                        <p className="flex items-start text-sm mb-2 ">
                            {activeContent?.description}
                        </p>
                        <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-2 "> Our Service Portfolio</h3>
                        {activeContent ? (
                            <ul className="text-gray-700 leading-relaxed text-sm space-y-3">

                                {activeContent.items.map((item, index) => (
                                    <li key={index} className="flex items-center leading-[10px]">
                                        <GoDotFill className="mr-2 text-orange-500" />
                                        <span>{item}</span>

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">
                                Content not found. Please select a valid section.
                            </p>
                        )}


                        {activeContent ? (
                            <ul className="text-gray-700 leading-relaxed text-sm space-y-3">

                                {activeContent.stack.map((item, index) => (
                                    <li key={index} className="mt-4">

                                        <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-2 "> {item?.subTitle}</h3>
                                        <p className="flex items-start text-sm  ">
                                            {item?.subDescription}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">
                                Content not found. Please select a valid section.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InboundServiceSpectrum;
