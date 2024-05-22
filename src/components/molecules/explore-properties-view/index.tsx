import ImageWrapper from "@/components/atoms/image-wrapper";
import SectionHeader from "@/components/atoms/section-header";
import PopularDestinationImage from "@public/popular_destination_image.png"
import RightArrow from "@public/right_arrow.svg"
const explorePropertiesViewConfig = [
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    },
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    },
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    },
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    },
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    },
    {
        propertyImage: PopularDestinationImage,
        propertyTitle: "Bali",
        numberOfHotels: 4
    }
]

const ExplorePropertiesView = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <SectionHeader headerTitlePart1={"Explore Properties"} headerTitlePart2={"in Popular Cities"} subHeaderTitle={"Find and book a great Property"} />
            <div className="flex flex-wrap justify-center items-center  p-[14px] gap-[60px] ">
                {
                    explorePropertiesViewConfig.map((destination) => {
                        return (
                            <div key={destination.propertyTitle} className="w-[400px] h-[122px] bg-[#fff] rounded-[16px] shadow-md p-3 flex gap-[20px]  items-center">
                                <ImageWrapper imgSrc={destination.propertyImage} alt="destination-image" size={90} />
                                <div className="flex flex-col font-medium">
                                    <p className="text-[16px]">{destination.propertyTitle}</p>
                                    <div className="flex gap-[5px] text-[14px] font-[#112211]">
                                        <p>{destination.numberOfHotels} hotels</p>
                                        <div className="flex gap-[10px]">
                                            <p>All kind of hotels</p>
                                            <ImageWrapper imgSrc={RightArrow} alt="right-arrow" size={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ExplorePropertiesView;