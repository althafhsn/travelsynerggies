

const InboundServiceSpectrum = () => {
    const services = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
            title: "TS – Congresses",
            subtitle: "Premier Congresses of Global Excellence",
            description:
                "At Travel Synergies, we are a leading Professional Congress Organizer (PCO) with a proven history of managing and delivering world-class congresses and events.",
            items: [
                "Venue sourcing & logistics",
                "Congress management",
                "Marketing, promotions & branding",
                "Contract negotiations",
                "On-site management",
            ],
        },
        {
            title: "TS Events",
            subtitle: "Experience the Art of Exceptional Events",
            description:
                "At TS Events, we craft unforgettable experiences that elevate your business retreat, social event, or private party to new heights.",
            items: [
                "Award-winning desert experiences",
                "Desert-based team-building exercises",
                "Dune Buggy and Camel Polo activities",
                "Bespoke dining experiences",
                "Conferencing opportunities",
                "Transportation management",
            ],
        },
        {
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
        },
    ]; 
    // const renderSectionContent = (section: TermSection) => {
    //     if (section.type === 'paragraph') {
    //         return <p className="text-gray-600 leading-relaxed">{section.content as string}</p>;
    //     }

    //     return (
    //         <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600">
    //             {(section.content as string[]).map((item, idx) => (
    //                 <li key={idx} className="leading-relaxed">{item}</li>
    //             ))}
    //         </ul>
    //     );
    // };

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            {/* <div className=" mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-6 md:p-10">
                
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                        Terms and Conditions
                    </h1>

                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        
                        <div className="space-y-2 md:space-y-4" role="tablist">
                            {termsSections.map((section, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSection(section.title)}
                                    role="tab"
                                    tabIndex={0}
                                    aria-selected={activeSection === section.title}
                                    className={`w-full px-5 py-3 rounded-sm text-xs md:text-sm font-semibold transition-all duration-300 text-start ${activeSection === section.title
                                            ? 'bg-orange-500 text-white scale-105 shadow-md'
                                            : 'bg-gray-100 text-orange-500 hover:bg-orange-200'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>

                       
                        <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-md">
                            {activeSection ? (
                                <div className="w-full">
                                    {termsSections
                                        .filter(section => section.title === activeSection)
                                        .map((section, index) => (
                                            <div key={index} className="space-y-4">
                                                <h2 className="text-lg font-bold text-orange-600 border-b pb-2">
                                                    {section.title}
                                                </h2>
                                                <div className="text-sm text-gray-700 leading-relaxed">
                                                    {renderSectionContent(section)}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-10">
                                    <p>Select a section to view details</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default InboundServiceSpectrum;
