import Link from "next/link";

interface ServicesCardProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  href?: any;
}

const ServicesCard = ({
  backgroundImage,
  title,
  subtitle,
  href,
}: ServicesCardProps) => {
  return (
    <Link
      href={href}
      className="relative bg-cover p-6 shadow-lg rounded-3xl text-center cursor-pointer lg:w-[350px] mx-auto lg:h-[250px] w-[250px] h-[150px] flex flex-col items-center justify-center overflow-hidden z-20 transform transition-transform duration-300 ease-in-out hover:scale-110 lg:hover:blur-0 group"
    >
      {/* Background Image and Blur */}
      <div
        className={`absolute inset-0 bg-cover lg:blur-sm transition-all duration-300 ease-in-out z-0 group-hover:blur-0 group-hover:scale-110 ${backgroundImage}`}
      ></div>

      {/* Text content */}
      <h3 className="text-xl lg:text-2xl font-extrabold text-white z-10 relative">{title}</h3>
      <p className="text-sm lg:text-lg mt-4 text-blue-100 z-10 relative">{subtitle}</p>
    </Link>
  );
};

const Services = () => {
  return (
    <section className="bg-bg-services relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 bg-cover min-h-[80vh]">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      <div className="container mx-auto px-4 z-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-36 font-sans text-gray-100">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
          <ServicesCard
            backgroundImage="bg-bg-inbound"
            title="Inbound"
            subtitle="Discover local wonders with our expertly curated experiences."
            href="/inbound"
          />
          <ServicesCard
            backgroundImage="bg-bg-outbound"
            title="Outbound"
            subtitle="Explore global destinations with personalized itineraries."
            href="/outbound"
          />
          <ServicesCard
            backgroundImage="bg-bg-ts-connect"
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