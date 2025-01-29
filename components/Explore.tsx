'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';
import WorkSliderButton from '@/components/WorkSliderButton';
import { CiLocationOn } from 'react-icons/ci';

type jurnels = {
    fName: string;
    lName: string;
    description: string;
    stack: {
        image: string;
        name: string;
        description: string;
        location?: string;
    }[];
    image: string;

}

const projects: jurnels[] = [
    {
        fName: 'Treasures',
        lName: 'Unveiled',
        description: 'Escape to idyllic tropical paradises where sun-kissed beaches, turquoise waters and lush greenery create the perfect setting for relaxation and rejuvenation. Whether it’s the Maldives, Sri Lanka or the Seychelles, indulge in luxury resorts, serene landscapes and unforgettable island vibes.',
        stack: [
            {
                image: '/outbound/treasures-unveiled/img1.webp',
                name: 'Maldives',
                description: 'A tropical haven of crystal-clear waters, overwater bungalows and pristine white-sand beaches, the Maldives promises serene luxury and unparalleled beach stays.',
                location: 'Maldives'
            },
            {
                image: '/outbound/treasures-unveiled/img2.webp',
                name: 'Hawaii',
                description: 'A blend of lush rainforests, dramatic volcanic landscapes and golden beaches, Hawaii is a vibrant paradise offering aloha spirit and breathtaking sunsets.',
                location: 'Hawaii'
            },
            {
                image: '/outbound/treasures-unveiled/img3.webp',
                name: 'Brazil',
                description: 'From the iconic beaches of Rio to the vast Amazon rainforest, Brazil dazzles with its natural beauty, vibrant culture and infectious samba rhythms that would lure any soul to move.',
                location: 'Brazil'
            },
            {
                image: '/outbound/treasures-unveiled/img4.webp',
                name: 'Cuba ',
                description: 'Step back in time to Havana, where colonial charm, vintage cars and a lively Caribbean vibe make it a unique tropical escape',
                location: 'Cuba'
            },
            {
                image: '/outbound/treasures-unveiled/img5.webp',
                name: 'Sri Lanka ',
                description: 'Known as the "Pearl of the Indian Ocean," Sri Lanka is a land of timeless charm and breathtaking beauty with lush tea plantations, incredible wildlife, golden beaches and rich cultural heritage, wrapped in warm hospitality. ',
                location: 'Sri Lanka'
            },
            {
                image: '/outbound/treasures-unveiled/img6.webp',
                name: 'Seychelles',
                description: 'A tropical paradise with stunning beaches, gorgeous landscapes, and abundant nature, Seychelles blends rich culture with lively nightlife, offering everything from serene nature to unforgettable beach parties.',
                location: 'Seychelles'
            },

        ],
        image: '/outbound/treasures-unveiled/main.webp',

    },
    {
        fName: 'Wildlife',
        lName: 'Safaris',
        description: 'Embark on thrilling wildlife safaris to witness majestic creatures in their natural habitats. From the Big Five in Africa to the tigers of India, these adventures offer close encounters with nature’s wonders, guided by expert naturalists for an unforgettable experience.',
        stack: [
            {
                image: '/outbound/wildlife-safaris/img1.webp',
                name: 'Masai Mara, Kenya',
                description: 'The Masai Mara is a world-renowned safari destination in Kenya, known for its Great Migration of wildebeest and zebras. It’s home to the Big Five and offers breathtaking savannah landscapes rich in wildlife and Maasai culture.',
            },
            {
                image: '/outbound/wildlife-safaris/img2.webp',
                name: 'Yala, Sri Lanka',
                description: 'Yala National Park is famed for its dense leopard population and diverse wildlife. Located in southeast Sri Lanka, it offers safari experiences across lush jungles, grasslands and lagoons, offering incredible sightings of elephants, crocodiles and birdlife.',
            },
            {
                image: '/outbound/wildlife-safaris/img3.webp',
                name: 'Kruger Park, South Africa',
                description: 'Kruger National Park is one of Africa’s largest game reserves, offering incredible biodiversity. Visitors can spot the Big Five and enjoy self-drive safaris or guided tours amidst stunning stunning wild landscape.',
            },
            {
                image: '/outbound/wildlife-safaris/img4.webp',
                name: 'Liwonde, Malawi',
                description: 'Liwonde National Park is a hidden gem in Malawi, known for its tranquil river safaris along the Shire River. It’s a sanctuary for elephants, hippos and an increasing number of rhinos and cheetahs.',
            },
            {
                image: '/outbound/wildlife-safaris/img5.webp',
                name: 'Tanjung Putting, Borneo',
                description: "Tanjung Puting is a tropical haven for orangutans in Borneo. Accessible via river cruises, it features dense rainforests, exotic wildlife, and conservation efforts focused on preserving these primates' natural habitat.",
            },
            {
                image: '/outbound/wildlife-safaris/img6.webp',
                name: 'Cabo San Lucas, Mexico',
                description: 'Cabo San Lucas is known for whale watching opportunities. From December to April, visitors can witness majestic humpback and gray whales migrating through its crystal clear waters, making it a paradise for marine wildlife enthusiasts.',
            },

        ],
        image: '/outbound/wildlife-safaris/main.webp',

    },
    {
        fName: 'City',
        lName: 'Breaks',
        description: 'Discover the charm of vibrant cities worldwide with quick getaways tailored to your preferences. Immerse yourself in cultural landmarks, buzzing nightlife and world-class dining, whether it’s New York, Paris, or Tokyo. Perfect for those seeking excitement and exploration.',
        stack: [
            {
                image: '/outbound/city-breaks/img1.webp',
                name: 'Singapore',
                description: 'A dynamic blend of modernity and tradition, Singapore offers stunning skyscrapers, lush gardens, world-class shopping and diverse cuisine in a vibrant cityscape.'
            },
            {
                image: '/outbound/city-breaks/img2.webp',
                name: 'Toronto',
                description: 'Canada’s cultural hub, Toronto boasts a mix of iconic landmarks like the CN Tower, bustling neighborhoods and a thriving arts and food scene.'
            },
            {
                image: '/outbound/city-breaks/img3.webp',
                name: 'London',
                description: 'London is a historic yet contemporary city, featuring iconic landmarks like Big Ben and the Tower of London, along with vibrant theaters, museums and diverse global cuisine. '
            },
            {
                image: '/outbound/city-breaks/img4.webp',
                name: 'New York',
                description: 'The city that never sleeps, New York dazzles with its towering skyline, popular attractions, diverse neighborhoods and vibrant atmosphere.'
            },
            {
                image: '/outbound/city-breaks/img5.webp',
                name: 'Moscow',
                description: 'A captivating mix of history and modernity, Moscow impresses with iconic sites like the Kremlin, Red Square along with its vibrant culture and culinary scene.'
            },
            {
                image: '/outbound/city-breaks/img6.webp',
                name: 'Rome',
                description: 'Rome, the Eternal city captivates visitors with its ancient landmarks, stunning art and romantic atmosphere offering a perfect blend of history and culture, along with the finest Italian cuisine.'
            },

        ],
        image: '/outbound/city-breaks/main.webp',

    },
    {
        fName: 'Cultural',
        lName: 'Immersions',
        description: 'Dive into the rich traditions and heritage of destinations around the globe. Explore ancient temples, vibrant festivals and local customs that provide an authentic glimpse into the heart of each destination. Travel with purpose and connect with the stories of the past and present.',
        stack: [
            {
                image: '/outbound/cultural-immersions/img1.webp',
                name: 'Sri Lanka',
                description: 'Dive into Sri Lanka’s rich heritage, from ancient temples and colonial fortresses to vibrant festivals and timeless tea plantations.'
            },
            {
                image: '/outbound/cultural-immersions/img2.webp',
                name: 'Mexico',
                description: 'Experience Mexico’s colorful culture through its lively mariachi music, historic ruins, spirited fiestas, and mouthwatering cuisine.'
            },
            {
                image: '/outbound/cultural-immersions/img3.webp',
                name: 'Sevilla',
                description: 'Feel the soul of Spain in Sevilla, where flamenco dancing, Moorish architecture, and passionate traditions bring Andalusian culture to life.'
            },
            {
                image: '/outbound/cultural-immersions/img4.webp',
                name: 'India',
                description: 'Immerse yourself in the abundance of culture in India, from bustling bazaars and majestic palaces to sacred rituals and timeless traditions.'
            },
            {
                image: '/outbound/cultural-immersions/img5.webp',
                name: 'Morocco',
                description: 'Step into Morocco’s vibrant culture with its bustling souks, intricate craftsmanship, aromatic spices, and mesmerizing blend of Berber, Arab, and European influences.'
            },
            {
                image: '/outbound/cultural-immersions/img6.webp',
                name: 'Japan',
                description: 'Discover Japan’s harmonious blend of tradition and modernity, from tranquil tea ceremonies and ancient temples to neon-lit cities and innovative art.'
            },

        ],
        image: '/outbound/cultural-immersions/main.webp',

    },
    {
        fName: 'Architectural',
        lName: 'Wonders',
        description: 'Marvel at the architecutal masterpiece of renowned structures by visiting iconic architectural masterpieces. From the Great wall of China to the world wonders of the Taj Mahal and the intricate details of Angkor Wat. Sites inspire awe and celebrate human creativity across eras.',
        stack: [
            {
                image: '/outbound/architectural-wonders/img1.webp',
                name: 'Great Wall of China',
                description: 'A marvel of ancient engineering, the Great Wall winds over 13,000 miles through majestic landscapes, standing as a symbol of China’s resilience and rich heritage.'
            },
            {
                image: '/outbound/architectural-wonders/img2.webp',
                name: 'Angkor Wat, Cambodia',
                description: ' The world’s largest religious monument, Angkor Wat is an awe-inspiring temple complex blending intricate design with spiritual significance.'
            },
            {
                image: '/outbound/architectural-wonders/img3.webp',
                name: 'Petra, Jordan',
                description: 'Known as the Rose City, Petra features stunning architecture and ancient ruins, carved into sandstone cliffs that is a marvel in the desert landscape.'
            },
            {
                image: '/outbound/architectural-wonders/img4.webp',
                name: 'Taj Mahal, India  ',
                description: 'A symbol of eternal love, the Taj Mahal is a stunning white marble mausoleum renowned for its fine craftmanship, breathtaking artistry and timeless beauty.'
            },
            {
                image: '/outbound/architectural-wonders/img5.webp',
                name: 'Barcelona, Spain ',
                description: 'Barcelona captivates with its architectural wonders, including Gaudí’s masterpieces like the Sagrada Família and the whimsical Park Güell.'
            },
            {
                image: '/outbound/architectural-wonders/img6.webp',
                name: 'Machu Picchu, Peru',
                description: 'Perched high in the Andes, Machu Picchu is a mystical Incan city known for its remarkable stone structures and breathtaking mountain views.'
            },

        ],
        image: '/outbound/architectural-wonders/main.webp',

    },
    {
        fName: 'Enthralling',
        lName: 'Adventures',
        description: 'Fuel your adrenaline with activities that take you beyond the ordinary. From bungee jumping in New Zealand to paragliding in Switzerland, these adventures are designed for thrill-seekers who crave excitement and unforgettable memories.',
        stack: [
            {
                image: '/outbound/enthralling-adventures/img1.webp',
                name: 'Hot air balooning in Cappadoccia ',
                description: 'Float above the mystic landscapes of Cappadocia, where fairy chimneys, ancient cave dwellings and vibrant valleys create a mesmerizing panorama.'
            },
            {
                image: '/outbound/enthralling-adventures/img2.webp',
                name: 'Temples in Egypt',
                description: 'Discover the grandeur of ancient Egypt as you explore iconic temples like Karnak, Luxor, and Abu Simbel, steeped in millennia-old history and mystique.'
            },
            {
                image: '/outbound/enthralling-adventures/img3.webp',
                name: 'Grand Canyons in USA ',
                description: 'Experience the breathtaking wonder of the Grand Canyon, where vast, rugged landscapes and crimson-hued cliffs inspire adventure at every turn.'
            },
            {
                image: '/outbound/enthralling-adventures/img4.webp',
                name: 'Paragliding in Swizerland',
                description: 'Soar over the Swiss Alps, gliding above lush valleys, pristine lakes, and snow-capped peaks for an unforgettable adrenaline rush and mesmerizing views.'
            },
            {
                image: '/outbound/enthralling-adventures/img5.webp',
                name: 'Canoeing in Canada',
                description: 'Paddle through Canada’s pristine wilderness, navigating serene lakes and winding rivers surrounded by towering pines and abundant wildlife.'
            },
            {
                image: '/outbound/enthralling-adventures/img6.webp',
                name: 'Castles in Germany ',
                description: 'Step into a fairy tale as you explore Germany’s majestic castles, steeped in history, romance and architectural splendor which takes you back in time. '
            },

        ],
        image: '/outbound/enthralling-adventures/main.webp',

    },
    {
        fName: 'Culinary',
        lName: 'Journeys',
        description: 'Savor the world’s finest cuisines with tours designed for food enthusiasts. Taste authentic dishes, explore bustling markets and learn from master chefs to experience the flavors that define each destination.',
        stack: [
            {
                image: '/outbound/culinary-journeys/img1.webp',
                name: 'Pasta – Italy',
                description: 'Dive into the heart of Italian cuisine with pasta, where each region offers unique shapes and sauces. From creamy carbonara in Rome to hearty Bolognese in Emilia-Romagna, every bite celebrates tradition and local flavors.'
            },
            {
                image: '/outbound/culinary-journeys/img2.webp',
                name: 'Paella – Spain',
                description: 'Taste the essence of Spanish culture with paella, a flavorful dish of saffron-infused rice, fresh seafood, tender meats, and vibrant vegetables, traditionally cooked over an open flame for a smoky depth.'
            },
            {
                image: '/outbound/culinary-journeys/img3.webp',
                name: 'Pol Roti – Sri Lanka',
                description: 'Discover the simplicity and charm of Sri Lanka’s pol roti, a coconut-infused flatbread that pairs perfectly with fiery sambols, fragrant curries, or just a smear of butter for a truly authentic experience.'
            },
            {
                image: '/outbound/culinary-journeys/img4.webp',
                name: 'Sushi – Japan',
                description: 'Immerse yourself in the elegance of Japanese sushi, where precision and artistry transform the freshest fish, vinegared rice and seaweed into a symphony of taste and texture that’s as pleasing to the eye as it is to the palate.'
            },
            {
                image: '/outbound/culinary-journeys/img5.webp',
                name: 'Mixed Grill – Lebanon',
                description: 'Savor Lebanon’s mixed grill, a mouthwatering assortment of skewered meats like juicy kebabs, tender lamb, and spiced chicken, complemented by fluffy pita, creamy hummus and garlic sauces.'
            },
            {
                image: '/outbound/culinary-journeys/img6.webp',
                name: 'Tacos – Mexico',
                description: 'Experience the vibrant flavors of Mexico with tacos, where soft or crispy tortillas cradle a variety of fillings from spicy marinated meats and fresh guacamole to tangy salsa and creamy cheese, for a fiesta in every bite.'
            },

        ],
        image: '/outbound/culinary-journeys/main.webp',

    },
    {
        fName: 'Romantic',
        lName: 'Escapes',
        description: 'Craft unforgettable moments with tailor-made romantic escapes. Whether it’s a candlelit dinner on a private beach or a hot air balloon ride over rolling vineyards, these trips are perfect for couples seeking connection and intimacy.',
        stack: [
            {
                image: '/outbound/romantic-escapes/img1.webp',
                name: 'Paris – France',
                description: 'The City of Love enchants couples with its charming streets, iconic landmarks like the Eiffel Tower and intimate candlelit bistros perfect for a romantic escape.'
            },
            {
                image: '/outbound/romantic-escapes/img2.webp',
                name: 'Santorini – Greece',
                description: 'With its whitewashed houses, azure-domed churches and breathtaking sunsets over the Aegean Sea, Santorini sets the stage for an idyllic getaway. '
            },
            {
                image: '/outbound/romantic-escapes/img3.webp',
                name: 'Phuket – Thailand ',
                description: 'This tropical paradise offers golden beaches, turquoise waters, and luxurious resorts where couples can relax, explore, and revel in the magic of island life.'
            },
            {
                image: '/outbound/romantic-escapes/img4.webp',
                name: 'Bali – Indonesia ',
                description: 'The Island waeves romance into its lush jungles, golden beaches and luxurious romantic retreats, which features infinity pools, tropical gardens and open-air designs, create an intimate haven for couples.'
            },
            {
                image: '/outbound/romantic-escapes/img5.webp',
                name: 'Venice – Italy ',
                description: 'Lose yourself in the timeless romance of Venice, where gondola rides through enchanting canals and charming piazzas evoke a fairy tale-like experience'
            },
            {
                image: '/outbound/romantic-escapes/img6.webp',
                name: 'Bentota – Sri Lanka ',
                description: 'Nestled along Sri Lanka’s golden coastline, Bentota is a serene escape offering tranquil beaches, romantic river cruises and enchanting sunsets.'
            },

        ],
        image: '/outbound/romantic-escapes/main.webp',

    },
    {
        fName: 'Spiritual',
        lName: 'Awakenings',
        description: 'A spiritual awakening is a profound journey of connection and inner peace. Sparked by sacred spaces like churches, mosques and temples inspire reflection and spiritual well-being. Rich with history and devotion, offer a tranquil escape from the modern rush.',
        stack: [
            {
                image: '/outbound/spiritual-awakenings/img1.webp',
                name: 'Vatican, Italy',
                description: 'The heart of Catholicism, Vatican City inspires with St. Peter’s Basilica, the Sistine Chapel, and a profound sense of faith and history.'
            },
            {
                image: '/outbound/spiritual-awakenings/img4.webp',
                name: 'Wat Chaiwatthanaram, Thailand',
                description: 'This stunning temple in Ayutthaya, Thailand, is a serene reminder of Buddhist teachings, with its intricate architecture and tranquil riverside setting.'
            },

            {
                image: '/outbound/spiritual-awakenings/img3.webp',
                name: 'Jerusalem, Israel',
                description: 'A spiritual crossroads for Islam, Christianity and Judaism, Jerusalem captivates with its sacred sites like the Western Wall, Church of the Holy Sepulchre and Dome of the Rock.'
            },
            {
                image: '/outbound/spiritual-awakenings/img2.webp',
                name: 'Erechtheion, Greece',
                description: 'This ancient temple on the Acropolis of Athens exudes sacred beauty, blending mythology and history in its iconic Caryatid porch.'
            },
            {
                image: '/outbound/spiritual-awakenings/img5.webp',
                name: 'Ulun Danu Beratan, Indonesia',
                description: 'Nestled on Bali’s Lake Beratan, this water temple radiates peace and harmony, offering spiritual solace amid misty mountain backdrops.'
            },
            {
                image: '/outbound/spiritual-awakenings/img6.webp',
                name: 'Blue Mosque, Turkey',
                description: 'An architectural marvel in Istanbul, the Blue Mosque mesmerizes with its grand domes, intricate tilework and the serene call to prayer echoing through its courtyards.'
            },

        ],
        image: '/outbound/spiritual-awakenings/main.webp',

    },
    {
        fName: 'Winter ',
        lName: 'Exitnment',
        description: 'Escape to idyllic tropical paradises where sun-kissed beaches, turquoise waters and lush greenery create the perfect setting for relaxation and rejuvenation. Whether it’s the Maldives, Sri Lanka or the Seychelles, indulge in luxury resorts, serene landscapes and unforgettable island vibes.',
        stack: [
            {
                image: '/outbound/treasures-unveiled/img1.webp',
                name: 'Maldives',
                description: 'A tropical haven of crystal-clear waters, overwater bungalows and pristine white-sand beaches, the Maldives promises serene luxury and unparalleled beach stays.',
                location: 'Maldives'
            },
            {
                image: '/outbound/treasures-unveiled/img2.webp',
                name: 'Hawaii',
                description: 'A blend of lush rainforests, dramatic volcanic landscapes and golden beaches, Hawaii is a vibrant paradise offering aloha spirit and breathtaking sunsets.',
                location: 'Hawaii'
            },
            {
                image: '/outbound/treasures-unveiled/img3.webp',
                name: 'Brazil',
                description: 'From the iconic beaches of Rio to the vast Amazon rainforest, Brazil dazzles with its natural beauty, vibrant culture and infectious samba rhythms that would lure any soul to move.',
                location: 'Brazil'
            },
            {
                image: '/outbound/treasures-unveiled/img4.webp',
                name: 'Cuba ',
                description: 'Step back in time to Havana, where colonial charm, vintage cars and a lively Caribbean vibe make it a unique tropical escape',
                location: 'Cuba'
            },
            {
                image: '/outbound/treasures-unveiled/img5.webp',
                name: 'Sri Lanka ',
                description: 'Known as the "Pearl of the Indian Ocean," Sri Lanka is a land of timeless charm and breathtaking beauty with lush tea plantations, incredible wildlife, golden beaches and rich cultural heritage, wrapped in warm hospitality. ',
                location: 'Sri Lanka'
            },
            {
                image: '/outbound/treasures-unveiled/img6.webp',
                name: 'Seychelles',
                description: 'A tropical paradise with stunning beaches, gorgeous landscapes, and abundant nature, Seychelles blends rich culture with lively nightlife, offering everything from serene nature to unforgettable beach parties.',
                location: 'Seychelles'
            },

        ],
        image: '/outbound/treasures-unveiled/main.webp',

    },
    {
        fName: 'Sports',
        lName: 'Unveiled',
        description: 'Escape to idyllic tropical paradises where sun-kissed beaches, turquoise waters and lush greenery create the perfect setting for relaxation and rejuvenation. Whether it’s the Maldives, Sri Lanka or the Seychelles, indulge in luxury resorts, serene landscapes and unforgettable island vibes.',
        stack: [
            {
                image: '/outbound/treasures-unveiled/img1.webp',
                name: 'Maldives',
                description: 'A tropical haven of crystal-clear waters, overwater bungalows and pristine white-sand beaches, the Maldives promises serene luxury and unparalleled beach stays.',
                location: 'Maldives'
            },
            {
                image: '/outbound/treasures-unveiled/img2.webp',
                name: 'Hawaii',
                description: 'A blend of lush rainforests, dramatic volcanic landscapes and golden beaches, Hawaii is a vibrant paradise offering aloha spirit and breathtaking sunsets.',
                location: 'Hawaii'
            },
            {
                image: '/outbound/treasures-unveiled/img3.webp',
                name: 'Brazil',
                description: 'From the iconic beaches of Rio to the vast Amazon rainforest, Brazil dazzles with its natural beauty, vibrant culture and infectious samba rhythms that would lure any soul to move.',
                location: 'Brazil'
            },
            {
                image: '/outbound/treasures-unveiled/img4.webp',
                name: 'Cuba ',
                description: 'Step back in time to Havana, where colonial charm, vintage cars and a lively Caribbean vibe make it a unique tropical escape',
                location: 'Cuba'
            },
            {
                image: '/outbound/treasures-unveiled/img5.webp',
                name: 'Sri Lanka ',
                description: 'Known as the "Pearl of the Indian Ocean," Sri Lanka is a land of timeless charm and breathtaking beauty with lush tea plantations, incredible wildlife, golden beaches and rich cultural heritage, wrapped in warm hospitality. ',
                location: 'Sri Lanka'
            },
            {
                image: '/outbound/treasures-unveiled/img6.webp',
                name: 'Seychelles',
                description: 'A tropical paradise with stunning beaches, gorgeous landscapes, and abundant nature, Seychelles blends rich culture with lively nightlife, offering everything from serene nature to unforgettable beach parties.',
                location: 'Seychelles'
            },

        ],
        image: '/outbound/treasures-unveiled/main.webp',

    },

]





const Explore = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: any) => {
        const realIndex = swiper.realIndex; // Use realIndex for proper looping
        setProject(projects[realIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.2,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className="min-h-[80vh] w-full py-12"
        >
            <div className="container mx-auto px-4 xl:px-0">
                <div className="flex flex-col xl:flex-row xl:gap-6">
                    {/* Left Column - Main Image and Title */}
                    <div className="w-full xl:w-1/3">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="mb-8 xl:mb-0"
                            onSlideChange={handleSlideChange}
                            loop={true}
                            autoplay={{
                                delay: 6000,  // 6 seconds delay
                                disableOnInteraction: false,  // Allow autoplay to continue after user interaction
                            }}

                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={`slide-${index}`}>
                                    <div className="sticky top-0 xl:relative">
                                        <div className="grid grid-cols-1 gap-1 items-center">
                                            {/* Title and Description Section */}
                                            <div className="space-y-6 xl:order-1">
                                                <div className="text-center xl:text-start flex flex-col  justify-center  ">
                                                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white pt-9">
                                                        {project.fName}{' '}
                                                        <span className="text-orange-500">{project.lName}</span>
                                                    </h1>
                                                    {/* Fixed Height Container for Description */}
                                                    <div className="h-[140px] overflow-hidden">
                                                        <p className="text-gray-400 max-w-2xl xl:max-w-none mx-auto xl:mx-0">
                                                            {project.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Image Section */}
                                            <div className="xl:order-2">
                                                <div className="relative h-[420px] md:h-[540px] xl:h-[600px] w-full rounded-lg overflow-hidden">
                                                    <div className="absolute inset-0 bg-black/10 z-10" />
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-fill"
                                                        alt={`${project.fName} ${project.lName}`}
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Slider Navigation */}
                            <WorkSliderButton
                                containerStyle="flex gap-2 absolute right-0 bottom-[calc(35%_-_22px)] md:bottom-[calc(35%_-_22px)] z-20 w-full justify-between px-2"
                                btnStyle="bg-orange-500 hover:bg-orange-500/90 text-white text-[40px] w-[40px] flex justify-center item-center transition-all rounded-full"
                                iconsStyle="w-6 h-6"
                            />
                        </Swiper>
                    </div>


                    {/* Right Column - Stack Cards */}
                    <div className="w-full xl:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-3  xl:mt-0">
                            {project.stack.map((item, index) => (
                                <article
                                key={index}
                                className="group relative isolate flex flex-col justify-end overflow-hidden pb-6 pt-40 w-[260px] h-[360px] md:w-[230px] lg:h-[340px] xl:w-[260px] xl:h-[370px] mx-auto mt-12 rounded-sm hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                            >
                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    fill
                                    alt={item.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 w-full h-[40%] group-hover:bg-black/50 transition-all duration-500 ease-in-out group-hover:h-[60%]"></div>
                                {/* Text Content */}
                                <div className="z-10 relative px-4 flex flex-col h-full justify-end ">
                                    {/* Title (Name at the very bottom) */}
                                    <div className="flex gap-[1px]">
                                        <div className="text-lg font-extrabold text-orange-500 m-[3px]">
                                            <CiLocationOn />
                                        </div>
                                        <h3 className="text-[15px] font-extrabold text-orange-500 mb-2 transition-opacity duration-300 ease-in-out group-hover:opacity-90 opacity-90">
                                            {item.name}
                                        </h3>
                                    </div>
                                    {/* Description (Hover animation only for description) */}
                                    <p
                                        className="text-xs leading-5 text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[11em] group-hover:mt-2 transition-[opacity,max-height,margin-top] duration-500 ease-in-out"
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                            


                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Explore
