import React from 'react';
import { HeadphonesIcon, ShieldCheckIcon, CreditCardIcon, HeartIcon } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-3">
    <div
      className="p-3 bg-white/50 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-125 cursor-pointer"
    >
      {icon}
    </div>
    <h3 className="text-orange-500 font-medium">{title}</h3>
    <p className="text-gray-100 text-sm">{description}</p>
  </div>

);

const FeaturesSection = () => {
  const features = [
    {
      icon: <HeadphonesIcon size={24} />,
      title: "24/7 Chat Support",
      description: "24/7 Chat Support: Help anytime, anywhere."
    },
    {
      icon: <ShieldCheckIcon size={24} />,
      title: "Secure Booking",
      description: "Confidential and secure booking for peace of mind."
    },
    {
      icon: <CreditCardIcon size={24} />,
      title: "Multiple Choices of Payment",
      description: "Flexible payment options tailored to you."
    },
    {
      icon: <HeartIcon size={24} />,
      title: "Loyalty Program",
      description: "Earn rewards for your loyalty with exclusive perks and discounts."
    }
  ];

  return (
    <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;