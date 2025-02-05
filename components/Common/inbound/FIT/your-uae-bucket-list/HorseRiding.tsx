import InboundImageCards from "../../common/InboundImageCards"




const HorseRiding = () => {

    const HorseRiding = [

        {
            title: 'Luxurious Riding Clubs',
            description: [
                'Dubai is home to some of the most prestigious riding clubs in the world, offering unrivaled amenities and services. From private lessons with expert instructors to guided desert treks, these clubs cater to riders of all levels, ensuring an unforgettable experience.',
                'The Dubai Polo & Equestrian Club, Al Habtoor Riding School, and Al Jumooh Equestrian Club are among the most renowned establishments, where riders can indulge in the finest equestrian pursuits amidst lavish surroundings.'

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/dubai-world-cup.webp',


        },
        {
            title: 'The Dubai Polo & Equestrian Club',
            description: [
                'The Dubai Polo & Equestrian Club, established in 2006, is a prestigious residential development in Dubai, UAE, known for its world-class equestrian facilities, polo matches, and luxurious amenities, making it a top destination for horse enthusiasts and high-quality lifestyle experiences.'

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/dubai-polo-and-equestrian-club.webp',
            facilitiesOnSiteArea: [
                'Equestrian Facilities',
                'Polo Matches',
                'Training and Lessons',
                'Residential Community',
                'Dining and Leisure'
            ],
            facilitiesTitle: 'Key Features'

        },
        {
            title: 'The Al Habtoor Polo Resort & Club Complex',
            description: [
                "The Al Habtoor Polo Resort & Club Complex in Dubai, UAE, is a prestigious equestrian and leisure destination offering world-class facilities for polo enthusiasts, athletes, and leisure seekers. It features the Al Habtoor Riding School, a prominent equestrian facility."

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/mandara-equestrian-club.webp',
            facilitiesOnSiteArea: [
                'Polo Facilities',
                'Polo Academy',
                'Events and Activities',
                'Dining and Entertainment',
                'Resort Accommodations',
                "Equestrian Center"
            ],
            facilitiesTitle: 'Key Features'

        },
        {
            title: 'The Al Jumooh Equestrian Club',
            description: [
                "The Al Jumooh Equestrian Club in Dubai, UAE, is a top-tier facility designed by experienced horse riders, offering comprehensive services, diverse amenities, and a variety of equestrian activities for all levels of enthusiasts."

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/al-jumooh-equestrian-club.webp',
            facilitiesOnSiteArea: [
                'Horse riding lessons for all experience levels',
                'Endurance riding training',
                'Livery',
                'Farrier',
                'Horse Carriage',
                'Breaking Horses',
                'Horse Carriage and Events'
            ],
            facilitiesTitle: 'Key Activities:'

        },
        {
            title: 'Al Jiyad Stables',
            description: [
                "Al Jiyad Stabel, a sanctuary for horse riding enthusiasts, upholds UAE's rich equestrian heritage. Established for decades, it provides exceptional care, training, and facilities for horses and riders."

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/al-jiyad-stables.webp',
            facilitiesOnSiteArea: [
                'Spacious stables',
                'Expertly maintained arenas to lush paddocks',
                'Scenic riding trails',
                'Leisurely trail rides through the scenic desert',
                'Jumping competitions in the arena'
            ],
            facilitiesTitle: 'Key Features'

        },
        {
            title: 'Stables of Meydan',
            description: [
                " Meydan Stables, a state-of-the-art facility in Maydan, showcases the city's love for horses and equestrianism heritage. With lush paddocks, modern stables, and meticulously maintained arenas, it attracts elite race horses and tire trainers. ",

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/horse-riding/stables-at-meydan.webp',
            facilitiesOnSiteArea: [
                'Climate-controlled stables equipped with modern amenities',
                'State-of-the-art training tracks and arenas',
                'Tailored facilities to ensure the health, comfort and performance of its residential horses',
            ],
            facilitiesTitle: 'Key Facilities:'

        },

    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {HorseRiding.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        index={index}
                        bookNow={true}
                        booknowDescription={card.booknowDescription}
                        facilitiesOnSiteArea={card.facilitiesOnSiteArea}
                        facilitiesTitle={card.facilitiesTitle}
                    />
                ))}
            </div>
        </div>
    )
}

export default HorseRiding
