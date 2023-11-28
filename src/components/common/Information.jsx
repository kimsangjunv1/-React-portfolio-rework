import React, { useRef } from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";

// 이미지
import Profile from "./../../assets/img/information_smile.svg";
import LocationIcon from "./../../assets/img/icon_location.svg";
import PhoneIcon from "./../../assets/img/icon_phone.svg";
import DateIcon from "./../../assets/img/icon_date.svg";
import EmailIcon from "./../../assets/img/icon_email.svg";
import TextImage001 from "./../../assets/img/landing_text_001.svg";
import TextImage002 from "./../../assets/img/landing_text_002.svg";
import FurChar from "./../../assets/img/landing_profile_fur.svg";
import SectionSpace from "./SpaceComponents";

// 스크린샷
import Mypic001 from "./../../assets/img/information_mypic_001.jpg";
import Mypic002 from "./../../assets/img/information_mypic_002.jpg";
import Mypic003 from "./../../assets/img/information_mypic_003.jpg";
import Mypic004 from "./../../assets/img/information_mypic_004.jpg";

import IconGlass from "./../../assets/img/information_icon_001.svg";
import IconBrush from "./../../assets/img/information_icon_002.svg";
import IconPointer from "./../../assets/img/information_icon_003.svg";
import IconCode from "./../../assets/img/information_icon_004.svg";

const Information = ({ title, scrolled, pageType }) => {
  const photoContainer = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // document.querySelector(".myphoto").style.width = scrolled + "%";
    // // document.querySelector(".fur").style.width = furScale * 10 + "px";
    // document.querySelector(".fur").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
    // document.querySelector(".text_left").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
    // document.querySelector(".text_right").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
    window.addEventListener("mousemove", (e) => {
      photoContainer.current.style.transform = `perspective(600px) rotateX(-${
        e.clientY / 100
      }deg) rotateY(${e.clientX / 100}deg) rotate(16deg)`;
    });
  });

  return (
    <motion.section
      className="information_container"
      id="information"
      whileInView={{
        opacity: [0, 1],
        translateX: [-200, 0],
        // translateY: [0, 0],
        transition: { delay: 0.3, transition: 0.5 },
      }}
    >
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }} /> */}
      {/* <img className="Mypic005" src={Mypic005} alt="" /> */}
      <div className="information_desc">
        <div className="description_container">
          <h2 className="dajim">
            BE <i>DRAWABLE</i>
          </h2>
          <p className="dajim">
            디자인을 하고싶었으나 어디서부터 어떻게 풀어갈지 고민에 빠져있다
            <br />
            유튜브에서 김종민이라는 유튜버가 웹페이지로 상상하던것을
            그려가는것을 본 뒤
            <br />
            <i>제가 원하는 디자인의 웹페이지를 만들고 싶다는 집념</i>으로
            <br />
            우연히 접하게 된 개발공부에 시간 가는줄 모르는 매력을 느껴 개발자의
            길을 걷게되었습니다.
            <br />
            <br />
            지금에 안주하지않고 끝없이 발전하려고 합니다.
            <br />
            <i>
              {pageType === "publisher" ? "퍼블리셔" : "프론트엔드"}에서부터
              시작해 풀스택
            </i>
            까지 달려나가고싶습니다.
            <br />
            <br />
            <li>문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.</li>
            <li>
              React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을
              능숙하게 할 수 있어요.
            </li>
          </p>
        </div>
        <motion.div
          className="mypic_container"
          whileInView={{
            opacity: [0, 1],
            rotate: [0, 360],
            // borderRadius: ["20%", "50%"],
            transition: { delay: 0.6 },
          }}
          ref={boxRef}
        >
          <motion.img
            src={IconGlass}
            alt="내 사진"
            drag
            dragConstraints={boxRef}
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
          <motion.img
            src={IconBrush}
            alt="내 사진"
            drag
            dragConstraints={boxRef}
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
          <motion.img
            src={IconPointer}
            alt="내 사진"
            drag
            dragConstraints={boxRef}
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
          <motion.img
            src={IconCode}
            alt="내 사진"
            drag
            dragConstraints={boxRef}
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
        </motion.div>
        <div
          className="photo_container"
          ref={photoContainer}
          // whileInView={{
          // 	opacity: [0, 1],
          // 	// rotate: [0, 360],
          // 	// borderRadius: ["20%", "50%"],
          // 	transition: { delay: 0.1 },
          // }}
        >
          <img className="myphoto" src={Mypic001} alt="내얼굴" />
          {/* <img className="myphoto" src={Profile} alt="내얼굴" /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Information;
