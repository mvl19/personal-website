import Button from "../components/Button";
import Card from "../components/Card";
import { useEffect } from "react";
import useIntersector from "../hooks/Intersection";
import Icon from "../components/Icon";
import Carousel from "../components/Carousel";

const Landing = () => {
    const [ref, onScreen] = useIntersector();
    useEffect(()=>{
        if(onScreen) {
            setTimeout(()=>{
                (ref.current!).classList.add('text-3xl');
            }, 1000)
        }
    }, [onScreen])

    return (
        <>
        <section className="flex flex-wrap justify-around items-center gap-10 my-10">
            <div className="flex items-center w-[85%] sm:w-[85%] md:w-[85%] lg:w-[45%] xl:w-[45%]">
                <img className="h-[auto]" src="/dev.svg" alt="Developer Image" />
            </div>
            <div className="flex items-center flex-col ">
                <div className="font-mono text-xl lg:text-xl text-black tracking-tight">Technologies & Frameworks</div>
                <div className="flex flex-wrap justify-center items-center gap-8 pb-4 m-5" >
                    <Card>
                        <Icon name="ReactIcon" className="h-12 w-12"/>
                        <Icon name="VueIcon" className="h-12 w-12" />
                        <Icon name="SvelteIcon" className="h-12 w-12" />
                    </Card>
                    <Card>
                        <Icon name="ExpressIcon" className="h-12 w-12" />
                        <Icon name="FastApiIcon" className="h-12 w-12 m-2" />
                    </Card>
                    <Card>
                        <Icon name="TypescriptIcon" className="h-12 w-12" />
                        <Icon name="PythonIcon" className="h-12 w-12" />
                    </Card>
                    
                </div>
                <Button label="Resume" href="/" />
                <div id='#change' ref={ref}>Ref</div>
            </div>
        </section>
        <Carousel />
        </>
    )
}
export default Landing;