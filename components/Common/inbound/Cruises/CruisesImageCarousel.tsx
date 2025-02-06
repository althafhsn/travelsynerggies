import React from 'react'
import ImageSwiper from '../common/ImageSwiper'

const CruisesImageCarousal = () => {
    const carousal = [
        {
            title: 'Exceptional Service',
            description: 'Our commitment to exceptional service continues throughout your entire cruise experience. From personalized attention and round-the-clock support to ensuring every detail is flawlessly executed, we prioritize your comfort and satisfaction from embarkation to return. From the moment you step on board to the moment you return home, our crew is ready to attend to your every need.',
            image: '/inbound/Cruises/carousel/best-guides.webp'
        },
        { 
            title: 'Sustainable and Responsible Travel',
            description: 'We take pride in promoting sustainable and responsible tourism. Our cruises are designed to minimize environmental impact while supporting the communities and ecosystems we visit. Traveling with us means enjoying unforgettable experiences while contributing positively to the world.',
            image: '/inbound/Cruises/carousel/Sustainable.webp'
        },
        {
            title: 'Comprehensive Services for Cruise Lines',
            description: 'Our experiences are designed to support cruise lines and ensure a smooth and efficient operation including logistics and planning, technical support and marketing.',
            image: '/inbound/Cruises/carousel/Comprehensive_Services.webp'
        },
        {
            title: 'Shore Excursions',
            description: 'Enhance your cruise with expertly curated shore excursions, offering cultural experiences, thrilling adventures, and relaxing escapes. Designed for safety, seamless organization, and personalization, these excursions create unforgettable memories at every destination.',
            image: '/inbound/Cruises/carousel/Shore_excursions.webp'
        },
        {
            title: 'Pre and Post Tours',
            description: "Extend your cruise journey with expertly planned pre and post cruise tours, offering a deeper exploration of your departure or arrival destinations. Whether it's a city tour, a scenic escape or a unique cultural experience, our tailored itineraries ensure your travel adventure is enriched beyond the cruise itself.",
            image: '/inbound/Cruises/carousel/Pre_and_Post_tours.webp'
        },
        
    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default CruisesImageCarousal
