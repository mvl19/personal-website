import { useRef, useCallback, useEffect, useState, } from "react";

interface SwipeInfo {
    isSwiping: boolean,
    originX: number,
    transitionX: number,
}

interface CarouselProps {
  heading?: string,
  SENSITIVITY?: number,
  adjacent?: boolean,
  children: React.ReactNode,
}

const Carousel = <T extends HTMLDivElement>({heading="Heading", SENSITIVITY=25, adjacent=true, children} : CarouselProps) => {
  const FIRST_SLIDES = 1;
  const [slides, setSlides] = useState<Element[]>([]);
  const ref = useRef() as React.MutableRefObject<T>;
  const [current, setCurrent] = useState(FIRST_SLIDES);
  const [swipeInfo, setSwipeInfo] = useState<SwipeInfo>({
    isSwiping: false,
    originX: 0,
    transitionX: 0
  });

  const onMouseDown = useCallback((e: React.TouchEvent | React.MouseEvent | TouchEvent) => {
    e.preventDefault();
    if (swipeInfo.isSwiping) return;
    const currentPosition = (e as React.MouseEvent<HTMLDivElement>).clientX || Number((e as React.TouchEvent<HTMLDivElement>).touches[0].clientX);
    ref.current.style.removeProperty("transition");
    setSwipeInfo(state => ({
      ...state,
      isSwiping: true,
      originX: currentPosition
    }));
  }, [swipeInfo.isSwiping]);
  
  const onMouseMove = useCallback((e: MouseEvent) => {
    setSwipeInfo(state => ({
      ...state,
      transitionX: e.clientX - state.originX,
    }));
  }, []);
  
  const onTouchMove = useCallback((e: TouchEvent) => {
    setSwipeInfo(state => ({
      ...state,
      transitionX: Number(e.touches[0].clientX) - state.originX,
    }));
  }, []);
  
  const onMouseUp = useCallback((e: React.MouseEvent | MouseEvent | TouchEvent | React.TouchEvent) => {
    const currentPosition = (e as React.MouseEvent<HTMLDivElement>).clientX || ((e as React.TouchEvent<HTMLDivElement>).changedTouches[0].clientX);
    const delta = Math.floor((currentPosition - swipeInfo.originX) / ref.current!.clientWidth * 100);
    setSwipeInfo(state => ({
      ...state,
      isSwiping: false,
      transitionX: 0
    }));
    if ( delta < -SENSITIVITY ) {
      if (current === slides.length) return;
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.transform = `translateX(-${current}00%)`;
      setCurrent(current => current + 1);
    } else if ( delta > SENSITIVITY) {
      if (current === FIRST_SLIDES) return;
      ref.current.style.transition = 'all 0.2s ease-in-out';
      ref.current.style.transform = `translateX(-${current - 1}00%)`;
      setCurrent(current => current - 1);
    } else {
      ref.current.style.transition = 'all 0.2s ease-in-out'
    }
  }, [current, swipeInfo.originX]);

  const clicked = (event: React.MouseEvent) => {
    if(event.target as HTMLDivElement) {
        setCurrent(Number((event.target as HTMLDivElement).id));
    }
  };

  useEffect(()=>{
    setSlides([...ref.current.children])
  },[])

  useEffect(()=>{
    ref.current.style.transition = 'all 0.3s ease-in-out';
    ref.current.style.transform = `translateX(-${current-1}00%)`;
  },[current])

  useEffect(() => {
    if(swipeInfo.isSwiping) {
      document.addEventListener("mousemove", onMouseMove, {capture: true});
      document.addEventListener("mouseleave", onMouseUp, {capture: true});
      document.addEventListener("mouseup", onMouseUp, {capture: true});
      document.addEventListener("touchmove", onTouchMove, {capture: true});
      document.addEventListener("touchend", onMouseUp, {capture: true});
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove, {capture: true});
      document.removeEventListener("mouseleave", onMouseUp, {capture: true});
      document.removeEventListener("mouseup", onMouseUp, {capture: true});
      document.removeEventListener("touchmove", onTouchMove, {capture: true});
      document.removeEventListener("touchend", onMouseUp, {capture: true});
    }
  }, [swipeInfo.isSwiping]);
  
  useEffect(() => {
    const containerRef = ref.current;
    containerRef.addEventListener('touchstart', onMouseDown, { passive: false, capture: true });
    return () => containerRef.removeEventListener('touchstart', onMouseDown);
  }, [onMouseDown]);

    return (
        <section className={"bg-[#f7f7f7] text-black py-10 " + `${adjacent ? "px-0" : "px-20"}`}>
          <h2 className={"text-3xl font-bold text-center py-5"}>{heading}</h2>
            <div className="flex justify-center items-center overflow-hidden ">
              <div className="relative w-[262px] h-[262px] transition ease-out z-1">
                <div className="absolute flex w-full h-full t-0 l-0 z-1 " 
                style={{left: `${swipeInfo.transitionX}px`}}
                onMouseDown={onMouseDown} 
                ref={ref}>
                  {children}
                </div>
            </div>

            </div>
            <ul className="flex justify-center items-center">
              {slides.map((_, index) => 
              <li 
                className={"rounded-full m-4 cursor-pointer " + `${current === index+1 ? "bg-rose-400 w-6 h-6": "bg-[#e8e8e8] w-4 h-4"}`}
                onClick={clicked}
                id={String(index+1)}
                key={index}
              />)}
            </ul>
        </section>
    )
}

export default Carousel;