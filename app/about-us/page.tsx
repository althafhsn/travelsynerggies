'use client'
import React from "react";
import 'swiper/css';
import "./AboutUs.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Keyboard, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper as SwiperClass } from "swiper/types";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { MdTravelExplore } from 'react-icons/md'
import { FaLanguage } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";


SwiperCore.use([Navigation, Pagination, Scrollbar, Keyboard, Thumbs]);




const AboutUs: React.FC = () => {
    let thumbsSwiper: SwiperClass | null = null;


    return (
        <div className="">
            {/* Hero Section */}
            <section className="py-2 relative z-0 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="max-w-2xl mx-auto text-4xl font-bold text-white mb-5 md:text-5xl md:leading-normal font-manrope">
                        WHO WE <span className="text-orange-500">WE</span> ?
                    </h1>
                    <p className=" mx-auto text-sm text-gray-100 mb-9">
                        Travel synergies transform individual journeys into rich, collaborative experiences by connecting travelers, local communities, and innovative technologies.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-2 lg:py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="">
                            <img
                                src="https://pagedone.io/asset/uploads/1702034769.png"
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <div className="pb-24 flex ">
                            <div className="w-full">
                                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-500 mb- max-lg:text-center font-manrope">
                                    About Us
                                </h2>
                                <p className="text-sm text-gray-200 max-md:text-center py-2 max-w-2xl mx-auto">
                                    For over 2 decades, we have been crafting journeys for travel enthusiasts, evolving alongside the dynamic demands of this rapidly growing industry and interest for immersive destinations. At Travel Synergies, we stand committed to excellence in Destination Management on a global scale. We take immense pride in our reputation, earned through unwavering dedication to providing unmatched services that redefine the art of travel and event planning, to create lasting memories and an experience of a lifetime.
                                </p>
                                <p className="text-sm text-gray-200 max-md:text-center max-w-2xl mx-auto py-2">
                                    Embark on a transformative journey with our exceptional Travel Designers, who are not just experts, but also local connoisseurs with a global perspective. Trained internationally, they provide unparalleled insights, ensuring your experience transcends mere travel and becomes an immersion into the essence of each destination. Whether it's crafting leisurely individual trips or organizing group adventures, we take pride in delivering the finest holiday experiences. From intimate gatherings to grand-scale events, our expertise lies in seamlessly connecting you with top-tier hotels, event venues, tours, and meticulously coordinating the logistics required for flawless private and professional events, along with incentive programs.
                                </p>
                                <p className="text-sm text-gray-200 max-md:text-center max-w-2xl mx-auto py-2">
                                    Dive into the extraordinary with our extensive network of independent suppliers and local guides, who inspire us with their creativity to curate fresh and innovative travel ideas. With an array of options including accommodation, transportation, and immersive tours, we craft bespoke masterpieces tailored to your desires.
                                </p>
                                <p className="text-sm text-gray-200 max-md:text-center max-w-2xl mx-auto py-2">
                                    Count on us for insightful advice, off-the-beaten-track excursions, and authentic experiences that you wouldn't encounter on your own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Since Section */}
            <section className="py-4 lg:py8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                        <div className="lg:pr-24 flex ">
                            <div className="w-full">
                                <img
                                    src="https://pagedone.io/asset/uploads/1702034785.png"
                                    alt="About Us tailwind page"
                                    className="block lg:hidden mb-9 mx-auto object-cover"
                                />
                                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-500 mb-9 max-lg:text-center font-manrope">
                                   Technology
                                </h2>
                                <p className="text-sm text-gray-200 max-md:text-center max-w-2xl mx-auto py-2">
                                    Step into a world of innovation and convenience tailored for our valued trade partners, facilitated by our robust technology. Leveraging on our long connections to the entire hospitality segment over the decades, we've skilfully unearthed the essence of seamless modern travel. Our vision was to elevate the traditional manual processes of tour operations into a digital realm, all while preserving the authenticity and efficiency that characterizes the travel industry.
                                    Within our refined system, you'll discover comprehensive B2B booking solutions, which serves as a seamless gateway to an expansive array of services, alleviating both your team and your customers of unnecessary time constraints and stress. Experience travel solutions that exemplify both convenience and perfection.

                                </p>
                            </div>
                        </div>
                        <div className="img-box">
                            <img
                                src="https://pagedone.io/asset/uploads/1702034785.png"
                                alt="About Us tailwind page"
                                className="hidden lg:block object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg md:text-2xl lg:text-4xl  text-center text-orange-500 font-bold mb-14 font-manrope">
                        Our Ambassadors
                    </h2>
                    <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                        {[
                            { percentage: <FiUsers />, title: 'Meet Our Experienced Leadership Team', text: "   Our senior management team comprises of experienced leaders with diverse expertise, earned through impactful roles on the global stage within the realms of the travel and hospitality industry." },
                            { percentage: <MdTravelExplore />, title: 'Expert Multilingual Travel Designers', text: 'Our multilingual Travel Designers stand as virtuosos, well-versed in the intricacies that compose the tapestry of the industry. They combine linguistic fluency and profound understanding of all aspects of the industry.' },
                        ].map((item, index) => (
                            <div key={index} className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/2 p-6 bg-gray-300 rounded-2xl shadow-md shadow-gray-100">
                                <div className="flex gap-5">
                                    <div className="text-5xl font-bold text-orange-600 font-manrope">{item.percentage}</div>
                                    <div className="flex-1">
                                        <h4 className="text-lg text-gray-900 font-semibold mb-2">{item.title}</h4>
                                        <p className="text-xs md:text-sm  text-gray-500 leading-5">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-14 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-2 text-center">
                        <h2 className="font-manrope text-lg md:text-2xl lg:text-4xl  font-bold text-orange-500 mb-6">Meet Our Team !</h2>
                        <p className="text-sm text-gray-50">
                            We provide all the advantage that can simplify all your financial and banking support without any further issues.
                        </p>
                    </div>
                    {/* Slider Wrapper */}
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Keyboard]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{ el: ".swiper-pagination", type: "fraction" }}
                        scrollbar={{ el: ".swiper-scrollbar" }}
                        keyboard={{ enabled: true }}
                        loop={true}
                        breakpoints={{
                            769: { slidesPerView: 2, slidesPerGroup: 1 },
                            0: { slidesPerView: 1, slidesPerGroup: 1 },
                        }}
                        className="teamswiper pb-10"
                        onSwiper={(swiper) => (thumbsSwiper = swiper)}
                    >

                        {[
                            {
                                name: "Jhon",
                                title: "Co-Founder & CEO",
                                description: "Manages and handles the daily business operations of the company",
                                image: "https://pagedone.io/asset/uploads/1702034785.png",
                            },
                            {
                                name: "Smith",
                                title: "Lead Designer",
                                description: "Emphasis on long-term goals, growth, profit, and return on investments.",
                                image: "https://pagedone.io/asset/uploads/1702034785.png",
                            },
                            {
                                name: "Jhon",
                                title: "Co-Founder & CEO",
                                description: "Manages and handles the daily business operations of the company",
                                image: "https://pagedone.io/asset/uploads/1702034785.png",
                            },
                            {
                                name: "Smith",
                                title: "Lead Designer",
                                description: "Emphasis on long-term goals, growth, profit, and return on investments.",
                                image: "https://pagedone.io/asset/uploads/1702034785.png",
                            },


                        ].map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="group w-full flex-wrap flex items-center gap-8 transition-all duration-500 p-8 lg:flex-nowrap cursor-grab">
                                    <div className="w-full lg:w-48 h-64">
                                        <img src={member.image} alt={`${member.name} image`} className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full" />
                                    </div>
                                    <div className="text-center lg:text-left lg:max-w-xs flex-1">
                                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                                            <h6 className="text-lg text-orange-500 font-semibold mb-1 ">{member.name}</h6>
                                            <span className="text-sm text-gray-300 group-hover:text-orange-300">{member.title}</span>
                                        </div>
                                        <p className="text-gray-300 leading-6 mb-7">{member.description}</p>
                                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                                            {/* Social Icons */}
                                            <div className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-orange-400"><Link href={""}><FaXTwitter /></Link></div>
                                            <div className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-orange-400"><Link href={""}><FaInstagram /></Link></div>
                                            <div className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-orange-400"><Link href={""}><FaLinkedin /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons */}
                        <button
                            className="swiper-button-prev p-2.5 group flex justify-center items-center text-orange-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-orange-600"
                        />
                        <button
                            className="swiper-button-next p-2.5 group flex justify-center items-center text-orange-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-orange-600"
                        />
                        <div className="swiper-pagination"></div>
                        <div className="swiper-scrollbar"></div>
                    </Swiper>
                </div>
            </section>

        </div>
    )
}

export default AboutUs;
