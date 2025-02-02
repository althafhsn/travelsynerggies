'use client';



const partners = [
    {
        name: "Squalltec Technology",
        img: '/partners/squalltec.png',
        description:
            "Squalltec is a leader in innovative travel technology solutions. Their state-of-the-art software helps us to optimize our operations and deliver a seamless travel experience to our customers.",
    },
    {
        name: "Traminno",
        img: '/partners/traminno.png',
        description:
            "With Traminno, we offer access to over 3 million accommodation options worldwide. Their comprehensive marketplace provides exceptional hotel stays and ancillary services to enhance travel experiences.",
    },
    {
        name: "SeatonTrips",
        img: '/partners/SeatonTrips.png',
        description:
            "SeatonTrips is our partner in providing affordable and convenient travel solutions. With a focus on budget-friendly travel, SeatonTrips offers a wide range of tours and activities that cater to all budgets and interests.",
    },
    {
        name: "RidesNmore",
        img: '/partners/RidesNmore.png',
        description:
            "Experience global connectivity with RidesnMore, a transportation giant and our trusted partner for transportation solutions. Whether it’s a private car or a 50-seater coach, RidesnMore ensures reliable point-to-point transfers across the globe.",
    },
    {
        name: "Tix2Gigs",
        img: '/partners/Tix2Gigs.png',
        description:
            "Looking for the hottest tickets in town? Look no further than Tix2Gigs, our partner in providing access to the most sought-after events. From concerts to sports games, Tix2Gigs offers a wide range of tickets to the most popular events.",
    },
    {
        name: "Evintry",
        img: '/partners/evinty.png',
        description:
            "Evintry is a platform that revolutionizes the event planning landscape by offering a one-stop platform for all event needs with its cutting-edge technology that ensures real-time solutions, creating an unparalleled experience for both organizers and attendees.",
    },
    {
        name: "MyTravcon",
        img: '/partners/mytravecon.png',
        description:
            "A comprehensive travel concierge service providing personalized travel planning and management, ensuring hassle-free and memorable journeys. Our personalized concierge services are handled with utmost precision and care.",
    },
    {
        name: "Venu Menu",
        img: '/partners/venumenu.png',
        description:
            "A smart venue discovery platform connecting event planners with top-rated venues worldwide, simplifying the booking process with tailored recommendations. They provide comprehensive facilities and services whilst providing the tools to choose the right venue.",
    },
    {
        name: "Synergy Marketing Reps",
        img: '/partners/synergy.png',
        description:
            "The world’s first Sales and Marketing representation company which owns and operates its own online booking platform that can connect clients/partners complete inventory. The SMR partner offices globally connect us with the right industry partners.",
    },
    {
        name: "ToursnTrips",
        img: '/partners/toursntrips.png',
        description:
            "ToursnTrips is our trusted partner for global excursions and sightseeing, offering diverse travel experiences that cater to every interest and destination.",
    },
    {
        name: "RateOcto",
        img: '/partners/rateocto.png',
        description:
            "Rate Octo offers an unmatched online booking solution for travel industry and hospitality experts, providing cutting-edge technology to manage rates efficiently and maximize revenue opportunities.",
    },
];

const Partners: React.FC = () => {
    return (
        <div className=" bg-gray-100  px-6 lg:px-8 py-12 min-h-screen">
            <div

                className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden "
            >
                <div className="p-6 md:px-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">Partners</h1>
                    <p className="text-sm  text-gray-600 p-2 text-center font-bold ">
                        At Travel Synergies, we believe that partnerships are key to delivering
                        exceptional travel experiences. That’s why we collaborate with top
                        industry leaders to offer you an extensive selection of premium
                        services and products.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 mx-auto px-4">
                    <section className="my-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
                            {partners.map((partner, index) => (
                                <div key={index} className="bg-gray-300 shadow-md rounded-xl p-4 md:p-4 flex flex-col items-center text-center">
                                    {/* Logo */}
                                    <img
                                        src={partner.img} // Partner logo URL
                                        alt={`Logo`}
                                        className="w-16 h-16 md:w-24 md:h-24 object-contain mb-4"
                                    />
                                    {/* Name */}
                                  
                                    {/* Description */}
                                    <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-sm">{partner.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Partners;
