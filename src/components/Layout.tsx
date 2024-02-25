import { useEffect, useState, createContext, useRef, } from "react";
import Dropdown from "./Dropdown";
import Footer from "../pages/Content/Footer";
import Icon from "./Icon";
import { Switch } from "./Switch";
import useViewport from "../hooks/Viewport";

export const ViewContext = createContext(false);
export const ThemeContext = createContext(true);

const Layout = ({children}:{children: React.ReactNode}) => {
    const visible = useViewport();
    const [activeSection, setActiveSection] = useState<string|null>('home');
    const activeSectionRef = useRef() as React.MutableRefObject<NodeListOf<HTMLElement>>;
    
    useEffect(()=>{
        activeSectionRef.current = document.querySelectorAll("[data-section]");
        const onScroll = () => {
            const yOffset = window.scrollY;
            let activeSection = null;
            activeSectionRef.current.forEach(section => {
                const sectionOffsetTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (yOffset >= sectionOffsetTop && yOffset < sectionOffsetTop + sectionHeight) {
                    activeSection = section.id;
                }
            })
            setActiveSection(activeSection);
        }
        window.addEventListener('scroll', onScroll);

        return ()=> window.removeEventListener('scroll', onScroll);
    },[])

    const links = [
        {title: 'Home',
        onClick: ()=>{
            window.scrollTo({top: 0, left:0, behavior:'smooth'});
        }
        },
        {title: 'About',
        onClick: ()=> {
            const section = document.querySelector( '#about' );
            section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }},
        {title:'Projects',
        onClick: ()=>{
            const section = document.querySelector( '#projects' );
            section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }
        },
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
                    <li className="border-transparent text-xl" key={index}><a className={"hover:cursor-pointer p-2 " + `${activeSection === link.title.toLowerCase() ? "bg-[#3895ff] text-white rounded ": ""}`} onClick={link.onClick}>{link.title}</a></li>
                    ) : <Dropdown>{links.map((link, index) => 
                        <li className="py-1 pl-4" key={index}><a onClick={link.onClick}>{link.title}</a></li>
                        )}</Dropdown>}
                    <Switch onClick={()=>{}}/>
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