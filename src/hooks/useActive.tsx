import { useEffect, useRef, useState } from "react";

const useActive = (query: string): string|null => {
    const [activeSection, setActiveSection] = useState<string | null>('home');
    const activeSectionRef = useRef() as React.MutableRefObject<NodeListOf<HTMLElement>>;

    useEffect(()=>{
        activeSectionRef.current = document.querySelectorAll(query);
        const onScroll = () => {
            const yOffset = window.scrollY;
            let active = null;
            activeSectionRef.current.forEach(section => {
                const sectionOffsetTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (yOffset >= sectionOffsetTop && yOffset < sectionOffsetTop + sectionHeight) {
                    active = section.id;
                }
            })
            setActiveSection(active);
        }
        window.addEventListener('scroll', onScroll);

        return ()=> window.removeEventListener('scroll', onScroll);
    },[]);

    return activeSection;

}

export default useActive;