'use client';
import { HiLocationMarker } from "react-icons/hi";

const UAETravelHistory = () => {
  return (
    <div className="mx-auto px-4 xl:px-0 container">
      <div className="text-center mb-2">
        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
          The Fascinating Travel History of the  <span className="text-white">UAE</span>
        </h1>
        <p className="text-lg mt-4 text-gray-300 font-bold">
          From Desert Trails to Global Marvel
        </p>
      </div>

      {/* Section: Introduction */}
      <div className="max-w-4xl mx-auto text-center ">
        <p className="mx-auto text-sm text-gray-100 mb-9 ">
          The United Arab Emirates (UAE) is a land of contrasts, where ancient traditions meet futuristic innovation.
          Its travel history is a captivating journey from humble beginnings as a desert trading hub to becoming one of
          the world’s most sought-after tourist destinations.
        </p>
      </div>

      {/* Section: From Pearls to Skyscrapers */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src="/blog/blog6.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  " />
        <div>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">
            From Pearls to Skyscrapers
          </h2>
          <p className="text-sm text-gray-200 text-justify py-2  mx-auto ">
            Long before the UAE became synonymous with luxury travel and iconic landmarks, it was a region defined by its
            harsh desert landscape and strategic location along ancient trade routes. The Arabian Gulf served as a vital
            corridor for merchants trading pearls, spices, and textiles.
          </p>
        </div>
      </div>

      {/* Section: The Rise of Modern Tourism */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <div>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">The Rise of Modern Tourism</h2>
          <p className="text-sm text-gray-200 text-justify py-2  mx-auto ">
            The UAE’s transformation into a tourism hotspot began in the 1970s and 1980s, with the development of
            infrastructure and the establishment of Emirates Airlines in 1985. Dubai became a central hub for
            international travel, giving rise to iconic landmarks like the Burj Al Arab and Palm Jumeirah.
          </p>
        </div>
        <img src="/blog/blog2.webp" alt="Dubai Skyline" className="rounded-lg shadow-lg  " />
      </div>

      {/* Section: The UAE Today */}
      <div className="text-center mt-16">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">The UAE Today <span className="text-gray-50 font-manrope">
          A Global Tourism Leader
        </span></h2>
        <p className="text-sm text-gray-200 text-center py-2  mx-auto ">
          Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, adventure, and culture. Dubai
          and Abu Dhabi are the crown jewels, but other emirates like Ras Al Khaimah, Fujairah, and Ajman are gaining
          traction for their natural beauty and unique experiences.
        </p>
      </div>

      {/* Attractions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative">
        {[
          { title: "Burj Khalifa", img: "/blog/burj-khalifa.webp" },
          { title: "Louvre Abu Dhabi", img: "/blog/blog5.webp" },
          { title: "Desert Safari", img: "/blog/safari.webp" },
          { title: "Dubai Mall", img: "/blog/dubai-mal.webp" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-800/10 rounded-lg text-center">
            <img src={item.img} alt={item.title} className="w-full min-h-[300px] h-[400px]  object-cover rounded-md mb-4" />
            <div className=" absolute bottom-5 ps-5 text-lg  text-gray-50 flex gap-2 items-center">
              <HiLocationMarker   className="w-[25px] text-white font-extrabold" />
              <h3> {item.title}</h3>
              </div>
          </div>
        ))}
      </div>

      {/* Section: Sustainable Tourism */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <img src="/blog/blog1.webp" alt="Sustainability" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Sustainable Tourism and the Future</h2>
          <p className="text-gray-300">
            The UAE is focusing on sustainability, with eco-resorts, green tourism initiatives, and even plans for space
            tourism. This forward-thinking approach ensures that the UAE remains a leader in global tourism for decades
            to come.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-orange-500">Why Visit the UAE?</h2>
        <p className="text-gray-300 mt-4 max-w-4xl mx-auto">
          Whether you’re exploring the souks of Deira, marveling at the futuristic skyline of Dubai, or relaxing on the
          pristine beaches of Fujairah, the UAE promises an unforgettable experience.
        </p>
      </div>
    </div>
  );
};

export default UAETravelHistory;
