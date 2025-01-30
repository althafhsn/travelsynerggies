import React from 'react';

const Blog = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-orange-500 tracking-wide">The Fascinating Travel History of the UAE</h1>
        <p className="mt-4 text-xl text-gray-300">From Desert Trails to Global Marvel</p>
      </header>

      {/* Section 1: From Pearls to Skyscrapers */}
      <section className="px-8 py-16 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-lg text-gray-300">
            <h2 className="text-4xl font-semibold text-orange-500">From Pearls to Skyscrapers: The Early Days of UAE Travel</h2>
            <p className="mt-6">
              Long before the UAE became synonymous with luxury travel and iconic landmarks, it was a region defined by its harsh desert landscape and strategic location along ancient trade routes. The Arabian Gulf served as a vital corridor for merchants trading pearls, spices, and textiles. Cities like Dubai and Sharjah emerged as key trading ports, connecting the East and West.
            </p>
            <p className="mt-4">
              The pearl diving industry was the backbone of the economy, with Emirati sailors braving the seas to harvest these precious gems. However, the discovery of oil in the mid-20th century marked a turning point. The UAE’s leaders, particularly Sheikh Zayed bin Sultan Al Nahyan, envisioned a future beyond oil—a future built on tourism, innovation, and global connectivity.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="path-to-image1.jpg" alt="Early Days of UAE" className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Section 2: The Rise of Modern Tourism */}
      <section className="bg-gray-900 px-8 py-16 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-lg text-gray-300">
            <h2 className="text-4xl font-semibold text-orange-500">The Rise of Modern Tourism in the UAE</h2>
            <p className="mt-6">
              The UAE’s transformation into a tourism hotspot began in the 1970s and 1980s, with the development of infrastructure and the establishment of Emirates Airlines in 1985. This airline became a global connector, making Dubai a central hub for international travel.
            </p>
            <p className="mt-4">
              The 1990s and early 2000s saw the rise of iconic landmarks like the Burj Al Arab, the world’s first 7-star hotel, and the Palm Jumeirah, an engineering marvel that redefined luxury living. The UAE also invested heavily in cultural tourism, with attractions like the Sheikh Zayed Grand Mosque in Abu Dhabi and the Dubai Museum showcasing the nation’s heritage.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="path-to-image2.jpg" alt="Modern Tourism in UAE" className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Section 3: UAE Today */}
      <section className="px-8 py-16 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-lg text-gray-300">
            <h2 className="text-4xl font-semibold text-orange-500">The UAE Today: A Global Tourism Leader</h2>
            <p className="mt-6">
              Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, adventure, and culture. Dubai and Abu Dhabi are the crown jewels, but other emirates like Ras Al Khaimah, Fujairah, and Ajman are gaining traction for their natural beauty and unique experiences.
            </p>
            <p className="mt-4">
              The UAE is home to some of the world’s most famous attractions, including:
              <ul className="list-disc pl-6 mt-4">
                <li>Burj Khalifa: The tallest building in the world.</li>
                <li>Louvre Abu Dhabi: A cultural masterpiece bridging East and West.</li>
                <li>Desert Safaris: A thrilling way to experience the UAE’s natural beauty.</li>
                <li>Dubai Mall: A shopper’s paradise with over 1,200 stores.</li>
              </ul>
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="path-to-image3.jpg" alt="UAE Today" className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Section 4: Sustainable Tourism */}
      <section className="bg-gray-900 px-8 py-16 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-lg text-gray-300">
            <h2 className="text-4xl font-semibold text-orange-500">Sustainable Tourism and the Future of UAE Travel</h2>
            <p className="mt-6">
              As the UAE looks to the future, sustainability is at the forefront of its tourism strategy. Initiatives like Abu Dhabi’s Eco-Resorts and Dubai’s Green Tourism Awards highlight the nation’s commitment to preserving its natural and cultural heritage.
            </p>
            <p className="mt-4">
              The UAE is also embracing space tourism, with plans to build the first space hotel and launch commercial space flights. This forward-thinking approach ensures that the UAE will remain a leader in the global tourism industry for decades to come.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="path-to-image4.jpg" alt="Sustainable Tourism" className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="bg-orange-500 px-8 py-16 text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">Why Visit the UAE?</h2>
        <p className="text-lg text-white max-w-3xl mx-auto">
          The UAE’s travel history is a testament to its resilience, vision, and ambition. From its roots as a desert trading post to its current status as a global tourism powerhouse, the UAE offers something for everyone. Whether you’re exploring the souks of Deira, marveling at the futuristic skyline of Dubai, or relaxing on the pristine beaches of Fujairah, the UAE promises an unforgettable experience.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2025 UAE Travel Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
