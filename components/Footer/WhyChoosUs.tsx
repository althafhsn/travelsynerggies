import React from "react";

const WhyChooseUs = () => {
  const partners = [
    {
      name: "Squalltec Technology",
      description:
        "Squalltec is a leader in innovative travel technology solutions. Their state-of-the-art software helps us to optimize our operations and deliver a seamless travel experience to our customers.",
    },
    {
      name: "Traminno",
      description:
        "With Traminno, we offer access to over 2.6 million accommodation options worldwide. Their comprehensive marketplace provides exceptional hotel stays and ancillary services to enhance travel experiences.",
    },
    {
      name: "SeatonTrips",
      description:
        "SeatonTrips is our partner in providing affordable and convenient travel solutions. With a focus on budget-friendly travel, SeatonTrips offers a wide range of tours and activities that cater to all budgets and interests.",
    },
    {
      name: "RidesNmore",
      description:
        "Experience global connectivity with RidesnMore, a transportation giant and our trusted partner for transportation solutions. Whether it’s a private car or a 50-seater coach, RidesnMore ensures reliable point-to-point transfers across the globe.",
    },
    {
      name: "Tix2Gigs",
      description:
        "Looking for the hottest tickets in town? Look no further than Tix2Gigs, our partner in providing access to the most sought-after events. From concerts to sports games, Tix2Gigs offers a wide range of tickets to the most popular events.",
    },
    {
      name: "Evintry",
      description:
        "Evintry is a platform that revolutionizes the event planning landscape by offering a one-stop platform for all event needs with its cutting-edge technology that ensures real-time solutions, creating an unparalleled experience for both organizers and attendees.",
    },
    {
      name: "MyTravcon",
      description:
        "A comprehensive travel concierge service providing personalized travel planning and management, ensuring hassle-free and memorable journeys. Our personalized concierge services are handled with utmost precision and care.",
    },
    {
      name: "Venu Menu",
      description:
        "A smart venue discovery platform connecting event planners with top-rated venues worldwide, simplifying the booking process with tailored recommendations. They provide comprehensive facilities and services whilst providing the tools to choose the right venue.",
    },
    {
      name: "Synergy Marketing Reps",
      description:
        "The world’s first Sales and Marketing representation company which owns and operates its own online booking platform that can connect clients/partners complete inventory. The SMR partner offices globally connect us with the right industry partners.",
    },
    {
      name: "ToursnTrips",
      description:
        "ToursnTrips is our trusted partner for global excursions and sightseeing, offering diverse travel experiences that cater to every interest and destination.",
    },
    {
      name: "RateOcto",
      description:
        "Rate Octo offers an unmatched online booking solution for travel industry and hospitality experts, providing cutting-edge technology to manage rates efficiently and maximize revenue opportunities.",
    },
  ];

  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden py-12 px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">Why Choose Travel Synergies?</h1>
        <p className="text-sm md:text-lg mt-2 md:mt-4 text-gray-800">
          At Travel Synergies, we are dedicated to crafting exceptional travel experiences that go beyond expectations.
        </p>


        <section className="my-6 md:my-12">
          <h2 className="text-lg md:text-2xl font-semibold text-orange-500 text-center">Our Key Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="bg-white shadow-md rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg font-bold text-gray-800">Expert Knowledge</h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-sm">
                Our team brings a wealth of experience and deep insights into the travel industry, with a deep understanding of the latest trends, destinations, travel requirements, and more.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg  font-bold text-gray-800">Comprehensive Portfolio</h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-sm">
                From FITs and group travel to MICE, events, and cruises, our expertise ensures seamless and memorable experiences for every traveler.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg  font-bold text-gray-800">Personalized Service</h3>
              <p className="text-gray-600 mt-2 md:mt-4  text-xs md:text-sm">
                We tailor travel packages to meet individual preferences, interests, and budgets, providing memorable holiday experiences.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg  font-bold text-gray-800">Unbeatable Prices</h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-sm">
                Travel should be accessible to everyone, and we provide the best deals without compromising quality.
              </p> 
            </div>
          </div>
        </section>

        <section className="my-6 md:my-12">
          <h2 className="text-lg md:text-2xl font-semibold text-orange-500 text-center">Meet Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-4 md:p-6">
                <h3 className="font-bold text-gray-800 text-xs md:text-sm">{partner.name}</h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUs;
