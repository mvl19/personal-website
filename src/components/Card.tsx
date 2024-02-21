const Card = ({children, caption="", className, style={}}: {children: React.ReactNode, caption?:string, className?: string, style?: React.CSSProperties}) => {
    return (
        <div className={`text-center transition flex justify-center border shadow-xl rounded-lg flex-wrap 
        w-[162px] max-h-[162px] h-[162px] items-center block hover:opacity-60 text-black ` + className} style={style}>
            {children}
            <p className="flex items-center justify-center text-center flex text-base">
                {caption}
            </p>
        </div>
    )
}

export default Card;