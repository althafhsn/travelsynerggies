'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import Image from "next/image";

const page = () => {



    const trends = [
        {
            title: "Sustainable Travel",
            image: "/images/sustainable-travel.jpg",
            description:
                "With growing awareness of climate change, travelers are increasingly seeking eco-friendly options. From carbon-neutral flights to sustainable accommodations, the demand for responsible travel is on the rise. At our company, we’re committed to offering green travel options that minimize environmental impact while maximizing enjoyment.",
        },
        {
            title: "Bleisure Travel",
            image: "/images/bleisure-travel.jpg",
            description:
                "The line between business and leisure travel is blurring. 'Bleisure' travelers are extending work trips to explore new destinations, creating opportunities for unique experiences that combine productivity and relaxation.",
        },
        {
            title: "Hyper-Personalization",
            image: "/images/hyper-personalization.jpg",
            description:
                "Advances in AI and data analytics are enabling hyper-personalized travel experiences. Imagine receiving tailored recommendations based on your preferences, budget, and past trips. This level of customization will redefine how we plan and experience travel.",
        },
        {
            title: "Rise of Niche Tourism",
            image: "/images/niche-tourism.jpg",
            description:
                "From wellness retreats to culinary tours, niche tourism is booming. Travelers are seeking specialized experiences that cater to their interests, whether it’s yoga in Bali or wine tasting in Tuscany.",
        },
        {
            title: "Virtual Reality (VR) and Augmented Reality (AR)",
            image: "/images/vr-ar-travel.jpg",
            description:
                "VR and AR are set to revolutionize the way we explore destinations. Imagine taking a virtual tour of Machu Picchu before booking your trip or using AR to navigate a foreign city with real-time translations and recommendations.",
        },
        {
            title: "Space Tourism",
            image: "/images/vr-ar-travel.jpg",
            description:
                "While still in its infancy, space tourism is no longer science fiction. Companies like SpaceX are paving the way for commercial space travel, offering a glimpse into the next frontier of exploration.                ",
        },
    ];
    return (
        <div className="min-h-screen mb-4">
            <div className="flex flex-col items-start justify-center text-white bg-bg-blog min-h-[70vh] bg-cover bg-no-repeat bg-center ">
            </div>
            <div className='px-2 container mx-auto pt-5'>
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
                            <BreadcrumbLink href="/the-evolution-of-travel">The Evolution of travel</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="w-full h-[1px] bg-gray-200 my-2"></div>

                <div className="container mx-auto">
                    <div className="text-center my-5">
                        <h1 className="max-w-5xl mx-auto text-3xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
                            The Evolution of Travel
                        </h1>
                        <p className="text-lg md:text-xl lg:text-4xl mt-4 text-gray-300 font-bold">
                            From Then to Now and Where We’re Heading Next


                        </p>

                    </div>

                    {/* Section: Introduction */}
                    <div className="max-w-6xl mx-auto text-center ">
                        <p className="mx-auto text-sm md:text-base text-gray-100 ">
                            Travel has always been a cornerstone of human experience, a way to explore, connect, and grow. For decades, the travel industry has evolved dramatically, shaped by technological advancements, cultural shifts, and global events. As an outbound holidays tourism company based in the UAE, we’ve witnessed these changes firsthand and have adapted to meet the ever-changing needs of travelers. Today, we’re taking you on a journey through the evolution of the travel market—where it’s been, where it stands now, and where it’s headed.

                        </p>
                    </div>

                    {/* Section: From Pearls to Skyscrapers */}
                    <div className="grid md:grid-cols-2 gap-10 items-center  pt-10">
                        <img src="/blog/blog1.webp" alt="Pearl Diving" className="rounded-lg shadow-lg " />
                        <div>
                            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">
                                Then: The Golden Age of Travel

                            </h2>
                            <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5">
                                In the mid-20th century, travel was a luxury reserved for the elite. Air travel was expensive, and destinations were limited to those with well-established tourism infrastructure. Travel agencies played a central role, offering curated packages to popular destinations like Paris, Rome, and New York. Brochures, word-of-mouth recommendations, and travel agents were the primary sources of inspiration for travelers.

                                <br />
                                <br />

                                The UAE itself was just beginning to emerge as a global hub, with Dubai and Abu Dhabi starting to attract international attention. Back then, travel was about ticking off iconic landmarks and experiencing cultures from a distance. It was a simpler time, but one with fewer options and less accessibility for the average person.


                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 items-center pt-10">
                        <img src="/blog/blog7.webp" alt="Pearl Diving" className="rounded-lg shadow-lg md:order-2" />
                        <div>
                            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">
                                Now: The Era of Accessibility and Personalization


                            </h2>
                            <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5 ">
                                Fast forward to today, and the travel landscape has transformed entirely. The rise of budget airlines, online booking platforms, and social media has democratized travel, making it accessible to almost everyone. Travelers are no longer limited to pre-packaged tours; instead, they can design their own itineraries, book flights and accommodations with a few clicks, and explore off-the-beaten-path destinations.

                                <br />
                                <br />
                                The UAE has become a global leader in tourism, with Dubai and Abu Dhabi ranking among the world’s most visited cities. As an outbound tourism company, we’ve seen a surge in demand for unique, personalized experiences. Travelers today want more than just a vacation—they want adventure, cultural immersion, and Instagram-worthy moments. From hiking in Patagonia to savoring street food in Bangkok, the possibilities are endless.
                                <br />
                                <br />
                                Technology has also revolutionized how we travel. Apps like Google Maps, Airbnb, and TripAdvisor have made it easier than ever to navigate unfamiliar places and discover hidden gems. Social media platforms like Instagram and TikTok have become powerful tools for inspiration, with travelers sharing their experiences and influencing others to explore new destinations.

                            </p>
                        </div>

                    </div>

                    {/* Section: The Rise of Modern Tourism */}

                    <section className="bg-black text-gray-50 py-8 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-orange-500 text-4xl font-bold mb-6">Where We’re Heading: The Future of Travel</h2>
                            <p className="text-gray-400 mb-12">As we look to the future, the travel industry is poised for even more exciting changes. Here are some key trends shaping the future of travel:</p>
                        </div>
                        <div className="space-y-16 max-w-6xl mx-auto">
                            {trends.map((trend, index) => (
                                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                                    <div className="w-full lg:w-1/2 h-64 relative">
                                        <Image src={trend.image} alt={trend.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                                    </div>
                                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                                        <h3 className="text-orange-500 text-3xl font-semibold mb-4">{trend.title}</h3>
                                        <p className="text-gray-400 text-lg">{trend.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Attractions Grid */}





                    {/* Conclusion */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-orange-500">Why Choose Us?
                        </h2>
                        <p className="text-gray-300 mt-4 max-w-6xl mx-auto">
                            As a leading outbound holidays tourism company in the UAE, we pride ourselves on staying ahead of the curve. Whether you’re dreaming of a luxury getaway to the Maldives, an adventurous trek through the Andes, or a cultural immersion in Kyoto, we’re here to make it happen. Our team of experts is dedicated to crafting personalized itineraries that cater to your unique preferences and needs.
                            <br />
                            <br />
                            In a world where travel is constantly evolving, one thing remains constant: the joy of discovering new places and creating unforgettable memories. So, where will your next adventure take you?

                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default page
