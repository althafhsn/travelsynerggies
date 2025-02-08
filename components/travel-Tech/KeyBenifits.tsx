'use client'
import {
    FaUserFriends, FaClock, FaHeadset, FaBuilding,
    FaBolt, FaCrown, FaDollarSign, FaFileAlt,
    FaTicketAlt, FaCode, FaShoppingCart, FaLaptopCode,
    FaHandshake
} from 'react-icons/fa';

const BenefitCard = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => {
    return (
        <div className="group p-6 bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100  min-h-[200px] cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3  rounded-full group-hover:bg-orange-100 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-orange-500 transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </div>
    );
};

const KeyBenefits = () => {
    const benefits = [
        { icon: FaUserFriends, title: "User-friendly interface" },
        { icon: FaClock, title: "Accessible 24 hours a day, 365 days a year" },
        { icon: FaHeadset, title: "In-house team of professionals providing support 24/7/365" },
        { icon: FaBuilding, title: "Seamless connectivity to the best hotels worldwide" },
        { icon: FaBolt, title: "Real-time online booking confirmations" },
        { icon: FaCrown, title: "Access to exclusive luxury hotel rates" },
        { icon: FaDollarSign, title: "Access to static wholesale contracted rates" },
        { icon: FaFileAlt, title: "Online invoicing" },
        { icon: FaTicketAlt, title: "Booking voucher" },
        { icon: FaCode, title: "Application Programming Interface" },
        { icon: FaShoppingCart, title: "E-commerce" },
        { icon: FaLaptopCode, title: "Dedicated in-house I.T. Development Team" },
        { icon: FaHandshake, title: "Professional Reservations Team" }
    ];

    return (
        <div className="py-5 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-6 space-y-4">
                    <h1 className="text-xl md:text-3xl font-bold text-orange-500  ">
                        Key Benefits to Travel Agents
                    </h1>
                    <p className="text-sm md:text-base text-gray-300">
                        Empowering your business with cutting-edge solutions and exclusive advantages
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <BenefitCard icon={benefit.icon} title={benefit.title} />
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

export default KeyBenefits;