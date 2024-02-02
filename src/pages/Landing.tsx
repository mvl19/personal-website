import Button from "../components/Button";
import { ExpressLogo, PythonLogo, ReactLogo, SvelteLogo, TypescriptLogo } from "../assets/Logo";
import Card from "../components/Card";

const Landing = () => {
    return (
        <div className="flex flex-wrap">
            <img className="flex" src="/dev.svg" alt="Developer Image" />
            <div className="flex items-center flex-col justify-center grow">
                <div className="font-mono text-3xl">Technologies & Frameworks</div>
                <div className="flex ">
                    <Card caption="Frontend">
                        <ReactLogo />
                        <SvelteLogo />
                    </Card>
                    <Card caption="Backend">
                        <ExpressLogo />
                    </Card>
                    <Card caption="Languages">
                        <TypescriptLogo />
                        <PythonLogo />
                    </Card>
                    
                </div>
                <Button label="Resume" href="/" />
                
            </div>
        </div>
    )
}
export default Landing;