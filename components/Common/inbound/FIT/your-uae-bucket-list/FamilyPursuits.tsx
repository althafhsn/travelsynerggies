import InboundImageCards from "../../common/InboundImageCards"




const FamilyPursuits = () => {

    const FamilyPursuits = [
        {
            title: 'Aquaventure ',
            description: [
                'Discover a floral wonderland in the world’s largest natural flower garden at Dubai Miracle Garden, which is home to over 150 million blooming flowers arranged in stunning designs. With a variety of new and exciting attractions and activities each season, this vibrant oasis is an attraction for nature lovers and photographers.',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/family-pursuits/aquaventure-waterpark.webp"
        },
        {
            title: 'Miracle Garden',
            description: [
                'Plunge into adventure at Aquaventure Waterpark, the largest waterpark in the world and home to record-breaking slides and unique marine encounters, including shark-filled lagoons. Located at the Atlantis The Palm, it is a paradise for water lovers.',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/family-pursuits/miracle-garden.webp"
        },
        {
            title: 'Ferrari World',
            description: [
                "Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions, this is the ultimate destination for non-stop, hyper-adrenaline, heart-racing fun!",
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/family-pursuits/ferrari-park.jpg'
        },
        {
            title: 'Lego Land',
            description: [
                "Let imagination take flight at LEGOLAND Dubai, designed for families with kids aged 2-12. Enjoy interactive rides, LEGO-themed zones and water attractions, perfect for creating unforgettable memories."
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/family-pursuits/lego-land-dubai.webp'
        },
        {
            title: 'AYA Universe',
            description: [
                "Step into the future at AYA Universe, a digital wonderland blending immersive visuals, soundscapes and interactive exhibits. This cutting-edge experience is a journey through light, art and technology.",
              
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/family-pursuits/aya-universe.webp'
        },
        {
            title: 'Dubai Frame',
            description: [
                "The Dubai Frame is an iconic landmark that offers stunning panoramic views of both old and new Dubai. Standing 150 meters tall, this architectural marvel serves as a bridge between the city's past and future, providing visitors with a unique perspective and amazing photo opportunities.                ",
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/family-pursuits/dubai-frame.webp"
        },

    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {FamilyPursuits.map((card, index) => (
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

export default FamilyPursuits
