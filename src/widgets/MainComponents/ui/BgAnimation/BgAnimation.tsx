
import {useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import SoLong from "shared/assets/animation/Vector.png"
import SoLong2 from "shared/assets/animation/Vector2.png"
import SoLong3 from "shared/assets/animation/Vector3.png"
import SoLong4 from "shared/assets/animation/Vector4.png"
import SoLong5 from "shared/assets/animation/Vector5.png"
import "./BgAnimation.scss";
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";

export interface BgAnimationProps {
  className?: string;
}


export const BgAnimation = ({ className }: BgAnimationProps) => {
  const { width } = useWindowSize("resize")
  
  const rianAnimation = (winWidth: number) => {
    const amount = Math.floor(winWidth / 30 ) ; 
    // console.log(winWidth);
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
      const delay = Math.random() * -10;
      const duration = Math.random() * 10;

      drop.style.width = `${0.5}rem`;
      drop.style.height = `${4.67}rem`; 
      drop.style.left = `${posX}px`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${ 2 + duration}s`;


      drop2.style.width = `${0.5}rem`;
      drop2.style.height = `${3.84}rem`; 
      drop2.style.left = `${posX2}px`;
      drop2.style.animationDelay = `${delay}s`;
      drop2.style.animationDuration = `${4 + duration}s`;


      drop3.style.width = `${0.5}rem`;
      drop3.style.height = `${2.166}rem`; 

      drop3.style.left = `${posX3}px`;
      drop3.style.animationDelay = `${delay}s`;
      drop3.style.animationDuration = `${4 + duration}s`;


      drop4.style.width = `${0.5}rem`;
      drop4.style.height = `${1.33}rem`; 

      drop4.style.left = `${posX4}px`;
      drop4.style.animationDelay = `${delay}s`;
      drop4.style.animationDuration = `${4 + duration}s`;


      drop5.style.width = `${0.5}rem`;
      drop5.style.height = `${0.5}rem`; 
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
    const num = width - 20
    stopRain();
    rianAnimation(num);
  }, [width])


  useEffect(() => {
    const num = width -20
    rianAnimation(num);
  }, [])

  return (
    <div className={classNames("BgAnimation", {}, [className])} style={{ maxWidth:`${width / 16}rem` }} >
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
