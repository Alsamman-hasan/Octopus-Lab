import { useState, useRef, useCallback } from "react"

export const useAnimations = () =>{
  const [isShow, setIsShow] = useState(false)
  const observer = useRef(null)
  const lastBookElementRef = useCallback((node: HTMLDivElement) => {
    if (observer) {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        setIsShow(entries[0].isIntersecting);
      })
      if (node) observer.current.observe(node)
    }

  }, [])
  return {
    isShow,
    lastBookElementRef
  }
}