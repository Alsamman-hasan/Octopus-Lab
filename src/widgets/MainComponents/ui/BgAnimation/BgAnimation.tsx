
import {useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import SoLong from "shared/assets/animation/Vector.png"
import SoLong2 from "shared/assets/animation/Vector2.png"
import SoLong3 from "shared/assets/animation/Vector3.png"
import SoLong4 from "shared/assets/animation/Vector4.png"
import SoLong5 from "shared/assets/animation/Vector5.png"
import "./BgAnimation.scss";
import { useWinWidth } from "shared/lib/WindowWidth/WindowWidth";

export interface BgAnimationProps {
  className?: string;
}


export const BgAnimation = ({ className }: BgAnimationProps) => {
  const winWidths = useWinWidth();
 
  const rianAnimation = (winWidth: number) => {
    const amount = 50 ; 

    const body = document.getElementById("ani")
    let i = 0 ;
    while(i < amount) {
      const drop = document.createElement("img");
      const drop2 = document.createElement("img");
      const drop3 = document.createElement("img");
      const drop4 = document.createElement("img");
      const drop5 = document.createElement("img");
      drop.src = `${SoLong}`
      drop2.src = `${SoLong2}`
      drop3.src = `${SoLong3}`
      drop4.src = `${SoLong4}`
      drop5.src = `${SoLong5}`

      const posX = Math.floor(Math.random() * winWidth);
      const posX2 = Math.floor(Math.random() * winWidth);
      const posX3 = Math.floor(Math.random() * winWidth);
      const posX4 = Math.floor(Math.random() * winWidth);
      const posX5 = Math.floor(Math.random() * winWidth);
      const delay = Math.random() * 10;
      const duration = Math.random() * 5;

      drop.style.width = `${7.9}px`;
      drop.style.height = `${74.78}px`; 
      drop.style.left = `${posX}px`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${ 2 + duration}s`;


      drop2.style.width = `${7.9}px`;
      drop2.style.height = `${61.41}px`; 
      drop2.style.left = `${posX2}px`;
      drop2.style.animationDelay = `${delay}s`;
      drop2.style.animationDuration = `${4 + duration}s`;


      drop3.style.width = `${7.9}px`;
      drop3.style.height = `${34.66}px`; 

      drop3.style.left = `${posX3}px`;
      drop3.style.animationDelay = `${delay}s`;
      drop3.style.animationDuration = `${4 + duration}s`;


      drop4.style.width = `${7.9}px`;
      drop4.style.height = `${21.28}px`; 

      drop4.style.left = `${posX4}px`;
      drop4.style.animationDelay = `${delay}s`;
      drop4.style.animationDuration = `${4 + duration}s`;


      drop5.style.width = `${7.9}px`;
      drop5.style.height = `${7.9}px`; 
      drop5.style.left = `${posX5}px`;
      drop5.style.animationDelay = `${delay}s`;
      drop5.style.animationDuration = `${4 + duration}s`;

      body.appendChild(drop);
      body.appendChild(drop2);
      body.appendChild(drop3);
      body.appendChild(drop4);
      body.appendChild(drop5);

      i++
    }
  }

  const stopRain = () => {
    const rainSection = document.getElementById("ani");
    while (rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  useEffect(() => {
    const num = winWidths - 10
    stopRain();
    rianAnimation(num);
  }, [winWidths])


  useEffect(() => {
    const num = winWidths - 10
    rianAnimation(num);
  }, [])

  return (
    <div className={classNames("BgAnimation", {}, [className])} >
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
