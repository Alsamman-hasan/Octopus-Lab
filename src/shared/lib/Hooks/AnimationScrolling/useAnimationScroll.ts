import { useState, useRef, useCallback, useEffect } from "react";

export const useAnimations = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const blockRef = useCallback((node: HTMLDivElement) => {
    if (observer) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          setIsShow(entries[0].isIntersecting);
        },
      );
      if (node) observer.current.observe(node);
    }
  }, []);
  return {
    isShow,
    blockRef,
  };
};
