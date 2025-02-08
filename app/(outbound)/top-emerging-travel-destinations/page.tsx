import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react'
import Image from "next/image";

const page = () => {
    const destinations = [
        {
            title: "Georgia (The Country)",
            image: "/images/georgia.jpg",
            description:
                "Nestled between Europe and Asia, Georgia is a hidden gem known for its stunning Caucasus Mountains, ancient monasteries, and world-class wine. Explore Tbilisi, hike in Kazbegi, or indulge in traditional Georgian cuisine.",
            whyGo: "Georgia is still relatively undiscovered, making it the perfect destination for travelers seeking authenticity and adventure."
        },
        {
            title: "Albania",
            image: "/images/albania.jpg",
            description:
                "With its pristine beaches, rugged mountains, and rich history, Albania is Europe’s best-kept secret. A mix of Ottoman, Roman, and Byzantine influences awaits travelers at an affordable price.",
            whyGo: "Albania is rapidly developing its tourism infrastructure while retaining its charm and authenticity. Visit before it becomes the next Croatia!"
        },
        {
            title: "Rwanda",
            image: "/images/rwanda.jpg",
            description:
                "Known as the ‘Land of a Thousand Hills,’ Rwanda offers breathtaking landscapes, gorilla trekking in Volcanoes National Park, and a vibrant capital city, Kigali.",
            whyGo: "Rwanda is leading the way in sustainable tourism and conservation efforts, making it an ideal destination for eco-conscious travelers."
        },
        {
            title: "Uzbekistan",
            image: "/images/uzbekistan.jpg",
            description:
                "Step back in time with the Silk Road cities of Uzbekistan. Marvel at stunning Islamic architecture, bustling bazaars, and ancient sites like the Registan in Samarkand.",
            whyGo: "Uzbekistan has recently eased visa restrictions and invested in tourism infrastructure, making it more accessible than ever."
        },
        {
            title: "Colombia",
            image: "/images/colombia.jpg",
            description:
                "From Cartagena’s vibrant streets to the lush coffee regions and the Amazon rainforest, Colombia offers incredible diversity and a rich cultural experience.",
            whyGo: "Colombia is experiencing a tourism boom, but there’s still plenty of room to explore off-the-beaten-path destinations."
        },
        {
            title: "Bhutan",
            image: "/images/bhutan.jpg",
            description:
                "The mystical kingdom of Bhutan offers breathtaking mountain views, ancient monasteries, and a unique focus on Gross National Happiness.",
            whyGo: "Bhutan’s commitment to sustainable tourism ensures that it remains unspoiled and exclusive."
        },
        {
            title: "Madagascar",
            image: "/images/madagascar.jpg",
            description:
                "Home to unique wildlife like lemurs and chameleons, Madagascar offers diverse landscapes, from rainforests and deserts to pristine beaches.",
            whyGo: "Madagascar remains off the radar for most travelers, providing a truly remote and adventurous experience."
        },
        {
            title: "Slovenia",
            image: "/images/slovenia.jpg",
            description:
                "From Lake Bled’s fairy-tale charm to the stunning Julian Alps, Slovenia is a paradise for outdoor enthusiasts and culture lovers.",
            whyGo: "Slovenia is gaining recognition as a sustainable tourism destination, making it a great choice for eco-conscious travelers."
        },
        {
            title: "Kazakhstan",
            image: "/images/kazakhstan.jpg",
            description:
                "Kazakhstan, the world’s largest landlocked country, boasts modern cities like Nur-Sultan and breathtaking natural wonders like Charyn Canyon.",
            whyGo: "Kazakhstan is investing heavily in tourism infrastructure and easing visa requirements, making it an exciting new destination."
        },
        {
            title: "Faroe Islands",
            image: "/images/faroe-islands.jpg",
            description:
                "A paradise for nature lovers, the Faroe Islands offer dramatic cliffs, waterfalls, and charming villages for an unforgettable adventure.",
            whyGo: "Still relatively undiscovered, the Faroe Islands provide a peaceful and immersive travel experience."
        }
    ];

    return (
        <div className="min-h-screen mb-4">
            <div className="flex flex-col items-start justify-center text-white bg-bg-blog10 min-h-[70vh] bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto flex flex-col items-center md:items-start">
                </div>
            </div>
            <div className=" container mx-auto relative    mt-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/outbound">Outbound</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/outbound-blog">Blog</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/top-emerging-travel-destinations">Top Emerging Travel Destinations</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            </div>
            <div className="container mx-auto">
                <div className="text-center my-5">
                    <h1 className="max-w-5xl mx-auto text-3xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
                        Top Emerging Travel Destinations for 2025

                    </h1>
                    <p className="text-lg md:text-xl lg:text-4xl mt-4 text-gray-300 font-bold">
                        Where to Go Next
                    </p>

                </div>

                {/* Section: Introduction */}
                <div className="max-w-4xl mx-auto text-center ">
                    <p className="mx-auto text-sm md:text-base text-gray-100 mb-9 ">
                        In our previous blog post, we explored the evolution of travel—from its golden age to the present day and beyond. Today, we’re diving into the exciting world of emerging travel destinations. As an outbound holidays tourism company based in the UAE, we’re always on the lookout for the next big thing in travel. Whether you’re a seasoned globetrotter or planning your first international trip, these destinations are sure to inspire your wanderlust.

                    </p>
                </div>


                {/* Section: From Pearls to Skyscrapers */}
                <div className="grid md:grid-cols-2 gap-10 items-center ">
                    <img src="/blog/blog17.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  " />
                    <div>
                        <h2 className="text-3xl md:text-3xl font-bold text-orange-500 px-5  mb-2 max-lg:text-center font-manrope">
                            Why Explore Emerging Destinations?

                        </h2>
                        <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5">
                            Emerging destinations offer a unique blend of authenticity, adventure, and discovery. They’re often less crowded, more affordable, and provide opportunities to experience cultures and landscapes that are still untouched by mass tourism. Plus, visiting these places allows you to support local communities and contribute to sustainable tourism.

                        </p>
                    </div>
                </div>

                <section className="bg-black text-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-orange-500 text-4xl font-bold mb-6">Emerging Travel Destinations in 2025</h2>
                        <p className="text-gray-400 mb-12">Here are our top picks for destinations that are rising in popularity. Explore new cultures, stunning landscapes, and unique travel experiences.</p>
                    </div>
                    <div className="space-y-16 max-w-6xl mx-auto">
                        {destinations.map((destination, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                                <div className="w-full lg:w-1/2 h-64 relative">
                                    <Image src={destination.image} alt={destination.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                                </div>
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <h3 className="text-orange-500 text-3xl font-semibold mb-4">{destination.title}</h3>
                                    <p className="text-gray-400 text-lg mb-4">{destination.description}</p>
                                    <p className="text-gray-300 italic"><span className='text-orange-500'>Why Go Now?</span> <br /> {destination.whyGo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Conclusion */}
                <div className="text-center max-w-6xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-orange-500">How We Can Help You Explore These Destinations

                    </h2>
                    <p className="text-sm md:text-base mt-4 text-gray-300 font-bold">At Travel Synergies we specialize in creating unforgettable travel experiences tailored to your preferences. Whether you’re looking for a luxury getaway, an adventurous trek, or a cultural immersion, our team of experts is here to make it happen. We’ll handle all the details, from flights and accommodations to guided tours and unique experiences, so you can focus on enjoying your journey.
                        <br />
                        <br />
                        Ready to explore one of these emerging destinations? Contact us today to start planning your 2025 adventure. Let’s make next year the year you discover something new and unforgettable!

                    </p>


                    {/* Call to Action */}
                    <button className="mt-6 px-6 py-3 text-sm md:text-base font-semibold bg-orange-500 hover:bg-orange-600 
          text-white rounded-lg transition duration-300">
                        Book Your Trip Today
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
