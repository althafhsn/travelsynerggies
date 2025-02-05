import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const GroupImageCarousal = () => {
    const carousal = [
        {
            title: 'Tailored Itineraries for Every Taste',
            description: 'We understand that each group is unique, with diverse interests and preferences. We offer tailer-made itineraries meticulously crafted to cater to the specific desires of your group. Whether it’s exploring the cosmopolitan charm of Dubai, delving into the cultural heritage of Abu Dhabi, or seeking adventure amidst the desert dunes, our expertly curated tours ensure that every moment is perfectly tailored to your group’s needs.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        { 
            title: 'Luxurious Accommodations and Transportation',
            description: 'We believe that comfort and convenience are essential for an exceptional travel experience. We partner with top-tier accommodations and provide luxurious transportation options to ensure that your group travels in style and relaxation. Whether it’s a lavish hotel overlooking the Arabian Gulf or a private chartered vehicle for seamless exploration, we spare no effort in ensuring that every aspect of your journey exceeds expectations.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Experienced Guides with Local Insight            ',
            description: 'Our team of experienced guides possesses an intimate knowledge of the UAE’s rich history, culture, and landmarks. With their expert guidance, you’ll gain invaluable insights into the hidden gems and lesser-known treasures that define the essence of the Emirates. From navigating bustling souks to uncovering ancient archaeological sites, our guides are dedicated to providing an immersive and unforgettable experience for every member of your group.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Exclusive Access and VIP Treatment            ',
            description: 'We understand the value of exclusive experiences that create lasting memories. From private tours of iconic landmarks to VIP access to renowned attractions, we offer unparalleled opportunities for your group to indulge in luxury and exclusivity. Whether it’s savoring a gourmet meal atop the Burj Khalifa or enjoying a private desert safari under the starlit sky, we ensure that your group receives the VIP treatment they deserve.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Seamless Planning and Support          ',
            description: 'Planning a group trip can be daunting, but with our dedicated team by your side, it becomes a seamless and stress-free process. From the initial consultation to the final farewell, we provide comprehensive support every step of the way. Our team handles all the logistics, reservations, and arrangements, allowing you to relax and focus on creating unforgettable memories with your group.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Seamless Planning and Support          ',
            description: 'Planning a group trip can be daunting, but with our dedicated team by your side, it becomes a seamless and stress-free process. From the initial consultation to the final farewell, we provide comprehensive support every step of the way. Our team handles all the logistics, reservations, and arrangements, allowing you to relax and focus on creating unforgettable memories with your group.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        
    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default GroupImageCarousal
