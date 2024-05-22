import ImageWrapper from "@/components/atoms/image-wrapper"
import { navbarConfig } from "./config"
import BrandLogoImage from "@public/brand_logo.png"
import UserIcon from "@public/user_icon.svg"
import DownArrowIcon from "@public/down_arrow.svg"
import { StaticImageData } from "next/image"
const NavBar=()=>{
    return(
        <section className="flex w-full bg-color-[#fff] px-[30px] py-[30px] justify-around items-center">
          <div className="ml-[10px]">
          <ImageWrapper imgSrc={BrandLogoImage} alt="brand-logo" height={48} width={192}/>
          </div>
        <div className="flex gap-[20px]">
        <div className="flex gap-[10px] w-[100%] ">
              {
                  navbarConfig.map((navItem)=>{
                      return(
                          <p key={navItem.id} className="text-[16px] font-normal text-[#111] ">
                            {navItem.label}
                          </p>)
                  })
              }
          </div>

          <div className="flex gap-[10px] it-center">
              <ImageWrapper imgSrc={UserIcon} size={32} alt="user-icon" />
              <ImageWrapper imgSrc={DownArrowIcon} size={18} alt="down-arrow"/>
          </div>
        </div>
        </section>
    )
}


export default NavBar