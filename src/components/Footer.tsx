const Footer = () => {
    const socials = [
        {
            desc: 'Github',
            href: 'https://github.com/mvl19'
        },
        {
            desc: 'LinkedIn',
            href: 'https://linkedin.com'
        }
    ]
    return (
        <footer className="sticky">
            <ul className="flex justify-around text-xl font-mono text-black">
                {socials.map((social, index) => 
                    <li key={index}><a href={social.href}>{social.desc}</a></li>)}
            </ul>
        </footer>
    )
}

export default Footer;