import { useState } from "react";
import { Icon } from "./Icon";

interface DropdownProps {
    title?: string,
    menu?: string [] | string,
    children: React.ReactNode,
    isDarkMode: boolean,
}

const Dropdown = ({
    title='',
    children,
    isDarkMode}: DropdownProps) => {
    const [visible, setVisible] = useState(false);

    const closeMenu = (event: MouseEvent) => {
        event.preventDefault();
        if(!(event.target as HTMLElement).closest('.menu')) {
            setVisible(false);
            document.removeEventListener('click', (event) => closeMenu(event));
        }
    };
    
    const showMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setVisible(!visible);
        document.addEventListener('click', (event) => closeMenu(event));
    };

    return (
        <li className="flex items-center justify-center menu list-none min-w-20 max-w-40 cursor-pointer align-self-center">
            <a className="flex items-center text-start z-50 text-base transition-all ease-in-linear" onClick={showMenu}>
                <span className="text-black">{title}</span> 
                <Icon name="CloseIcon" className={`h-[32px] w-[32px] transition-transform ${visible ? "" : "hidden"}`} fill="currentColor" />
                <Icon name="ArrowIcon" className={`h-[32px] w-[32px] transition-transform ${visible ? "hidden" : ""}`} fill="currentColor"/>
            </a>
            <ul className={`text-xl rounded-lg z-[99] px-2 py-2 right-2 md:p-0 border box-shadow-xl mt-16 top-0 
            w-40 block ${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"} ${visible ? "fixed" : "hidden"}`}>
                {children}
            </ul>
            
        </li>
    )
}

export default Dropdown;