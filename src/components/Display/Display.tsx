import { useContext } from "react";
import { ViewContext } from "../Layout";
import Slider from "./Slider";
import { IconType, Icon } from "../Icon";
import useIntersector from "../../hooks/useIntersector";
type DisplayDetails = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface DisplayProps extends DisplayDetails{
    children: React.ReactNode,
    heading?: string,
    isDarkMode?: boolean|string,
}

interface ResponsiveCard {
    caption: string|number,
    onClick?: ()=> void,
    iconName: IconType,
    className?: string,
}

const ResponsiveCard = ({caption, onClick=()=>{}, iconName, className} : ResponsiveCard) => {
    const [observeRef, onScreen] = useIntersector();
    return (
        <div className="flex justify-center items-center shrink-0 w-full h-full md:shrink flex-col hover:opacity-70 " onClick={onClick} ref={observeRef}>
            <Icon name={iconName} className={`rounded-full object-cover mx-2 ${onScreen && "animate-[fadeup_1s_ease-in-out] "}` + className}/>
            <div className={`lg:text-xl lg:mx-20 lg:my-10 text-center ${onScreen && "text-sm m-5"}`}>{caption}</div>
        </div>
    )
}

const Display = ({children, heading="Heading", isDarkMode, id}: DisplayProps) => {
    const visible = useContext(ViewContext);
    if (visible) {
        return (
            <section className={`${isDarkMode ? "bg-[#242424] text-white" : "bg-[#f7f7f7] text-black"} flex-col px-8`} id={id} data-section>
                <h2 className={"text-3xl font-bold text-center pt-4 transition-colors " + `${isDarkMode && "text-[#3ccf8d]"}`}>{heading}</h2>
                <div className="flex items-center justify-between h-[420px] gap-4">
                    {children}
                </div>
            </section> 
        )
    }
    return (
        <Slider heading={heading} id={id!}>
            {children}
        </Slider>
    )
}

Display.ResponsiveCard = ResponsiveCard;

export { Display, ResponsiveCard }