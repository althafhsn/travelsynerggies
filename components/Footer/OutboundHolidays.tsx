import React from 'react';

const OutboundTravelBlog = () => {
    const trendData = [
        {
            title: "Popular Destinations",
            items: [
                "Europe: UK, Germany and France remain hot favorites.",
                "Asia: Countries like India, Thailand and Malaysia attract with their vibrant cultures and natural beauty.",
                "Africa: Morocco and South Africa lead as preferred destinations for unique experiences.",
                "Americas: US, Canada and Brazil have found increased popularity."
            ]
        },
        {
            title: "Travel Trends and Preferences",
            items: [
                "UAE travelers typically seek luxury experiences, prioritizing comfort, convenience, and exclusivity.",
                "There's also a growing interest in exploring lesser-known destinations and engaging in activities like adventure travel and cultural tourism."
            ]
        },
        {
            title: "Travel Synergies' Expertise",
            items: [
                "With deep knowledge of the UAE outbound travel segment, Travel Synergies excels in crafting bespoke travel experiences.",
                "Our expert team is well-versed in the most sought after destinations and is dedicated to designing packages that cater to diverse preferences and budgets.",
                "We've partnered with leading global travel companies and tourism boards to bring our clients exclusive offers and unique experiences.",
                "At Travel Synergies, we recognize that every traveler is unique, and we strive to provide customized travel solutions that meet their individual needs and preferences. Our team of travel experts will work closely with you to create personalized travel itineraries featuring the best destinations, activities and experiences ensuring a journey to provide you an experience of a lifetime."
            ]
        },
        {
            title: "Partnerships and Collaborations",
            items: [
                "We’ve partnered with leading global travel companies and tourism boards to bring our clients exclusive offers and unique experiences."
            ]
        },
        {
            title: "Customized Travel Solutions",
            items: [
                "At Travel Synergies, we recognize that every traveler is unique, and we strive to provide customized travel solutions that meet their individual needs and preferences. ",
                "Our team of travel experts will work closely with you to create personalized travel itineraries featuring the best destinations, activities and experiences ensuring a journey to provide you an experience of a lifetime.",

            ]
        },

    ];

    return (
        <div className="min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8 pt-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">Tapping into the UAE's Booming Outbound Travel Market</h1>
                    <p className="text-lg text-gray-600 ">
                        The UAE's outbound travel market is experiencing significant growth, driven by the nation's rising affluence and a population eager to explore the world. As a leading travel company in the region, Travel Synergies is perfectly positioned to leverage this trend and meet the evolving demands of UAE travelers.
                    </p>


                    <main className="container mx-auto px-4 py-8">
                        {trendData.map((trend, index) => (
                            <section key={index} className={`mb-12 ${index % 2 === 0 ? 'bg-gray-100 p-6 rounded-lg' : ''}`}>
                                <div className="flex items-center mb-4">
                                    <h2 className="text-2xl font-bold text-orange-500 ml-4">{trend.title}</h2>
                                </div>
                                <ul className="list-disc pl-6 text-gray-600">
                                    {trend.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}

                        {/* <section className="bg-orange-100 p-8 rounded-lg text-center">
                            <h2 className="text-2xl font-bold text-orange-700 mb-4">Customized Travel Solutions</h2>
                            <p className="text-gray-600 mb-6">
                                At Travel Synergies, we recognize that every traveler is unique, and we strive to provide customized travel solutions that meet their individual needs and preferences. Our team of travel experts will work closely with you to create personalized travel itineraries featuring the best destinations, activities and experiences ensuring a journey to provide you an experience of a lifetime.
                            </p>
                            <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                                Explore Custom Packages
                            </a>
                        </section> */}
                    </main>
                </div>
            </div>

        </div>
    );
};

export default OutboundTravelBlog;