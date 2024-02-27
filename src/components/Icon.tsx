import React from "react";
import * as svgs from '../assets';

export type IconType = keyof typeof svgs;
export type Color =  `${string}` | 'currentColor';
export interface IconProps {
    name: IconType,
    className?: string,
    style?: React.CSSProperties,
    fill?: Color,
    stroke?: Color
}

const Icon = ({name, className, style, fill, stroke}: IconProps) => {
    return React.createElement(svgs[name], {
        className,
        style, 
        fill,
        stroke
    })
}

export default Icon;