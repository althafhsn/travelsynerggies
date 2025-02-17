'use client'
import CongressesImageCarousal from "@/components/Common/inbound/Congresses/CongressesImageCarousel"
import CongressesInstagram from "@/components/Common/inbound/Congresses/CongressesInstragram"
import EventCarousel from "@/components/Common/inbound/Congresses/EventCarousel"
import IndustryEvents from "@/components/Common/inbound/Congresses/IndustryEvents"
import ClientLogosShowcase from "@/components/Common/inbound/Congresses/LogoCarousel"
import Herobanner from "@/components/Common/inbound/common/Herobanner"
import OtherNavigation from "@/components/Common/inbound/common/OtherNavigation"



const Congresses = () => {
    const CongressesHeroProps = {
        mainTitle: 'Congresses',
        imageurl: '/inbound/Congress/main.webp',
        title: 'Making Congresses Experiences More Exciting',
        description: [
            "At Travel Synergies, we are a leading Professional Congress Organizer (PCO) with a proven history of managing and delivering world-class congresses and events. Our portfolio includes prestigious global events, such as those organized by the United Nations for the Federal Government of the UAE, showcasing our expertise and commitment to excellence."
        ],

    }
    return (
        <div className="container mx-auto px-2">
            <div className="sticky top-5 right-0 z-50 flex justify-center w-full pr-4">
                <OtherNavigation />
            </div>
            <div className="pb-2">
                <Herobanner
                    mainTitle={CongressesHeroProps.mainTitle}
                    imageUrl={CongressesHeroProps.imageurl}
                    title={CongressesHeroProps.title}
                    description={CongressesHeroProps.description}
                    letTalkButton={true}
                />

            </div>
            <div className="bg-black text-white pt-5 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">Our Expertise in Congress Organization</h2>
                <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
                    With a team of seasoned professionals, we bring deep industry knowledge and precision to every project. We have successfully managed congresses of all scales, from small intimate gatherings to large international events. Our expertise spans diverse industries and event types, including:
                </p>
            </div>
            <h1 className='  text-2xl md:text-3xl text-center font-bold  text-orange-500 '>Our Service Portfolio</h1>

            <CongressesImageCarousal />

            <EventCarousel />


            <div className=' pt-10 max-w-6xl mx-auto'>
                <h1 className='text-2xl md:text-3xl pb-5 text-center font-bold  text-orange-500'>Where Vision Meets Impact
                </h1>

                <p className="text-sm md:text-base pb-5 text-center font-bold  text-gray-300">
                Transform your congress into a powerhouse of innovation and connection with our end-to-end expertise in professional event management. From cutting-edge venues at globally renowned hubs like Abu Dhabi National Exhibition Centre (ADNEC) to immersive team-building adventures in the Arabian Desert, we craft congresses that blend knowledge-sharing with unforgettable engagement.
                </p>

            </div>

            <div className="py-10 w-[80%] mx-auto">
                <CongressesInstagram />
            </div>

            <div className='grid gap-2 py-5'>
                <IndustryEvents />
            </div>
            <div className="py-10">
                <ClientLogosShowcase />
            </div>

        </div>
    )
}

export default Congresses
