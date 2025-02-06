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
            <TabsComponent  tabsData={GolfInTheUAEContent} 
            tabsListClassName="flex flex-col md:flex-row w-full max-w-[380px] mx-auto xl:mx-0 gap-2 w-[66%] mb-10"
            tabsTrigerClassName="hover:bg-orange-500 grid grid-cols-4 text-center gap-4 items-center justify-center rounded-md bg-gray-900 mx-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white md:w-full flex items-center justify-center"
 />
        </div>
    );
};

export default GolfInTheUAETabs;
