import InboundImageCards from "../../common/InboundImageCards"




const Wellness = () => {

    const Wellness = [
        {
            title: 'Relaxing Massages',
            description: [
                'Indulge in ultimate relaxation with rejuvenating massages, from the deep healing of Balinese techniques to the invigorating stretches of Thai massage and therapeutic benefits of Moroccan massages. A perfect escape to restore your mind, body and soul.',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/wellness/relaxing-massages.webp"
        },
        {
            title: 'Harmony through Yoga',
            description: [
                'Rediscover balance and flexibility with yoga sessions that nurture your body and calm your mind. Guided by experts, it’s the perfect path to inner harmony.',
                
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/wellness/harmony-through yoga.webp'
        },
        {
            title: 'Ancient Healing of Ayurveda ',
            description: [
                'Experience the ancient wisdom of Ayurveda with personalized treatments that rejuvenate the body, detoxify the system and promotes healthy living.',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/wellness/ancient-healing-of-ayurveda.webp'
        },
        {
            title: 'Vibrations of Sound Healing',
            description: [
                "Immerse yourself in soothing vibrations during sound healing sessions that harmonize energy, relieve tension and restore balance.",
              
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/wellness/vibrations-of-sound-healing.webp'
        },
        {
            title: 'Inner Peace with Meditation ',
            description: [
                'Find peace within yourself through meditation practices designed to enhance mindfulness, reduce stress and promote emotional well-being. ',
               
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/FIT/bucket-list/wellness/inner-peace-with-meditation.webp"
        },
        {
            title: 'Spiritual Balance with Holistic Healing',
            description: [
                'Embrace wellness with holistic healing therapies that integrate mind, body and spirit, offering a transformative journey to overall well-being.           ',
             
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: '/inbound/FIT/bucket-list/wellness/spiritual-balance-with-hollistic-healing.webp'
        },

    ]
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[90%] mx-auto">
                {Wellness.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        index={index}
                        bookNow={true}
                        booknowDescription={card.booknowDescription}
                    />
                ))}
            </div>
        </div>
    )
}

export default Wellness
