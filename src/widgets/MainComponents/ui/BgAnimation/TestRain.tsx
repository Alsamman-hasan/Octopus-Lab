// import { useEffect } from "react";
// import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
// import SoLong1 from "shared/assets/animation/Vector.png"
// import SoLong2 from "shared/assets/animation/Vector2.png"
// import SoLong3 from "shared/assets/animation/Vector3.png"
// import SoLong4 from "shared/assets/animation/Vector4.png"
// import SoLong5 from "shared/assets/animation/Vector5.png"
// import "./testRain.scss";

// export const RainTime = () => {
//   const { width } = useWindowSize("resize")

//   const randRange = (minNum: number, maxNum: number) => {
//     const difference = (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
//     return difference;
//   }

//   const startRain = (numDrops: number) =>  {
//     const rainSection = document.getElementById("Rain");
//     for (let i = 1; i < numDrops; i++) {
//       const dropLeft = randRange(0, width);
//       const dropTop = randRange(-1000, 500);

//       const drop = document.createElement("img");
//       const drop2 = document.createElement("img");
//       const drop3 = document.createElement("img");
//       const drop4 = document.createElement("img");
//       const drop5 = document.createElement("img");
//       // const items = [SoLong1, SoLong2, SoLong3, SoLong4, SoLong5]
//       // for(let q = 0; q< items.length; q++) {
//       //   drop.src = `${items[q]}`
//       // }
//       drop.src = `${SoLong1}`
//       drop2.src = `${SoLong2}`
//       drop3.src = `${SoLong3}`
//       drop4.src = `${SoLong4}`
//       drop5.src = `${SoLong5}`

//       const delay = Math.random() * -10;
//       const duration = Math.random() * 5;
//       drop.setAttribute("class", "drop");
//       drop.setAttribute("id", `drop${i}`);
//       drop.style.animationDelay = `${delay}s`;
//       drop.style.animationDuration = `${1 +duration}s`;
//       rainSection.appendChild(drop);

//       drop.style.left = `${dropLeft}px`;
//       drop.style.top = `${dropTop}px`;
//     }
//   }

//   const stopRain = () => {
//     const rainSection = document.getElementById("Rain");
//     while (rainSection.hasChildNodes()) {
//       rainSection.removeChild(rainSection.lastChild);
//     }
//   }

//   useEffect(() => {
//     const num = width / 10
//     stopRain();
//     startRain(num)
//   }, [width])

//   useEffect(() => {
//     const num = width / 10
//     startRain(num);
//   },[])

//   return (
//     <div id="Rain" />
//   )
// }
