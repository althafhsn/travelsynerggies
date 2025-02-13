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
            title: 'Saadiyat Beach Golf course',
            designedBy: '2010',
            openedIn: '2000.',
            description: [
                'It’s a 18 holes, Par 72 and measures 7806 yards.',
                'The course has been designed with sensitivity to the surrounding natural environment and in compliance with strict environmental guidelines.',
                'The course allows golfers to experience the unique addition of local wildlife of the area, including strolling mountain gazelles, dolphins and the protected hawksbill turtles.',
                'Home to the first Ladies European Tour event to be held in Abu Dhabi, the Fatima bint Mubarak Ladies Open, voted ‘Best Course in the UAE’ in 2015’s World Golf Awards, Saadiyat Beach is recognised globally as a world class golfing destination.'

            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/abu-dhabi/saadiyat-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant',
                'Golf Shop'
            ]

        },
        {
            title: 'Yas Links Golf Course',
            designedBy: 'Kyle Phillips',
            openedIn: '2010.',
            description: [
                'It’s a 18 holes, Par 72 and measures 7450 yards.',
                'It has got a par 3 academy course. Yas Links Abu Dhabi, a first in the Middle East - where noble heritage combines with impressive surroundings to enrich both your game and your senses in a truly unique environment.',
            

            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/abu-dhabi/yas-links-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant',
                'Golf Shop',
                'Yas Hotel Abu Dhabi ,Crowne Plaza Yas Island, Radisson Blu Yas Island and Yas Island Rotana.'
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
