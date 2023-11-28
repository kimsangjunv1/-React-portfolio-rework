import React, { useRef } from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

import Landing_fur_001 from "./../../assets/img/landing_fur_001.svg";
import Landing_fur_002 from "./../../assets/img/landing_fur_002.svg";
import Landing_fur_003 from "./../../assets/img/landing_fur_003.svg";
import Landing_fur_004 from "./../../assets/img/landing_fur_004.svg";
import Landing_fur_005 from "./../../assets/img/landing_fur_005.svg";
import Landing_fur_006 from "./../../assets/img/landing_fur_006.svg";

import Landing_text_focus from "./../../assets/img/landing_text_focus.svg";
import Landing_arrow_001 from "./../../assets/img/landing_arrow_001.svg";
import Landing_arrow_002 from "./../../assets/img/landing_arrow_002.svg";

// import Landing_bottom from "./../../assets/img/landing_bottom.svg";
import Landing_circle from "./../../assets/img/landing_circle.svg";
import Landing_emoji from "./../../assets/img/landing_emoji.svg";
import Landing_sprout from "./../../assets/img/landing_sprout.svg";
import Landing_particle from "./../../assets/img/landing_particle.svg";
import Landing_brush from "./../../assets/img/landing_brush.svg";

import landing_img_001 from "./../../assets/img/landing_img_01.jpg";
import landing_img_002 from "./../../assets/img/landing_img_02.jpg";
import landing_img_003 from "./../../assets/img/landing_img_03.jpg";

const LandingComponents = ({ scrolled, pageType }) => {
  const brushImg = useRef(null);
  const emojiImg = useRef(null);
  const textContainer = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log("e.client : ", e.clientX / 100, e.clientY / 100);
      // brushImg.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      brushImg.current.style.transform = `perspective(600px) rotateX(-${
        (e.clientY / 100) * 2
      }deg) rotateY(${(e.clientX / 100) * 2}deg)`;
      emojiImg.current.style.transform = `perspective(800px) rotateX(-${
        e.clientY / 100
      }deg) rotateY(${e.clientX / 100}deg) translate(-50%,-50%)`;
      textContainer.current.style.transform = `perspective(800px) rotateX(-${
        e.clientY / 100
      }deg) rotateY(${e.clientX / 100}deg)`;
    });
  }, []);
  return (
    <section className="landing_container" id="landing">
      <div className="landing_inner">
        <div className="landing_contents" ref={textContainer}>
          <div className="row">
            <h2>
              const <i>grow_up</i> = &#40;&#41; =&gt; &#123;
            </h2>
            <h2>return&#40;</h2>
            <h2>
              <i>&lt;p&gt;</i>
            </h2>
          </div>
          <div className="row">
            <h2>새로운 것에 대해</h2>
            <h2>
              <i>저만의 색으로 채워나가는</i>
            </h2>
            <h2>
              웹{pageType === "publisher" ? "퍼블리셔" : "프론트엔드"} 김상준
              입니다.
            </h2>
          </div>
          <div className="row">
            <h2>
              <i>&lt;/p&gt;</i>
            </h2>
            <h2>&#41;</h2>
            <h2>&#41;</h2>
          </div>
        </div>
        <div className="image_container">
          <img
            className="brush"
            src={Landing_brush}
            alt="붓그림"
            ref={brushImg}
          />
          <img
            className="emoji"
            src={Landing_emoji}
            alt="웃는얼굴"
            ref={emojiImg}
          />
          <img className="emoji" src={Landing_particle} alt="웃는얼굴" />
        </div>
      </div>
    </section>
  );
};

export default LandingComponents;
