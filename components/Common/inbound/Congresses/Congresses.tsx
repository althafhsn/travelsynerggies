import Herobanner from "../common/Herobanner"
import CongressesImageCarousal from "./CongressesImageCarousel"
import CongressesInstagram from "./CongressesInstragram"
import IndustryEvents from "./IndustryEvents"
import ClientLogosShowcase from "./LogoCarousel"


const Congresses = () => {
    const CongressesHeroProps = {
        mainTitle: 'Congresses',
        imageurl: '/inbound/Groups/main.webp',
        title: 'Making Congresses Experiences More Exciting',
        description: [
            "At Travel Synergies, we are a leading Professional Congress Organizer (PCO) with a proven history of managing and delivering world-class congresses and events. Our portfolio includes prestigious global events, such as those organized by the United Nations for the Federal Government of the UAE, showcasing our expertise and commitment to excellence."
        ],

    }
    return (
        <div className="container mx-auto px-2">
            <div className="pb-2">
                <Herobanner
                    mainTitle={CongressesHeroProps.mainTitle}
                    imageUrl={CongressesHeroProps.imageurl}
                    title={CongressesHeroProps.title}
                    description={CongressesHeroProps.description}
                    letTalkButton={true}
                />

            </div>
            <div className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-4">Our Expertise in Congress Organization</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    With a team of seasoned professionals, we bring deep industry knowledge and precision to every project. We have successfully managed congresses of all scales, from small intimate gatherings to large international events. Our expertise spans diverse industries and event types, including:
                </p>
            </div>
            <hr className="w-full my-2 border-t-2 border-orange-500" />
            <div className='grid gap-2 py-5'>
                <CongressesImageCarousal />
            </div>
            <hr className="w-full my-2 border-t-2 border-orange-500" />

            <div className='grid gap-2 py-5'>
                <IndustryEvents />
            </div>
            <div className=' pt-10 '>
                <h1 className='text-2xl md:text-5xl pb-5 text-center font-bold  text-orange-500'>Enhancing your MICE Event</h1>

                <p className="text-sm md:text-lg pb-5 text-center font-bold  text-gray-300">
                    Take your MICE events to the next level with our curated experiences. From thrilling regattas and exhilarating racing at Yas Marina Circuit to the elegance of polo and the artistry of belly dancing classes, we offer unique activities that engage and inspire. Elevate the atmosphere with tailored entertainment and grant your attendees the privilege of VIP access for exclusive and seamless experiences.
                </p>

            </div>

            <div className="pt-10">
                <CongressesInstagram />
            </div>
            <div className="py-10">
                <ClientLogosShowcase />
            </div>

        </div>
    )
}

export default Congresses
