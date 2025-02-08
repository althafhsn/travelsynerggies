import { m } from 'framer-motion';
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const SaftyTravelInbound: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('general-safety-tips');

    const sections = [
        {
            id: 'general-safety-tips',
            title: 'General Safety Tips',
            content: [
                'When traveling to the UAE, it is essential to be aware of your surroundings and take necessary precautions to ensure your safety and abide by the local guidelines. Here are some general safety tips to keep in mind:                ',
                "Familiarize yourself with local laws and customs and respect the UAE's cultural norms"
                ,
                'Use caution and check the legalities when using technical equipment such as satellite phones, listening or recording devices, radio transmitters, powerful cameras, or binoculars, as these may require a license.',
                'Always adhere to traffic laws when driving and remember to wear your seatbelt.',
            ]
        },
        {
            id: 'Specific-Safety-Concerns',
            title: 'Specific Safety Concerns',
            content: [
                'The UAE has specific safety concerns that travelers should be aware of, including',
                'Road safety: Be vigilant as a pedestrian and crossroads only at designated areas. Do not cross roads where your not supposed to, as it is a punishable offense. ',
                'Water activities: Choose licensed and reputable operators for activities like scuba diving and snorkeling.',
                'Desert travel: When traveling in the desert, make sure to follow local guidelines and regulations, and be aware of the risks of sandstorms, heat exhaustion and cold weather conditions. Ensure you are equipped with the correct clothing and have sufficient water.'
            ]
        },
        {
            id: 'Health-and-Medical-Concerns',
            title: 'Health and Medical Concerns',
            content: [
                'Vaccinations: Ensure you have all the necessary vaccinations before traveling to the UAE.',
                'Heat exhaustion: Stay hydrated and take measures to avoid heat exhaustion, especially during outdoor or desert activities.',
                ' Medical facilities: In case of a medical emergency, make sure to seek medical attention at a reputable hospital or medical facility.'
            ]
        },
        {
            id: 'road-safety',
            title: 'Emergency Contacts',
            content: [
                'In case of an emergency, it is essential to have the following contact information handy:                ',
                'UAE Emergency Services: 999                ',
                'UAE Police: 999',
                'UAE Ambulance: 998',
                'Our priority is to ensure a safe and enjoyable experience to our customers and partners when traveling to the UAE. By following these safety tips and being aware of specific safety concerns, you can minimize the risks and have a successful and enjoyable trip.'
            ]
        }
    ];

    const activeContent = sections.find((s) => s.id === activeSection);

    return (
        <div className=" bg-gray-100 text-gray-800 p-4 sm:p-8 min-h-screen">
            <div className="container mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-6 sm:p-8">
                {/* Title */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                    UAE Travel Safety Guidelines
                </h1>

                <p className="text-sm text-black mb-4 text-center font-bold ">
                    At Travel Synergies, we prioritize the safety and well-being of our customers and partners when traveling to the United Arab Emirates (UAE). We understand that safety is a key concern for travelers and our goal is to ensure your experience is both secure and enjoyable.

                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="space-y-2 md:space-y-4" role="tablist">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                role="tab"
                                tabIndex={0}
                                aria-selected={activeSection === section.id}
                                className={`w-full px-5 py-3 rounded-sm text-sm md:text-sm font-semibold transition-all duration-300 text-start ${activeSection === section.id
                                    ? 'bg-orange-500 text-white scale-105 shadow-md'
                                    : ' bg-gray-100 text-orange-500 hover:bg-orange-200'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-lg md:text-xl font-bold text-orange-600 mb-4">
                            {activeContent?.title || 'Section not found'}
                        </h2>

                        {activeContent ? (
                            <ul className="text-gray-700 leading-relaxed text-sm space-y-3">
                                {activeContent.content.map((item, index) => (
                                    <li key={index} className="flex items-start">

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">
                                Content not found. Please select a valid section.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SaftyTravelInbound;
