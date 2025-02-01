'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const blogs: BlogCardProps[] = [
  {
    title: "Sustainable Travel",
    description:
      "The UAE is committed to reducing its environmental footprint while maintaining its reputation for luxury. Initiatives like Dubai’s Sustainable City and Abu Dhabi’s Eco-Resorts are leading the way in eco-friendly travel. The UAE aims to become a global leader in sustainable tourism, offering travelers guilt-free luxury experiences.     ",
    imageUrl: "/images/sustainable-travel.jpg",
    date: "Published on 18 Jan 2025",
    category: "Eco Travel",
  },
  {
    title: "Bleisure Travel",
    description:
      "The line between business and leisure travel is blurring. ‘Bleisure’ travelers are extending work trips...",
    imageUrl: "/images/bleisure-travel.jpg",
    date: "Published on 17 Jan 2025",
    category: "Business & Leisure",
  },
  {
    title: "Hyper-Personalization",
    description:
      "Advances in AI and data analytics are enabling hyper-personalized travel experiences...",
    imageUrl: "/images/hyper-personalization.jpg",
    date: "Published on 16 Jan 2025",
    category: "Tech & Travel",
  },
  {
    title: "Rise of Niche Tourism",
    description:
      "From wellness retreats to culinary tours, niche tourism is booming. Travelers are seeking specialized experiences...",
    imageUrl: "/images/niche-tourism.jpg",
    date: "Published on 15 Jan 2025",
    category: "Specialty Travel",
  },
  {
    title: "VR & AR in Travel",
    description:
      "VR and AR are set to revolutionize the way we explore destinations. Imagine taking a virtual tour before booking...",
    imageUrl: "/images/vr-ar-travel.jpg",
    date: "Published on 14 Jan 2025",
    category: "Future Travel",
  },
  {
    title: "Space Tourism",
    description:
      "While still in its infancy, space tourism is no longer science fiction. Companies like SpaceX are paving the way...",
    imageUrl: "/blog/blog2.webp",
    date: "Published on 13 Jan 2025",
    category: "Next Frontier",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date, category }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[30%] relative">
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
      <div className="top-[56%] absolute bg-black/30 w-full ">
        <p className="text-sm text-orange-500 px-5 py-2 font-bold">{date}</p>

      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-900 text-sm mt-1">{description}</p>
        <p className="text-gray-800 font-medium mt-2">{category}</p>
        <a href="#" className="text-orange-600 font-semibold mt-3 inline-block">Learn More →</a>
      </div>
    </div>

  );
};




const UAETravelHistory = () => {
  return (
    <div className="min-h-screen mb-4">
      <div className="flex flex-col items-start justify-center text-white bg-bg-blog min-h-[70vh] bg-cover">
        <div className="container mx-auto flex flex-col  items-center md:items-start">
          {/* <motion.h1
            className="text-lg md:text-xl font-bold font-sans mb-4 text-orange-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.h2
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Embark on a journey with <br />
            <span >Travel Synergies</span>
          </motion.h2>
          <Link href='#career-application'>

            <button className="text-white bg-orange-500 py-2 px-4 rounded shadow hover:bg-orange-700 hover:text-gray-100 transition-all duration-300 ease-in-out text-sm md:text-lg">
              Apply Now
            </button>
          </Link> */}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center my-5">
          <h1 className="max-w-5xl mx-auto text-3xl font-bold text-orange-500 mb-5 md:text-5xl md:leading-normal font-manrope">
            The Fascinating Travel History of the  UAE
          </h1>
          <p className="text-lg md:text-xl lg:text-4xl mt-4 text-gray-300 font-bold">
            From Desert Trails to a Global Marvel
          </p>

        </div>

        {/* Section: Introduction */}
        <div className="max-w-4xl mx-auto text-center ">
          <p className="mx-auto text-sm md:text-base text-gray-100 mb-9 ">
            The United Arab Emirates (UAE) is a land of contrasts, where ancient traditions meet futuristic innovation.
            Its travel history is a captivating journey from humble beginnings as a desert trading hub to becoming one of
            the world’s most sought-after tourist destinations.
          </p>
        </div>

        {/* Section: From Pearls to Skyscrapers */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/blog/blog1.webp" alt="Pearl Diving" className="rounded-lg shadow-lg  " />
          <div>
            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">
              From Pearls to Skyscrapers
            </h2>
            <p className="text-sm md:text-base text-gray-200 text-justify py-2  mx-auto px-5">
              Long before the UAE became synonymous with luxury travel and iconic landmarks, it was a region defined by its
              harsh desert landscape and strategic location along ancient trade routes. The Arabian Gulf served as a vital
              corridor for merchants trading pearls, spices, and textiles.
            </p>
          </div>
        </div>

        {/* Section: The Rise of Modern Tourism */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
          <div>
            <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">The Dawn of Tourism (1970s-2020s)</h2>
            <p className=" text-gray-200 text-justify py-2 px-5 mx-auto text-sm md:text-base ">
              The UAE’s transformation into a tourism hotspot began in the 1970s and 1980s, with the development of infrastructure and the establishment of Emirates Airlines in 1985. Dubai became a central hub for international travel, giving rise to iconic landmarks like the Burj Al Arab and Palm Jumeirah.
              Milestones in the UAE’s history.
              <br />
              <br />
              1985  - Emirates Airlines' establishment revolutionized air travel, connecting the UAE to the world with unparalleled luxury and service, whilst continuous upgrades to Dubai International Airport (DXB) and the opening of Al Maktoum International Airport (DWC) have cemented the UAE's position as a global aviation hub.
              1999 - Burj Al Arab, The 7-star hotel opens. It redefined luxury, putting Dubai on the global tourism map.
              <br />
              <br />

              2001 – The Palm Jumeirah is unveiled to the world. An engineering marvel, offering bespoke experiences and breathtaking views.
              <br />
              <br />

              2010 - Burj Khalifa, The world’s tallest building, attracting millions with its observation decks and surrounding Downtown Dubai is placed on the world map.
              <br />
              <br />
              2020 – The Expo 2020 happens. A global event that showcased the UAE’s capacity for innovation, sustainability, and cultural exchange, leaving a lasting legacy in District 2020
            </p>
          </div>
          <img src="/blog/blog5.webp" alt="Dubai Skyline" className="rounded-lg shadow-lg w-full h-[600px] object-cover" />
        </div>

        {/* Section: The UAE Today */}
        <div className="text-center mt-16">
          <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-orange-500 px-5  my-2 max-lg:text-center font-manrope">The UAE Today <span className="text-gray-50 font-manrope">
            A Global Tourism Leader
          </span></h2>
          <p className=" text-gray-200 text-center py-2  px-5 mx-auto text-sm md:text-base ">
            Today, the UAE is a magnet for travelers worldwide, offering a blend of luxury, adventure, and culture. Dubai
            and Abu Dhabi are the crown jewels, but other emirates like Ras Al Khaimah, Fujairah, and Ajman are gaining
            traction for their natural beauty and unique experiences.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative">
          {[
            { title: "Burj Khalifa", img: "/blog/burj-khalifa.webp" },
            { title: "Louvre Abu Dhabi", img: "/blog/louvre.webp" },
            { title: "Desert Safari", img: "/blog/safari.webp" },
            { title: "Dubai Mall", img: "/blog/dubai-mal.webp" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/10 rounded-lg text-center">
              <img src={item.img} alt={item.title} className="w-full min-h-[300px] h-[400px]  object-cover rounded-md mb-4" />
              <div className=" absolute bottom-5 ps-5 text-lg  text-gray-50 flex gap-2 items-center">
                <HiLocationMarker className="w-[25px] text-white font-extrabold" />
                <h3> {item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Sustainable Tourism */}
        <div className="container mx-auto px-4 py-10">
          {/* <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Latest Travel Trends</h2> */}
          <div className="flex flex-wrap justify-center gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
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
    </div>
  );
};

export default UAETravelHistory;
