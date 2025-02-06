'use client'
import InboundImageCards from '../../common/InboundImageCards'



const Dubai = () => {

    const dubai = [
        {
            title: 'Dubai Creek Golf Course',
            designedBy: 'Karl Litten & Thomas Bjorn',
            openedIn: '1993',
            description: [
                "The 18 holes par 71 course that measures 6,857 yards is a memorable journey from the first tee to the 18th green. Apart from the Creek, which comes into play on at least four holes, several artificial lakes add to the beauty and difficulty of various other holes."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/dubai-creek-golf-club.webp',
            facilitiesOnSiteArea: [
                'Restaurants & Bar',
                'Dubai Creek Academy and Par 3 course',
                'Golf Shop'
            ]
        },
        {
            title: 'Emirates Majlis Golf course',
            designedBy: 'Karl Litten',
            openedIn: '1988',
            description: [
               "The 18 holes par 72 course that measures 7,301 yards is a magnificent course which is in every golfers must play list of courses. The first grass course in the Middle East. Ranks amongst the Top 100 golf courses in the world.",
               "The magnificent Majlis course plays host to the region’s oldest and most prestigious event, the Omega Dubai Desert Classic and Omega Dubai Ladies Master."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/emirates-majlis-golf-club.webp',
            facilitiesOnSiteArea: [
                'Restaurants together with Faldo club',
                'Dubai Golf Academy and Par 3 Academy course',
                'Golf Shop'
            ]
        },
        {
            title: 'Emirates Faldo Golf course',
            designedBy: 'Sir Nick Faldo',
            openedIn: '1996 as “The Wadi”',
            description: [
                "After being redesigned by Sir Nick Faldo in 2005, it was reopened in 2006. It’s a 18 holes Par 72 course that measures 7052 yard. The only floodlit 18-hole layout in Dubai, night golf here provides an unmissable experience. And is an essential part of the Dubai Golf experience."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/emirates-faldo-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurants together with Faldo club',
                'Dubai Golf Academy and Par 3 Academy course',
                'Golf Shop'
            ]
        },
        {
            title: 'The Montgomerie Golf Course',
            designedBy: 'Colin Montgomerie',
            openedIn: '2002',
            description: [
                "The course provides the player with undulating 'links land' style fairways with generous landing areas which challenge and intrigue all levels of player.",
                "Although large in size, the greens can be very misleading, especially as they are consistently rolling above 9.5feet. Plenty of shape throughout the greens can result in some very trying putts."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/montgomerie-golf -course.webp',
            facilitiesOnSiteArea: [
                'Restaurants and Cigar lounge & Bar',
                ' Par 3 Academy course',
                'Golf Shop'
            ]
        },
        {
            title: 'Arabian Ranches Golf course',
            designedBy: 'Ian Baker-Finch & Nicklaus Design',
            openedIn: '2004',
            description: [
                "The 18 holes par 71 course that measures 6,857 yards is a memorable journey from the first tee to the 18th green. Apart from the Creek, which comes into play on at least four holes, several artificial lakes add to the beauty and difficulty of various other holes."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/arabian-ranches-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurants',
                ' Academy',
                'Golf Shop'
            ]
        },
        {
            title: 'The Els Golf Course',
            designedBy: 'Ernie Els',
            openedIn: '2008',
            description: [
                "It’s a 18 holes Par 72 course that measures 7538 yard. Set on undulating slopes of native desert vegetation, it is a links style layout combining traditional classic design. The Els Club has among the best greens in Dubai."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/the-els-golf-cource.webp',
            facilitiesOnSiteArea: [
                'Restaurants',
                'Academy',
                'Golf Shop'
            ]
        },
        {
            title: 'Jumairah Earth Golf Course',
            designedBy: 'Greg Norman',
            openedIn: '2009',
            description: [
                "It’s a 18 holes Par 72 course that measures 7706 yard. It’s a sharply defined, sculptured course inspired by the great parklands of Europe and North America. The magnificent Earth course began life as the host venue for the DP World Tour Championship in 2009.",
                "Since then it has been the host venue for European Tour’s Race To Dubai every November. Along with Emirates Majlis course, Earth course has become must play for any golfer travelling to The UAE."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/jumeirah-jarth-golf-course .webp',
            facilitiesOnSiteArea: [
                'Restaurant, Sports Bar and Café',
                'European Tour Performance Institute with world class training facility',
                'Golf Shop'
            ]
        },
        {
            title: 'Jumairah Fire Golf Course',
            designedBy: 'Greg Norman',
            openedIn: '2009',
            description: [
                " It’s a 18 holes Par 72 course that measures 7706 yard. Fire course, Framed by a wide variety of captivating flora, carefully selected to reflect the overall theme and to enhance its natural setting, Fire is in complete harmony with its natural desert surroundings. With the undulating topography and stunning natural features, each tee has a unique perspective, increasing both interest and challenge. Tee placements offer variety, with length, direction and elevation constantly changing throughout the course."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/jumeirah-fire-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant, Sports Bar and Café',
                'European Tour Performance Institute with world class training facility',
                'Golf Shop'
            ]
        },
        {
            title: 'Trump International Golf Course',
            designedBy: 'Gil Hanse',
            openedIn: '2017',
            description: [
                "It’s a 18 holes Par 71 course that measures 7300 yard. The Trump may be Dubai’s newest course, but it plays like a throwback. Exhibiting many of the traits of a new revolution in golf course design that has dialled back on difficulty, Hanse has focused on playability and fun. He’s also designed a layout that caters for walkers, with each hole flowing into the next."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/trump-international-golf-course.webp',
            facilitiesOnSiteArea: [
                'Restaurant, Sports Bar and Café',
                'Trump Golf Dubai Academy',
                'Golf Shop',
                'Tennis Academy'
            ]
        },
        {
            title: 'Dubai Hills Golf Course',
            designedBy: 'European Golf Design',
            openedIn: '2018',
            description: [
                "OIt’s a 18-holes, Par 72 course and measures 7283 yards. It’s has been nominated as best. Carved out of sandy desert, it is designed for all level of golfers. It is set against the striking Downtown Dubai skyline giving the golf courses a stunning backdrop of Burj Khalifa."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/dubai-hills.webp',
            facilitiesOnSiteArea: [
                'Practice Facility',
                '09 hole Par 3 course',
                'Golf Shop'
            ]
        },
        {
            title: 'Jebel Ali Golf Course',
            designedBy: 'Peter Harradine',
            openedIn: '1998',
            description: [
                "It’s a , the 9-hole, Par 35 and is spread over 50 acers of land. Each hole is uniquely landscaped with exotic trees, shrubs and original desert flora and the course also features a saltwater lake which comes into play on five holes. The wooden gazebos, views of the Arabian Gulf and peacocks which freely roam the fairways have added a special charm to this course that is a fair and exciting challenge for golfers of all abilities."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/jebel-ali.webp',
            facilitiesOnSiteArea: [
                'PGA Professional Instructors in the Golf Academy',
                'Restaurants',
                'Golf Shop'
            ]
        },
        {
            title: 'The Track Meydan Golf Course',
            designedBy: 'Peter Harradine',
            openedIn: '2012',
            description: [
                "It’s a , the 9-hole, Par 36 and measures 3600 yards in total with 05 tee options. It’s 02nd Best Golf course in Dubai. All 09 holes are floodlit. Night Golf is available until 23:00 hrs. Peter Harradine strategically placed each hole allowing the six natural lakes on the course to come into play on several approaches."
            ],
            imageUrl: '/inbound/FIT/bucket-list/golfing/dubai/the-track-meydan.webp',
            facilitiesOnSiteArea: [
                'Golf Academy',
                'Restaurants',
                'Golf Shop'
            ]
        },

    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {dubai.map((card, index) => (
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

export default Dubai
