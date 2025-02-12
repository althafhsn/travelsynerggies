'use client'
import InboundImageCards from "./common/InboundImageCards"

const InboundInstagram = () => {
    const Instangram = [
        {
            title: 'Culture & Heritage',
            description: [
                "Uncover the rich tapestry of culture and heritage that the UAE proudly preserves. Explore ancient forts, fascinating souks and archaeological wonders that narrate the intriguing stories of the region's past, providing a glimpse into its vibrant traditions and lifestyle. Feel and experience the captivating moments."
            ],
            imageUrl: '/inbound/Inbound/Instagram/culture-and-heritage.webp'
        },
        {
            title: 'Sea Escapades',
            description: [
                'With pristine coastlines and clear blue waters, the UAE is a haven for sea lovers. Dive into a world of marine wonders, from snorkeling among vibrant coral reefs to luxury yacht cruises or relaxing on the smooth sands of unspoiled beach. Embark on sea escapades that promise relaxation and aquatic adventures.'
            ],
            imageUrl: "/inbound/Inbound/Instagram/sea-escapades.webp"
        },

        {
            title: 'Adrenaline Rush',
            description: [
                'The UAE offers a playground for thrill-seekers. From skydiving above the palm to indoor skiing in the heart of the city, get ready for heart-pounding adventures that will leave you exhilarated and craving for more. For the adventure seeker, its guaranteed is you will have an amazing time, spoilt with choices.'
            ],
            imageUrl: '/inbound/Inbound/Instagram/adreline-rush.webp'
        },
        {
            title: 'Gastronomical Delights',
            description: [
                'In contention with some of the major cities, Dubai is perceived one of the food capitals of the world. Embark on a culinary journey that tantalizes the taste buds with diverse culinary scene that caters to every palate, offering an exquisite fusion of international flavors, authentic Emirati dishes and a fusion gastronomic feast.'
            ],
            imageUrl: '/inbound/Inbound/Instagram/gastronomical-delights.webp'
        },
        {
            title: 'Soulful Bliss',
            description: [
                'Immerse in a symphony of rejuvenation amidst the tranquil oasis of its own landscape. Engage in wellness practices, indulge in spa treatments, and connect with nature in this idyllic setting. Experience soulful bliss as you embark on a journey of self-discovery and relaxation to re-energize and reset.'
            ],
            imageUrl: '/inbound/Inbound/Instagram/soulfull-bliss.webp'
        },
        {
            title: 'Iconic Marvels',
            description: [
                'Discover the perfect blend of luxury and modernity in the vibrant cities of the UAE. From soaring skyscrapers to opulent shopping malls, experience the epitome of urban sophistication while enjoying world-class amenities and impeccable hospitality. Treat yourself to the finest, whether it be cuisine, art or architecture.'
            ],
            imageUrl: '/inbound/Inbound/Instagram/iconic-marvels.webp'
        },
    ]
    return (
        <div className=" container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 w-[80%] mx-auto">
                {Instangram.map((card, index) => (
                    <InboundImageCards
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        index={index}
                        bookNow={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default InboundInstagram
