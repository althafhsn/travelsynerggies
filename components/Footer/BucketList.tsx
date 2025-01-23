import React from 'react';
import { FaBinoculars } from 'react-icons/fa';

const BucketListBlog = () => {
    const activities = [
        {
            //   icon: <AtvQuad className="w-12 h-12 text-orange-600" />,
            title: "Desert Adventures",
            items: [
                "Rev up for an adrenaline-filled dune buggy ride across the Arabian Desert.",
                "Embark on a camel safari and experience the traditional timeless Bedouin lifestyle.",
                "Unwind at a desert camp for a complete experience, including stargazing and a delicious Arabic feast."
            ]
        },
        {
            //   icon: <FaBinoculars  className="w-12 h-12 text-orange-600" />,
            title: "City Breaks",
            items: [
                "Explore the iconic Burj Khalifa and take in the breathtaking views of Dubai from the top.",
                "Visit the stunning Sheikh Zayed Grand Mosque in Abu Dhabi and explore the UAE's rich history.",
                "Wander through the vibrant streets of Dubai's Old Town and discover the city's hidden gems.",
                "Master local flavors in a traditional Arabic cooking class and experience how to make delicious local dishes.",
                "Explore the local souks (markets) and haggle for souvenirs and traditional goods.",
                "Attend a traditional Arabic music and dance performance and experience the rich cultural heritage of the UAE."
            ]
        },
        {
            //   icon: <SkydivingAlt className="w-12 h-12 text-orange-600" />,
            title: "Adventure Activities",
            items: [
                "Go skydiving over the Palm Jumeirah and take in the stunning aerial views of Dubai.",
                "Soar in a hot air balloon ride to capture the stunning sunrise over the stunning desert landscape.",
                "Experience the thrilling zip line adventure through the mountains of Ras Al Khaimah."
            ]
        },
        {
            //   icon: <Spa className="w-12 h-12 text-orange-600" />,
            title: "Luxury Indulgence",
            items: [
                "Indulge in a luxury shopping spree at the Dubai Mall and treat yourself to the treasures from opulent boutiques.",
                "Relax and rejuvenate your mind and body with a spa day at a luxurious resort."
            ]
        },
        {
            //   icon: <GolfBall className="w-12 h-12 text-orange-600" />,
            title: "Golfing",
            items: [
                "Tee off at the iconic Dubai Creek Golf & Yacht Club and enjoy the stunning views of the city.",
                "Play a round of golf at the prestigious Emirates Golf Club and challenge your skills.",
                "Refine your skills with golfing lessons from professional instructors."
            ]
        },
        {
            //   icon: <Ship className="w-12 h-12 text-orange-600" />,
            title: "Yachting",
            items: [
                "Cruise at sunset along the Dubai Marina and take in breathtaking city views.",
                "Embark on a luxury yacht tour of the Arabian Gulf's crystal-clear waters.",
                "Learn the art of sailing with professional yachting lessons."
            ]
        },
        {
            //   icon: <Horse className="w-12 h-12 text-orange-600" />,
            title: "Horse Riding",
            items: [
                "Embark on a horseback journey through the desert and experience the timeless traditions of the Bedouin way of life."
            ]
        },
        {
            //   icon: <MusicNote className="w-12 h-12 text-orange-600" />,
            title: "Nightlife & Clubs",
            items: [
                "Indulge in luxury and excitement at some of the country's most iconic venues, including the Dubai Marina's Cavalli Club and Burj Khalifa's Armani/Privé.",
                "Dance the night away at the upscale and glamorous nightclub in Downtown Dubai.",
                "Unwind with a cocktail at a rooftop bar, enjoying panoramic views of the city.",
                "Explore the dynamic nightlife across the city for a lively and unforgettable evening.",
                "Experience the diverse entertainment with a bar hopping tour."
            ]
        },
        {
            //   icon: <Theater className="w-12 h-12 text-orange-600" />,
            title: "Opera and Concerts",
            items: [
                "Attend a live performance at the Dubai Opera House and enjoy the stunning architectural masterpiece.",
                "Explore the UAE's cultural landmarks to gain deeper insights into the region's artistic and architectural heritage."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">Bucket List</h1>
                    <p className="text-lg text-gray-600 ">
                        Discover extraordinary experiences curated by Travel Synergies to make your UAE trip unforgettable.
                    </p>


                    <main className="container mx-auto px-4 py-8">
                        {activities.map((activity, index) => (
                            <section key={index} className={`mb-12 ${index % 2 === 0 ? 'bg-gray-100 p-6 rounded-lg' : ''}`}>
                                <div className="flex items-center mb-4">
                                    {/* {activity.icon} */}
                                    <h2 className="text-2xl font-bold text-orange-500 ml-4">{activity.title}</h2>
                                </div>
                                <ul className="list-disc pl-6 text-gray-600">
                                    {activity.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default BucketListBlog;