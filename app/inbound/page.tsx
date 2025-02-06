
'use client'
import Congresses from '@/components/Common/inbound/Congresses/Congresses'
import Cruises from '@/components/Common/inbound/Cruises/Cruises'
import FIT from '@/components/Common/inbound/FIT/FIT'
import Groups from '@/components/Common/inbound/Groups/Groups'
import MICE from '@/components/Common/inbound/MICE/MICE'
import TabsComponent from '@/components/Common/inbound/common/Tabs'




const page = () => {
  const TabsComponents = [
    {
      tabsTrigger: "FIT's",
      tabsContent: <FIT />,
      value: "fit",
    },
    {
      tabsTrigger: "Groups",
      tabsContent: <Groups />,
      value: "groups",
    },
    {
      tabsTrigger: "MICE",
      tabsContent: <MICE />,
      value: "mice",
    },
    {
      tabsTrigger: "Congresses",
      tabsContent: <Congresses />,
      value: "congresses",
    },
    {
      tabsTrigger: "Cruises",
      tabsContent: <Cruises />,
      value: "cruises",
    }
  ]

  return (
    <div className="relative h-screen overflow-auto">
      <TabsComponent tabsData={TabsComponents} tabsListClassName="sticky top-10 z-10 shadow-md" />
    </div>

  )
}

export default page
