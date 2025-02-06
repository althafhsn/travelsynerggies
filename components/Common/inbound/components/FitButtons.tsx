'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBriefcase, FaBuilding, FaCode, FaCreditCard, FaHeartbeat, FaOilCan, FaPlane, FaSatelliteDish } from 'react-icons/fa';

const eventCategories = [
    { title: "FIT's", link: "/FITs" },
    { title: "Groups", link: "/groups" },
    { title: "MICE", link: "/MICE" },
    { title: "Congresses", link: "/congresses" },
    { title: "Cruises", link: "/cruises" },


];

const EventButton = () => {
    return (
        <section className=" text-white pt-12 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
            
                {/* Grid of Events */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {eventCategories.map((event, index) => (
                        <Link href={event.link}
                            key={index}
                            className=" bg-gray-800 w-full py-4 rounded-lg shadow-md group hover:bg-orange-500 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
                        >

                            <h3 className="text-xl font-semibold ">{event.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventButton;
