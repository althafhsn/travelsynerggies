import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const CongressesImageCarousal = () => {
    const carousal = [
        {
            title: 'Venue Sourcing and Logistics',
            description: 'Find the ideal venue for your congress with our experts. We handle every detail from researching pricing and availability for hotels and venues and conduct thorough site visits to evaluate and assesses vendor services to ensure the ideal setting for your event’s size, style and requirement. We also handle meticulous coordination of the transportation factors and on-site arrangements to ensure a flawless experience every time.',
            image: '/inbound/Congress/carousel/Venue_Sourcing.jpg'
        },
        { 
            title: 'Contract Negotiations',
            description:"Secure the best terms and value with our skilled contract negotiation, ensuring favorable agreements with venues and suppliers, whilst managing the bidding process.",
            image: '/inbound/Congress/carousel/Contract_Negotiations.jpg'
        },
        {
            title: 'Marketing, Promotions and Branding',
            description: 'Strategic campaigns to maximize event visibility and attract the right audience, ensuring strong participation, while reinforcing brand identity to create lasting impressions and meaningful connections.',
            image: '/inbound/Congress/carousel/Marketing_and_Prmos.jpg'
        },
        {
            title: 'On-Site Management',
            description: 'Our dedicated on-site team ensures smooth operations from check-in and registration to session facilitation and attendee assistance.',
            image: '/inbound/Congress/carousel/Onesite_Managment.jpg'
        },
        {
            title: 'Congress Management',
            description: 'Our congress management ensures seamless coordination, covering everything from audio-visual production and speaker coordination to travel, transportation, registration, event design, food & beverage and VIP services, with post-event analysis for continuous improvement. ',
            image: '/inbound/Congress/carousel/Congress_Management.jpg'
        },
        
    ]
    return (
        <div className='w-full px-4 sm:px-6 lg:px-8'>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default CongressesImageCarousal
