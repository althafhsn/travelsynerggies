import { m } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const SustainableToursm: React.FC = () => {
    const serviceSpectrumDetails = [
        {
            title: 'Tailored Vacation Packages',
            details: [
                'Choice of Accommodation: Handpicked options ranging from boutique hotels and all-inclusive resorts to private villas and standard hotels.',
                'Dedicated Experts: Experienced travel consultants design itineraries tailored to personal interests, budgets and preferences.',
                'Exclusive Inclusions: Special activities, private guided tours and off the beaten track experiences.'
            ]
        },
        {
            title: 'Group Tours',
            details: [
                'Comprehensive Planning: Pre-designed itineraries with seamless coordination for large groups.',
                'Expert Tour Leaders: Accompanied by professional guides ensuring a hassle-free experience.',
                'Customizable Add-ons: Optional excursions, meals and upgrades to suit individual preferences within the group.'
            ]
        },
        {
            title: 'Corporate and MICE Travel',
            details: [
                'Venue Selection: Partnerships with premium venues for conferences, meetings and events globally.',
                'Customized Solutions: Tailor-made itineraries integrating business objectives with leisure activities.',
                'Event Experts: Dedicated MICE specialists manage logistics, from registration to post-event analysis.'
            ]
        },
        {
            title: 'Luxury Travel Experiences',
            details: [
                'Exclusive Stays: High-end resorts, luxury cruises and private islands.',
                'Concierge Services: 24/7 assistance with bookings, private chauffeurs and personal assistants.',
                'Bespoke Experiences: Exclusive access to prestigious events, private chefs and insider access moments.'

            ]
        },
        {
            title: 'Specialty Tours',
            details: [
                'Expert Guidance: Trained professionals for adventure activities ensuring safety and quality.',
                'Specialized Gear: Access to high-quality equipment for activities like trekking, scuba diving, and skiing.',
                'Local Insights: Guided tours with expert naturalists, historians, or cultural ambassadors.'

            ]
        },
        {
            title: 'Cruise Vacations',
            details: [
                'Wide Selection: Cruises to match every style, from luxury liners to intimate river cruises.',
                'Custom Shore Excursions: Unique onshore activities tailored to each port of call.',
                'All-Inclusive Packages: Meals, entertainment and optional choices for upgrades for suite accommodations.'

            ]
        },
        {
            title: 'Travel Insurance',
            details: [
                'Flexible Plans: Coverage options for medical emergencies, trip cancellations, and baggage loss.',
                'Global Reach: Policies accepted in multiple countries with 24/7 international assistance.',
                'Comprehensive Cover: Comprehensive support during unforeseen circumstances.'

            ]
        },
        {
            title: 'Flight and Accommodation Booking',
            details: [
                'Global Inventory: Access to 3 million hotels and partnerships with major airlines for competitive pricing.',
                'Custom Preferences: Choices based on star rating, location, amenities and flight class.',
                '•	Dynamic Packages: Bundled deals combining flights, stays and activities for cost savings.'

            ]
        },
        {
            title: '24/7 Customer Support',
            details: [
                'Round-the-Clock Assistance: Helplines available for travelers before, during and after their trip.',
                'Comprehensive Solutions: Support for itinerary changes, emergency bookings, or travel disruptions.',
                'Multilingual Support: Services in multiple languages for diverse customer needs.'

            ]
        },
        {
            title: 'Our Commitment to Excellence',
            details: [
                'At Travel Synergies, we are driven by a passion for creating exceptional travel experiences that inspire and satisfy. With a commitment to quality, innovation and personalized services, we strive to redefine the way you explore the world. ',
                'With years of industry expertise and a proven track record, Travel Synergies is a trusted partner for all your travel needs. Our partnerships with leading providers and our focus on customer satisfaction ensure that every journey is safe, comfortable and memorable.'

            ]
        },
    ];

    const destinationDetails = [
        {
            title: 'Treasures Unveiled',
            description: 'Escape to idyllic tropical paradises where sun-kissed beaches, turquoise waters and lush greenery create the perfect setting for relaxation and rejuvenation. Whether it’s the Maldives, Sri Lanka or the Seychelles, indulge in luxury resorts, serene landscapes and unforgettable island vibes.'

        },
        {
            title: 'Wildlife Safaris',
            description: 'Embark on thrilling wildlife safaris to witness majestic creatures in their natural habitats. From the Big Five in Africa to the tigers of India, these adventures offer close encounters with nature’s wonders, guided by expert naturalists for an unforgettable experience.'

        },
        {
            title: 'City Breaks',
            description: 'Discover the charm of vibrant cities worldwide with quick getaways tailored to your preferences. Immerse yourself in cultural landmarks, buzzing nightlife and world-class dining, whether it’s New York, Paris or Tokyo. Perfect for those seeking excitement and exploration.'

        },
        {
            title: 'Cultural Immersions',
            description: 'Dive into the rich traditions and heritage of destinations around the globe. Explore ancient temples, vibrant festivals and local customs that provide an authentic glimpse into the heart of each destination. Travel with purpose and connect with the stories of the past and present.'

        },
        {
            title: 'Architectural Wonders',
            description: 'Marvel at the architecutal masterpiece of renowned structures by visiting iconic architectural masterpieces. From the Great wall of China to the world wonders of the Taj Mahal and the intricate details of Angkor Wat. Sites inspire awe and celebrate human creativity across eras.'

        },
        {
            title: 'Enthralling Adventures',
            description: 'Marvel at the architecutal masterpiece of renowned structures by visiting iconic architectural masterpieces. From the Great wall of China to the world wonders of the Taj Mahal and the intricate details of Angkor Wat. Sites inspire awe and celebrate human creativity across eras.'

        },
        {
            title: 'Culinary Journeys',
            description: "Savor the world’s finest cuisines with tours designed for food enthusiasts. Taste authentic dishes, explore bustling markets and learn from master chefs to experience the flavors thatdefine each destination."

        },
        {
            title: 'Romantic Escapes',
            description: 'Craft unforgettable moments with tailor-made romantic escapes. Whether it’s a candlelit dinner on a private beach or a hot air balloon ride over rolling vineyards, these trips are perfect for couples seeking connection and intimacy.'

        },
        {
            title: 'Spiritual Awakenings',
            description: 'A spiritual awakening is a profound journey of connection and inner peace. Sparked by sacred spaces like churches, mosques and temples inspire reflection and spiritual well-being. Rich with history and devotion, offer a tranquil escape from the modern rush.'

        }
    ];

    return (
        <section className="bg-gray-100 text-gray-800 p-8">
            <div className="container max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Our Service Spectrum */}
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-700 mb-6">Our Service Spectrum</h2>
                        {serviceSpectrumDetails.map((service, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-orange-500">{service.title}</h3>
                                <ul className=" text-xs md:text-sm text-gray-600">
                                    {service.details.map((item, index) => (
                                        <li key={index} className="flex ">
                                            <div className="text-xs">

                                                <GoDotFill className="mr-2 mt-[3px] " />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                    {/* Discover Your Dream Destinations */}
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-700 mb-6">Discover Your Dream Destinations</h2>
                        {destinationDetails.map((destination, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-orange-500 ">{destination.title}</h3>
                                <p className="text-xs md:text-sm text-gray-600 ">{destination.description}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SustainableToursm;