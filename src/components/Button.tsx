interface ButtonProps {
    label: string,
    href: string,
    internal?: boolean,
    margin?: number,
}

const Button = ({label, internal=false, href, margin=0} : ButtonProps) => {
    const classNames = `
    bg-[#3895ff] text-white text-center hover:opacity-70 transition-all min-w-256 rounded px-8 py-4
    after:content-['_>'] font-medium text-base inline-block cursor-pointer m-${margin}
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