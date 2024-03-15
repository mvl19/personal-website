import { IconType } from "../../components/Icon";

interface data {
    socials: { desc: string, href:string}[],
    links: { title : string, onClick: ()=> void}[],
    about: string,
    projects: {
        icon: IconType,
        caption: string,
    }[]
}

export const data: data = {
    socials: [
        {
            desc: 'Github',
            href: 'https://github.com/mvl19'
        },
        {
            desc: 'LinkedIn',
            href: 'https://linkedin.com'
        },
    ],
    about : "I am an enthusiastic and dedicated developer with a passion for building solutions that make a difference. Committed to continuous learning and improvement, I have set out in my journey of development to solve real life problems through robust engineering and intuitive system designs. I am excited about the future of technology and the endless plethora of ways I can contribute to it. Thank you for visiting my website.",
    links: [
        {title: 'Home',
        onClick: ()=>{
            window.scrollTo({top: 0, left:0, behavior:'smooth'});
        }
        },
        {title:'Projects',
        onClick: ()=>{
            const section = document.querySelector( '#projects' );
            section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }
        },
        {title: 'About',
        onClick: ()=> {
            const section = document.querySelector( '#about' );
            section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }},
    ],
    projects: [
        {
            icon: "PrometheusIcon",
            caption: "A microservice built using FastAPI to download and send CSVs, monitored using Prometheus."
        },
        {
            icon: "DashboardIcon",
            caption: "Simple Dashboard App to visualize data."
        },
    ]
}