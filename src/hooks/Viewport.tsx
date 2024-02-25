import { useEffect, useState } from "react";
const useViewport = () => {
    const [visible, setVisible] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(()=>{
        const mql = window.matchMedia("(min-width: 768px)");
        const onChange = () => {
            setVisible(mql.matches);
        }
        mql.addEventListener('change', onChange);
        document.addEventListener('change', onChange);

        return () => document.removeEventListener('change', onChange);
    },[]);
    return visible;
}

export default useViewport;