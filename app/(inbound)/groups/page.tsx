'use client'
import TestimonialCarousel from "@/components/Common/inbound/Groups/Testimonials"
import GroupImageCarousal from "@/components/Common/inbound/Groups/GroupImageCarousal"
import GroupsTabs from "@/components/Common/inbound/Groups/GroupsTabs"
import Herobanner from "@/components/Common/inbound/common/Herobanner"
import OtherNavigation from "@/components/Common/inbound/common/OtherNavigation"


const Groups = () => {
    const GroupHeroProps = {
        mainTitle: 'GROUPS',
        imageurl: '/inbound/Groups/main.webp',
        title: 'Crafting Unforgettable Group Travel Experiences: Our Commitment to Excellence',
        description: [
            "Travel Synergies specializes in creating exceptional group travel experiences, offering customized packages that guarantee magical, companionable, and educational experiences. We guarantee quality, love for exploration, and individuality, ensuring every aspect of your trip is exceptional. Explore the UAE’s enchanted locations."
        ],

    }
    return (
        <div className="container mx-auto px-2">
             <div className="sticky top-0 z-50 flex justify-center w-full  bg-black/50">
                <OtherNavigation />
            </div>
            <div className="pb-2">
                <Herobanner
                    mainTitle={GroupHeroProps.mainTitle}
                    imageUrl={GroupHeroProps.imageurl}
                    title={GroupHeroProps.title}
                    description={GroupHeroProps.description}
                    letTalkButton={true}
                />

            </div>
            <div className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">Our Expertise in Handling Leisure Groups</h2>
                <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
                    Our dedicated team brings a wealth of knowledge with hands-on experience to deliver tailored solutions, catering to specific requests and value additions that exceed expectations.
                </p>
            </div>

            <h1 className='  text-2xl md:text-3xl text-center font-bold  text-orange-500 '>Our Service Portfolio</h1>
                <GroupImageCarousal />
           

            <div className=' pt-10 w-[80%] mx-auto' >
                <h1 className='text-2xl md:text-3xl pb-5 text-center font-bold  text-orange-500'>The Ultimate Experience</h1>

                <p className="text-sm md:text-base pb-5 text-center font-bold  text-gray-300">
                    Discover the UAE like never before with our curated selection of unforgettable adventures. From thrilling desert safaris and serene hot air balloon rides to snow-filled fun at Ski Dubai and luxurious yacht cruises along stunning coastlines, there’s something for everyone. Immerse yourself in the country’s rich heritage through cultural visits or expand your knowledge with engaging educational programs. These ultimate experiences promise to captivate your senses and leave lasting memories.
                </p>

                <GroupsTabs />
            </div>

            <div className="pt-10 w-[80%] mx-auto">
                <TestimonialCarousel />
            </div>

        </div>
    )
}

export default Groups
