import React from "react";
import { motion } from "framer-motion";

const partners = [
    {
        name: "Squalltec Technology",
        description:
            "Squalltec is a leader in innovative travel technology solutions. Their state-of-the-art software helps us to optimize our operations and deliver a seamless travel experience to our customers.",
    },
    {
        name: "RidesNmore",
        description:
            "Experience global connectivity with RidesnMore, a transportation giant and our trusted partner for transportation solutions. Whether it’s a private car or a 50-seater coach, RidesnMore ensures reliable point-to-point transfers across the globe.",
    },
    {
        name: "Traminno",
        description:
            "With Traminno, we offer access to over 3 million accommodation options worldwide. Their comprehensive marketplace provides exceptional hotel stays and ancillary services to enhance travel experiences.",
    },
    {
        name: "Tix2Gigs",
        description:
            "Looking for the hottest tickets in town? Look no further than Tix2Gigs, our partner in providing access to the most sought-after events. From concerts to sports games, Tix2Gigs offers a wide range of tickets to the most popular events.",
    },
    {
        name: "SeatonTrips",
        description:
            "SeatonTrips is our partner in providing affordable and convenient travel solutions. With a focus on budget-friendly travel, SeatonTrips offers a wide range of tours and activities that cater to all budgets and interests.",
    },
];

const Partners: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100  px-6 sm:px-6 lg:px-8 pt-8">
            <div

                className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden "
            >
                <div className="p-6 md:p-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">Partners</h1>
                    <p className="text-sm  text-gray-600 p-2">
                        At Travel Synergies, we believe that partnerships are key to delivering
                        exceptional travel experiences. That’s why we collaborate with top
                        industry leaders to offer you an extensive selection of premium
                        services and products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2  mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}

                            className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl m-3"
                        >
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                                {partner.name}
                            </h2>
                            <p className="text-gray-600 text-sm">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
