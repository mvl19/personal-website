import { useEffect, useState, createContext } from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Icon from "./Icon";

export const ViewContext = createContext(false);
export const ThemeContext = createContext(true);

const Layout = ({children}:{children: React.ReactNode}) => {
    const [visible, setVisible] = useState(window.matchMedia("(min-width: 768px)").matches);
    // const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme:dark)").matches);

    // const themeClick = () => {
    //     setTheme(!theme);
    // }

    useEffect(()=>{
        const mql = window.matchMedia("(min-width: 768px)");
        const onChange = () => {
            setVisible(mql.matches);
        }
        mql.addEventListener('change', onChange);
        document.addEventListener('change', onChange);

        return () => document.removeEventListener('change', onChange);
    },[]);

    // useEffect(()=>{
    //     const prefersColor = window.matchMedia("(prefers-color-scheme: dark)");
    //     const onChange = (e) => {
    //         setTheme(prefersColor.matches);
    //     }
    //     prefersColor.addEventListener('change', onChange);
    //     document.addEventListener('change', onChange);

    //     return () => document.removeEventListener("change", onChange)
    // },[]);

    const links = [
        {title: 'Home',
        href: '',},
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
        <header className={"flex items-center justify-between h-16 w-screen font-sans tracking-wide text-black border border-b-gray-200 fixed top-0 z-[999] bg-white" }>
            <div className="flex pl-4 items-center gap-4 grow shrink">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <Icon name="HomeIcon" className="w-[32px] h-[32px]" />
                </div>
            </div>
            <nav className={"text-sm md:text-base whitespace-normal shrink " + (visible ? "grow" : "")}>
                <ul className={(visible ? "flex justify-around items-center pr-4 text-xl " : "flex justify-end ") + "bg-white"}>
                    {visible ? links.map((link, index) => 
                    <li className="hover:border-b-[#dc2626] border-2 items-center border-transparent text-xl" key={index}><a href={link.href}>{link.title}</a></li>
                    ) : <Dropdown>{links.map((link, index) => 
                        <li className="py-1 pl-4" key={index}><a href={link.href}>{link.title}</a></li>
                        )}</Dropdown>}
                    {/* <li className="hover:bg-gray-400 rounded-full" onClick={themeClick}><Icon name="CloseIcon" className="h-[32px] w-[32px]"/></li> */}
                </ul>
            </nav>
        </header>
        <ViewContext.Provider value={visible}>
            {children}
        </ViewContext.Provider>
        <Footer />
        </>
    )
}
export default Layout;