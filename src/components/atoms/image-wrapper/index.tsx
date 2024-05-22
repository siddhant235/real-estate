import { StaticImageData } from "next/image";
import Image from "next/image"
interface ImageWrapperProps {
    imgSrc: StaticImageData|string;
    size?: number;
    width?: number;
    height?: number
    alt: string;
    ObjectFit?:string;
    fill?:boolean
}
const ImageWrapper = (props: ImageWrapperProps) => {
    const { imgSrc, size, width, height, alt,ObjectFit,fill } = props
    if(fill){
        return (
            <Image fill={true} src={imgSrc} alt={alt}  />
        )
    }
    return (
        <Image objectFit={ObjectFit as any} src={imgSrc} alt={alt} width={width || size} height={height || size} />
    )
}

export default ImageWrapper