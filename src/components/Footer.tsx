const Footer = () => {
    const socials = [
        {
            desc: 'Github',
            href: 'https://github.com/mvl19'
        },
        {
            desc: 'LinkedIn',
            href: 'https://linkedin.com'
        },
        {
            desc: 'Youtube',
            href: 'https://youtube.com'
        }
    ]
    return (
        <footer className="">
            <ul className="flex justify-around items-center text-base font-mono text-black my-10 underline">
                {socials.map((social, index) => 
                    <li key={index}><a href={social.href}>{social.desc}</a></li>)}
            </ul>
        </footer>
    )
}

export default Footer;