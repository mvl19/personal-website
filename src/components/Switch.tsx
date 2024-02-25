import Icon from "./Icon";
import { useState } from "react";

interface Switch {
    onClick: () => void,
}

const Switch = ({onClick}: Switch) => {

    const [mode, setMode] = useState(true);
    const clickHandler = () => {
        setMode(!mode);
        onClick();
    }

    return (
        <button className={`relative block rounded-full h-[22px] w-[40px] border border-[#d9d9d9] cursor-pointer bg-gray-100
        p-0 transition-all ${mode ? "bg-gray-100" : "bg-slate-700"}`} aria-label="toggle light or dark mode" onClick={clickHandler}>
            <span className={"absolute top-[1px] left-[1px] rounded-full w-[18px] h-[18px] transition-all duration-150 ease-in-out shadow-xl " + 
            `${mode ? "bg-[#ffffff]" : "bg-[#1a1a1a]"}`} 
            style={{transform: `${mode ? "" : "translate(18px)"}`}}>
                <span className="relative block w-[18px] h-[18px] rounded-full overflow-hidden" >
                    <Icon name="SunIcon" className={"h-[12px] w-[12px] absolute top-[3px] left-[3px]" + ` ${mode ? "opacity-100": "opacity-0"}`} />
                    <Icon name="NightIcon" className={"h-[12px] w-[12px] absolute top-[3px] left-[3px]" + ` ${mode ? "opacity-0": "opacity-100"}`} /> 
                </span>
            </span>
        </button>
    )
}

export { Switch }