import { useState, useRef, useCallback, useEffect, MutableRefObject } from "react";

export const useAnimations = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const blockRef = useCallback((node: HTMLDivElement) => {
    if (observer) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        setIsShow(entries[0].isIntersecting);
      });
      if (node) observer.current.observe(node);
      if (!node) {
        observer.current.unobserve(node);
      }
    }
  }, []);
  return {
    isShow,
    blockRef,
  };
};

export const useAnimationssss = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  // const blockRef = useCallback((node: HTMLDivElement) => {
  useEffect(() => {
    if (observer) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        setIsShow(entries[0].isIntersecting);
      });
      if (ref) observer.current.observe(ref.current);
      if (!ref) {
        observer.current.unobserve(ref);
      }
    }
    return () => {
      if (observer.current && ref.current) {
        observer.current.unobserve(ref?.current);
      }
    };
  }, [ref]);
  // }, []);
  return {
    isShow,
  };
};
