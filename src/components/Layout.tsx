import { createContext, } from "react";
import Dropdown from "./Dropdown";
import Footer from "../pages/Content/Footer";
import Icon from "./Icon";
import { Switch } from "./Switch";
import useViewport from "../hooks/useViewport";
import useActive from "../hooks/useActive";
import useTheme from "../hooks/useTheme";

export const ViewContext = createContext(false);
export const ThemeContext = createContext<boolean|string>(false);

const Layout = ({children}:{children: React.ReactNode}) => {
    const visible = useViewport();
    const [isDarkMode, setIsDarkMode] = useTheme();
    const activeSection = useActive('[data-section]');

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

    const onSwitchClick = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    }
    
    return (
        <>
        <header className={"flex items-center justify-between h-16 w-screen font-sans tracking-wide border border-t-0 border-x-0 fixed top-0 z-[999] transition-colors " 
        + `${isDarkMode ? 'bg-[#1a1a1a] border-slate-700 text-white' : 'bg-white border-gray-200 text-black'}`}>
            <div className="flex pl-4 items-center gap-4 grow shrink">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <Icon name="HomeIcon" className="w-[32px] h-[32px]" />
                </div>
            </div>
            <nav className={"text-sm md:text-base whitespace-normal shrink " + (visible ? "grow" : "")}>
                <ul className={(visible ? "flex justify-around items-center pr-4 text-xl " : "flex justify-end ") }>
                    {visible ? links.map((link, index) => 
                    <li className="border-transparent text-xl" key={index}><a className={"hover:cursor-pointer p-2 " + `${activeSection === link.title.toLowerCase() ? "text-[#42b883] rounded ": ""}`} onClick={link.onClick}>{link.title}</a></li>
                    ) : <Dropdown isDarkMode={isDarkMode}>{links.map((link, index) => 
                        <li className="py-1 pl-4" key={index}><a onClick={link.onClick}>{link.title}</a></li>
                        )}
                        <Switch onClick={onSwitchClick} mode={isDarkMode} />
                        </Dropdown>}
                    {visible && <Switch onClick={onSwitchClick} mode={isDarkMode} />}
                </ul>
            </nav>
        </header>
        <ThemeContext.Provider value={isDarkMode}>
            <ViewContext.Provider value={visible}>
                {children}
            </ViewContext.Provider>
        </ThemeContext.Provider>
        <Footer />
        </>
    )
}
export default Layout;