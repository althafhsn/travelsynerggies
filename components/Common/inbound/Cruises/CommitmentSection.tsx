'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CommitmentSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 md:px-12 lg:px-20 rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Commitment to Excellence
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Every journey should leave a lasting impression, and we go above and beyond to make that happen. 
          We meticulously select cruises that embody luxury, comfort, and unparalleled service. Whether 
          you're sailing the Mediterranean or discovering the charm of the Caribbean, we take you to the 
          world’s most captivating destinations with sophistication and style.
        </motion.p>

        {/* Divider */}
        <div className="w-16 h-1 bg-orange-400 mx-auto my-8"></div>

        {/* Call to Action Section */}
        <motion.h3 
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Set Sail?
        </motion.h3>

        <motion.p 
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Ready to create unforgettable memories? Get in touch with us today to start planning 
          your dream cruise with Travel Synergies. Let us turn your next vacation into the 
          extraordinary experience you've been waiting for.
        </motion.p>

        {/* Contact Button */}
        <motion.a 
          href="mailto:info@travelsynergies.com"
          className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-all rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-6 h-6" /> Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default CommitmentSection;
