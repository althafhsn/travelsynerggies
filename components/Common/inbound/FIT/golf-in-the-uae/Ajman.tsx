import React from 'react'
import InboundImageCards from '../../common/InboundImageCards'



const Ajman = () => {

    const Ajman = [
        {
            title: 'Al Zorah Golf Course',
            designedBy: 'Nicklaus Design',
            openedIn: '2015.',
            description: [
                "It’s a 18 holes, Par 72 and measures 7169 yards in total with 04 tee options. It features 02 lakes and 88 bunkers. Set within a stunning natural environment, with flowing dunes and an in-land Mangrove area, the highly desirable location will provide golfers with a unique golf experience with water levels shifting with the tides throughout the day."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/ajman/ajman-zohra-golf-club.webp',
            facilitiesOnSiteArea: [
                '2 Restaurants',
                'Dubai Creek Academy and Par 3 course',
                'Golf Shop'
            ]
        },


    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {Ajman.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        designedBy={card.designedBy}
                        openedIn={card.openedIn}
                        description={card.description}
                        facilitiesOnSiteArea={card.facilitiesOnSiteArea}
                         facilitiesTitle='Facilities on site are:'
                        index={index}
                        bookNow={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default Ajman
