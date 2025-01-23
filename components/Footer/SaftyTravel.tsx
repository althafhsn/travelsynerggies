import React from 'react';

const SafetyGuidelinesBlog = () => {
    return (
        <div className="min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8 pt-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden ">
                <div className="p-6 md:p-10">
                    {/* Removed React Helmet, added simple title management */}
                    <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">Safety Guidelines</h1>

                    <div className="container  px-4 py-8 ">
                        <header className="mb-8">
                            <p className="text-xl text-gray-700">At Travel Synergies, we prioritize the safety and well-being of our customers and partners when traveling to the United Arab Emirates (UAE). We understand that safety is a key concern for travelers and our goal is to ensure your experience is both secure and enjoyable..</p>
                        </header>

                        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-orange-500 mb-4">General Safety Tips</h2>
                            <p className="text-gray-700 mb-4">
                                When traveling to the UAE, it is essential to be aware of your surroundings and take necessary precautions to ensure your safety and abide by the local guidelines.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Familiarize yourself with local laws and customs and respect the UAE's cultural norms.</li>
                                <li>Use caution and check the legalities when using technical equipment such as satellite phones, listening or recording devices, radio transmitters, powerful cameras, or binoculars, as these may require a license.</li>
                                <li>Always adhere to traffic laws when driving and remember to wear your seatbelt.</li>
                            </ul>
                        </section>

                        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Specific Safety Concerns</h2>
                            <p className="text-gray-700 mb-4">
                                The UAE has specific safety concerns that travelers should be aware of:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>
                                    <strong className="text-orange-600">Road Safety:</strong> Be vigilant as a pedestrian and cross roads only at designated areas. Do not cross roads where you're not supposed to, as it is a punishable offense.
                                </li>
                                <li>
                                    <strong className="text-orange-600">Water Activities:</strong> Choose licensed and reputable operators for activities like scuba diving and snorkeling.
                                </li>
                                <li>
                                    <strong className="text-orange-600">Desert Travel:</strong> When traveling in the desert, make sure to follow local guidelines and regulations, and be aware of the risks of sandstorms, heat exhaustion and cold weather conditions. Ensure you are equipped with the correct clothing and have sufficient water.
                                </li>
                            </ul>
                        </section>

                        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Health and Medical Concerns</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Ensure you have all the necessary vaccinations before traveling to the UAE.</li>
                                <li>Stay hydrated and take measures to avoid heat exhaustion, especially during outdoor or desert activities.</li>
                                <li>In case of a medical emergency, make sure to seek medical attention at a reputable hospital or medical facility.</li>
                            </ul>
                        </section>

                        <section className="bg-white shadow-md rounded-lg p-6 mb-6 ">
                            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Emergency Contacts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-600 mb-2">UAE Emergency Services</h3>
                                    <p className="text-gray-700">999</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-600 mb-2">UAE Police</h3>
                                    <p className="text-gray-700">999</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-orange-600 mb-2">UAE Ambulance</h3>
                                    <p className="text-gray-700">998</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyGuidelinesBlog;