import Button from "../components/Button";
import Display from "../components/Display";
import Tech from "./Content/Tech";

const About = ({content="placeholder", heading="About Me", }: {content: string, heading?: string, }) => {
    return (
        <section className="flex flex-wrap text-black p-20" id="about" data-section>
            <h1 className="text-4xl font-bold">{heading}</h1>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">{content}</p>
            <div className="flex items-center justify-center w-full pt-10">
                <Button label="Resume" href="https://docs.google.com/document/d/16QLtDkgpv_6oY2ZBv5T7UNW2vXs5-Hu2/edit" />
            </div>
        </section>
    )
}


const Landing = () => {
    return (
        <>
        <Tech />
        <Display>
            {[0,1,2,3].map(c => <Display.ResponsiveCard iconName="AirflowIcon" caption={c} key={c} />)}
        </Display>
        <About content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}/>
        </>
    )
}
export default Landing;