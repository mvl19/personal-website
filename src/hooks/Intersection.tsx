import { useEffect, useRef, useState } from "react";

const useIntersector = <T extends HTMLDivElement> () : [React.RefObject<T>, boolean] => {
    const containerRef = useRef<T | null>(null);
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