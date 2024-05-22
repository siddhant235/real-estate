"use client"
import { Carousel } from "react-responsive-carousel";
import ApartmentsImage from "@public/apartments_image.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageWrapper from "../image-wrapper";
import LeftArrow from "@public/left_arrow.svg"
import RightArrow from "@public/right_arrow.svg"
import { StaticImageData } from "next/image";
interface ResponsiveCarouselProps {
    data: StaticImageData[]
}

const ResponsiveCarousel = (props: ResponsiveCarouselProps) => {
    const { data } = props
    const handleArrowRenderLeft = (clickHandler: any, hasPrev: any) => {
        return (
            <div
                className={`${hasPrev ? 'absolute bg-[#126BFB]' : 'absolute'
                    } bottom-2 left-[38%]  w-[50px] h-[50px] flex justify-center items-center p-3 opacity-100 cursor-pointer z-20 bg-[#fff] rounded-full shadow-lg`}
                onClick={clickHandler}
            >
                <ImageWrapper imgSrc={LeftArrow} alt="left-arrow" size={20} />
            </div>
        );
    }

    const handleArrowRenderRight = (clickHandler: any, hasNext: any) => {
        return (
            <div
                className={`${hasNext ? 'absolute bg-[#126BFB]' : 'absolute'
                    } bottom-2 right-[50%] flex w-[50px] h-[50px] justify-center items-center p-3 opacity-100 cursor-pointer z-20 bg-[#fff]  rounded-full shadow-lg`}
                onClick={clickHandler}
            >

               <ImageWrapper imgSrc={RightArrow} alt="right-arrow" size={20} />

            </div>
        );
    }
    return (
        <div className="relative px-[100px] mt-[30px]">
            <Carousel centerMode
                renderArrowPrev={handleArrowRenderLeft}
                renderArrowNext={handleArrowRenderRight}
                renderIndicator={() => <></>}
                centerSlidePercentage={30} axis="horizontal"
                className="flex flex-wrap gap-[10px] items-center justify-center"
                showStatus={false}>


                {
                    data.map((property, index) => {
                        return (
                            <div key={index} className=" w-[300px] h-[300px] mb-20">
                                <ImageWrapper imgSrc={property} alt="apartment-image" size={400} />

                            </div>
                        )
                    })
                }


            </Carousel>
        </div>
    );
}

export default ResponsiveCarousel