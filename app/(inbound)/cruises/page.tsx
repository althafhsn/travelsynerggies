import CommitmentSection from "@/components/Common/inbound/Cruises/CommitmentSection"
import CruisesImageCarousal from "@/components/Common/inbound/Cruises/CruisesImageCarousel"
import CruisesInstagram from "@/components/Common/inbound/Cruises/CruisesInstagram"
import Herobanner from "@/components/Common/inbound/common/Herobanner"



const Cruises = () => {
    const CruisesHeroProps = {
        mainTitle: 'Cruises',
        imageurl: '/inbound/Cruises/main.webp',
        title: 'Raising the Bar for Your Cruise Experience',
        description: [
            "We are your DMC go-to resource for designing extraordinary and unforgettable cruises. Travel Synergies offers a variety of services that improve your cruise experience and guarantee that every second of your journey is filled with delight, relaxation, and discovery thanks to our in-depth knowledge of locations, attention to detail, and dedication to customized service."
        ],

    }
    return (
        <div className="container mx-auto px-2">
            <div className="pb-2">
                <Herobanner
                    mainTitle={CruisesHeroProps.mainTitle}
                    imageUrl={CruisesHeroProps.imageurl}
                    title={CruisesHeroProps.title}
                    description={CruisesHeroProps.description}
                    letTalkButton={true}
                />

            </div>
            <div className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-4">Discover the Ultimate Getaway Experience with Travel Synergies</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    At Travel Synergies, we craft unforgettable cruise experiences that redefine travel. Whether you're seeking the tranquility of a secluded beach, the excitement of bustling port cities, or the adventure of exploring remote destinations, we have the perfect cruise for you. From pre- and post-cruise tours to comprehensive event management, every detail is handled with precision and excellence.
                </p>
            </div>
            
            <div className='grid gap-2 py-5'>
                <CruisesImageCarousal />
            </div>


            <div className="pt-10">

                <CruisesInstagram />
            </div>
            <div className="py-10">
                <CommitmentSection />
            </div>

        </div>
    )
}

export default Cruises
