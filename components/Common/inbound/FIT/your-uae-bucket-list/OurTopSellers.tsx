import InboundImageCards from "../../common/InboundImageCards"




const OurTopSellers = () => {

    const OurTopSeller = [
        {
            title: 'Dubai Highlights Tour',
            description: [
                'Experience the best of the best of what Dubai has to offer! Embark on this awe-inspiring Dubai city tour, taking you to the most historic landmarks from Dubai’s past and the world-famous attractions of modern Dubai. The Highlights of Dubai tour is an ideal way to experience the best of Dubai’s past, present and future!',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/our-top-sellers/dubai-highlights-tour.webp"
        },
        {
            title: 'Dubai Marina Dhow Cruise',
            description: [
                'Step aboard an traditional and captivating Dhow (wooden boat). Simply a must-do tour during your trip to Dubai. Immerse yourself in Arabian splendor aboard this majestic vessel that sails through the ultra-modern waterfront district of Dubai Marina, where tradition meets modernity! A voyage through some of the best architectural marvels of Dubai that includes a buffet dinner and onboard entertainment. Join us on this unforgettable journey as we navigate the tranquil waters, while you savor a sumptuous dining experience.',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/dhow-cruise.webp'
        },
        {
            title: 'Sailing in Luxury',
            description: [
                'From intime voyages to grand sea adventures, we understand the intricacies and organization to craft an unforgettable experience. From romantic sunsets, thrilling water sports and intimate onboard dinners, we craft your journey according to your unique desires. Revel in moments of laughter and relaxation that last a lifetime. We offer you a slice of paradise on the oceans.',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/luxury-sailing.webp'
        },
        {
            title: 'Sunset Safari with BBQ Dinner',
            description: [
                "Our Evening Desert Safari in Dubai is the best way to experience what the Dubai desert has to offer. You'll have a opportunity to ride in a 4WD with one our experienced Desert experts over the endless sand dunes, enjoy a delicious barbecue dinner under the stars and immerse yourself in incredible traditional local entertainment.",
              
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/sunset-safari.webp'
        },
        {
            title: 'Abu Dhabi City tour',
            description: [
                'A fascinating journey through the capital city of the United Arab Emirates. This tour allows you to explore the unique blend of modernity and tradition, which is home to some of the world’s most iconic architectural wonders. During this trip, you will visit some of the most popular attractions. Explore the cultural heritage of the country in the city, which has presented the precedent of great craftsmanship. ',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/our-top-sellers/abu-dhabi-city-tour.webp"
        },
        {
            title: 'Helicopter Ride',
            description: [
                'Treat your loved ones to a once in a lifetime experience with a unique Helicopter flight experience ranging from 15 – 45 mins. Create memories and enjoy sites by sweeping above the Arabian Gulf and drink in the views !                ',
             
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/helicopter-ride.webp'
        },
        {
            title: 'Louvre Abu Dhabi',
            description: [
                'Discover the world’s cultural treasures at the iconic Louvre Abu Dhabi. This architectural masterpiece blends art, history and heritage, featuring timeless collections from across the globe.                ',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/louvre-abu-dhabi.webp'
        }, {
            title: 'Museum of the Future',
            description: [
                'Step into tomorrow at the Museum of the Future, a stunning architectural marvel in Dubai. This innovative museum showcases groundbreaking technologies, immersive experiences and visionary ideas that shape the future.                 ',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/future-museum.webp'
        },
        {
            title: 'At the top Burj Khalifa',
            description: [
                "Push the limits with this combo! This is your chance to explore cloud nine from the top of the world's tallest building, before heading to the 53rd floor of Address Sky View to enjoy a different angle of the ever-growing Dubai skyline. This is the perfect combination to make the most of Dubai skyscrapers.",
                "Choose if you'd like to visit during prime or non-prime hours, and get ready to experience new heights.            ",

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/our-top-sellers/at-the-top-burj-khalifa.webp'
        },

    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {OurTopSeller.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        index={index}
                        bookNow={true}
                        booknowDescription={card.booknowDescription}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurTopSellers
