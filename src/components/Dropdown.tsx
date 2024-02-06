import { useState } from "react";

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
        <li className="menu list-none box-border min-w-20 max-w-40 cursor-pointer">
            <a className="space-x-2.5 items-center text-start z-50 text-base transition-all ease-in-linear" onClick={showMenu}>
                <span className="text-black">{title}</span> 
                {visible ? 
                <img className="transition-all rotate-90" src="/close.svg" alt="arrow dropdown" width={24} height={24}/>
                :<img className="transition-all" src="/arrow.svg" alt="arrow dropdown" width={24} height={24}/>
                }
            </a>
            {visible ?<ul className="absolute pl-0 text-start border border-rounded">
                {children}
            </ul> : <></>}
            
        </li>
    )
}

export default Dropdown;