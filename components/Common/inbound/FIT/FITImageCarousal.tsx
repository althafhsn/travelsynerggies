import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const FITImageCarousal = () => {
    const carousal = [
        {
            title: 'Professional Guides with local insights',
            description: "We meticulously plan smooth transitions between locations, arranging internal flights, sightseeing tours, and seamless airport transfers. With a diverse fleet of vehicles at our disposal, we can cater to your specific needs. Our team of well trained drivers are committed to driving our guests with utmost safety.            ",
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Convenient Ticket Solutions',
            description: 'The UAE offers an array of exciting attractions, from iconic landmarks to unique experiences and events. We provide easy access by securing your tickets in advance for the best activities and hassle-free experience.',
            image: '/inbound/FIT/carousel/Convenient_Ticket.webp'
        },
        {
            title: 'Logistics and Ground Services',
            description: 'Access to knowledgeable local guides is one of the main benefits of collaborating with Travel Synergies for FIT travel. Our tour guides are enthusiastic about the places they visit and are well-versed in the local history, customs, and culture. We can give you insightful advice, lead you off the beaten track.',
            image: '/inbound/FIT/carousel/Logistics_and_Ground.webp'
        },
        {
            title: 'Tailored Accommodation Options',
            description: 'Every traveller has unique accommodation preferences, whether you prefer boutique hotels, luxurious five-star resorts, or charming bed & breakfasts, we are here to recommend and arrange accommodations that align with both your tastes and budget. Travel Synergies grants you access to an extensive rates of accomodations.            ',
            image: '/inbound/FIT/carousel/Tailored_Accommodation.webp'
        },
        {
            title: 'Technology at your Finger Tips',
            description: 'Working with Travel Synergies for FIT travel offers you the invaluable peace of mind that comes with 24/7 support and assistance. Our dedicated team is available around the clock throughout your vacation, ready to provide guidance on everything from meals to activities, accommodate last.            ',
            image: '/inbound/FIT/carousel/Technology.webp'
        },
        {
            title: 'Concierge Excellence',
            description: 'Access to knowledgeable local guides is one of the main benefits of collaborating with Travel Synergies for FIT travel. Our tour guides are enthusiastic about the places they visit and are well-versed in the local history, customs, and culture. We can give you insightful advice, lead you off the beaten track.',
            image: '/inbound/FIT/carousel/Concierge_Service.webp'
        },
        {
            title: 'Fine Dining',
            description: "Experience the food scene in one of the food Capitals of the world, from luxurious dining     and fusion cuisine to unique dining concepts.",
            image: '/inbound/FIT/carousel/Fine_Dining.webp'
        },


    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default FITImageCarousal
