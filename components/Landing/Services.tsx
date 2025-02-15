import Link from "next/link";
import { FaNetworkWired, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";

interface ServicesCardProps {
  backgrounImage?:any;
  icon: any;
  title: string;
  subtitle: string;
  href?: any;
}

const ServicesCard = ({
  backgrounImage,
  icon,
  title,
  subtitle,
  href,
}: ServicesCardProps) => {
  return (
    <Link
      href={href}
      className="relative bg-cover shadow-lg rounded-xxl text-center cursor-pointer lg:w-[350px] mx-auto lg:h-[400px] w-[300px] h-[250px] flex flex-col items-center justify-center overflow-hidden z-20 transform transition-transform duration-300 ease-in-out hover:scale-110 group"
    >

      {/* Background & Hover Effect */}
      <div className="rounded-2xl border-[1px] border-orange-500 flex flex-col justify-between
      bg-none hover:cursor-pointer group relative overflow-hidden">
             <img src={backgrounImage} alt={title} className="w-full h-[180px] object-cover rounded-t-2xl" />

        {/* Icon Block */}
        <div className="flex gap-2 items-center mb-2 px-5 pt-6">
          {icon}

          {/* Title */}
          <h2 className="text-left font-semibold text-xl ps-2">{title}</h2>
        </div>



        {/* Description */}
        <p className="text-left line-clamp-3 opacity-70 text-lg z-50 px-5 pb-6">{subtitle}.</p>

        {/* Hover Grid Background */}
        <div className="opacity-0 absolute inset-0 group-hover:opacity-40 transition-all duration-1000" style={{
          backgroundImage:
            "linear-gradient(rgba(255, 237, 213, 0.1) 2px, transparent 2px), " +
            "linear-gradient(90deg, rgba(255, 237, 213, 0.1) 2px, transparent 2px)",
          backgroundSize: "70px 70px",
          backgroundColor: "rgba(249, 115, 22, 0.1)"
        }}>
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
          backgrounImage='/landing/outbound.jpg'
            icon={<FaPlaneArrival size={36} className="p-1 rounded-full text-orange-500 border border-orange-500 z-50" />}
            title="Inbound"
            subtitle="Discover local wonders with our expertly curated experiences."
            href="/inbound"
          />
          <ServicesCard
            icon={<FaPlaneDeparture size={36} className="p-1 rounded-full text-orange-500 border border-orange-500 z-50" />}
            title="Outbound"
            subtitle="Explore global destinations with personalized itineraries."
            href="/outbound"
          />
          <ServicesCard
            icon={<FaNetworkWired size={36} className="p-1 rounded-full text-orange-500 border border-orange-500 z-50" />}
            title="Traminno"
            subtitle="Seamless travel solutions powered by innovation."
            href="/ts-connect"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;