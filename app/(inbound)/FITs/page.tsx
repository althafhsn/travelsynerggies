'use client'
import FITImageCarousal from "@/components/Common/inbound/FIT/FITImageCarousal"
import FITTabs from "@/components/Common/inbound/FIT/FITTabs"
import TestimonialCarousel from "@/components/Common/inbound/FIT/Testimonials"
import Herobanner from "@/components/Common/inbound/common/Herobanner"
import OtherNavigation from "@/components/Common/inbound/common/OtherNavigation"




const FIT = () => {
    const FITHeroProps = {
        mainTitle: 'FIT',
        imageurl: '/inbound/FIT/main.webp',
        title: 'Elevating Travel Experiences',
        description: [
            'When it comes to creating custom travel experiences, Travel Synergies is the industry leader in creating spectacular vacations that take into consideration your unique likes and interests. We are your DMC and we take pride in serving the best holiday experiences whether it be a leisure individual travel or a group. We provide FIT (Free Independent Travel) choices that enable you to design the vacation of your dreams with the highest degree of freedom and customization.',
            'Our Team of professional Travel Designers endeavor to create the best holiday experience and memories of a lifetime.'
        ],

    }

    return (
        <div className='container mx-auto px-2'>
            <div className="sticky top-5 z-50 flex justify-center w-full pr-4">
                <OtherNavigation />
            </div>


            <div className='pb-2'>

                <Herobanner
                    mainTitle={FITHeroProps.mainTitle}
                    imageUrl={FITHeroProps.imageurl}
                    title={FITHeroProps.title}
                    description={FITHeroProps.description}
                    letTalkButton={true}
                />
            </div>
            <div className="bg-black text-white py-12 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">We are Experts in Handling Individual Travelers ( FIT’s )</h2>
                <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
                    Our dedicated team is passionate about travel and brings a deep understanding of the UAE and its unique offerings.
                </p>
            </div>



                <h1 className='  text-2xl md:text-3xl text-center font-bold  text-orange-500 '>Our Service Portfolio</h1>
                <FITImageCarousal />
           


            <div className=' pt-24 '>
                <h1 className=' text-2xl md:text-3xl  pb-5 text-center font-bold  text-orange-500'>Your UAE Bucket List</h1>

                <FITTabs />
            </div>
            <TestimonialCarousel />
        </div>
    )
}

export default FIT
