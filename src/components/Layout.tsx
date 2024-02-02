import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const Layout = ({children}:{children: React.ReactNode}) => {
    const [visible, setVisible] = useState(window.matchMedia("(min-width: 768px)").matches);
    useEffect(()=>{
        const mql = window.matchMedia("(min-width: 768px)");
        const onChange = () => {
            setVisible(mql.matches);
        }
        mql.addEventListener('change', onChange);
        document.addEventListener('change', onChange);

        return () => document.removeEventListener('change', onChange);
    },[])

    const links = [
        {title: 'About',
        href: '/about'},
        {title:'Projects',
        href: '/projects',
        },
        {title:'Contact',
        href: '/contact'
        }
    ]
    
    return (
        <>
        <header className="flex items-center justify-between h-16 w-screen font-mono text-black border border-b-gray-200">
            <div className="flex pl-4 items-center gap-4 grow shrink">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <img src="/vite.svg" alt="home" width={24} height={24} onClick={()=>{}} />
                </div>
            </div>
            <nav className={"text-sm md:text-base overflow-hidden whitespace-normal shrink " + (visible ? "grow" : "")}>
                <ul className={(visible ? "flex justify-around pr-4" : "justify-end")}>
                    {visible ? links.map((link, index) => 
                    <li className="hover:border-b-[#dc2626]  border-2 items-center border-transparent" key={index}><a href={link.href}>{link.title}</a></li>
                    ) : <Dropdown>{links.map((link, index) => 
                        <li className="hover:border-b-[#dc2626] border-2 border-transparent" key={index}><a href={link.href}>{link.title}</a></li>
                        )}</Dropdown>}
                </ul>
            </nav>
        </header>
        {children}
        </>
    )
}
export default Layout;