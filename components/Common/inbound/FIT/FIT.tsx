import React from 'react'
import Herobanner from '../common/Herobanner'

import FITImageCarousal from './FITImageCarousal'

import FITTabs from './FITTabs'
import TestimonialCarousel from './Testimonials'

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
                <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-4">We are Experts in Handling Individual Travelers ( FIT’s )</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Our dedicated team is passionate about travel and brings a deep understanding of the UAE and its unique offerings.
                </p>
            </div>


            <div className='grid gap-2 py-5'>
                <h1 className=' text-5xl   text-center font-bold  text-orange-500'>Our Service Portfolio</h1>
                <FITImageCarousal />
            </div>


            <div className=' pt-10 '>
                <h1 className=' text-5xl pb-5 text-center font-bold  text-orange-500'>Your UAE Bucket List</h1>

                <FITTabs />
            </div>
            <div className='py-10'>
                <TestimonialCarousel />
            </div>
        </div>
    )
}

export default FIT
