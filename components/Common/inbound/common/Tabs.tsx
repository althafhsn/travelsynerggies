import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

interface TabItem {
    value: string;
    tabsTrigger?: string;
    tabsContent: any;
    tabsHeading?: string;
    tabsDescription?: string;
}

interface TabsComponentProps {
    tabsData: TabItem[];
    width?: number;
}

const TabsComponent = ({ tabsData, width }: TabsComponentProps) => {
    if (!tabsData.length) return <p className="text-center text-red-500">No tabs available</p>;

    return (
        <div className="container mx-auto">
            <Tabs defaultValue={tabsData[0].value}>
                {/* Centering the Tabs List */}
                <div className="flex justify-center">
                    <TabsList className={`flex  justify-center`} style={{ width: `${width}%` }}>
                        {tabsData.map((tab, index) => (
                            <TabsTrigger key={index} value={tab.value}>
                                {tab.tabsTrigger}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {tabsData.map((tab, index) => (
                    <TabsContent key={index} value={tab.value}>
                        {tab.tabsHeading && (
                            <h2 className="text-2xl font-bold text-center text-orange-500 py-2">
                                {tab.tabsHeading}
                            </h2>
                        )}
                        {tab.tabsDescription && (
                            <p className="text-gray-300 pb-6 text-center max-w-5xl mx-auto">
                                {tab.tabsDescription}
                            </p>
                        )}
                        <div>{tab.tabsContent}</div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};


export default TabsComponent;
