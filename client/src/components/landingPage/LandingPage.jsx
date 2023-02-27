import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export const LandingPage = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   const windowHeight = window.innerHeight;

// gsap.set('.main', {
//   position: 'fixed',
//   background: '#fff',
//   width: '100%',
//   maxWidth: '1200px',
//   height: '100%',
//   top: 0,
//   left: '50%',
//   x: '-50%',
// });

// gsap.set('.scrollDist', {
//   width: '100%',
//   height: '200%',
// });

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.scrollDist',
//     start: 'top top',
//     end: 'bottom bottom',
//     scrub: 1,
//   },
// })
//   .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
//   .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
//   .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
//   .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
//   .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
//   .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
//   .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

// const handleMouseEnter = () => {
//   gsap.to('.arrow', {
//     y: 10,
//     duration: 0.8,
//     ease: 'back.inOut(3)',
//     overwrite: 'auto',
//   });
// };

// const handleMouseLeave = () => {
//   gsap.to('.arrow', {
//     y: 0,
//     duration: 0.5,
//     ease: 'power3.out',
//     overwrite: 'auto',
//   });
// };

// const handleClick = () => {
//   gsap.to(window, {
//     scrollTo: windowHeight,
//     duration: 1.5,
//     ease: 'power1.inOut',
//   });
// };
  

  return (
    <div class="main">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g class="cloud1">
            <rect fill="#fff" width="100%" height="801" y="799" />
            <image
              href="https://assets.codepen.io/721952/cloud1Mask.jpg"
              width="1200"
              height="800"
            />
          </g>
        </mask>

        <img
          class="sky"
          href="https://assets.codepen.io/721952/sky.jpg"
          width="1200"
          height="590"
        />
        <image
          class="mountBg"
          href="https://assets.codepen.io/721952/mountBg.png"
          width="1200"
          height="800"
        />
        <image
          class="mountMg"
          href="https://assets.codepen.io/721952/mountMg.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud2"
          href="https://assets.codepen.io/721952/cloud2.png"
          width="1200"
          height="800"
        />
        <image
          class="mountFg"
          href="https://assets.codepen.io/721952/mountFg.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud1"
          href="https://assets.codepen.io/721952/cloud1.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud3"
          href="https://assets.codepen.io/721952/cloud3.png"
          width="1200"
          height="800"
        />
        <text fill="#fff" x="350" y="200">
          {" "}
          VINOTECA
        </text>
        <polyline
          class="arrow"
          fill="#fff"
          points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
        />

        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />
          <text x="350" y="200" fill="#162a43">
            DIONISIO
          </text>
        </g>
        <svg>
        {/* <button id="arrowBtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <span className="arrow"></span>
    </button> */}
          <rect
            ref="arrowBtn"
            id="arrowBtn"
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </svg>
    </div>
  );
};
