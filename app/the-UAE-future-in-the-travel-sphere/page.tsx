import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const page = () => {
  const trends = [
    {
      title: "Sustainable Tourism",
      description:
        "The UAE is committed to reducing its environmental footprint while maintaining its reputation for luxury. Initiatives like Dubai’s Sustainable City and Abu Dhabi’s Eco-Resorts are leading the way in eco-friendly travel. The UAE aims to become a global leader in sustainable tourism, offering travelers guilt-free luxury experiences.",
      image: "/images/sustainable.jpg",
    },
    {
      title: "Space Tourism",
      description:
        "The UAE is boldly venturing into the final frontier with plans for space tourism. The Mohammed bin Rashid Space Centre is working on projects like the Space Hotel and commercial space flights, making the UAE a pioneer in this futuristic travel niche.",
      image: "/images/space.jpg",
    },
    {
      title: "Smart Cities and Technology",
      description:
        "The UAE is embracing smart city technology to enhance the traveler experience. From AI-powered customer service to blockchain-based travel solutions, the UAE is leveraging technology to make travel seamless and personalized.",
      image: "/images/smart-city.jpg",
    },
    {
      title: "Cultural and Heritage Tourism",
      description:
        "While the UAE is known for its modernity, it’s also investing in preserving its rich heritage. Projects like the Al Marmoom Heritage Village and the Qasr Al Hosn Cultural Site in Abu Dhabi offer travelers a glimpse into the UAE’s history and traditions.",
      image: "/images/cultural.jpg",
    },
    {
      title: "Luxury Redefined",
      description:
        "The UAE continues to push the boundaries of luxury travel. From underwater hotels like Deep Dive Dubai to private island resorts, the UAE is creating unparalleled experiences for discerning travelers.",
      image: "/images/luxury.jpg",
    },
  ];

  return (
    <div className="min-h-screen mb-4">
      <div className="flex flex-col items-start justify-center text-white bg-bg-blog10 min-h-[70vh] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto flex flex-col items-center md:items-start">
        </div>
      </div>

      <div className="container mx-auto">
        <div className="text-center my-5">
          <h1 className="max-w-5xl mx-auto text-3xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
            The UAE’s Future in the Travel Sphere

          </h1>
          <p className="text-lg md:text-xl lg:text-4xl mt-4 text-gray-300 font-bold">
            A Vision of Innovation and Luxury

          </p>

        </div>

        {/* Section: Introduction */}
        <div className="max-w-4xl mx-auto text-center ">
          <p className="mx-auto text-sm md:text-base text-gray-100 mb-9 ">
            The United Arab Emirates (UAE) has long been a global leader in tourism, known for its iconic landmarks, luxury experiences, and cultural richness. But what does the future hold for this dynamic destination? As the UAE continues to innovate and adapt to changing traveler preferences, its vision for the future of travel is nothing short of extraordinary. From sustainable tourism to space travel, the UAE is redefining what it means to be a world-class destination. Let’s explore the UAE’s future in the travel sphere and why it remains a must-visit for travelers worldwide.

          </p>
        </div>


        {/* Section: From Pearls to Skyscrapers */}
        <div className="grid md:grid-cols-2 gap-10 items-center ">
          <img src="/blog/blog1.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  " />
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-orange-500 px-5  mb-2 max-lg:text-center font-manrope">
              The UAE’s Tourism Evolution
            </h2>
            <p className="text-sm md:text-lg  mt-4 text-gray-300 font-bold mb-2 px-5">
              A Legacy of Excellence

            </p>
            <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5">
              The UAE’s journey from a desert trading hub to a global tourism powerhouse is a story of ambition and innovation. Cities like Dubai and Abu Dhabi have become synonymous with luxury, offering everything from the world’s tallest building, the Burj Khalifa, to the stunning Sheikh Zayed Grand Mosque. But the UAE isn’t resting on its laurels. With a focus on sustainable tourism, cutting-edge technology, and unique experiences, the UAE is setting the stage for the future of travel.
            </p>
          </div>
        </div>

        <div className=" text-white mt-10 px-6">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-orange-500 px-5  mb-2 max-lg:text-center font-manrope">UAE Travel Trends</h2>
            <p className="text-sm md:text-lg  mt-4 text-gray-300 font-bold mb-2 px-5">
              Explore the future of travel in the UAE with these emerging trends.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
            {trends.map((trend, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
              >
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{trend.title}</h3>
                  <p className="text-gray-300 mt-2">{trend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Section: The Rise of Modern Tourism */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
          <div>
            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">Why the UAE Will Remain a Top Travel Destination
            </h2>
            <p className=" text-gray-200 text-justify py-2 px-5 mx-auto text-sm md:text-base ">
              The UAE’s ability to adapt and innovate ensures its place as a global tourism leader. Here’s why travelers will keep coming back:
              <br />
              <br />
              Iconic Landmarks: The Burj Khalifa, Palm Jumeirah, and Louvre Abu Dhabi are just the beginning.
              <br />
              <br />
              Year-Round Sunshine: Perfect weather for beach lovers and outdoor enthusiasts.
              <br />
              <br />
              World-Class Events: From the Dubai Shopping Festival to the Abu Dhabi Grand Prix, the UAE knows how to entertain.
              <br />
              <br />
              Safety and Accessibility: The UAE is one of the safest and most accessible destinations in the world.

            </p>
          </div>
          <img src="/blog/blog5.webp" alt="Dubai Skyline" className="rounded-lg shadow-lg w-full h-[600px] object-cover" />
        </div>


          {/* Section: The UAE Today */}
          <div className="text-center max-w-3xl mx-auto mt-10">
            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 my-2 font-manrope">
              The UAE’s Vision for 2030 and Beyond
            </h2>
            <p className="text-gray-300 py-2 text-sm md:text-base leading-relaxed">
              With a bold ambition to attract <span className="font-semibold">40 million visitors annually by 2030</span>,
              the UAE is revolutionizing the travel industry. From <span className="font-semibold">space tourism</span> to
              <span className="font-semibold"> AI-driven experiences</span> and <span className="font-semibold">eco-friendly luxury resorts</span>,
              the UAE is shaping the future of global travel.
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="w-24 h-[1px] bg-orange-500 mx-auto my-8"></div>

          {/* Conclusion */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-orange-500">The UAE</h2>
            <p className="text-sm md:text-lg mt-4 text-gray-300 font-bold">A Destination of the Future</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              <span className="font-semibold">Innovation, sustainability, and luxury</span>—these are the defining aspects of the UAE’s future.
              Whether you dream of <span className="font-semibold">exploring space</span>, unwinding in
              <span className="font-semibold"> eco-friendly resorts</span>, or immersing yourself in rich traditions, the UAE offers it all.
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
