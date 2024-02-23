import { useContext } from "react";
import { ViewContext } from "../Layout";
import Slider from "./Slider";
import Icon from "../Icon";
import { IconType } from "../Icon";
import useIntersector from "../../hooks/Intersection";

interface DisplayProps {
    children: React.ReactNode,
    heading?: string,
}

interface ResponsiveCard {
    caption: string|number,
    onClick?: ()=> void,
    iconName: IconType,
}

export const ResponsiveCard = ({caption, onClick=()=>{}, iconName} : ResponsiveCard) => {
    const [observeRef, onScreen] = useIntersector();
    return (
        <div className="flex justify-center items-center shrink-0 w-full h-full md:shrink flex-col hover:opacity-70 " onClick={onClick} ref={observeRef}>
            <Icon name={iconName} className={"rounded-full object-cover bg-white mx-2 " + `${onScreen && "animate-[fadeup_1s_ease-in-out]"}`}/>
            <div >{caption}</div>
        </div>
    )
}

const Display = ({children, heading="Heading"}: DisplayProps) => {
    const visible = useContext(ViewContext);
    if (visible) {
        return (
            <section className="bg-[#f7f7f7] flex-col px-8">
                <h2 className={"text-3xl font-bold text-center pt-4"}>{heading}</h2>
                <div className="flex items-center justify-between h-[420px] gap-4">
                    {children}
                </div>
            </section> 
        )
    }
    return (
        <Slider heading={heading}>
            {children}
        </Slider>
    )
}

Display.ResponsiveCard = ResponsiveCard;

export default Display;