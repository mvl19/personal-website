import { useEffect, useState, useRef } from "react";

interface Item {
    styles: React.CSSProperties,
    player: {[key: string]: unknown}
}


interface CarouselProps {
    items?: Item[],
    boxSize?: number | string,
}

const Carousel = <T extends HTMLDivElement> ({items, boxSize=250}: CarouselProps) => {
    const totalItems = 3;

    const [current, setCurrent] = useState(0);
    const ref = useRef<T | null>(null);

    const next = () => {
        if (current >= totalItems) return
        else setCurrent(current + 1);
    }

    const prev = () => {
        if (current === 0) return
        else setCurrent(current - 1);
    }

    const clicked = (event: React.MouseEvent) => {
        if(event.target as T) {
            setCurrent(Number((event.target as T).id))
        }
    }
    
    useEffect(()=>{
        if(ref.current) {
            ref.current.style.transition = 'all 0.2s ease-in-out';
            ref.current.style.transform = `translateX(-${current}00%)`;
        }
    }, [current]);
    
    return (
        <section className="flex justify-center items-center flex-col overflow-hidden bg-gray-200 p-20">
            <div className={`w-[${boxSize}px]`} >
                <div className="flex " ref={ref}>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[${boxSize}px] h-[${boxSize}px]`}>0</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[${boxSize}px] h-[${boxSize}px]`}>1</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[${boxSize}px] h-[${boxSize}px]`}>2</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[${boxSize}px] h-[${boxSize}px]`}>3</div>
                </div>
            </div>
            <div className="flex">
                {[0,1,2,3].map(n => 
                <div className={`w-8 h-8 rounded-full bg-[#e0e0e0] m-4 cursor-pointer ${n === current && 'bg-rose-400'}`}
                onClick={clicked}
                id={String(n)}
                key={n}
                />)}
            </div>
        </section>
    )
}

export default Carousel;