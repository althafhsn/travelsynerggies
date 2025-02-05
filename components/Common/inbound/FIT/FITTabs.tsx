import TabsComponent from "../common/Tabs";
import GolfInTheUAETabs from "./golf-in-the-uae/GolfInTheUAETab";
import FamilyPursuits from "./your-uae-bucket-list/FamilyPursuits";
import Golfing from "./your-uae-bucket-list/Golfing";
import HorseRiding from "./your-uae-bucket-list/HorseRiding";
import OurTopSellers from "./your-uae-bucket-list/OurTopSellers";
import Wellness from "./your-uae-bucket-list/Wellness";

const FITTabs = () => {
    const FITMainTabs = [
        {
            tabsTrigger: "Our Top Sellers",
            tabsContent: <OurTopSellers />,
            value: "our-top-sellers",
            tabsHeading: "UNVEILING THE BEST EXCURSIONS IN THE UAE",
            tabsDescription: "The UAE offers a diverse range of exciting excursions, from the vibrant cityscapes of Dubai and Abu Dhabi to the tranquil beauty of the desert and mountains, ensuring an unforgettable experience that will leave a lasting impression on travelers",
        },
        {
            tabsTrigger: "Golfing",
            tabsContent: <GolfInTheUAETabs />,
            value: "golfing",
            tabsHeading: "A JOURNEY THROUGH EQUESTRIAN EXCELLENCE",
            tabsDescription: "Among the glitz and glamour of Dubai, there lies a world of equestrian excellence waiting to be discovered. Horse riding in Dubai is not merely a leisure activity but an enthralling journey through tradition, luxury, and adventure.",
        },
        {
            tabsTrigger: "Horse Riding",
            tabsContent: <HorseRiding />,
            value: "horse-riding",
            tabsHeading: "A JOURNEY THROUGH EQUESTRIAN EXCELLENCE",
            tabsDescription: "Among the glitz and glamour of Dubai, there lies a world of equestrian excellence waiting to be discovered. Horse riding in Dubai is not merely a leisure activity but an enthralling journey through tradition, luxury, and adventure.",
        },
        {
            tabsTrigger: "Family Pursuits",
            tabsContent: <FamilyPursuits />,
            value: "family-pursuits",
            tabsHeading: "DISCOVER A WORLD OF EXCITEMENT AT UAE",
            tabsDescription: "Discover a world of excitement at UAE’s premier theme parks, offering endless fun for families. From adrenaline-pumping rides and interactive attractions to water adventures and immersive experiences, there’s something for everyone. Enjoy vibrant entertainment, thrilling adventure and unforgettable moments that bring together a family pursuit.",
        },
        {
            tabsTrigger: "Wellness",
            tabsContent: <Wellness />,
            value: "wellness",
            tabsHeading: "EMBARK ON A JOURNEY OF REJUVENATION",
            tabsDescription: "Embark on a journey of rejuvenation and balance with our curated wellness experiences. From yoga and meditation to sound healing and Ayurvedic therapies, each session is designed to restore harmony to your mind, body, and soul. Discover the transformative power of holistic healing and embrace a renewed sense of well-being.",
        },
    ];

    return (
        <div className="">
            <TabsComponent tabsData={FITMainTabs} />
        </div>
    );
};

export default FITTabs;
