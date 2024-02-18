import { useEffect } from "react";
import useIntersector from "../../hooks/Intersection";
const About = ({content="placeholder", heading="About Me", }: {content: string, heading: string, }) => {
    const [containerRef, onScreen] = useIntersector();
    useEffect(()=>{
        if(onScreen) {
            setTimeout(()=>{
                (containerRef.current!).classList.add('text-3xl');
            },100)
        }
    },[onScreen])
    return (
        <section className="text-black p-20" ref={containerRef}>
            <h1 className="text-2xl font-bold">{heading}</h1>
            <p>{content}</p>
        </section>
    )
}

export default About;