type ButtonDetails = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

interface ButtonProps extends ButtonDetails {
    label: string,
    href: string,
    internal?: boolean,
    margin?: number,
}

const Button = ({label, internal=false, href, margin=0, onClick=()=>{}} : ButtonProps) => {
    const classNames = `
    bg-[#3895ff] text-white text-center hover:opacity-70 transition-all min-w-256 rounded-lg px-8 py-4
     font-medium text-base inline-block cursor-pointer m-${margin}
    `
    if(internal) {
        return (
            <a className={classNames} onClick={onClick}>
                {label}
            </a>
        )
    }
    return (
        <a className={classNames} href={href} onClick={onClick}>
            {label}
        </a>
    )
}

export default Button;