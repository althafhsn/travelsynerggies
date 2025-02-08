'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCode, FaCreditCard, FaHeartbeat, FaOilCan, FaPlane, FaSatelliteDish } from 'react-icons/fa';

const eventCategories = [
  { title: "Healthcare Conferences & Exhibitions", icon: <FaHeartbeat className="w-10 h-10 text-orange-400" /> },
  { title: "Telecom Events & Congresses", icon: <FaSatelliteDish className="w-10 h-10 text-orange-400" /> },
  { title: "IT & Technology Forums", icon: <FaCode className="w-10 h-10 text-orange-400" /> },
  { title: "Banking & Finance Conferences", icon: <FaCreditCard className="w-10 h-10 text-orange-400" /> },
  { title: "Construction & Real Estate Exhibitions", icon: <FaBuilding className="w-10 h-10 text-orange-400" /> },
  { title: "Oil & Gas Industry Events", icon: <FaOilCan className="w-10 h-10 text-orange-400" /> },
  { title: "Automotive Conferences & Tradeshows", icon: <FaBriefcase className="w-10 h-10 text-orange-400" /> },
  { title: "Travel & Tourism Exhibitions", icon: <FaPlane className="w-10 h-10 text-orange-400" /> }
];

const IndustryEvents = () => {
  return (
    <section className=" text-white px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2 
          className="text-2xl md:text-3xl  font-bold mb-6 text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industry-Specific Events
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We are specialists in promoting and handling conferences, exhibitions, and events 
          across various industries, ensuring seamless execution and maximum impact.
        </motion.p>

        {/* Grid of Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {eventCategories.map((event, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-800 rounded-lg shadow-md group hover:bg-orange-500 transition-all duration-300 flex flex-col items-center text-center cursor-pointer min-h-[200px] justify-center"
              whileHover={{ scale: 1.05 }}
            >
                <div className='group-hover:text-white'>
                {event.icon}
                </div>
              
              <h3 className="text-lg font-semibold mt-4">{event.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryEvents;
