import { useState } from "react";
import CloseIcon from "../assets/close.svg";
import ArrowIcon from '../assets/arrow.svg';

interface DropdownProps {
    title?: string,
    menu?: string [] | string,
    children: React.ReactNode,
}

const Dropdown = ({
    title='',
    children,}: DropdownProps) => {
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
            <a className="space-x-2.5 items-center text-start z-50 text-base transition-all ease-in-linear" onClick={showMenu}>
                <span className="text-black">{title}</span> 
                {visible ? 
                <img src={CloseIcon} className="transition-all rotate-90 text-white" alt="open dropdown" width={32} height={32} />
                :
                <img src={ArrowIcon} className="transition-all" alt="close dropdown" width={32} height={32} />
                }
            </a>
            {visible && <ul className="fixed text-xl rounded-lg z-[999] px-2 py-2 right-2 md:p-0 border bg-white box-shadow-xl mt-16 top-0 w-40 block">
                {children}
            </ul>}
            
        </li>
    )
}

export default Dropdown;