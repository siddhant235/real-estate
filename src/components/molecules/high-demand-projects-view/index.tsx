import ImageWrapper from "@/components/atoms/image-wrapper";
import SectionHeader from "@/components/atoms/section-header";
import HighDemandProjectImage from "@public/high_demand_project.png"
import RightArrow from "@public/right_arrow.svg"
const highDemandProjectsConfig = [
    {
        propertyImage: HighDemandProjectImage,
        projectSize: "2 BDR Villa | Tanah Lot/ kaba...",
        propertName: "Kaba kaba",
        projectValue: "$2,45,000"
    },
    {
        propertyImage: HighDemandProjectImage,
        projectSize: "2 BDR Villa | Tanah Lot/ kaba...",
        propertName: "Kaba kaba",
        projectValue: "$2,45,000"
    },
    {
        propertyImage: HighDemandProjectImage,
        projectSize: "2 BDR Villa | Tanah Lot/ kaba...",
        propertName: "Kaba kaba",
        projectValue: "$2,45,000"
    }
]
const HighDemandProjectsView = () => {
    return (
        <section className="flex flex-col gap-[30px]">
            <SectionHeader headerTitlePart1={"Projects In"} headerTitlePart2={"High Demand"} subHeaderTitle={"Search Places Hire to our most popular destinations"} />
            <div className="flex flex-wrap gap-[20px] justify-around px-[20px]">
                {
                    highDemandProjectsConfig.map(project => {
                        return (
                            <div key={project.propertName} className="bg-[#fff] shadow-md rounded-[5px]">
                                <div className="relative w-[408px] h-[308px]">
                                    <ImageWrapper imgSrc={project.propertyImage} alt={"project-image"} fill />
                                </div>
                                <div className="p-[10px]">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-[#6e6e6e] text-[12px]">{project.propertName}</p>
                                        <p className="text-[#11A1A] text-[16px] font-medium">{project.projectSize}</p>
                                        <p>{project.projectValue}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="relative flex items-center justify-center gap-[10px]">
                <p className="text-[#126BFB] font-bold text-[18px]">See more</p>
                <ImageWrapper imgSrc={RightArrow} alt="right-arrow"/>
            </div>
        </section>
    )
}
export default HighDemandProjectsView;