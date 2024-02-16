const Card = ({children, caption="", className}: {children: React.ReactNode, caption?:string, className?: string}) => {
    return (
        <div className={`text-center transition flex justify-center border shadow-xl rounded-lg flex-wrap 
        w-[162px] max-h-[162px] h-[162px] items-center block hover:opacity-60 text-black ` + className}>
            {children}
            <p className="flex items-center justify-center text-center flex text-base">
                {caption}
            </p>
        </div>
    )
}

export default Card;