import React from 'react'
import ImageSlider from '../../ImageSlider'
import ImageSwiper from '../common/ImageSwiper'

const MICEImageCarousal = () => {
    const carousal = [
        {
            title: 'Our Dedicated Experts',
            description: 'Our expert team leverages extensive networks, experience and industry insights to deliver seamless operations and comprehensive support from planning to post-event analysis. With a client-focused approach, strategic collaboration and meticulous attention to detail, we ensure to make your MICE project a success.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        { 
            title: 'Technology Integration',
            description: 'we specialize in integrating cutting-edge technology to transform event planning and execution. From streamlined registrations to real-time updates and interactive platforms. Our solutions enhance engagement and create memorable experiences. Our team is committed to delivering impactful events by staying at the forefront of technology.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Branding',
            description: 'Integrate our curated travel solutions into your brand to deliver personalized, top-tier MICE experiences. We adhere to brand guidelines and our experts collaborate with your marketing team to ensure alignment with your brand identity and values',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Cultural Immersion',
            description: 'Our curated activities, from interactive workshops to adrenaline pumping outdoor adventures, foster teamwork, communication, and collaboration. Designed to boost productivity, strengthen bonds and inspire leadership, our team-building experiences create lasting memories.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        {
            title: 'Post Event Evaluation',
            description: 'Our commitment to excellence extends beyond the event itself. Through post-event analysis, we provide valuable insights that go beyond numbers. We provide analysis through detailed evaluation, participant feedback and key performance indicators to ensure enhancements on your M.I.C.E events in the long run.',
            image: '/inbound/FIT/carousel/professional-guides.webp'
        },
        
    ]
    return (
        <div>
            <ImageSwiper images={carousal} />
        </div>
    )
}

export default MICEImageCarousal
