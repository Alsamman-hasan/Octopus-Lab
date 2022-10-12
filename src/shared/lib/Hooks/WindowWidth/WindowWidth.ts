import { useCallback, useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
  top: number;
}

export const useWindowSize = (events: "scroll" | "resize"): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    top: 0,
  })

  const handleSize = useCallback(() => setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
    top: window.pageYOffset
  }), []);

  useEffect(() => {
    handleSize();
    window.addEventListener(events, handleSize);
    return () => window.removeEventListener(events, handleSize);
  }, [events, handleSize]);

  return windowSize
}




// export const useWinWidth = () => {
//   const [winWidth, setWinWidth] = useState<number>(0)
//   const onWinWigth = useCallback(() => setWinWidth(Math.round(window.innerWidth)), []);
//   useEffect(() => {
//     onWinWigth();
//     window.addEventListener("resize", onWinWigth);
//     return () => window.removeEventListener("resize", onWinWigth);
//   }, [onWinWigth]);
//   return winWidth;
// }

// export const useScrollHook = () => {
//   const [scroll, setScroll] = useState(0);
//   const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
//   useEffect(() => {
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [onScroll]);
//   return scroll;
// }
