import React from "react";

import Contact_text from "./../../assets/img/contact_text.svg";
import Contact_bg from "./../../assets/img/contact_bg.svg";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_container_inner">
        <div className="image_container">
          <img
            className="image_text"
            src={Contact_text}
            alt="연락주세요 이미지 텍스트"
          />
          <div className="line_container">
            <p>개인정보</p>
            <hr className="line" />
          </div>
          <div className="info_container">
            <div className="item">
              <div>
                <span>휴대전화</span>
                <span>휴대전화</span>
              </div>
              <hr />
              <p>010-6607-7265</p>
            </div>
            <div className="item">
              <div>
                <span>휴대전화</span>
                <span>휴대전화</span>
              </div>
              <hr />
              <p>010-6607-7265</p>
            </div>
            <div className="item">
              <div>
                <span>휴대전화</span>
                <span>휴대전화</span>
              </div>
              <hr />
              <p>010-6607-7265</p>
            </div>
          </div>
          {/* <img
            className="image_bg"
            src={Contact_bg}
            alt="연락주세요 이미지 배경"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
