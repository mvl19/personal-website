import { useEffect, useState } from "react"
const useTheme = (): [boolean, React.Dispatch<boolean>] => {
    const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme:dark)").matches);

    useEffect(()=>{
        const prefersColor = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => {
            setTheme(prefersColor.matches);
        }
        prefersColor.addEventListener('change', onChange);
        document.addEventListener('change', onChange);

        return () => document.removeEventListener("change", onChange)
    },[]);

    return [theme, setTheme];
}

export default useTheme;