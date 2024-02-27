import { ThemeContext } from "./Layout";
import { useContext } from "react";

interface Card {
    children: React.ReactNode,
    caption?: string,
    className?: string,
    style?: React.CSSProperties
}

const Card = ({children, caption="", className, style={}}: Card) => {
    const isDarkMode = useContext(ThemeContext);

    return (
        <div className={`text-center transition flex justify-center border rounded-lg flex-wrap 
        w-[162px] max-h-[162px] h-[162px] items-center block hover:opacity-60 text-black ${isDarkMode ? "bg-[#282828] border-0" : "bg-white shadow-xl"} ` + className} style={style}>
            {children}
            <p className="flex items-center justify-center text-center flex text-base">
                {caption}
            </p>
        </div>
    )
}

export default Card;