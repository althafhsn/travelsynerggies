import FIT from '@/components/Common/inbound/FIT/FIT'
import Groups from '@/components/Common/inbound/Groups/Groups'
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
  ]

  return (
    <div className='container mx-auto mt-10  '>
      <TabsComponent tabsData={TabsComponents} />
    </div>
  )
}

export default page
