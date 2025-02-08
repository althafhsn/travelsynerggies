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
    <div className="container mx-auto px-2 md:px-24 md:pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 items-center justify-center">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="flex flex-col items-center  text-center p-4  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300  mx-auto md:min-h-[400px] "
          >
            <div className="mb-4 ">
              <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center mb-4">
                <img 
                  src={section.imageSrc}
                  alt={`${section.title} Icon`}
                  className=" object-cover"
                />
              </div>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-orange-500 mb-4 w-full">
              {section.title}
            </h2>
            <p className="text-gray-200 leading-relaxed w-full text-xs md:text-base">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;