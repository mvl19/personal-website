interface ButtonProps {
    label: string,
    href: string,
    internal?: boolean,
}

const Button = ({label, internal=false, href} : ButtonProps) => {
    const classNames = `
    bg-[#3895ff] text-white text-center hover:opacity-70 transition-all min-w-256 rounded pl-8 pr-8 pt-4 pb-4
    after:content-['_>'] font-medium text-base inline-block cursor-pointer
    `
    if(internal) {
        return (
            <button className={classNames}>
                {label}
            </button>
        )
    }
    return (
        <a className={classNames} href={href}>
            {label}
        </a>
    )
}

export default Button;