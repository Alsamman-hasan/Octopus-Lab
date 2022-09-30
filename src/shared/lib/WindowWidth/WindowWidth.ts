import { useCallback, useEffect, useState } from "react";

export const useWinWidth = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const onWinWigth = useCallback(() => setWinWidth(Math.round(window.innerWidth)), []);
  useEffect(() => {
    onWinWigth();
    window.addEventListener("resize", onWinWigth);
    return () => window.removeEventListener("resize", onWinWigth);
  }, [onWinWigth]);
  return winWidth;
}
