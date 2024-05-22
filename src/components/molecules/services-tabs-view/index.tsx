import TabsView from "../navbar/react-tabs";
import SearchFilterView from "../navbar/search-filter-view";

const tabsConfig={
    tabs:["Buy","Rent","New Launch","Commercials","Plots","Lands","Projects"],
    tabPanels:[<SearchFilterView key="search-filter"/>]
}

const ServicesTabsView=()=>{
 return(
    <section>
    <TabsView tabsConfig={tabsConfig}/>
</section>
 )
}

export default ServicesTabsView;