import React from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

import Landing_fur_001 from "./../../assets/img/landing_fur_001.svg";
import Landing_fur_002 from "./../../assets/img/landing_fur_002.svg";
import Landing_fur_003 from "./../../assets/img/landing_fur_003.svg";
import Landing_fur_004 from "./../../assets/img/landing_fur_004.svg";
import Landing_fur_005 from "./../../assets/img/landing_fur_005.svg";
import Landing_fur_006 from "./../../assets/img/landing_fur_006.svg";

import landing_img_001 from "./../../assets/img/landing_img_01.jpg";
import landing_img_002 from "./../../assets/img/landing_img_02.jpg";
import landing_img_003 from "./../../assets/img/landing_img_03.jpg";

const Landing = ({ scrolled }) => {
  console.log("scrolled Landing : ", scrolled);
  const landing = () => {
    // let rotate_que = Math.floor(Math.random() * 101);
    // let size_que = Math.floor(Math.random()*5)+1;
    const allList = document.querySelectorAll(".fur_container > img");

    document.querySelector(".landing").addEventListener("mousemove", (e) => {
      //마우스 좌표 값
      let mousePageX = e.pageX;
      let mousePageY = e.pageY;

      // 전체 가로
      let centerPageX = window.innerWidth / 2 - mousePageX;
      let centerPageY = window.innerHeight / 2 - mousePageY;

      //이미지 움직이기
      for (let i = 1; i <= allList.length; i++) {
        document.querySelector(
          ".fur_container img:nth-child(" + i + ")"
        ).style.transform =
          "translate(" +
          -centerPageX / (i * 5) +
          "px, " +
          -centerPageY / (i * 5) +
          "px) rotate(" +
          centerPageX * (i * 0.01) +
          "deg)";
      }
    });
  };

  const good = document.querySelectorAll(".landing_image");
  console.log("el : ", scrolled);
  good.forEach((el, i) => {
    el.style.transform = "translate(-50%,-" + scrolled * 10 + "px)";
  });

  const test = () => {
    const tt = document.querySelector(".fur_001");

    tt.addEventListener("click", () => {
      tt.classList.add("pop");
      setTimeout(() => {
        tt.classList.remove("pop");
      }, 3000);
    });
  };
  return (
    <div className="landing">
      <div className="landing_inner">
        <div className="fur_container">
          <motion.img
            className="fur_001"
            src={Landing_fur_001}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.4 },
            }}
            onClick={() => {
              test();
            }}
          />
          <motion.img
            className="fur_002"
            src={Landing_fur_002}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.5 },
            }}
          />
          <motion.img
            className="fur_003"
            src={Landing_fur_003}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.6 },
            }}
          />
          <motion.img
            className="fur_004"
            src={Landing_fur_004}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.7 },
            }}
          />
          <motion.img
            className="fur_005"
            src={Landing_fur_005}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.8 },
            }}
          />
          <motion.img
            className="fur_006"
            src={Landing_fur_006}
            alt="솜뭉치 캐릭터 001"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileInView={{
              opacity: [0, 1],
              transition: { delay: 0.9 },
            }}
          />
          <div className="lading_contents">
            <div className="row">
              <motion.div
                className="image_box"
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.45 },
                }}
              >
                <img
                  className="landing_image"
                  src={landing_img_001}
                  alt="랜딩 이미지 1"
                />
              </motion.div>
              <motion.h2
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.65 },
                }}
              >
                즐기며 개발하는
              </motion.h2>
            </div>
            <div className="row">
              <motion.h2
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.35 },
                }}
              >
                김상준 입니다.
              </motion.h2>
              <motion.div
                className="image_box"
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.45 },
                }}
              >
                <img
                  className="landing_image"
                  src={landing_img_002}
                  alt="랜딩 이미지 2"
                />
              </motion.div>
            </div>
            <div className="row">
              <motion.div
                className="image_box"
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.15 },
                }}
              >
                <img
                  className="landing_image"
                  src={landing_img_003}
                  alt="랜딩 이미지 3"
                />
              </motion.div>
              <motion.h2
                whileInView={{
                  opacity: [0, 1],
                  transition: { delay: 0.25 },
                }}
              >
                하하하 호호호호
              </motion.h2>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
