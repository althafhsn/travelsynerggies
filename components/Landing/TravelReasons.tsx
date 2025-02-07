import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface TravelReasonsProps {
  image1: string; // URL for the first image
  image2: string; // URL for the second image
}

const TravelReasons: React.FC<TravelReasonsProps> = () => {
  const reasons = [
    { title: "Proven Track Record", description: "Years of experience in managing high profile events and tours speaks of our reliability and expertise." },
    { title: "Comprehensive Services", description: "From initial planning and in destination support, to post-trip feedback, we cover every aspect of travel management with utmost precision." },
    { title: "Innovative Technology", description: "We leverage on the latest technology to enhance coordination and efficiency to ensure a smooth operation and overall experience of the tour. We offer real-time availability and instant booking with our booking engine and seamless XML connectivity." },
    { title: "Personalized Approach", description: "We customize and provide a personalized services to suit the unique needs and preferences of every traveler." },
    { title: "Local Expertise", description: "Our team has extensive knowledge of each destination, providing insider tips and recommendations to enhance your experience. Our deep knowledge of the locality ensures that you experience the best of what the destination has to offer." },
    { title: "Customized Itineraries", description: "We craft tailored itineraries that reflect your interests and preferences, whether you're passionate about history, seeking thrilling adventures or simply looking to relax and unwind." },
    { title: "Unique Experiences", description: "We offer access to exclusive and unique experiences, from traditional dining opportunities and unique safaris to cultural tours and adventure activities." },
    { title: "Global Network", description: "Our connections span renowned accommodation partners, cruise lines, industry stakeholders and key destinations worldwide, allowing unparalleled opportunities for our clients." },
    { title: "Memorable Destinations", description: "From the exotic to the serene, we take you to the world's most sought-after locations." },
    { title: "Dedicated Staff", description: "Our dedicated staff offers 24/7 support to ensure seamless, stress-free travel with expert assistance available anytime for all your needs." },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-6 text-center">
        Top 10 Reasons Why We Are Your Perfect Travel Partner!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        

        <div>
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6">
              <FaCheckCircle className="text-orange-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default TravelReasons;
