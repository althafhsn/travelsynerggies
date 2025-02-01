'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";

interface BlogCardProps {
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const blogs: BlogCardProps[] = [
  {
    title: "The Fascinating Travel History of the  UAE",
    href: "the-fascinating-travel-history-of-the-UAE",
    description:
      "The United Arab Emirates (UAE) is a land of contrasts, where ancient traditions meet futuristic innovation.Its travel history is a captivating journey from humble beginnings as a desert trading hub to becoming one of the world's most sought-after tourist destinations.     ",
    imageUrl: "/images/sustainable-travel.jpg",
    date: "Published on 18 Jan 2025",
    category: "Eco Travel",
  },
  {
    title: "The UAE’s Future in the Travel Sphere",
    href: "the-UAE-future-in-the-travel-sphere",
    description:
      "The United Arab Emirates (UAE) has long been a global leader in tourism, known for its iconic landmarks, luxury experiences, and cultural richness. But what does the future hold for this dynamic destination? ",
    imageUrl: "/images/bleisure-travel.jpg",
    date: "Published on 17 Jan 2025",
    category: "Business & Leisure",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date, category, href }) => {
  return (
    <Link href={href} className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[30%] relative" >
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover hover:scale-110 transition-all duration-300 ease-in-out" />
      <div className="top-[56%] absolute bg-black/30 w-full ">
        <p className="text-sm text-orange-500 px-5 py-2 font-bold">{date}</p>

      </div>
      <div className="p-5 ">
        <div className="min-h-40">

          <h3 className="text-xl font-semibold text-gray-900 mt-6">{title}</h3>
          <p className="text-gray-900 text-sm mt-1">{description}</p>
          <p className="text-gray-800 font-medium mt-2">{category}</p>
        </div>
        <div className="text-orange-600 font-semibold mt-3 inline-block">Learn More →</div>
      </div>
    </Link>

  );
};




const UAETravelHistory = () => {
  return (
    <div className="min-h-screen mb-4">
      <div className="flex flex-col items-start justify-center text-white bg-bg-blogmain min-h-[90vh] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto flex flex-col items-center ">
          <h1 className="text-2xl md:text-7xl font-bold text-center font-serif pb-4">
            Your Passport to Wonders
          </h1>
          <p className="text-center text-xl md:text-3xl mt-2 font-serif pb-4">
            Tales of Travel Enchantment
          </p>
          <div className="w-52 min-h-[1px] bg-white"></div>
        </div>
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

    </div>
  );
};

export default UAETravelHistory;
