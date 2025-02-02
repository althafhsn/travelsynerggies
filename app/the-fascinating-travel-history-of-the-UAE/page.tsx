import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const page = () => {
    return (
        <div className="min-h-screen mb-4">
            <div className="flex flex-col items-start justify-center text-white bg-bg-blog min-h-[70vh] bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto flex flex-col items-center md:items-start">
                </div>
            </div>

            <div className="container mx-auto">
                <div className="text-center my-5">
                    <h1 className="max-w-5xl mx-auto text-3xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
                        The Fascinating Travel History of the  UAE
                    </h1>
                    <p className="text-lg md:text-xl lg:text-4xl mt-4 text-gray-300 font-bold">
                        From Desert Trails to a Global Marvel
                    </p>

                </div>

                {/* Section: Introduction */}
                <div className="max-w-4xl mx-auto text-center ">
                    <p className="mx-auto text-sm md:text-base text-gray-100 ">
                        The United Arab Emirates (UAE) is a land of contrasts, where ancient traditions meet futuristic innovation.
                        Its travel history is a captivating journey from humble beginnings as a desert trading hub to becoming one of
                        the world’s most sought-after tourist destinations.
                    </p>
                </div>

                {/* Section: From Pearls to Skyscrapers */}
                <div className="grid md:grid-cols-2 gap-10 items-center  pt-10">
                    <img src="/blog/blog1.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  " />
                    <div>
                        <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">
                            From Pearls to Skyscrapers
                        </h2>
                        <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5">
                            Long before the UAE became synonymous with luxury travel and iconic landmarks, it was a region defined by its
                            harsh desert landscape and strategic location along ancient trade routes. The Arabian Gulf served as a vital
                            corridor for merchants trading pearls, spices, and textiles.
                            <br />
                            <br />

                            The Arabian Gulf served as a vital corridor for merchants trading in Pearls, Spices and Textiles. The UAE’s pearling industry, particularly in Abu Dhabi and Dubai, was renowned for its high-quality pearls, sought after by royalty and the elite worldwide. Cargoes of frankincense, myrrh, and other precious spices passed through the Gulf, aromatizing the paths of global commerce. Luxurious fabrics, including silk and cotton, were traded, reflecting the region’s connectivity to the ancient Silk Road.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center pt-10">
                    <img src="/blog/blog7.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  order-2" />
                    <div>
                        <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5 order-1">
                            The Era of Pearling (Pre-1930s)
                            Skilled divers, known as "ghawas," would dive to depths in search of oyster shells, often facing immense risks. Places like Ras Al Khaimah, Umm Al Quwain, and Dubai emerged as key trading posts for pearls. The pearling industry brought a level of prosperity, influencing the social and economic fabric of the UAE. The trade facilitated cultural exchanges with neighboring countries and distant lands, shaping the UAE’s cosmopolitan identity.
                            <br />
                            <br />
                            The Discovery of Oil and the Path to Modernization (Post-1950s)
                            The discovery of oil in the late 1950s and early 1960s in Abu Dhabi (1958) and Dubai (1966) marked the beginning of a new era. Oil revenues were channeled into infrastructure development, education, and healthcare, transforming the UAE’s landscape.
                            The late Sheikh Zayed bin Sultan Al Nahyan (Abu Dhabi) and Sheikh Rashid bin Saeed Al Maktoum (Dubai) played pivotal roles in shaping the UAE’s modern trajectory.
                            The shift from pearling to oil and eventually to a diversified economy enabled the construction of iconic skyscrapers and mega projects, redefining the UAE’s skyline.
                        </p>
                    </div>
                </div>

                {/* Section: The Rise of Modern Tourism */}
                <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
                    <div className='order-2'>
                        <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5 my-2 max-lg:text-center font-manrope">The Dawn of Tourism (1970s-2020s)</h2>
                        <p className=" text-gray-200 text-justify py-2 px-5 mx-auto text-sm md:text-base ">
                            The UAE’s transformation into a tourism hotspot began in the 1970s and 1980s, with the development of infrastructure and the establishment of Emirates Airlines in 1985. Dubai became a central hub for international travel, giving rise to iconic landmarks like the Burj Al Arab and Palm Jumeirah.
                            Milestones in the UAE’s history.
                            <br />
                            <br />
                            1985  - Emirates Airlines' establishment revolutionized air travel, connecting the UAE to the world with unparalleled luxury and service, whilst continuous upgrades to Dubai International Airport (DXB) and the opening of Al Maktoum International Airport (DWC) have cemented the UAE's position as a global aviation hub.


                        </p>
                    </div>
                    <img src="/blog/blog9.webp" alt="Dubai Skyline" className="rounded-lg shadow-lg w-full h-[400px]  object-cover order-1" />
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
                    <div className='order'>
                        <p className=" text-gray-200 text-justify py-2 px-5 mx-auto text-sm md:text-base ">
                            1999 - Burj Al Arab, The 7-star hotel opens. It redefined luxury, putting Dubai on the global tourism map.
                            <br /><br />
                            2001 – The Palm Jumeirah is unveiled to the world. An engineering marvel, offering bespoke experiences and breathtaking views.
                            <br />
                            <br />

                            2010 - Burj Khalifa, The world’s tallest building, attracting millions with its observation decks and surrounding Downtown Dubai is placed on the world map.
                            <br />
                            <br />
                            2020 – The Expo 2020 happens. A global event that showcased the UAE’s capacity for innovation, sustainability, and cultural exchange, leaving a lasting legacy in District 2020
                        </p>
                    </div>
                    <img src="/blog/blog8.webp" alt="Dubai Skyline" className="rounded-lg shadow-lg w-full object-cover " />
                </div>

                {/* Section: The UAE Today */}
                <div className="text-center mt-16">
                    <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500   my-2 max-lg:text-center font-manrope">The UAE Today 
              
                    </h2>
                    <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-white  my-3 max-lg:text-center font-manrope">
                        A Global Tourism Leader Redefining Travel Experiences

                    </h2>
                    <p className=" text-gray-200 text-center py-2  px-5 mx-auto text-sm md:text-base ">
                        Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, opulent hotels, world-class shopping, and fine dining experiences.
                        <br />
                        <br />
                        Dune bashing,
                        Helicopter rides over the stunning arabian sea and witnessing the Palm Jumeirah, an architectual wonder from the air are simply must do experiences and must be on your bucket list. You will experience the rich culture and heritage sites, vibrant festivals, and a melting pot of international influences.
                    </p>
                </div>

                {/* Attractions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative">
                    {[
                        { title: "Burj Khalifa", img: "/blog/burj-khalifa.webp" },
                        { title: "Louvre Abu Dhabi", img: "/blog/louvre.webp" },
                        { title: "Desert Safari", img: "/blog/safari.webp" },
                        { title: "Dubai Mall", img: "/blog/dubai-mal.webp" },
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-800/10 rounded-lg text-center">
                            <img src={item.img} alt={item.title} className="w-full min-h-[300px] h-[400px]  object-cover rounded-md mb-4" />
                            <div className=" absolute bottom-4 ps-5 text-lg  text-orange-500 flex gap-2 items-center bg-black/50 w-full py-1">
                                <HiLocationMarker className="w-[25px] text-orange-500 font-extrabold" />
                                <h3> {item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Conclusion */}
                <div className="text-center my-16">
                    <h2 className="text-3xl font-bold text-orange-500">Why Visit the UAE?</h2>
                    <p className="text-gray-300 mt-4 max-w-4xl mx-auto">
                        Whether you’re exploring the souks of Deira, marveling at the futuristic skyline of Dubai, or relaxing on the
                        pristine beaches of Fujairah, the UAE promises an unforgettable experience.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default page
