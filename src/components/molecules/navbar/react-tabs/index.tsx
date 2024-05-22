"use client"
import { ReactElement, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
interface TabsViewProps {
    tabsConfig: { tabs: string[], tabPanels: ReactElement[] }
}
const TabsView = (props: TabsViewProps) => {
    const { tabsConfig } = props
    const { tabs, tabPanels } = tabsConfig
    const [tabIndex, setTabIndex] = useState(0);
    return (

        <div>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(tabIndex: number) => setTabIndex(tabIndex)}
                selectedTabClassName="bg-white !border-b-2  flex items-center justify-center text-[#0D6DCB] font-bold text-[18px]  hover:cusrsor-pointer "
            >
                <TabList className="flex items-center gap-[20px] justify-center ">
                    
                    {tabs.map((tab) => {
                        return (
                            <Tab  key={tab}>{tab}</Tab>
                        )
                    })}
                </TabList>
                {tabPanels.map((tabPanel, index) => {
                    return (
                        <Tab  key={index}>{tabPanel}</Tab>
                    )
                })}
            </Tabs>
        </div >




    )
}

export default TabsView;