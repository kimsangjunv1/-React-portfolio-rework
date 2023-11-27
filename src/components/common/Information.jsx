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
import Mypic005 from "./../../assets/img/information_mypic_005.jpg";

const Information = ({ title, scrolled }) => {
  const photoContainer = useRef(null);
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
      photoContainer.current.style.transform = `perspective(800px) rotateX(-${
        e.clientY / 100
      }deg) rotateY(${e.clientX / 100}deg)`;
    });
  });

  return (
    <motion.section
      className="information_container"
      id="information"
      whileInView={{
        opacity: [0, 1],
        transition: { delay: 0.25 },
      }}
    >
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }} /> */}
      {/* <img className="Mypic005" src={Mypic005} alt="" /> */}
      <div className="information_desc">
        <div className="description_container">
          <p className="dajim">
            즐기면 더 잘한다는 마음으로
            <br />
            개발 일을 하고 있어요!
          </p>
          <p className="dajim">
            디자인을 하고싶었으나 어디서부터 어떻게 풀어갈지 고민에 빠져있다
            <br />
            유튜브에서 김종민이라는 유튜버가 웹페이지로 상상하던것을
            그려가는것을 본 뒤
            <br />
            제가 원하는 디자인의 웹페이지를 만들고 싶다는 신념 하나만으로
            여기까지 왔으며
            <br />
            우연히 접하게 된 개발공부에 시간 가는줄 모르는 매력을 느끼고
            개발자의 길을 걷게되었습니다.
            <br />
            <br />
            지금에 안주하지않고 끝없이 발전하려고 합니다.
            <br />
            프론트/퍼블리셔에서부터 시작해 풀스택까지 달려나가고싶습니다.
            <br />
            <br />
            <ul>
              <li>
                문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.
              </li>
              <li>
                React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을
                능숙하게 할 수 있어요.
              </li>
            </ul>
          </p>
        </div>
        {/* <motion.div
					className="mypic_container"
					whileInView={{
						opacity: [0, 0.4],
						// rotate: [0, 360],
						// borderRadius: ["20%", "50%"],
						transition: { delay: 0.1 },
					}}
				>
					<img src={Mypic001} alt="내 사진" />
					<img src={Mypic002} alt="내 사진" />
					<img src={Mypic003} alt="내 사진" />
					<img src={Mypic004} alt="내 사진" />
				</motion.div> */}
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
          {/* <img className="fur" src={FurChar} alt="" /> */}
          <img className="myphoto" src={Profile} alt="내얼굴" />
          {/* <img className="text_right" src={TextImage002} alt="" /> */}
        </div>

        {/* <div className="my_info">
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
        </div> */}
      </div>
      {/* <SectionSpace height={120} /> */}
    </motion.section>
  );
};

export default Information;
