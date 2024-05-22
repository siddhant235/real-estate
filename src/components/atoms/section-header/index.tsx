interface SectionHeaderProps{
  headerTitlePart1:string;
  headerTitlePart2:string;
  subHeaderTitle:string
}
const SectionHeader=(props:SectionHeaderProps)=>{
    const {headerTitlePart1,headerTitlePart2,subHeaderTitle}=props
return(
    <div className="flex flex-col text-center gap-[5px]">
    <p className="font-[500] text-[32px]  "><span className="text-[#0D6CDB]">{headerTitlePart1}</span>{" "}{headerTitlePart2}</p>
    <p className="text-[#646464] text-[20px]">{subHeaderTitle}</p>
</div>
)
}
export default SectionHeader