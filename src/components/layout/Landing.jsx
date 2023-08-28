import React from "react";

import { useEffect } from "react";

import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

import Landing_fur_001 from "./../../assets/img/landing_fur_001.svg";
import Landing_fur_002 from "./../../assets/img/landing_fur_002.svg";
import Landing_fur_003 from "./../../assets/img/landing_fur_003.svg";
import Landing_fur_004 from "./../../assets/img/landing_fur_004.svg";
import Landing_fur_005 from "./../../assets/img/landing_fur_005.svg";
import Landing_fur_006 from "./../../assets/img/landing_fur_006.svg";

const Landing = () => {
  useEffect(() => {
    const landing = () => {
      // let rotate_que = Math.floor(Math.random() * 101);
      // let size_que = Math.floor(Math.random()*5)+1;
      const allList = document.querySelectorAll(".fur_container img");

      document.querySelector(".landing").addEventListener("mousemove", (e) => {
        //마우스 좌표 값
        let mousePageX = e.pageX;
        let mousePageY = e.pageY;

        // 전체 가로
        let centerPageX = window.innerWidth / 2 - mousePageX;
        let centerPageY = window.innerHeight / 2 - mousePageY;

        //이미지 움직이기
        for (let i = 1; i <= allList.length; i++) {
          for (let q = 1; q <= 6; q++) {
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
        }
      });
    };

    landing();
  }, []);

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
          <img
            className="fur_001"
            src={Landing_fur_001}
            alt="솜뭉치 캐릭터 001"
            onClick={() => {
              test();
            }}
          />
          <img
            className="fur_002"
            src={Landing_fur_002}
            alt="솜뭉치 캐릭터 001"
          />
          <img
            className="fur_003"
            src={Landing_fur_003}
            alt="솜뭉치 캐릭터 001"
          />
          <img
            className="fur_004"
            src={Landing_fur_004}
            alt="솜뭉치 캐릭터 001"
          />
          <img
            className="fur_005"
            src={Landing_fur_005}
            alt="솜뭉치 캐릭터 001"
          />
          <img
            className="fur_006"
            src={Landing_fur_006}
            alt="솜뭉치 캐릭터 001"
          />
        </div>
        <h2 className="main_text">
          <em>즐기며</em> 개발하는
          <br />
          개발자 김상준 입니다 ;)
        </h2>
        <img src={Landing_glow} alt="" />
      </div>
    </div>
  );
};

export default Landing;
