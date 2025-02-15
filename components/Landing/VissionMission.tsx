import React from 'react';

const MissionVision = () => {
  const sections = [
    {
      title: "Vision Statement",
      style: 'w-20 h-20', // Larger icon
      imageSrc: "/landing/eye.png",
      description: "To redefine global travel by delivering extraordinary travel experiences, connecting cultures and inspiring journeys that leave a lasting impact on travelers and the destinations we serve, with innovation and sustainable practices at the forefront."
    },
    {
      title: "Mission Statement",
      style: 'w-16 h-16', // Smaller icon
      imageSrc: "/landing/puzzle.png",
      description: "We are committed to delivering exceptional travel solutions by combining our state-of-the-art technology, personalized service and deep industry expertise. Our mission is to provide seamless, memorable and innovative travel experiences that exceed expectations."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-24 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-start">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-3000"
          >
            {/* Icon with Fixed Height Container */}
            <div className="flex items-center justify-center h-24 mb-4">
              <img
                src={section.imageSrc}
                alt={`${section.title} Icon`}
                className={`${section.style} object-contain`}
              />
            </div>

            {/* Title - Ensures Alignment */}
            <h2 className="text-2xl font-bold text-orange-500 mb-4 w-full">
              {section.title}
            </h2>

            {/* Description - Keeps Both Sections Balanced */}
            <p className="text-gray-200 leading-relaxed w-full text-sm md:text-base">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
