import Link from "next/link";
import { FaNetworkWired, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";

interface ServicesCardProps {
  icon: any;
  title: string;
  subtitle: string;
  href?: any;
}

const ServicesCard = ({
  icon,
  title,
  subtitle,
  href,
}: ServicesCardProps) => {
    return (
      <Link
        href={href}
        className="relative bg-cover shadow-lg rounded-xxl text-center cursor-pointer lg:w-[350px] mx-auto lg:h-[300px] w-[300px] h-[250px] flex flex-col items-center justify-center overflow-hidden z-20 transform transition-transform duration-300 ease-in-out hover:scale-110 group"
      >
        {/* Background & Hover Effect */}
        <div className="rounded-2xl border-2 border-gray-600 px-6 py-10 flex flex-col items-center justify-center bg-none cursor-pointer relative overflow-hidden group">

          {/* Icon Block - Centered & Enlarged */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-orange-600 p-3 rounded-full  shadow-md text-4xl">
              {icon}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-center font-semibold text-xl">{title}</h2>

          {/* Description */}
          <p className="text-center line-clamp-3 opacity-70 text-sm">{subtitle}</p>

          {/* Hover Overlay */}
          <div className="opacity-0 absolute inset-0 bg-cover group-hover:opacity-30 transition-all duration-700">
            <div className="h-full bg-gradient-to-tr from-transparent to-blue-900"></div>
          </div>
        </div>
      </Link>
    );
  };

const Services = () => {
  return (
    <section className=" relative flex flex-col  bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      <div className="container mx-auto z-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10 font-sans text-orange-500">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
          <ServicesCard
            icon={<FaPlaneArrival className="   " />}
            title="Inbound"
            subtitle="Discover local wonders with our expertly curated experiences."
            href="/inbound"
          />
          <ServicesCard
            icon={<FaPlaneDeparture className="   " />}
            title="Outbound"
            subtitle="Explore global destinations with personalized itineraries."
            href="/outbound"
          />
          <ServicesCard
            icon={<FaNetworkWired className="    " />}
            title="Ts Connect"
            subtitle="Seamless travel solutions powered by innovation."
            href="/ts-connect"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;