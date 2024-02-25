import Icon from "./Icon"

interface Switch {
    onClick: () => void,
}

const Switch = ({onClick}: Switch) => {
    return (
        <button className="relative block rounded-full h-[22px] w-[40px] border border-[#d9d9d9] cursor-pointer bg-gray-100
        p-0 transition-all " aria-label="toggle light or dark mode" onClick={onClick}>
            <span className="absolute bg-[#ffffff] top-[1px] left-[1px] rounded-full w-[18px] h-[18px] ">
                <span className="relative block w-[18px] h-[18px] rounded-full overflow-hidden">
                    <Icon name="SunIcon" className="h-[12px] w-[12px] absolute top-[3px] left-[3px]" />
                </span>
                
            </span>
        </button>
    )
}

export { Switch }