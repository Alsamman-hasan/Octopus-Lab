// import { useEffect } from "react";
// import SoLong from "shared/assets/animation/Vector.png"
// import SoLong2 from "shared/assets/animation/Vector2.png"
// import SoLong3 from "shared/assets/animation/Vector3.png"
// import SoLong4 from "shared/assets/animation/Vector4.png"
// import SoLong5 from "shared/assets/animation/Vector5.png"
// import cls from "./Illustrations.module.scss";

// export const AnimationBloc = () => {
//   const rianAnimation = (winWidth: number) => {
//     const amount = 5;

//     const body = document.getElementById("anim")
//     let i = 0;
//     while (i < amount) {
//       const drop = document.createElement("img");
//       const drop2 = document.createElement("img");
//       const drop3 = document.createElement("img");
//       const drop4 = document.createElement("img");
//       const drop5 = document.createElement("img");
//       drop.src = `${SoLong}`
//       drop2.src = `${SoLong2}`
//       drop3.src = `${SoLong3}`
//       drop4.src = `${SoLong4}`
//       drop5.src = `${SoLong5}`

//       const posX = Math.floor(Math.random() * winWidth);
//       const posX2 = Math.floor(Math.random() * winWidth);
//       const posX3 = Math.floor(Math.random() * winWidth);
//       const posX4 = Math.floor(Math.random() * winWidth);
//       const posX5 = Math.floor(Math.random() * winWidth);
//       const delay = Math.random() * -15;
//       const duration = Math.random() * 5;

//       drop.style.width = `${7.9}px`;
//       drop.style.height = `${74.78}px`;
//       drop.style.left = `${posX}px`;
//       drop.style.animationDelay = `${delay}s`;
//       drop.style.animationDuration = `${4 + duration}s`;


//       drop2.style.width = `${7.9}px`;
//       drop2.style.height = `${61.41}px`;
//       drop2.style.left = `${posX2}px`;
//       drop2.style.animationDelay = `${delay}s`;
//       drop2.style.animationDuration = `${4 + duration}s`;


//       drop3.style.width = `${7.9}px`;
//       drop3.style.height = `${34.66}px`;

//       drop3.style.left = `${posX3}px`;
//       drop3.style.animationDelay = `${delay}s`;
//       drop3.style.animationDuration = `${4 + duration}s`;


//       drop4.style.width = `${7.9}px`;
//       drop4.style.height = `${21.28}px`;

//       drop4.style.left = `${posX4}px`;
//       drop4.style.animationDelay = `${delay}s`;
//       drop4.style.animationDuration = `${4 + duration}s`;


//       drop5.style.width = `${7.9}px`;
//       drop5.style.height = `${7.9}px`;
//       drop5.style.left = `${posX5}px`;
//       drop5.style.animationDelay = `${delay}s`;
//       drop5.style.animationDuration = `${4 + duration}s`;


//       body?.appendChild(drop);
//       body?.appendChild(drop2);
//       body?.appendChild(drop3);
//       body?.appendChild(drop4);
//       body?.appendChild(drop5);

//       i++
//     }
//   }
//   useEffect(() => {
//     // rianAnimation(320)
//   }, [])
//   return (
//     <div id="anim" className={cls.anim} />
//   )
// };