import ClientLogosShowcase from "@/components/Common/inbound/MICE/LogoCarousel"
import MICEImageCarousal from "@/components/Common/inbound/MICE/MICEImageCarousal"
import MICEInstagram from "@/components/Common/inbound/MICE/MICEInstagram"
import Herobanner from "@/components/Common/inbound/common/Herobanner"
import OtherNavigation from "@/components/Common/inbound/common/OtherNavigation"


const MICE = () => {
    const MICEHeroProps = {
        mainTitle: 'MICE',
        imageurl: '/inbound/MICE/main.webp',
        title: 'Making M.I.C.E Experiences More Exciting',
        description: [
            "Whether it's an intimate gathering or a grand-scale event, we excel in crafting unforgettable experiences. Our forte lies in efficiently linking you to suitable hotels, event venues, tours, and expertly orchestrating the intricate logistics essential for flawlessly hosting both private and professional occasions, along with incentive programs. Our extensive portfolio encompasses the intricate logistics of diplomatic events, concerts, sporting spectacles, and large-scale corporate MICE gatherings, all facilitated by our cutting-edge in-house technology"
        ],

    }
    return (
        <div className="container mx-auto px-2">
             <div className="sticky top-5 z-50 flex justify-center w-full pr-4">
                <OtherNavigation />
            </div>
            <div className="pb-2">
                <Herobanner
                    mainTitle={MICEHeroProps.mainTitle}
                    imageUrl={MICEHeroProps.imageurl}
                    title={MICEHeroProps.title}
                    description={MICEHeroProps.description}
                    letTalkButton={true}
                />

            </div>
            <div className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 text-center">
                <h2 className="text-orange-500 text-2xl md:text-3xl font-bold mb-4">We are your go to MICE Operator</h2>
                <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
                    At Travel Synergies, we specialize in delivering comprehensive M.I.C.E. services, dedicated to delivering exceptional and seamless event experiences with extensive expertise, our team excels in organizing events of all scales from small, intimate gatherings to large, international events.
                </p>
            </div>
            <h1 className='  text-2xl md:text-3xl text-center font-bold  text-orange-500 '>Our Service Portfolio</h1>

            <MICEImageCarousal />
            <div className='grid gap-2 py-5'>
            </div>

            <div className=' pt-10 w-[80%] mx-auto'>
                <h1 className='text-2xl md:text-3xl pb-5 text-center font-bold  text-orange-500'>Enhancing your MICE Event</h1>

                <p className="text-sm md:text-base pb-5 text-center font-bold  text-gray-300">
                    Take your MICE events to the next level with our curated experiences. From thrilling regattas and exhilarating racing at Yas Marina Circuit to the elegance of polo and the artistry of belly dancing classes, we offer unique activities that engage and inspire. Elevate the atmosphere with tailored entertainment and grant your attendees the privilege of VIP access for exclusive and seamless experiences.
                </p>

            </div>

            <div className="pt-10 w-[80%] mx-auto">
                <MICEInstagram />
            </div>
            <div className="py-10 w-[80%] mx-auto">
                <ClientLogosShowcase />
            </div>

        </div>
    )
}

export default MICE
