import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const FITImageCarousal = () => {
    const carousal = [
        {
            title: 'Tailored Accommodation Options',
            description: 'Every traveler is unique, and so are their accommodation preferences. Whether you crave the intimate charm of boutique hotels, the opulence of five-star resorts, or the cozy warmth of bed & breakfasts, we’re here to curate the perfect stay for you. At Travel Synergies, we understand that where you rest matters as much as where you explore..            ',
            image: '/inbound/FIT/carousel/Tailored_Accommodation.webp'
        },

        {
            title: 'Professional Guides with local insights',
            description: "Unlock the expertise of passionate local guides. Our knowledgeable guides are deeply rooted in our destination, offering rich insights into local history, culture, and traditions. They don’t just show you the sights; they take you off the beaten path to discover hidden gems and authentic experiences.Let us guide you beyond the ordinary.With Travel Synergies, your adventure is in expert hands.            ",
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Convenient Ticket Solutions',
            description: 'The UAE offers an array of exciting attractions, from iconic landmarks to unique experiences and events. We provide easy access by securing your tickets in advance for the best activities and hassle-free experience.',
            image: '/inbound/FIT/carousel/Convenient_Ticket.webp'
        },
        {
            title: 'Logistics and Ground Services',
            description: 'From seamless logistics to personalized ground services, we ensure every detail is handled with care. Whether it’s arranging transportation, recommending local eateries, or crafting unique itineraries, we’re here to make your journey unforgettable.',
            image: '/inbound/FIT/carousel/Logistics_and_Ground.webp'
        },

        {
            title: 'Concierge Excellence',
            description: 'Concierge excellence is the gold standard. We do much more than just assist our guests—it’s about anticipating their needs, crafting unforgettable experiences, and delivering seamless solutions with precision and care. From securing exclusive reservations to curating bespoke itineraries, Our role is to transform ordinary moments into extraordinary memories.',
            image: '/inbound/FIT/carousel/Concierge_Service.webp'
        },
        {
            title: 'Fine Dining',
            description: "Experience the food scene in one of the food Capitals of the world, from luxurious dining and fusion cuisine to unique dining concepts. An immersive experience that tantalizes the senses and elevates culinary artistry to new heights.",
            image: '/inbound/FIT/carousel/Fine_Dining.webp'
        },
        {
            title: 'Technology at your Finger Tips',
            description: 'Our cutting-edge technology ensures that support and assistance are always within reach, Whether you need dining recommendations, activity suggestions, or last-minute changes, our dedicated team is just a call or click away.  Travel smarter, not harder. Let Travel Synergies put the power of technology in your hands, so you can focus on enjoying the journey.',
            image: '/inbound/FIT/carousel/Technology.webp'
        },


    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default FITImageCarousal
