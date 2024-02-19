import Button from "../components/Button";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Carousel from "../components/Carousel";

const CarouselCard = ({caption, onClick=()=>{}}: {caption: string|number, onClick?: ()=>void}) => {
    return (
        <div className="flex justify-center items-center shrink-0 w-full h-full flex-col" onClick={onClick}>
            <Icon name="VueIcon" className="rounded-full object-cover bg-white mx-2"/>
            <div>{caption}手がふさがっていても</div>
        </div>
    )
}

const About = ({content="placeholder", heading="About Me", }: {content: string, heading?: string, }) => {
    return (
        <section className="text-black p-20">
            <h1 className="text-4xl font-bold">{heading}</h1>
            <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">{content}</p>
        </section>
    )
}


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
        <Carousel>
            {[0,1,2,3].map(c => <CarouselCard caption={c} key={c} />)}
        </Carousel>
        <About content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}/>
        </>
    )
}
export default Landing;