import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const FITImageCarousal = () => {
    const carousal = [
        {
            title: 'Personalised Excellence, Round the Clock',
            description: 'Our hallmark lies in the personalised service rendered by our adept team, available round the clock, 24/7. This unwavering commitment to excellence underscores our pledge to deliver nothing short of the finest at every juncture of client interaction.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        { 
            title: 'Choice of Flexible Accommodations',
            description: 'Every traveller has unique accommodation preferences, whether you prefer boutique hotels, luxurious five-star resorts, or charming bed & breakfasts, we are here to recommend and arrange accommodations that align with both your tastes and budget. Travel Synergies grants you access to an extensive rates of accomodations.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Logistics and Ground Services',
            description: 'Access to knowledgeable local guides is one of the main benefits of collaborating with Travel Synergies for FIT travel. Our tour guides are enthusiastic about the places they visit and are well-versed in the local history, customs, and culture. We can give you insightful advice, lead you off the beaten track.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        
        

    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default FITImageCarousal
