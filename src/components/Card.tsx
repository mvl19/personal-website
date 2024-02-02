const Card = ({children, caption=""}: {children: React.ReactNode, caption:string}) => {
    return (
        <div className="text-center flex-col p-4 m-4 transition flex justify-around border shadow-xl rounded-lg flex-wrap w-[162px] max-h-[162px] h-[162px] overflow-hidden items-center block">
            <div className="flex items-center justify-center">
                {children}
            </div>
            <p className="flex items-center justify-center flex text-xl md:text-base">
                {caption}
            </p>
        </div>
    )
}

export default Card;