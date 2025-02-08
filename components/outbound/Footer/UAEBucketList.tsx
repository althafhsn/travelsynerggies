const UAEBucketList=()=> {
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
        <section className="bg-gray-100 text-gray-800 p-4 sm:p-8 min-h-screen">
            <div className="container mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-6 sm:p-8">
                <h2 className="text-orange-500 text-xl md:text-3xl font-bold mb-6">Inbound Bucket List </h2>
                <p className="text-gray-400 mb-12">We've curated a bucket list of extraordinary experiences and tours that will make your trip to the UAE truly unforgettable.</p>
            </div>
            <div className="max-w-6xl mx-auto space-y-12">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="text-orange-500 text-lg md:text-xl font-semibold mb-4">{section.title}</h3>
                        <ul className="text-gray-400 text-sm md:text-lg list-disc list-inside">
                            {section.items.map((item, idx) => (
                                <li key={idx} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default UAEBucketList;
