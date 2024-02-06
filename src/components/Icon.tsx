import React from "react";
import * as svgs from '../assets';

export type IconType = keyof typeof svgs;
export interface IconProps {
    name: IconType,
    className?: string,
    style?: React.CSSProperties,
}

const Icon = ({name, className, style}: IconProps) => {
    return React.createElement(svgs[name], {
        className,
        style
    })
}

export default Icon;