import { useEffect, useRef, useState } from "react";

const useIntersector = () => {
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [onScreen, setOnScreen] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) => {
            setOnScreen(entry.isIntersecting); 
        })
        observer.observe(containerRef.current!)
        return () => observer.disconnect();
    },[])

    return [containerRef, onScreen]
}

export default useIntersector;