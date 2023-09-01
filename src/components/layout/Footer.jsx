import React from "react";
import LogoMain from "./../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_container_inner">
        <img src={LogoMain} alt="홈페이지 로고" />
        <p>author : 김상준</p>
        <p>date : 2023-09-01</p>
      </div>
    </footer>
  );
};

export default Footer;
