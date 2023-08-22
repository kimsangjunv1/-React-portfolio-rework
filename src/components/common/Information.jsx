import React from "react";

import Profile from "./../../assets/img/profile.jpg";

import LocationIcon from "./../../assets/img/icon_location.svg";
import PhoneIcon from "./../../assets/img/icon_phone.svg";
import DateIcon from "./../../assets/img/icon_date.svg";
import EmailIcon from "./../../assets/img/icon_email.svg";

const Information = ({ title }) => {
  console.log("[rop[s", title);
  return (
    <div className="information_container">
      <div className="information_desc">
        <p className="dajim">
          <em>끝맺음</em>을 지을 줄 아는 <br /> {title}가 되겠습니다
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
      <div className="my_photo">
        <img src={Profile} alt="내얼굴" />
      </div>
    </div>
  );
};

export default Information;
