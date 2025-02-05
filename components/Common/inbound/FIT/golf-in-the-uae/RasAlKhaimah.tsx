'use client';
import React from 'react'
import InboundImageCards from '../../common/InboundImageCards'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



const RasAlKhaimah = () => {

    const RasAlKhaimah = [
        {
            title: 'Abu Dhabi Golf course',
            designedBy: 'Peter Harradine',
            openedIn: '2000.',
            description: [
                'Total of 27 holes comprising of 02 courses.',
                'The National course. It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press. Host for HSBC European Tournament for past 14 yrs.',
                'The Garden course & night golf. The 3,299-yard, par-36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'

            ],
            imageUrl: "/inbound/FIT/bucket-list/golfing/ras-al-khaimah/al-hamra-golf-club.webp",
            facilitiesOnSiteArea: [
                'Restaurant, Pool bar & Café lounge',
                'Golf Academy',
                'Golf Shop'
            ]

        },

        {
            title: '',
            description: [


            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/ras-al-khaimah/golf.webp',
            facilitiesOnSiteArea: [

            ]

        },
        {
            title: 'Tower Links Golf Course',
            designedBy: 'Gerald Williams',
            openedIn: '2004.',
            description: [
                "It’s a 18 holes, Par 72 and measures 7199 yards in total with 04 tee options. With as many as 11 out of the 18 holes meandering around a mangrove reserve which provides a natural and safe habitat to many aquatic and bird species. As well as the beauty of the mangrove reserve, the course is also framed by the magnificent Hajar mountain range."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/ras-al-khaimah/tower-links-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant',
                'Golf Academy',
                'Golf Shop',
                'Spa'
            ]

        },
    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {RasAlKhaimah.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        openedIn={card.openedIn}

                        title={card.title}
                        description={card.description}
                        designedBy={card.designedBy}
                        facilitiesOnSiteArea={card.facilitiesOnSiteArea}
                        index={index}
                        bookNow={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default RasAlKhaimah
