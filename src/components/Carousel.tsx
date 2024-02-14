import { useEffect, useState, useRef } from "react";

interface Item {
    styles: React.CSSProperties,
    player: {[key: string]: unknown}
}

const CarouselCard = ({children, description, boxSize=250}: {children?: React.ReactNode, description: string, boxSize: number|string}) => {
    return (
        <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[${boxSize}px] h-[${boxSize}px]`}>
            {children}
            <p className="text-xl">{description}</p>
        </div>
    )
}

interface CarouselProps {
    items?: Item[],
}

const Carousel = <T extends HTMLDivElement> ({items}: CarouselProps) => {
    const totalItems = 3;
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<T | null>(null);
    const initial = useRef<number|null>(null);
    const final = useRef<number|null>(null);
    const posX2 = useRef(0);
    const posX1 = useRef(0);
    const threshold = 20;

    const next = () => {
        if (current >= totalItems) return
        else setCurrent(current + 1);
    }

    const prev = () => {
        if (current === 0) return
        else setCurrent(current - 1);
    }

    const touchStart = (event: React.TouchEvent) => {
        if(containerRef.current) {
            posX1.current = event.touches[0].clientX;
            initial.current = posX1.current;
        }
    }

    const touchMove = (event: React.TouchEvent) => {
        if(containerRef.current) {
            posX2.current = posX1.current - event.touches[0].clientX;
            posX1.current = event.touches[0].clientX;
            // containerRef.current.style.left = (containerRef.current.getBoundingClientRect().left - (posX2.current)/3) + "px"
        }
    }

    const touchEnd = () => {
        if(containerRef.current) {
            final.current = posX1.current;
            if(final.current - initial.current! < -threshold) {
                next();
            } else if(final.current - initial.current! > threshold) {
                prev();
            } else {
                containerRef.current.style.left = `${initial.current}px`
            }

        }
    }

    const clicked = (event: React.MouseEvent) => {
        if(event.target as T) {
            setCurrent(Number((event.target as T).id))
        }
    }

    useEffect(()=>{
        if(containerRef.current) {
            containerRef.current.style.transition = 'all 0.2s ease-in-out';
            const translate = Number(current + '00') + 15;
            containerRef.current.style.transform = `translateX(-${translate}%)`;
        }
    }, [current]);

    return (
        <section className="flex justify-center items-center flex-col overflow-hidden  bg-[#f7f7f7] p-20" >
            <div className={`w-[250px] `} > 
                <div className="flex relative gap-5" ref={containerRef} onTouchMove={touchMove} onTouchStart={touchStart} onTouchEnd={touchEnd} >
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[250px] h-[250px]`}>0</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[250px] h-[250px]`}>1</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[250px] h-[250px]`}>2</div>
                    <div className={`flex justify-center items-center rounded-full border border-black shrink-0 w-[250px] h-[250px]`}>3</div>
                </div>
            </div>
            <div className="flex">
                {[0,1,2,3].map(n => 
                <div 
                    className={`w-8 h-8 rounded-full bg-[#e0e0e0] m-4 cursor-pointer ${n === current && 'bg-rose-400'}`}
                    onClick={clicked}
                    id={String(n)}
                    key={n}
                />)}
            </div>
        </section>
    )
}

export default Carousel;