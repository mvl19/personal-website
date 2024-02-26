import React from "react";
import * as svgs from '../assets';

export type IconType = keyof typeof svgs;
type Fill =  `${string}`
export interface IconProps {
    name: IconType,
    className?: string,
    style?: React.CSSProperties,
    fill?: Fill,
}

const Icon = ({name, className, style, fill}: IconProps) => {
    return React.createElement(svgs[name], {
        className,
        style, 
        fill
    })
}

export default Icon;