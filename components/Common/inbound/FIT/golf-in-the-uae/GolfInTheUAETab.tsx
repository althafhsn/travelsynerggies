import TabsComponent from "../../common/Tabs";
import Abudabi from "./Abudabi";
import Ajman from "./Ajman";
import Dubai from "./Dubai";
import RasAlKhaimah from "./RasAlKhaimah";


const GolfInTheUAETabs = () => {
    const GolfInTheUAEContent= [
        {
            tabsTrigger: "Abu Dhabi",
            tabsContent: <Abudabi />,
            value: "abu-dhabi",
            
        },
        {
            tabsTrigger: "Dubai",
            tabsContent: <Dubai />,
            value: "dubai",
           
        },
        {
            tabsTrigger: "Ajman",
            tabsContent: <Ajman />,
            value: "ajman",
           
        },
        {
            tabsTrigger: "Ras Al Khaimah",
            tabsContent: <RasAlKhaimah />,
            value: "ras-al-khaimah",
           
        },

    ];

    return (
        <div className="">
            <TabsComponent width={70} tabsData={GolfInTheUAEContent} />
        </div>
    );
};

export default GolfInTheUAETabs;
