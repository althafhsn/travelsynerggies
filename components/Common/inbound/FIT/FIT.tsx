import React from 'react'
import Herobanner from '../common/Herobanner'
import ImageSwiper from '../common/ImageSwiper'
import { Carousel } from '@/components/ui/carousel'
import FITImageCarousal from './FITImageCarousal'
import Abudabi from './golf-in-the-uae/Abudabi'
import FITTabs from './FITTabs'

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
        <div className='container mx-auto'>
            <div className='pb-2'>

                <Herobanner
                    mainTitle={FITHeroProps.mainTitle}
                    imageUrl={FITHeroProps.imageurl}
                    title={FITHeroProps.title}
                    description={FITHeroProps.description}
                    letTalkButton={true}
                />
            </div>
            <div className='grid gap-2 pt-10'>
                <h1 className=' text-5xl   text-center font-bold  text-orange-500'>Our Service Portfolio</h1>
                <FITImageCarousal />
            </div>
            <hr className="w-full my-2 border-t-2 border-orange-500" />

            <div className=' pt-10 '>
                <h1 className=' text-5xl pb-5 text-center font-bold  text-orange-500'>Your UAE Bucket List</h1>

                <FITTabs />
            </div>
        </div>
    )
}

export default FIT
