import Button from "../components/Button";
import { Display } from "../components/Display";
import Tech from "./Content/Tech";
import { useContext } from "react";
import { ThemeContext } from "../components/Layout";
import { data } from "./Content/data";

export interface AboutProps {
    isDarkMode: boolean|string,
    heading?: string,
    content: string,
}

const About = ({content="placeholder", heading="About Me", isDarkMode}: AboutProps) => {
    
    return (
        <section className={`flex flex-wrap py-20 px-10 ${isDarkMode ? "bg-[#1a1a1a] text-[#3ccf8d]" : "text-black"}`} id="about" data-section>
            <h1 className="text-4xl my-5 font-bold">{heading}</h1>
            <p className={`text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl ${isDarkMode && "text-white"}`}>{content}</p>
            <div className="flex items-center justify-center w-full pt-10">
                <Button label="Resume" href="https://docs.google.com/document/d/16QLtDkgpv_6oY2ZBv5T7UNW2vXs5-Hu2/edit" />
            </div>
        </section>
    )
}


const Landing = () => {
    const isDarkMode = useContext(ThemeContext);
    return (
        <>
        <Tech isDarkMode={isDarkMode}/>
        <Display isDarkMode={isDarkMode} heading="Projects" id="projects">
            {/* {[0,1,2,3].map(c => <Display.ResponsiveCard iconName="VueIcon" className={`${isDarkMode ? "bg-slate-700" : "bg-white"}`} caption={c} key={c} />)} */}
            {data.projects.map((project, index) => <Display.ResponsiveCard iconName={project.icon} className={`${isDarkMode ? "bg-slate-700" : "bg-white"} text-wrap`} caption={project.caption} key={index} />)}
        </Display>
        <About content={data.about} isDarkMode={isDarkMode}/>
        </>
    )
}
export { Landing }