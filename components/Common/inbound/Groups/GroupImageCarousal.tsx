import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const GroupImageCarousal = () => {
    const carousal = [
        {
            title: ' Myriad of Accommodation Options',
            description: 'We believe that comfort and convenience are essential for an exceptional travel experience. We work with a wide range of accommodation partners to match your budget and preferences, whether it’s a luxurious hotel with stunning Arabian Gulf views or a centrally located city stay. ',
            image: '/inbound/Groups/carousel/A_Myriad_of.webp'
        },
        {
            title: 'Group Tours',
            description: 'We design and execute a wide range of group tours, from cultural and historical excursions to adventure activities as well sophisticated study tours, with engaging elements within the tour that provides a memorable experience for all our guests.',
            image: '/inbound/Groups/carousel/Group_Tours.webp'
        },
        {
            title: 'Corporate Retreats',
            description: 'We provide a wide array of services designed to make your group travel experience effortless and enjoyable.',
            image: '/inbound/Groups/carousel/Corporate_Retreats.webp'
        },
        {
            title: 'Comprehensive Services for Leisure Groups',
            description: 'We understand the value of exclusive experiences that create lasting memories. From private tours of iconic landmarks to VIP access to renowned attractions, we offer unparalleled opportunities for your group to indulge in luxury and exclusivity. Whether it’s savoring a gourmet meal atop the Burj Khalifa or enjoying a private desert safari under the starlit sky, we ensure that your group receives the VIP treatment they deserve.',
            image: '/inbound/Groups/carousel/Comprehensive_services.webp'
        },
        {
            title: 'Reunions & Family Get Togethers',
            description: 'Bring friends and families together with our thoughtfully planned reunions and family get-togethers, creating joyful moments, engaging activities, and cherished memories.            ',
            image: '/inbound/Groups/carousel/reunions.webp'
        },
        {
            title: 'Itinerary Design  ',
            description: 'Customized itineraries tailored to your group’s interests and preferences, including the best destinations and thoughtfully planned activities',
            image: '/inbound/Groups/carousel/iternerary_Design.webp'
        },
        {
            title: 'Logistics and Planning  ',
            description: 'We handle all logistical details, including transportation, accommodation and sightseeing, ensuring a smooth and stress-free experience',
            image: '/inbound/Groups/carousel/Logistics_and_Planning.webp'
        },
        {
            title: 'Activity Coordination',
            description: 'We organize a seamless range of activities, from guided tours and cultural experiences to adventure sports and relaxation activities, ensuring a thoroughly covered tour of the destination',
            image: '/inbound/Groups/carousel/Activity_Cordination.webp'
        },

    ]
    return (
        <div className=''>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default GroupImageCarousal
