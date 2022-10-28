
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./BgAnimation.scss";
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
import { circlePath, shortPath, mediumPAth, longPath, largePath } from "./constants";

export interface BgAnimationProps {
  className?: string;
}


export const BgAnimation = ({ className }: BgAnimationProps) => {
  const { width } = useWindowSize("resize")

  const rianAnimation = (winWidth: number) => {
    const amount = Math.floor(winWidth / 30);

    const body = document.getElementById("ani")
    let i = 0;
    while (i < amount) {

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const short = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const medium = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const long = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const large = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      const  circleElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      circleElement.setAttribute("d", circlePath);
      circle.appendChild(circleElement);

      const shortElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      shortElement.setAttribute("d", shortPath);
      short.appendChild(shortElement);

      const mediumElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      mediumElement.setAttribute("d", mediumPAth);
      medium.appendChild(mediumElement);

      const longElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      longElement.setAttribute("d", longPath);
      long.appendChild(longElement);

      const largeElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      largeElement.setAttribute("d", largePath);
      large.appendChild(largeElement);

      const posX = Math.floor(Math.random() * winWidth);
      const posX2 = Math.floor(Math.random() * winWidth);
      const posX3 = Math.floor(Math.random() * winWidth);
      const posX4 = Math.floor(Math.random() * winWidth);
      const posX5 = Math.floor(Math.random() * winWidth);
      const delay = Math.random() * -15;
      const duration = Math.random() * 10;

      large.style.height = `${4.67}rem`;
      large.style.left = `${posX}px`;
      large.style.animationDelay = `${delay}s`;
      large.style.animationDuration = `${2 + duration}s`;

      circle.style.height = `${0.5}rem`;
      circle.style.left = `${posX5}px`;
      circle.style.animationDelay = `${delay}s`;
      circle.style.animationDuration = `${2 + duration}s`;

      long.style.height = `${3.875}rem`;
      long.style.left = `${posX2}px`;
      long.style.animationDelay = `${delay}s`;
      long.style.animationDuration = `${4 + duration}s`;


      medium.style.height = `${2.166}rem`;
      medium.style.left = `${posX3}px`;
      medium.style.animationDelay = `${delay}s`;
      medium.style.animationDuration = `${4 + duration}s`;

      short.style.height = `${1.33}rem`;
      short.style.left = `${posX4}px`;
      short.style.animationDelay = `${delay}s`;
      short.style.animationDuration = `${4 + duration}s`;


      body?.appendChild(circle);
      body?.appendChild(short);
      body?.appendChild(medium);
      body?.appendChild(long);
      body?.appendChild(large);

      i++
    }
  }

  const stopRain = () => {
    const rainSection = document.getElementById("ani");
    while (rainSection?.hasChildNodes()) {
      rainSection?.removeChild(rainSection?.lastChild as Node);
    }
  }

  useEffect(() => {
    const num = width - 20
    stopRain();
    rianAnimation(num);
    return () => {
      stopRain()
    }
  }, [width])


  return (
    <div className={classNames("BgAnimation", {}, [className])} style={{ maxWidth: `${width / 16}rem` }} >
      <div id="ani" />
    </div>
  )
};

// import { classNames } from "shared/lib/classNames/classNames";
// import Desktop from "shared/assets/patternFirstScreen.png"
// import Desktop12 from "shared/assets/Group1200.png"
// import mobile from "shared/assets/mobile.png"

// import "./BgAnimation.scss";
// import { useWinWidth } from "shared/lib/WindowWidth/WindowWidth";

// export interface BgAnimationProps {
//   className?: string;
// }


// export const BgAnimation = ({ className }: BgAnimationProps) => {
//   const winWidth = useWinWidth();

//   const sesplayImages = () => {
//     if (winWidth > 1200) {
//       return <img className={classNames("img")} src={Desktop} alt="animation" />
//     } if (winWidth < 1200 && winWidth > 650) {
//       return <img className={classNames("img12")} src={Desktop12} alt="animationMo" />
//     } if (winWidth < 650) {
//       return <img className={classNames("imgMob")} src={mobile} alt="animationMo" />
//     }
//     return null
//   }

//   return (
//     <div className={classNames("BgAnimation", {}, [className])} >
//       <div id="ani" />
//       {sesplayImages()}
//     </div>
//   );
// }
