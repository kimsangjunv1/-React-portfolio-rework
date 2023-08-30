import React from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";

// 이미지
import Profile from "./../../assets/img/profile.jpg";
import LocationIcon from "./../../assets/img/icon_location.svg";
import PhoneIcon from "./../../assets/img/icon_phone.svg";
import DateIcon from "./../../assets/img/icon_date.svg";
import EmailIcon from "./../../assets/img/icon_email.svg";
import TextImage001 from "./../../assets/img/landing_text_001.svg";
import TextImage002 from "./../../assets/img/landing_text_002.svg";
import FurChar from "./../../assets/img/landing_profile_fur.svg";

const Information = ({ title, scrolled }) => {
  useEffect(() => {
    // document.querySelector(".myphoto").style.width = scrolled + "%";
    // // document.querySelector(".fur").style.width = furScale * 10 + "px";
    // document.querySelector(".fur").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
    // document.querySelector(".text_left").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
    // document.querySelector(".text_right").style.transform =
    //   "scale(" + scrolled * 0.04 + ")";
  });

  return (
    <div className="information_container">
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }} /> */}
      <div className="information_desc">
        <motion.div
          className="photo_container"
          whileInView={{
            opacity: [0, 1],
            // rotate: [0, 360],
            borderRadius: ["20%", "50%"],
            transition: { delay: 1 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <img className="fur" src={FurChar} alt="" />
          <img className="text_left" src={TextImage001} alt="" />
          <img className="myphoto" src={Profile} alt="내얼굴" />
          <img className="text_right" src={TextImage002} alt="" />
        </motion.div>
        <p className="dajim">
          안녕하세요! {title} 김상준 입니다.
          <br />
          좋아하면 더 잘한다는 마음으로 UI 개발 일을 하고 있습니다. {title}을
          빠삭하게 다룹니다.
          <br />
          <br />
          React/TypeScript 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을
          능숙하게 할 수 있어요.
          <br />
          어디에서도 잘 보이는 반응형, 웹 접근성과 웹 표준을 고려한 웹 페이지를
          그려냅니다.
          <br />
          맡은 프로젝트의 목적을 우선적으로 고려하며, 원활한 협업을 중요하게
          생각해요.
          <br />
          <br />
          다양한 직군과 함께 멋지고 즐거운 UX를 만드는 데 관심이 많습니다.
        </p>
        <div className="my_info">
          <div className="info_item">
            <img src={DateIcon} alt="아이콘" />
            <p>1997-08-09</p>
          </div>
          <div className="info_item">
            <img src={LocationIcon} alt="아이콘" />
            <p>서울특별시</p>
          </div>
          <div className="info_item">
            <img src={PhoneIcon} alt="아이콘" />
            <p>010-6607-7265</p>
          </div>
          <div className="info_item">
            <img src={EmailIcon} alt="아이콘" />
            <p>to_before@naver.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
