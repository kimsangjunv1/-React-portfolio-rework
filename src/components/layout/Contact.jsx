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
          <img
            className="image_bg"
            src={Contact_bg}
            alt="연락주세요 이미지 배경"
          />
        </div>
        <p>010 6607 7265</p>
        <p>to_before</p>
      </div>
    </div>
  );
};

export default Contact;
