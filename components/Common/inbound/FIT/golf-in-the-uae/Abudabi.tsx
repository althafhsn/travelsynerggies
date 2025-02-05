'use client';
import React from 'react'
import InboundImageCards from '../../common/InboundImageCards'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



const Abudabi = () => {

    const abuDabi = [
        {
            title: 'Abu Dhabi Golf course',
            designedBy: 'Peter Harradine',
            openedIn: '2000.',
            description: [
                'Total of 27 holes comprising of 02 courses.',
                'The National course. It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press. Host for HSBC European Tournament for past 14 yrs.',
                'The Garden course & night golf. The 3,299-yard, par-36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'

            ],
            imageUrl: "/inbound/FIT/bucket-list/golfing/abu-dhabi/abu-dhabi-golf-course.webp",
            facilitiesOnSiteArea: [
                'Restaurant, Pool bar & Café lounge',
                'Golf Academy',
                'Golf Shop'
            ]

        },
        {
            title: 'Abu Dhabi Golf course',
            designedBy: 'Peter Harradine',
            openedIn: '2000.',
            description: [
                'Total of 27 holes comprising of 02 courses.',
                'The National course. It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press. Host for HSBC European Tournament for past 14 yrs.',
                'The Garden course & night golf. The 3,299-yard, par-36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'

            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/abu-dhabi/saadiyat-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant, Pool bar & Café lounge',
                'Golf Academy',
                'Golf Shop'
            ]

        },
        {
            title: 'Abu Dhabi Golf course',
            designedBy: 'Peter Harradine',
            openedIn: '2000.',
            description: [
                'Total of 27 holes comprising of 02 courses.',
                'The National course. It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press. Host for HSBC European Tournament for past 14 yrs.',
                'The Garden course & night golf. The 3,299-yard, par-36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'

            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/abu-dhabi/yas-links-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant, Pool bar & Café lounge',
                'Golf Academy',
                'Golf Shop'
            ]

        },
    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {abuDabi.map((card, index) => (
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

export default Abudabi
