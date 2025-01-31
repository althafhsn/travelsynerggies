'use client'
import React, { useState } from 'react';

type Blog = {
  date: string;
  title: string;
  summary: string;
  fullContent: string;
  img: string;
};

const Blog: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  const blogs: Blog[] = [
    {
      date: "Jan 01, 2023",
      title: "Clever ways to invest in product to organize your portfolio",
      summary: "Discover smart investment strategies to streamline and organize your portfolio..",
      fullContent: "Discover smart investment strategies to streamline and organize your portfolio. Learn how to effectively allocate resources, diversify your investments, and optimize for long-term growth.",
      img: "https://pagedone.io/asset/uploads/1696244317.png",
    },
    {
      date: "Feb 01, 2023",
      title: "How to grow your profit through systematic investment with us",
      summary: "Unlock the power of systematic investment with us and watch your profits soar. Our..",
      fullContent: "Unlock the power of systematic investment with us and watch your profits soar. Our expert insights will guide you through a structured approach to making informed financial decisions.",
      img: "https://pagedone.io/asset/uploads/1696244340.png",
    },
    {
      date: "Mar 01, 2023",
      title: "How to analyze every holding of your portfolio",
      summary: "Our comprehensive guide will equip you with the tools and insights needed to..",
      fullContent: "Our comprehensive guide will equip you with the tools and insights needed to evaluate your portfolio. Learn how to analyze risk, returns, and optimize performance.",
      img: "https://pagedone.io/asset/uploads/1696244356.png",
    },
  ];
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
          <div className="text-lg text-gray-300">
            <h2 className="text-4xl font-semibold text-orange-500">The UAE Today: A Global Tourism Leader</h2>
            <p className="mt-6">
              Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, adventure, and culture. Dubai and Abu Dhabi are the crown jewels, but other emirates like Ras Al Khaimah, Fujairah, and Ajman are gaining traction for their natural beauty and unique experiences.
            </p>
            <p className="mt-4">
              The UAE is home to some of the world’s most famous attractions, including:
              <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className={`group w-full max-lg:max-w-xl lg:w-1/4 border border-gray-300 rounded-2xl transition-all duration-300 ${expanded === index ? "h-auto" : "h-[450px]"}`}
                  >
                    <div className="flex items-center">
                      <img
                        src={blog.img}
                        alt="blogs tailwind section"
                        className="rounded-t-2xl w-full object-cover"
                      />
                    </div>
                    <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                      <span className="text-indigo-600 font-medium mb-3 block">{blog.date}</span>
                      <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{blog.title}</h4>
                      <p className="text-gray-500 leading-6 mb-10">
                        {expanded === index ? blog.fullContent : blog.summary}
                      </p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="cursor-pointer text-lg text-indigo-600 font-semibold"
                      >
                        {expanded === index ? "Read less.." : "Read more.."}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </p>
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
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest  blog</h2>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">Jan 01, 2023</span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">Clever ways to invest in product to organize your portfolio</h4>
                <p className="text-gray-500 leading-6 mb-10">Discover smart investment strategies to streamline and organize your portfolio..</p>
                <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">Feb 01, 2023</span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to grow your profit through systematic investment with us</h4>
                <p className="text-gray-500 leading-6 mb-10">Unlock the power of systematic investment with us and watch your profits soar. Our..</p>
                <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">Mar 01, 20233</span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to analyze every holdings of your portfolio</h4>
                <p className="text-gray-500 leading-6 mb-10">Our comprehensive guide will equip you with the tools and insights needed to..</p>
                <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
