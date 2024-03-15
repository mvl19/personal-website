import { data } from "./data";

export interface FooterProps {
    isDarkMode: boolean,
}

const Footer = ({isDarkMode}:FooterProps) => {
    return (
        <footer className={`${isDarkMode ? "bg-[#242424]" : "bg-[#f7f7f7]"}`} id="contact">
            <ul className={`flex justify-around items-center text-base font-mono py-10 underline ${isDarkMode ? "text-white" : "text-black"}`}>
                {data.socials.map((social, index) => 
                    <li key={index}><a href={social.href}>{social.desc}</a></li>)}
            </ul>
        </footer>
    )
}

export default Footer;