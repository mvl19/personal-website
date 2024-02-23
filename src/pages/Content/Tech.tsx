import Card from "../../components/Card";
import Icon from "../../components/Icon";
const Tech = () => {
    return (
        <section className="lg:grid lg:grid-cols-2 sm:flex sm:justify-center sm:flex-wrap items-center gap-10 my-20" data-section id="home">
            <div className="flex items-center p-5">
                <Icon name="DevIcon" className="pt-10 animate-[popout_0.5s_ease-in-out]" />
            </div>
            <div className="flex flex-wrap items-center flex-col">
                <h3 className="text-2xl text-black tracking-medium">Technologies & Frameworks</h3>
                <div className="flex flex-wrap justify-center items-center gap-8 py-8 m-2 grow shrink" >
                    <Card className="animate-[fadeup_1s_ease-in-out]">
                        <Icon name="ReactIcon" className="h-12 w-12"/>
                        <Icon name="VueIcon" className="h-12 w-12" />
                        <Icon name="SvelteIcon" className="h-12 w-12" />
                    </Card>
                    <Card className="animate-[fadeup_1.5s_ease-in-out]">
                        <Icon name="ExpressIcon" className="h-12 w-12" />
                        <Icon name="FastApiIcon" className="h-12 w-12 m-2" />
                    </Card>
                    <Card className="animate-[fadeup_2.5s_ease-in-out]">
                        <Icon name="TypescriptIcon" className="h-12 w-12" />
                        <Icon name="PythonIcon" className="h-12 w-12" />
                    </Card>
                    <Card className="animate-[fadeup_1.5s_ease-in-out]">
                        <Icon name="FirebaseIcon" className="h-12 w-12" />
                        <Icon name="SparkIcon" className="h-12 w-12" />
                        <Icon name="PostgreIcon" className="h-12 w-12" />
                    </Card>
                    <Card className="animate-[fadeup_2.5s_ease-in-out]">
                        <Icon name="KafkaIcon" className="h-12 w-12" />
                        <Icon name="RabbitIcon" className="h-12 w-12" />
                    </Card>
                    <Card className="animate-[fadeup_3.5s_ease-in-out]">
                        <Icon name="DockerIcon" className="h-12 w-12" />
                        <Icon name="AirflowIcon" className="h-12 w-12" />
                        <Icon name="PostmanIcon" className="h-12 w-12" />
                    </Card>

                </div>
            </div>
        </section>
    )
}

export default Tech;
