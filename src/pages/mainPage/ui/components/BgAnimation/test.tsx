/* eslint-disable react/self-closing-comp */
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Circle from "shared/assets/animation/circle.svg"
import Long from "shared/assets/animation/long.svg"
import NotLong from "shared/assets/animation/notlong.svg"
import Short from "shared/assets/animation/short.svg"
import SoLong from "shared/assets/animation/soLong.svg"
import "./test.scss";

export interface BgAnimationProps {
  className?: string;
}

export const BgAnimation = ({ className }: BgAnimationProps) =>
// const url = "https://media.istockphoto.com/photos/lonely-tree-in-tuscany-picture-id518272508?k=20&m=518272508&s=612x612&w=0&h=61t-K_4NEWDIlRIFn-7uOdofq4ESgb8TxHRJ2ILPEus="
// const rianAnimation = () => {
//   const amount = 100; 
//   const body = document.getElementById("ani")
//   let i = 0 ;
//   while(i < amount) {
//     const drop = document.createElement("i");

//     const size = Math.random()* 5;

//     const posX = Math.floor(Math.random() * window.innerWidth);
//     const delay = Math.random() * -20;
//     const duration = Math.random() * 5;

//     drop.style.width = `${0.2 + size}px`; 
//     drop.style.left = `${posX}px`;
//     drop.style.animationDelay = `${delay}s`;
//     drop.style.animationDuration = `${1 + duration}s`;
//     body.appendChild(drop);
//     // eslint-disable-next-line no-plusplus
//     i++
//   }
// }

// useEffect(() => {
//   rianAnimation();
// },[])

  (

    <div id="banner">
      <div id="cabeca1" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Circle />
          <Long />
          <SoLong />
          <NotLong />
          <Short />
        </div>
      </div>

      <div id="cabeca2" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Long />
        </div>
      </div>

      <div id="cabeca3" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <SoLong />
        </div>
      </div>

      <div id="cabeca4" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Circle />
        </div>
      </div>

      <div id="cabeca5" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Circle />
        </div>
      </div>

      <div id="cabeca6" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <SoLong />
        </div>
      </div>

      <div id="cabeca7" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Circle />
        </div>
      </div>

      <div id="cabeca8" className="caindo">
        <div style={{ width: "100%", height: "100%" }}>
          <Circle />
        </div>
      </div>
    </div>

  )
  ;