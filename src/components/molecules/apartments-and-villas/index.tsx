import ResponsiveCarousel from "@/components/atoms/responsive-carousel";
import SectionHeader from "@/components/atoms/section-header";
import ApartmentImage from "@public/apartments_image.png"
const ApartmentsAndVillas=()=>{
      return(
          <section>
              <SectionHeader headerTitlePart1={"Apartment, Villas"} headerTitlePart2={"and More"} subHeaderTitle={"Find and book a great experience."}/>
          <div>
              <ResponsiveCarousel data={[ApartmentImage,ApartmentImage,ApartmentImage]}/>
          </div>
          </section>
      )
}

export default ApartmentsAndVillas;