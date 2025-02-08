import React from 'react';

const MissionVision = () => {
  const sections = [
    {
      title: "Vision Statement",
      imageSrc: "/landing/eye.png", 
      description: "To redefine global travel by delivering extraordinary travel experiences, connecting cultures and inspiring journeys that leave a lasting impact on travelers and the destinations we serve, with innovation and sustainable practices at the forefront. "
    },
    {
      title: "Mission Statement",
      imageSrc: "/landing/puzzle.png", 
      description: "We are committed to delivering exceptional travel solutions by combining our state-of-the-art technology, personalized service and deep industry expertise. Our mission is to provide seamless, memorable and innovative travel experiences that exceed expectations"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-4  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-500"
          >
            <div className="mb-4">
              <div className="md:w-48 md:h-48 flex items-center justify-center mb-4">
                <img 
                  src={section.imageSrc}
                  alt={`${section.title} Icon`}
                  className=" object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;