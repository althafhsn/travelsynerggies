const UAEBucketList = () => {
    const sections = [
        {
            title: "Desert Adventures",
            items: [
                "Rev up for an adrenaline-filled dune buggy ride across the Arabian Desert.",
                "Embark on a camel safari and experience the traditional timeless Bedouin lifestyle.",
                "Unwind at a desert camp for a complete experience, including stargazing and a delicious Arabic feast."
            ]
        },
        {
            title: "City Breaks",
            items: [
                "Explore the iconic Burj Khalifa and take in the breathtaking views of Dubai from the top.",
                "Visit the stunning Sheikh Zayed Grand Mosque in Abu Dhabi and explore the UAE’s rich history.",
                "Wander through the vibrant streets of Dubai's Old Town and discover the city's hidden gems."
            ]
        },
        {
            title: "Cultural Immersions",
            items: [
                "Master local flavors in a traditional Arabic cooking class and experience how to make delicious local dishes.",
                "Explore the local souks (markets) and haggle for souvenirs and traditional goods.",
                "Attend a traditional Arabic music and dance performance and experience the rich cultural heritage of the UAE."
            ]
        },
        {
            title: "Adventure Activities",
            items: [
                "Go skydiving over the Palm Jumeirah and take in the stunning aerial views of Dubai.",
                "Soar in a hot air balloon ride to capture the stunning sunrise over the desert landscape.",
                "Experience the thrilling zip line adventure through the mountains of Ras Al Khaimah."
            ]
        },
        {
            title: "Luxury Indulgence",
            items: [
                "Indulge in a luxury shopping spree at the Dubai Mall and treat yourself to the treasures from opulent boutiques.",
                "Relax and rejuvenate your mind and body with a spa day at a luxurious resort."
            ]
        },
        {
            title: "Golfing",
            items: [
                "Tee off at the iconic Dubai Creek Golf & Yacht Club and enjoy the stunning views of the city.",
                "Play a round of golf at the prestigious Emirates Golf Club and challenge your skills.",
                "Refine your skills with golfing lessons from professional instructors."
            ]
        },
        {
            title: "Yachting",
            items: [
                "Cruise at sunset along the Dubai Marina and take in breathtaking city views.",
                "Embark on a luxury yacht tour of the Arabian Gulf’s crystal-clear waters.",
                "Learn the art of sailing with professional yachting lessons."
            ]
        },
        {
            title: "Horse Riding",
            items: [
                "Embark on a horseback journey through the desert and experience the timeless traditions of the Bedouin way of life."
            ]
        },
        {
            title: "Nightlife & Clubs",
            items: [
                "Enjoy cocktails at the luxurious Cavalli Club in Dubai Marina.",
                "Experience Burj Khalifa’s Armani/Privé for fine cocktails and stunning views.",
                "Dance the night away at an upscale nightclub in Downtown Dubai.",
                "Unwind at a rooftop bar with panoramic city views.",
                "Explore Dubai’s vibrant nightlife with a bar-hopping tour."
            ]
        },
        {
            title: "Opera and Concerts",
            items: [
                "Attend a world-class performance at the Dubai Opera House.",
                "Experience the Abu Dhabi Festival, showcasing opera, concerts, and cultural events.",
                "Tour UAE’s cultural landmarks and enjoy immersive artistic experiences."
            ]
        },
        {
            title: "Dining Experiences",
            items: [
                "Dine at Michelin-starred restaurants like Gordon Ramsay’s Bread Street Kitchen & Bar.",
                "Savor gourmet cuisine with breathtaking views at At.mosphere in Burj Khalifa.",
                "Explore unique dining concepts, from traditional Arabic dishes to international fusions."
            ]
        }
    ];

    return (
        <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden py-12 px-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                    UAE Bucket List
                </h1>

                <p className="text-sm  text-gray-700 font-bold text-center mx-auto mb-1">
                Experience the Best of the UAE with Travel Synergies
                </p>
                <p className="text-sm  text-gray-700 font-bold text-center mx-auto mb-12">
                    At Travel Synergies, we’re dedicated to crafting extraordinary experiences that showcase the best of the UAE. Whether you’re exploring majestic sand dunes of the desert, discovering vibrant streets of Dubai or immersing yourself in the unique culture, we've curated a bucket list of experiences and tours that will make your trip to the UAE truly unforgettable.
                </p>




                <div className="grid md:grid-cols-3 gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-orange-500 mb-1">
                                {section.title}
                            </h3>

                            <ul className="text-gray-600 text-xs md:text-sm list-disc list-inside">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="mb-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl text-gray-700 mb-6 font-bold">
                        Let's make your global travel bucket list a reality!
                    </p>
                </div>
            </div>

        </div>
    );
}
export default UAEBucketList;
