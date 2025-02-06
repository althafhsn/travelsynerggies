'use client'
import InboundImageCards from "../common/InboundImageCards"

const CruisesInstagram = () => {
    const CruisesInstagramPics = [
        {
            title: 'Abu Dhabi City Tour',
            description: [
                'Experience the city’s highlights with our curated bus tours. From iconic landmarks to cultural hotspots, these guided tours provide a comprehensive overview, ensuring you don’t miss a thing while enjoying a relaxed and informative tour.',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/abu-dhabi-city.webp"
        },
        {
            title: 'Cultural Shows',
            description: [
                'Immerse in the rich heritage of the region with captivating cultural shows. Experience the grace and rhythm of Ayala dance, a traditional Emirati performance symbolizing unity and the mesmerizing spins of the Tanoura dance, a vibrant Sufi-inspired art form.  ',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/tanoura-dancer.webp"
        },
        {
            title: 'Authentic Experiences',
            description: [
                'Immerse yourself in the rich traditions of the UAE by engaging in a meaningful cultural discussion with an Emirati host, whilst savoring the true essence of Emirati hospitality. Gain insights into local customs, history and heritage, which allows a unique opportunity to connect, learn, and understand the Emirati lifestyle from old age to the modern day.',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/henna-painting.webp"
        },
        {
            title: 'Curated Walks',
            description: [
                'Embark on walking tours that unveil the hidden gems and explore the heart of a destination. Explore historic neighborhoods, vibrant souks and cultural landmarks with expert guides who share captivating back street stories and hidden details.',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/Walking Tours.webp"
        },
        {
            title: 'Pampered Retreat',
            description: [
                'Set out of the cruise for a change and escape to a haven of relaxation and rejuvenation with our pampered retreats. Indulge in luxurious spa treatments, quiet beach settings, and sip in some of the finest cocktails. It’s the ultimate getaway for those seeking tranquility and indulgence. ',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/relax-and-chill.webp"
        },
        {
            title: 'Cycling Tours',
            description: [
                'Discover off the beaten track and hidden gems on two wheels with our guided bike tours. Perfect for adventure seekers and nature lovers, these tours combine exploration with an active experience, offering a unique perspective on the destination.',

            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl: "/inbound/Cruises/Instagram/cycling-tours.webp"
        },
    ]
    return (
        <div className="w-full">
            <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4 text-center">Experience, Connect and Indulge</h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto pb-10">
                Enhance your cruise journey with a variety of unforgettable experiences. From cultural immersions featuring traditional Emirati meals and performances like Ayala and Tanura dances to curated walks, bike tours and city explorations, every moment is designed to inspire and connect. Relax with luxurious spa treatments and pampered retreats, creating cherished memories both on and off the cruise.

            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  mx-auto">

                {CruisesInstagramPics.map((card, index) => {
                    return (
                        <InboundImageCards
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                            index={index}
                            bookNow={true}
                            booknowDescription={card.booknowDescription} />
                    )
                })}
            </div>
        </div>
    )
}

export default CruisesInstagram
