import Button from "../components/Button";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Carousel from "../components/Carousel";
import About from "./About/About";

const Landing = () => {

    return (
        <>
        <section className="flex flex-wrap justify-around items-center gap-10 my-10">
            <div className="flex items-center w-[85%] sm:w-[85%] md:w-[85%] lg:w-[45%] xl:w-[45%]">
                <img className="h-[auto]" src="/dev.svg" alt="Developer Image" />
            </div>
            <div className="flex items-center flex-col ">
                <div className="font-mono text-xl lg:text-xl text-black tracking-tight">Technologies & Frameworks</div>
                <div className="flex flex-wrap justify-center items-center gap-8 pb-4 m-2" >
                    <Card className="animate-[fade_1s_ease-in-out]">
                        <Icon name="ReactIcon" className="h-12 w-12"/>
                        <Icon name="VueIcon" className="h-12 w-12" />
                        <Icon name="SvelteIcon" className="h-12 w-12" />
                    </Card>
                    <Card className="animate-[fade_1s_ease-in-out]">
                        <Icon name="ExpressIcon" className="h-12 w-12" />
                        <Icon name="FastApiIcon" className="h-12 w-12 m-2" />
                    </Card>
                    <Card className="animate-[fade_1s_ease-in-out]">
                        <Icon name="TypescriptIcon" className="h-12 w-12" />
                        <Icon name="PythonIcon" className="h-12 w-12" />
                    </Card>
                    
                </div>
                <Button label="Resume" href="/" />
            </div>
        </section>
        <Carousel />
        <About content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}/>
        </>
    )
}
export default Landing;