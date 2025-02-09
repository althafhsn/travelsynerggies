'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
    title: "Top Emerging Travel Destinations for 2025",
    href: "/top-emerging-travel-destinations",
    description:
      "In our previous blog post, we explored the evolution of travel—from its golden age to the present day and beyond. Today, we’re diving into the exciting world of emerging travel destinations. As an outbound holidays tourism company based in the UAE    ",
    imageUrl: "/top-emerging-travel-destinations/blog-post-1.webp",
    date: "Published on 18 Jan 2025",
    category: "Eco Travel",
  },
  {
    title: "The Evolution of Travel",
    href: "/the-evolution-of-travel",
    description:
      "Travel has always been a cornerstone of human experience, a way to explore, connect, and grow. For decades, the travel industry has evolved dramatically, shaped by technological advancements, cultural shifts, and global events. As an outbound holidays tourism company based in the UAE ",
    imageUrl: "/blog/blog2.png",
    date: "Published on 17 Jan 2025",
    category: "Business & Leisure",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date, category, href }) => {
  return (
    <Link href={href} className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-[48%] lg:w-[30%]">
      {/* Make this relative so absolute children stay inside */}
      <div className="relative w-full h-80 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out" />

        {/* Absolute Date Overlay inside the relative container */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30">
          <p className="text-sm text-orange-500 font-extrabold px-5 py-2">{date}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5">
        <div className="min-h-[234px]">
          <h3 className="text-xl font-semibold text-orange-500 mt-6">{title}</h3>
          <p className="text-gray-900 text-sm mt-1 text-justify">{description}</p>
          <p className="text-gray-800 font-medium mt-2">{category}</p>
        </div>
        <div className="text-orange-600 font-semibold my-2 inline-block">Learn More →</div>
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
            Explores the worlds best kept secrets
          </h1>
          <p className="text-center text-xl md:text-3xl mt-2 font-serif pb-4">
            Tales of Travel Enchantment
          </p>
          <div className="w-52 min-h-[1px] bg-white"></div>
        </div>
      </div>
      <div className=" container mx-auto relative mt-5 px-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Outbound</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full h-[1px] bg-gray-200 my-2"></div>
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
        Explores the worlds best kept secrets
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-4xl font-serif text-gray-300 mb-10">
          Embark on a Journey of Discovery, Inspiration and Wanderlust
        </h2>

        {/* Description */}
        <div className="container mx-auto">
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          Welcome to Travel Synergies, where we craft unforgettable journeys. Dive into our handpicked travel guides, tips, and stories that uncover hidden gems and epic adventures. From secluded beaches to off-the-beaten-path wonders, we’re here to fuel your passion for exploration.
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
