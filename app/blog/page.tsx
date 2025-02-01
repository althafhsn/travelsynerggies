import React from "react";

const UAETravelHistory = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          The Fascinating Travel History of the UAE
        </h1>
        <p className="text-lg mt-4 text-gray-400">
          From Desert Trails to Global Marvel
        </p>
      </div>

      {/* Section: Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300">
          The United Arab Emirates (UAE) is a land of contrasts, where ancient traditions meet futuristic innovation.
          Its travel history is a captivating journey from humble beginnings as a desert trading hub to becoming one of
          the world’s most sought-after tourist destinations.
        </p>
      </div>

      {/* Section: From Pearls to Skyscrapers */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src="/images/pearl-diving.jpg" alt="Pearl Diving" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            From Pearls to Skyscrapers
          </h2>
          <p className="text-gray-300">
            Long before the UAE became synonymous with luxury travel and iconic landmarks, it was a region defined by its
            harsh desert landscape and strategic location along ancient trade routes. The Arabian Gulf served as a vital
            corridor for merchants trading pearls, spices, and textiles.
          </p>
        </div>
      </div>

      {/* Section: The Rise of Modern Tourism */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">The Rise of Modern Tourism</h2>
          <p className="text-gray-300">
            The UAE’s transformation into a tourism hotspot began in the 1970s and 1980s, with the development of
            infrastructure and the establishment of Emirates Airlines in 1985. Dubai became a central hub for
            international travel, giving rise to iconic landmarks like the Burj Al Arab and Palm Jumeirah.
          </p>
        </div>
        <img src="/images/dubai-skyline.jpg" alt="Dubai Skyline" className="rounded-lg shadow-lg" />
      </div>

      {/* Section: The UAE Today */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-orange-500">The UAE Today: A Global Tourism Leader</h2>
        <p className="text-gray-300 mt-4 max-w-4xl mx-auto">
          Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, adventure, and culture. Dubai
          and Abu Dhabi are the crown jewels, but other emirates like Ras Al Khaimah, Fujairah, and Ajman are gaining
          traction for their natural beauty and unique experiences.
        </p>
      </div>
      
      {/* Attractions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[
          { title: "Burj Khalifa", img: "/images/burj-khalifa.jpg" },
          { title: "Louvre Abu Dhabi", img: "/images/louvre.jpg" },
          { title: "Desert Safari", img: "/images/desert-safari.jpg" },
          { title: "Dubai Mall", img: "/images/dubai-mall.jpg" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-orange-500">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Section: Sustainable Tourism */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        <img src="/images/sustainability.jpg" alt="Sustainability" className="rounded-lg shadow-lg" />
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
