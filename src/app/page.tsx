import ImageWrapper from "@/components/atoms/image-wrapper";
import ApartmentsAndVillas from "@/components/molecules/apartments-and-villas";
import ExplorePropertiesView from "@/components/molecules/explore-properties-view";
import HighDemandProjectsView from "@/components/molecules/high-demand-projects-view";
import NavBar from "@/components/molecules/navbar"
import TabsView from "@/components/molecules/navbar/react-tabs";
import ServicesTabsView from "@/components/molecules/services-tabs-view";
import BrandHero from "@public/brand_hero.png"
const HomePage = () => {
  return (
   <>
    <NavBar />
    <div className="flex flex-col gap-[80px]">
     
      <section className="w-full">
        <div className="relative">
          <div className="flex  w-[100vw] h-[700px]">
            <ImageWrapper imgSrc={BrandHero} alt="hero-image" fill/>
          </div>
          <div className="relative w-min bottom-[-30px] bg-[#fff] rounded-[5px] shadow-md left-[50%] -translate-x-1/2">
            <ServicesTabsView />
          </div>
        </div>
      </section>
      <ExplorePropertiesView />
      <ApartmentsAndVillas/>
      <HighDemandProjectsView/>
      

    </div></>
  )
}

export default HomePage;