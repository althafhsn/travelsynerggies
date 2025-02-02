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
    imageUrl: "/blog/blog1.jpg",
    date: "Published on 18 Jan 2025",
    category: "Eco Travel",
  },
  {
    title: "The UAE’s Future in the Travel Sphere",
    href: "the-UAE-future-in-the-travel-sphere",
    description:
      "The United Arab Emirates (UAE) has long been a global leader in tourism, known for its iconic landmarks, luxury experiences, and cultural richness. But what does the future hold for this dynamic destination? ",
    imageUrl: "/blog/blog2.png",
    date: "Published on 17 Jan 2025",
    category: "Business & Leisure",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date, category, href }) => {
  return (
    <Link href={href} className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[30%] relative" >
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover hover:scale-110 transition-all duration-300 ease-in-out" />
      <div className="top-[49%] absolute bg-black/30 w-full ">
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
      <div className="absolute md:top-[120px] right-7 md:right-[80px] flex">
        <div className="h-16 md:h-28 flex flex-col gap-4 md:gap-12 items-start">
          {/* Vertical text aligned to the top */}
          <p className="text-[10px] md:text-sm tracking-[0.2em] rotate-180 [writing-mode:vertical-rl] h-full flex items-start font-mono text-white font-bold">
            SCROLL
          </p>
          <div className='h-full ml-2'>
            <div className='w-[2px] h-12 md:h-28 bg-orange-50 overflow-hidden'>
              <div className='progress h-full w-full bg-gray-200'></div>
            </div>
          </div>
        </div>

      </div>
      {/* Section: Sustainable Tourism */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 pt-10">
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <p className="text-gray-100 text-sm tracking-wide">
            Explore. Discover. Thrive
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif  mb-6 text-orange-500">
          Travel Insights, Tips and Stories
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-4xl font-serif text-gray-300 mb-10">
          Embark on a Journey of Discovery, Inspiration and Wanderlust
        </h2>

        {/* Description */}
        <div className="container mx-auto">
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Welcome to Travel synergies , where wanderlust meets unparalleled experiences.
            Immerse yourself in our curated collection of travel insights, tips and captivating stories.
            From hidden gems to island adventures, our blog is your passport to a world of discovery.
            Join us as we redefine the art of travel and inspire your next adventure.
          </p>
        </div>
      </div>
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
