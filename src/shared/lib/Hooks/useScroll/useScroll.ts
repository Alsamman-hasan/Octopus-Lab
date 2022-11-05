import { MutableRefObject, RefObject, useEffect, useRef } from "react";

export default function useScroll(
  parentRef: MutableRefObject<HTMLElement>,
  childRef: MutableRefObject<HTMLElement>,
  callback: () => void,
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("intersected");
        callback();
      }
    }, options);

    observer.current.observe(childRef?.current);
    const childCurr = childRef.current;
    return () => {
      observer?.current?.unobserve(childCurr);
    };
  }, [callback, childRef, parentRef]);
}
