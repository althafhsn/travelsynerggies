import React from 'react';
import InboundImageCards from '../../common/InboundImageCards';

const Ajman = () => {
    const Ajman = [
        {
            title: 'Al Zorah Golf Course',
            designedBy: 'Nicklaus Design',
            openedIn: '2015.',
            description: [
                "It’s an 18-hole, Par 72 course measuring 7169 yards in total with 4 tee options. It features 2 lakes and 88 bunkers. Set within a stunning natural environment, with flowing dunes and an in-land Mangrove area, the highly desirable location will provide golfers with a unique experience as water levels shift with the tides throughout the day."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/ajman/ajman-zohra-golf-club.webp',
            facilitiesOnSiteArea: [
                '2 Restaurants',
                'Dubai Creek Academy and Par 3 course',
                'Golf Shop'
            ]
        }
    ];

    return (
        <div className="w-full">
            <div 
                className={`grid w-[80%] mx-auto gap-y-5 
                ${Ajman.length === 1 ? 'grid-cols-1 place-items-center' : 'sm:grid-cols-2 md:grid-cols-3'}`}
            >
                {Ajman.map((card, index) => (
                    <div className={`${Ajman.length === 1 ? 'max-w-md w-full' : 'w-full'}`}>
                        <InboundImageCards
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            designedBy={card.designedBy}
                            openedIn={card.openedIn}
                            description={card.description}
                            facilitiesOnSiteArea={card.facilitiesOnSiteArea}
                            facilitiesTitle="Facilities on site are:"
                            index={index}
                            bookNow={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ajman;
