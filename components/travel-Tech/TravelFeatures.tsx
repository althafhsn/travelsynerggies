'use client'
import { FaShoppingCart, FaGlobeAmericas } from 'react-icons/fa';

const FeatureCard = ({ 
  title, 
  description, 
  image, 
  icon: Icon 
}: { 
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[500px] w-[80%] md:w-[450px] border mx-auto">
      <div className="relative h-[250px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="p-2 bg-white/90 rounded-full">
            <Icon className="w-6 h-6 text-orange-600" />
          </div>
        </div>
      </div>
      <div className="p-2 ">
        <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

const TravelFeatures = () => {
  const features = [
    {
      title: "Dynamic Prowess in E-Commerce",
      description: "Our prowess in e-commerce grants us the capacity to engage in dynamic pricing and real-time exchange rates, culminating in an experience of utmost seamlessness for our clients. Our competitive offerings set us apart in the realm of luxury travel.",
      image: "/inbound/Inbound/travel-tech/E-commerce.webp",
      icon: FaShoppingCart
    },
    {
      title: "A Constant Evolution with the Times",
      description: "The realm of travel undergoes a perpetual transformation. We vigilantly track luxury travel trends and emerging destinations to stride in sync with contemporary trends, demands, and progressions. This ongoing diligence enables us to consistently meet evolving needs and elevate the realm of our service.",
      image: "/inbound/Inbound/travel-tech/Best-tour-operator-in-dubai.webp",
      icon: FaGlobeAmericas
    }
  ];

  return (
    <div className="py-5 mb-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-orange-500 mb-2">
            Travel Experience
          </h2>
          <p className="text-sm md:text-lg text-gray-300">
            Discover our innovative approach to luxury travel and e-commerce solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TravelFeatures;
