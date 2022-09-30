import { useCallback, useEffect, useState } from "react";

export const useScrollHook = () => {
  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return scroll;
}
