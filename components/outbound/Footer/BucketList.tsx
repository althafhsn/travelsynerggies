import React, { useState } from 'react';

const bucketListData = {
    destinations: [
        {
            title: "Great Wall of China",
            description: "A marvel of ancient engineering, the Great Wall winds over 13,000 miles through majestic landscapes, standing as a symbol of China's resilience and rich heritage."
        },
        {
            title: "Hot Air Ballooning in Cappadocia",
            description: "Float above the mystic landscapes of Cappadocia, where fairy chimneys, ancient cave dwellings and vibrant valleys create a mesmerizing panorama."
        },
        {
            title: "Temples in Egypt",
            description: "Discover the grandeur of ancient Egypt as you explore iconic temples like Karnak, Luxor, and Abu Simbel, steeped in millennia-old history and mystique"
        },
        {
            title: "Maldives",
            description: "A tropical haven of crystal-clear waters, overwater bungalows and pristine white-sand beaches, the Maldives promises serene luxury and unparalleled beach stays."
        },
        {
            title: "New York",
            description: "The city that never sleeps, New York dazzles with its towering skyline, popular attractions, diverse neighborhoods and vibrant atmosphere."
        },
        {
            title: "Machu Picchu, Peru",
            description: "Perched high in the Andes, Machu Picchu is a mystical Incan city known for its remarkable stone structures and breathtaking mountain views."
        },
        {
            title: "Santorini – Greece ",
            description: "With its whitewashed houses, azure-domed churches and breathtaking sunsets over the Aegean Sea, Santorini sets the stage for an idyllic getaway."
        },
        {
            title: "Masai Mara, Kenya ",
            description: "The Masai Mara is a world-renowned safari destination in Kenya, known for its Great Migration of wildebeest and zebras. It’s home to the Big Five and offers breathtaking savannah landscapes rich in wildlife and Maasai culture."
        },
        {
            title: "Rome ",
            description: "Rome, the Eternal city captivates visitors with its ancient landmarks, stunning art and romantic atmosphere offering a perfect blend of history and culture, along with the finest Italian cuisine."
        },
        {
            title: "Japan",
            description: "Discover Japan’s harmonious blend of tradition and modernity, from tranquil tea ceremonies and ancient temples to neon-lit cities and innovative art."
        },
        {
            title: "Venice – Italy",
            description: "Known as the Rose City, Petra features stunning architecture and ancient ruins, carved into sandstone cliffs that is a marvel in the desert landscape."
        },
        {
            title: "Petra, Jordan",
            description: "Known as the Rose City, Petra features stunning architecture and ancient ruins, carved into sandstone cliffs that is a marvel in the desert landscape."
        },
        {
            title: "Venice – Italy",
            description: "Lose yourself in the timeless romance of Venice, where gondola rides through enchanting canals and charming piazzas evoke a fairy tale-like experience."
        },
        {
            title: "Sri Lanka",
            description: "Known as the 'Pearl of the Indian Ocean,' Sri Lanka is a land of timeless charm and breathtaking beauty with lush tea plantations, incredible wildlife, golden beaches and rich cultural heritage, wrapped in warm hospitality. "
        },
        {
            title: "Vatican – Italy  ",
            description: "The heart of Catholicism, Vatican City inspires with St. Peter’s Basilica, the Sistine Chapel, and a profound sense of faith and history."
        },
        {
            title: "Blue Mosque – Turkey",
            description: "An architectural marvel in Istanbul, the Blue Mosque mesmerizes with its grand domes, intricate tilework and the serene call to prayer echoing through its courtyards."
        },
        {
            title: "Castles in Germany",
            description: "Step into a fairy tale as you explore Germany’s majestic castles, steeped in history, romance and architectural splendor which takes you back in time."
        },

    ],
    dining: [
        {
            title: "Dinner in the Sky – Brussels, Belgium",
            description: "Enjoy a meal 150 feet above the ground with Dinner in the Sky. This thrilling dining experience offers a bird's-eye view of the city while being served gourmet dishes by top chefs."
        },
        {
            title: "Ithaa Undersea Restaurant – Maldives",
            description: "Located beneath the ocean's surface, Ithaa offers diners a chance to enjoy a meal surrounded by vibrant marine life. As the world's first all-glass underwater restaurant."
        },
        {
            title: "El Celler de Can Roca – Girona, Spain",
            description: "For food connoisseurs, this Michelin-starred restaurant is a must-visit. Run by three brothers, El Celler de Can Roca offers avant-garde cuisine paired with a curated selection of wines."
        },
        {
            title: "The Rock Restaurant – Zanzibar, Tanzania",
            description: "Situated on a rock in the Indian Ocean, this picturesque restaurant offers a dining experience like no other. Accessible by boat, The Rock serves fresh seafood with panoramic ocean views, making it an unforgettable destination for romantic dinners."
        },
        {
            title: "Noma – Copenhagen, Denmark",
            description: "Frequently topping the lists of the world’s best restaurants, Noma offers a truly unique dining experience based on New Nordic cuisine. With seasonal menus that incorporate foraged ingredients, dining at Noma is both a culinary adventure and a celebration of Scandinavian heritage."
        },
        {
            title: "Supperclub – Amsterdam, Netherlands",
            description: 'Known for its "dinner-as-performance" concept, Supperclub offers a fusion of entertainment and gourmet food. Guests are invited to lie on beds or lounge on sofas as they enjoy multi-course meals, all while being immersed in live music, art, and performance.'
        },
        {
            title: "Mamma Rosa's Trattoria – Positano, Italy",
            description: "A charming cliffside restaurant overlooking the Amalfi Coast, Mamma Rosa's Trattoria offers delicious, authentic Italian cuisine in one of the most picturesque settings. Dining here feels like being part of a family, where homemade pasta and regional specialties steal the show.."
        },
        {
            title: "Helsinki's Löyly – Helsinki, Finland",
            description: "Combining sauna culture with dining, Löyly in Helsinki offers the unique opportunity to relax in a traditional Finnish sauna while enjoying a meal with a view of the Baltic Sea. The restaurant serves fresh, organic dishes, making it an ultimate experience of relaxation and culinary delight."
        },
        {
            title: "Le Jules Verne – Paris, France",
            description: "Located on the second floor of the Eiffel Tower, this Michelin-starred restaurant offers stunning views of Paris as you dine. With its elegant French cuisine, Le Jules Verne combines exquisite dining with the magic of one of the most iconic landmarks in the world."
        },
        {
            title: "Ristorante Grotta Palazzese – Polignano a Mare, Italy",
            description: "Situated inside a natural cave overlooking the Adriatic Sea, Grotta Palazzese offers a dramatic dining experience. Enjoy fine Mediterranean cuisine as the sound of crashing waves echoes beneath the cave’s vaulted ceiling."
        },
    ]
};

const BucketListPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'destinations' | 'dining'>('destinations');

    return (
        <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden py-12 px-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                    Bucket List
                </h1>

                <p className="text-sm  text-gray-700 font-bold text-center mx-auto mb-12">
                    At Travel Synergies, we're passionate about turning your travel dreams into unforgettable adventures. From marveling at iconic landmarks like the Eiffel Tower or the Great Wall of China to soaking in the natural wonders of the Amazon Rainforest or the Northern Lights, our curated bucket list showcases the best experiences the world has to offer.
                </p>

                <div className="flex justify-center mb-8">
                    <div className="bg-white shadow-md md:rounded-full">
                        <div className="flex flex-wrap justify-center sm:flex-nowrap">
                            <button
                                className={`px-10 py-3 m-1 sm:m-0 rounded-full transition-colors ${activeSection === 'destinations'
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-700'
                                    }`}
                                onClick={() => setActiveSection('destinations')}
                            >
                                Destinations
                            </button>
                            <button
                                className={`px-4 py-3 m-1 sm:m-0 rounded-full transition-colors ${activeSection === 'dining'
                                        ? 'bg-orange-500 text-white'
                                        : 'text-gray-700 '
                                    }`}
                                onClick={() => setActiveSection('dining')}
                            >
                                Dining Experiences
                            </button>
                        </div>
                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {bucketListData[activeSection].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-orange-500 mb-1">
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl text-gray-700 mb-6 font-bold">
                        Let's make your global travel bucket list a reality!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BucketListPage;